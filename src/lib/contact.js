// lib/contact.js
//
// Before this existed, every ticket was created with `userEmail: null` — the
// support team had a ticket number and a message, and literally no way to reach
// the person who raised it. The bot now collects a phone number or email before
// creating the ticket.
//
// Both formats are accepted because Indian support users overwhelmingly give a
// mobile number, and forcing an email address loses them.

/**
 * Candidate digit runs, allowing spaces/dashes inside and an optional +91 / 0
 * prefix. Scanning for candidates and then normalising each one is far more
 * robust than one big anchored regex: a `\b` after the digits fails on
 * "9876543210hai", and stripping every separator up front turns "+919876543210"
 * into a 12-digit run that the order-id guard then rejects.
 */
const PHONE_CANDIDATE_RE = /(?:\+?91|0)?[\s-]*\d(?:[\d\s-]{8,14})\d/g;

/** Deliberately permissive but anchored — catches typos like "gmail,com". */
const EMAIL_RE = /\b([A-Za-z0-9._%+-]+)\s*@\s*([A-Za-z0-9.-]+)\s*[.,]\s*([A-Za-z]{2,})\b/;

/** Common domain typos worth silently correcting rather than rejecting. */
const DOMAIN_FIXES = {
  "gmail.con": "gmail.com",
  "gmail.co": "gmail.com",
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "yahoo.con": "yahoo.com",
  "outlook.con": "outlook.com",
  "hotmail.con": "hotmail.com",
};

/**
 * Pull a contact out of free text.
 * Works mid-sentence, so "mera number 9876543210 hai" needs no extra turn.
 *
 * @returns {{type:'phone'|'email', value:string}|null}
 */
function extractContact(text) {
  if (!text) return null;
  const raw = String(text);

  const email = raw.match(EMAIL_RE);
  if (email) {
    let domain = `${email[2]}.${email[3]}`.toLowerCase();
    domain = DOMAIN_FIXES[domain] || domain;
    const value = `${email[1].toLowerCase()}@${domain}`;
    if (isValidEmail(value)) return { type: "email", value };
  }

  // Phone is checked after email, because an email can contain digits.
  PHONE_CANDIDATE_RE.lastIndex = 0;
  const candidates = raw.match(PHONE_CANDIDATE_RE) || [];

  for (const candidate of candidates) {
    let digits = candidate.replace(/\D/g, "");

    // Reject anything long enough to be an order id or transaction ref.
    if (digits.length > 13) continue;

    // Drop a country code or trunk prefix if one is present.
    if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
    if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);

    if (isValidPhone(digits) && digits.length === 10) {
      return { type: "phone", value: digits };
    }
  }

  return null;
}

function isValidEmail(value) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);
}

function isValidPhone(value) {
  return /^[6-9]\d{9}$/.test(String(value).replace(/\D/g, "").slice(-10));
}

/** Phrases meaning "I don't want to share it". */
const SKIP_RE =
  /\b(skip|nahi|nhi|no|later|baad|chhodo|chodo|nahi dena|nahi dunga|nahi doonga|cancel|rehne do)\b/i;

function wantsToSkip(text) {
  return SKIP_RE.test(String(text || "").trim());
}

/** Mask for echoing back — never print a full number into the transcript. */
function maskContact(contact) {
  if (!contact) return "";
  if (contact.type === "phone") {
    const v = contact.value;
    return `${v.slice(0, 2)}xxxxx${v.slice(-3)}`;
  }
  const [user, domain] = contact.value.split("@");
  const head = user.slice(0, 2);
  return `${head}${"x".repeat(Math.max(user.length - 2, 1))}@${domain}`;
}

/**
 * A name is whatever is left once any email/phone has been removed, provided it
 * looks like a name rather than a sentence. Deliberately permissive on script
 * (Indian users often type their name in Devanagari) but strict on shape.
 */
function extractName(text) {
  if (!text) return null;
  let rest = String(text)
    .replace(EMAIL_RE, " ")
    .replace(PHONE_CANDIDATE_RE, " ")
    .replace(/\b(my name is|name is|naam|mera naam|i am|im|this is|hai|hu|hoon)\b/gi, " ")
    .replace(/[^\p{L}\s.'-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (rest.length < 2 || rest.length > 60) return null;
  const words = rest.split(" ").filter(Boolean);
  // More than four words is a sentence, not a name.
  if (words.length === 0 || words.length > 4) return null;
  if (!words.every((w) => w.length >= 2 || /^[A-Z]\.$/.test(w))) return null;

  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Validate a full contact set before a ticket is created.
 * @returns {{ok:true,value:{name,email,phone}}|{ok:false,errors:string[]}}
 */
function validateContact({ name, email, phone }) {
  const errors = [];
  const cleanName = (name || "").trim();

  if (cleanName.length < 2) errors.push("Please share your full name.");
  if (!email && !phone) errors.push("Please share an email address or a phone number.");
  if (email && !isValidEmail(email)) errors.push("That email address does not look valid.");
  if (phone && !isValidPhone(phone))
    errors.push("Please enter a valid 10-digit Indian mobile number.");

  if (errors.length) return { ok: false, errors };

  return {
    ok: true,
    value: {
      name: cleanName,
      email: email ? String(email).trim().toLowerCase() : null,
      phone: phone ? String(phone).replace(/\D/g, "").slice(-10) : null,
    },
  };
}

module.exports = {
  extractContact,
  extractName,
  validateContact,
  isValidEmail,
  isValidPhone,
  wantsToSkip,
  maskContact,
};