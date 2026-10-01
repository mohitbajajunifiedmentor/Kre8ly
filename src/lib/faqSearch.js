// lib/faqSearch.js
//
// THE ONLY FAQ MATCHER. lib/faq.js is data; this file is logic.
//
// Six independent scoring layers are summed, so a weak signal on one layer can
// be rescued by a strong one on another. The ranked list is returned (not just
// a winner), which is what lets the chat ask "did you mean…?" instead of
// guessing.
//
// Fixed in this version:
//   1. ABBREVIATIONS mapped "otp" -> "code", "lms" -> "portal" and
//      "faq" -> "question". Those target words appear in NO entry, while "otp"
//      and "lms" appear in the must-lists of `password`, `login` and
//      `portal_access`. So typing "otp" could never match the OTP answer.
//   2. Gate words (must/notIf/avoidIf/escalateIf) were normalised with
//      normaliseWord() only, while query tokens also went through SYNONYMS.
//      "fees" -> "fee" matched, but "cancellation" -> "cancel" did not line up
//      with a gate written as "cancelation". Both sides now use one function.
//   3. `buildResult` hard-coded `shouldEscalate: false`, so escalateIf on the
//      payment / login / certificate_delay entries did literally nothing — the
//      "money deducted" case was answered and then dropped.
//   4. Vocabulary lookup was an Array.includes() per token (O(vocab) per word);
//      it is a Set now, and alias words are indexed too so typos inside a
//      phrase are repaired.
//   5. A score between LOW and MEDIUM used to return "none". It now returns
//      "low" with candidates, so the bot can offer suggestions instead of
//      dead-ending.

const { FAQ_LIST, SYNONYMS, STOPWORDS } = require("./faq");

/* ───────────────────────────── normalisation ───────────────────────────── */

/** Abbreviations users actually type. Expanded before tokenising. */
const ABBREVIATIONS = {
  pwd: "password", pass: "password", acc: "account", acct: "account",
  info: "information", pls: "please", plz: "please", u: "you", ur: "your",
  msg: "message", doc: "document", docs: "document", cert: "certificate",
  reg: "registration", admn: "admission", clg: "college", uni: "university",
  yr: "year", mo: "month", hrs: "hours", hr: "hour", min: "minute",
  wa: "whatsapp", clas: "class", intern: "internship", intrn: "internship",
};

/**
 * Light suffix stripping. Deliberately not a real stemmer: aggressive stemming
 * collapses distinct words, and a wrong collapse is worse than a miss.
 */
function normaliseWord(w) {
  if (w.length <= 3) return w;
  if (w.endsWith("ies") && w.length > 4) return w.slice(0, -3) + "y";
  if (w.endsWith("sses")) return w.slice(0, -2);
  if (w.endsWith("es") && w.length > 4 && !/[aeiou]es$/.test(w)) return w.slice(0, -2);
  if (w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

/**
 * One canonical form used for BOTH query tokens and entry gate words. If these
 * two ever diverge, gates silently stop firing.
 */
function normaliseKey(word) {
  let w = String(word || "").toLowerCase().trim();
  if (!w) return "";
  w = ABBREVIATIONS[w] || w;
  w = SYNONYMS[w] || w;
  w = normaliseWord(w);
  return SYNONYMS[w] || w;
}

/** Lowercase, strip punctuation, collapse stretched letters ("plzzz"). */
function normaliseText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s/@.-]/gu, " ")
    .replace(/(.)\1{2,}/g, "$1$1")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Multi-word names that must survive as ONE token. Without this pass
 * "machine learning" tokenises to ["machine", "learning"] and the generic
 * `learning_modules` entry outranks `course_ml`; "job portal" splits into two
 * words that both belong to other entries.
 * Longest phrases are folded first, so "ui ux design" cannot be eaten by "ui".
 */
const PHRASES = [
  ["machine learning", "machinelearning"],
  ["deep learning", "deeplearning"],
  ["data science", "datascience"],
  ["data analyst", "dataanalyst"],
  ["data analytics", "datascience"],
  ["web development", "webdevelopment"],
  ["web dev", "webdevelopment"],
  ["app development", "webdevelopment"],
  ["web developer", "webdevelopment"],
  ["full stack", "fullstack"],
  ["front end", "frontend"],
  ["back end", "backend"],
  ["digital marketing", "digitalmarketing"],
  ["graphic design", "graphic"],
  ["ui ux", "uiux"],
  ["user interface", "uiux"],
  ["user experience", "uiux"],
  ["job portal", "jobportal"],
  ["project portal", "projectportal"],
  ["learning portal", "learningportal"],
  ["offer letter", "offerletter"],
  ["whatsapp group", "whatsapp community"],
  ["induction session", "induction"],
  ["doubt session", "doubt"],
  ["refer and earn", "referral"],
  ["campus ambassador", "ambassador"],
  ["self paced", "selfpaced"],
  ["sign up", "signup"],
  ["log in", "login"],
  ["forgot password", "forgot password"],
].sort((a, b) => b[0].length - a[0].length);

function foldPhrases(text) {
  let out = ` ${text} `;
  for (const [phrase, token] of PHRASES) {
    if (out.includes(` ${phrase} `)) out = out.split(` ${phrase} `).join(` ${token} `);
  }
  return out.trim();
}

function tokenize(text) {
  return foldPhrases(normaliseText(text))
    .split(/\s+/)
    // Strip punctuation from the edges only: `.` and `-` stay legal *inside* a
    // token so an email or hyphenated word survives, but "refund..." must still
    // tokenise to "refund".
    .map((w) => w.replace(/^[.\-/@]+|[.\-/@]+$/g, ""))
    .filter(Boolean)
    .map(normaliseKey)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

/* ────────────────────────────── typo tolerance ─────────────────────────── */

/** Bounded edit distance — returns early once it exceeds `max`. */
function editDistance(a, b, max = 1) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > max) return max + 1;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

/**
 * Fuzzy hit against the indexed vocabulary.
 * Only words of 5+ characters are eligible: at 4 characters a single edit
 * reaches too many unrelated words ("card" -> "cart" -> "care").
 */
function fuzzyLookup(token, vocabulary) {
  if (token.length < 5) return null;
  for (const term of vocabulary) {
    if (term.length < 5) continue;
    if (Math.abs(term.length - token.length) > 1) continue;
    if (editDistance(token, term, 1) <= 1) return term;
  }
  return null;
}

/* ─────────────────────────────── the index ─────────────────────────────── */
//
// Built once at module load, so nothing is re-normalised per request.

const INDEX = (() => {
  const docFreq = new Map();
  const vocabulary = new Set();

  const entries = FAQ_LIST.map((entry) => {
    const keywords = [...new Set((entry.keywords || []).map(normaliseKey))].filter(Boolean);
    const aliasTokens = (entry.aliases || []).map((a) => new Set(tokenize(a)));
    const aliasText = (entry.aliases || []).map((a) => normaliseText(a));

    for (const k of keywords) {
      docFreq.set(k, (docFreq.get(k) || 0) + 1);
      vocabulary.add(k);
    }
    // Alias words join the vocabulary so typos inside a phrase are repaired.
    for (const set of aliasTokens) for (const t of set) vocabulary.add(t);

    return {
      ref: entry,
      keywords,
      keywordSet: new Set(keywords),
      aliasTokens,
      aliasText,
      must: (entry.must || []).map(normaliseKey),
      notIf: (entry.notIf || []).map(normaliseKey),
      avoidIf: (entry.avoidIf || []).map(normaliseKey),
      escalateIf: (entry.escalateIf || []).map(normaliseKey),
      category: entry.category || null,
      priority: entry.priority ?? 50,
    };
  });

  const total = entries.length;
  const idf = new Map();
  for (const [term, df] of docFreq) idf.set(term, Math.log(total / df) + 1);

  return {
    entries,
    idf,
    vocabularySet: vocabulary,
    vocabulary: [...vocabulary],
    byId: new Map(entries.map((e) => [e.ref.id, e])),
  };
})();

/** Category hint from the query itself, used for the category bonus. */
const CATEGORY_HINTS = {
  payment: ["payment", "pay", "razorpay", "upi", "card", "transaction", "price", "fee"],
  refund: ["refund", "cancel", "money"],
  account: ["login", "password", "account", "portal", "access", "otp"],
  certificate: ["certificate", "certification", "umid"],
  placement: ["placement", "job", "hire", "career", "interview"],
  course: ["course", "syllabus", "module", "curriculum", "class"],
  internship: ["internship", "intern", "fellowship", "induction", "offer"],
  project: ["project", "attendance", "submission"],
  legal: ["policy", "terms", "privacy", "legal"],
  support: ["contact", "support", "help", "email", "phone"],
};

const CATEGORY_INDEX = Object.entries(CATEGORY_HINTS).map(([cat, words]) => [
  cat,
  words.map(normaliseKey),
]);

function inferCategories(tokenSet) {
  const hits = [];
  for (const [cat, words] of CATEGORY_INDEX) {
    if (words.some((w) => tokenSet.has(w))) hits.push(cat);
  }
  return hits;
}

/* ──────────────────────────────── scoring ──────────────────────────────── */
//
// Phrase evidence dominates; priority is the smallest term so it can only ever
// break a near-tie.

const W = {
  exact: 6.0,     // the query is (almost) an indexed question
  phrase: 3.0,    // an alias phrase appears in the query
  keyword: 4.0,   // IDF-weighted keyword overlap
  coverage: 1.5,  // how much of the query the entry explains
  synonym: 0.8,   // matched only after synonym expansion
  fuzzy: 0.6,     // matched only after a spelling correction
  category: 0.7,  // query category agrees with entry category
  gate: 1.2,      // a `must` word is present
  priority: 0.4,  // tie-break only
};

function scoreEntry(idxEntry, ctx) {
  const { tokenSet, rawText, paddedText, categories } = ctx;
  const e = idxEntry;

  // Negative gates: they encode "a more specific entry owns this".
  if (e.notIf.length && e.notIf.some((n) => tokenSet.has(n))) return null;
  if (e.avoidIf.length && e.avoidIf.some((n) => tokenSet.has(n))) return null;

  const parts = {};

  /* Layer 1 + 2 — exact and phrase match against aliases ------------------ */
  let exact = 0;
  let phrase = 0;
  for (let i = 0; i < e.aliasText.length; i++) {
    const at = e.aliasText[i];
    if (!at) continue;
    if (rawText === at) {
      exact = 1;
      break;
    }
    // Word-boundary containment, NOT substring. `rawText.includes("hi")` was
    // true for "achhi" and "hii", so the greeting alias hijacked unrelated
    // messages — the exact bug the old keyword matcher had, moved one layer up.
    if (paddedText.includes(` ${at} `)) {
      phrase = Math.max(phrase, 1);
      continue;
    }
    const tokensOfAlias = e.aliasTokens[i];
    if (tokensOfAlias.size) {
      let hit = 0;
      for (const t of tokensOfAlias) if (tokenSet.has(t)) hit++;
      const ratio = hit / tokensOfAlias.size;
      phrase = Math.max(phrase, ratio >= 0.75 ? 0.7 : ratio * 0.5);
    }
  }
  parts.exact = exact * W.exact;
  parts.phrase = phrase * W.phrase;

  /* Layer 3 — IDF-weighted keyword overlap -------------------------------- */
  let weight = 0;
  let maxWeight = 0;
  let directHits = 0;
  for (const k of e.keywords) {
    const w = INDEX.idf.get(k) || 1;
    maxWeight += w;
    if (tokenSet.has(k)) {
      weight += w;
      directHits++;
    }
  }
  parts.keyword = maxWeight ? (weight / maxWeight) * W.keyword : 0;

  // Coverage: of the meaningful words the user typed, how many did this entry
  // explain? This stops a 1-of-12 keyword hit from looking convincing.
  let explained = 0;
  for (const t of tokenSet) if (e.keywordSet.has(t)) explained++;
  parts.coverage = tokenSet.size ? (explained / tokenSet.size) * W.coverage : 0;

  /* Layer 4 + 5 — synonym and fuzzy recovery ------------------------------ */
  parts.synonym = ctx.synonymApplied && directHits > 0 ? W.synonym : 0;
  let fuzzyHits = 0;
  for (const t of ctx.fuzzyTokens) if (e.keywordSet.has(t)) fuzzyHits++;
  parts.fuzzy = fuzzyHits > 0 ? W.fuzzy : 0;

  /* Layer 6 — category agreement ----------------------------------------- */
  parts.category = e.category && categories.includes(e.category) ? W.category : 0;

  /* Gate bonus (soft, not a filter) --------------------------------------- */
  const gateHit = !e.must.length || e.must.some((m) => tokenSet.has(m));
  parts.gate = gateHit ? W.gate : 0;

  // An entry whose must-list matched nothing at all is not a candidate.
  if (!gateHit && directHits === 0 && phrase === 0 && exact === 0) return null;

  parts.priority = ((e.priority - 40) / 60) * W.priority;

  const total = Object.values(parts).reduce((a, b) => a + b, 0);
  return { entry: e.ref, idx: e, score: total, parts, gateHit };
}

/* ───────────────────────────── confidence bands ────────────────────────── */

const BAND = {
  HIGH: 3.2,   // answer straight away
  MEDIUM: 1.9, // answer, but ask whether it helped
  LOW: 1.1,    // too weak to assert — offer suggestions instead
};

/** Two results this close are not distinguishable; ask instead of guessing. */
const AMBIGUITY_MARGIN = 0.22;

/**
 * @returns {{
 *   status: "high" | "medium" | "ambiguous" | "low" | "none",
 *   best: object|null,
 *   candidates: Array<{id,label,score}>,
 * }}
 */
function searchFAQ(userMessage, { limit = 3 } = {}) {
  const rawText = normaliseText(userMessage);
  const rawTokens = tokenize(userMessage);

  if (!rawTokens.length) return { status: "none", best: null, candidates: [] };

  // Spelling repair against the indexed vocabulary.
  const fuzzyTokens = new Set();
  const tokens = rawTokens.map((t) => {
    if (INDEX.vocabularySet.has(t)) return t;
    const fixed = fuzzyLookup(t, INDEX.vocabulary);
    if (fixed) {
      fuzzyTokens.add(fixed);
      return fixed;
    }
    return t;
  });

  const tokenSet = new Set(tokens);
  const ctx = {
    tokenSet,
    rawText,
    paddedText: ` ${rawText} `,
    fuzzyTokens,
    categories: inferCategories(tokenSet),
    synonymApplied: normaliseText(userMessage).split(/\s+/).join(" ") !== tokens.join(" "),
  };

  const scored = [];
  for (const idxEntry of INDEX.entries) {
    const r = scoreEntry(idxEntry, ctx);
    if (r && r.score > 0) scored.push(r);
  }

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, limit);
  const asCandidates = (list) =>
    list.map((r) => ({ id: r.entry.id, label: entryLabel(r.entry), score: Number(r.score.toFixed(3)) }));

  if (!top.length || top[0].score < BAND.LOW) {
    return { status: "none", best: null, candidates: [] };
  }

  const [first, second] = top;

  // Ambiguous: two plausible answers within a whisker of each other.
  if (second && second.score >= BAND.MEDIUM && first.score - second.score < AMBIGUITY_MARGIN) {
    return { status: "ambiguous", best: null, candidates: asCandidates(top.slice(0, 2)) };
  }

  // Weak but not empty: suggest, do not assert.
  if (first.score < BAND.MEDIUM) {
    return { status: "low", best: null, candidates: asCandidates(top) };
  }

  return {
    status: first.score >= BAND.HIGH ? "high" : "medium",
    best: buildResult(first, tokenSet),
    candidates: asCandidates(top),
  };
}

/** Short human label for a clarification button. */
function entryLabel(entry) {
  if (entry.aliases?.length) {
    const a = entry.aliases[0];
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  return entry.id.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

function buildResult(r, tokenSet = new Set()) {
  const entry = r.entry;
  const idx = r.idx || INDEX.byId.get(entry.id);

  return {
    id: entry.id,
    answer: entry.answer,
    category: entry.category || null,
    score: Number(r.score.toFixed(3)),
    related: (entry.related || [])
      .map((id) => FAQ_LIST.find((f) => f.id === id))
      .filter(Boolean)
      .map((f) => ({ id: f.id, label: entryLabel(f) })),
    // The entry answers the question, but the phrasing says there is a real
    // account problem behind it. The route offers a handoff alongside the answer.
    shouldEscalate: Boolean(
      idx?.escalateIf?.length && idx.escalateIf.some((w) => tokenSet.has(w))
    ),
  };
}

/** Look an entry up directly — used when the user picks a clarification button. */
function getEntryById(id) {
  const idx = INDEX.byId.get(id);
  if (!idx) return null;
  return buildResult({ entry: idx.ref, idx, score: BAND.HIGH }, new Set());
}

/**
 * Grounding context for the AI fallback.
 *
 * The AI used to answer from the system prompt alone, which is why it either
 * invented policy or escalated. Feeding it the closest FAQ entries — even ones
 * too weak to show directly — turns the fallback into retrieval-augmented
 * answering: it can combine two entries, or rephrase one for an odd question,
 * without making anything up.
 */
function getKnowledgeContext(userMessage, { limit = 5 } = {}) {
  const { candidates } = searchFAQ(userMessage, { limit });
  const ids = candidates.map((c) => c.id);

  // Always include a small always-on core so contact details and the top
  // journeys are available even when nothing scored.
  for (const id of ["contact", "courses", "portal_access"]) {
    if (!ids.includes(id)) ids.push(id);
  }

  return ids
    .map((id) => INDEX.byId.get(id))
    .filter(Boolean)
    .slice(0, 8)
    .map((idx) => `- ${entryLabel(idx.ref)}: ${idx.ref.answer.replace(/\s+/g, " ")}`)
    .join("\n");
}

module.exports = {
  searchFAQ,
  getEntryById,
  getKnowledgeContext,
  entryLabel,
  tokenize,
  normaliseText,
  normaliseKey,
  editDistance,
  BAND,
};