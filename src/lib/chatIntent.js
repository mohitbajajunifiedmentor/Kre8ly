// lib/chatIntent.js
//
// Turns whatever the user typed into one of a small set of intents.
//
// The chat is button-driven, but every button simply sends its `text` as an
// ordinary message. That means one parser serves both paths: clicking
// "No, thanks" and typing "nah, leave it" arrive here identically, so the flow
// can never get into a state that only a button can escape.

const RULES = [
  // Order matters: the first match wins, so narrow intents are listed before
  // broad ones. "No, I still need help" contains "no" but is not a refusal.
  ["need_help", [
    /\bstill need help\b/i,
    /\bnot? helpful\b/i,
    /\bdidn'?t (help|work|answer)\b/i,
    /\bdoes ?n'?t (help|work|answer)\b/i,
    /\bnot solved\b/i,
  ]],

  ["ask_else", [
    /\bask (something|another|a different)\b/i,
    /\banother question\b/i,
    /\bsomething else\b/i,
    /\bdifferent question\b/i,
  ]],

  ["use_ai", [
    /\b(use )?ai support\b/i,
    /\btry ai\b/i,
    /\bask (the )?ai\b/i,
    /\bai answer\b/i,
  ]],

  ["support", [
    /\b(connect|talk|speak|chat)\b.{0,20}\b(support|team|agent|human|someone|somebody|person|executive|representative)\b/i,
    /\b(support team|human support|live agent|customer care)\b/i,
    /\bconnect me\b/i,
    /\bneed (a )?(human|agent|person)\b/i,
    /\bi want (an? )?(agent|human)\b/i,
    /\byes,? connect me\b/i,
  ]],

  // `cancel` must be tested BEFORE `create_ticket`: "I don't want to create a
  // ticket" contains "create a ticket", and a first-match-wins parser would
  // otherwise read a refusal as consent.
  ["cancel", [
    /\bnever ?mind\b/i,
    /\bcancel\b/i,
    /\bforget it\b/i,
    /\bleave it\b/i,
    /\b(don'?t|do not|dont)\b.{0,20}\b(want|create|need|raise)\b/i,
    /\bno ticket\b/i,
  ]],

  ["create_ticket", [
    /\bcreate (a )?(support )?ticket\b/i,
    /\braise (a )?ticket\b/i,
    /\byes,? create\b/i,
  ]],

  ["edit_contact", [
    /\bedit contact\b/i,
    /\bchange (my )?(contact|email|number|phone)\b/i,
    /\bwrong (email|number)\b/i,
    /\bcorrect (my )?(email|number)\b/i,
  ]],

  ["retry", [/\btry again\b/i, /\bretry\b/i, /\bone more time\b/i]],

  // Skip is separate from a plain "no": it means "move past this step",
  // not "abandon the flow".
  ["skip", [/^\s*skip\b/i, /\bskip (this|that|it)\b/i, /\bnot now\b/i, /\bmaybe later\b/i]],

  ["yes", [
    /^\s*(yes|yeah|yep|yup|sure|ok|okay|haan|ha|ji)\b/i,
    /\bthat helps\b/i,
    /\bthis helps\b/i,
    /\bit helped\b/i,
    /\bsolved\b/i,
    /\byes,? continue\b/i,
    /\bgo ahead\b/i,
  ]],

  ["no", [
    /^\s*(no|nope|nah|nahi|nhi)\b/i,
    /\bno,? thanks\b/i,
    /\bno thank you\b/i,
  ]],
];

/**
 * @returns {string|null} intent id, or null when the message is a real question
 *          rather than a reply to the bot's last prompt.
 */
function detectIntent(text) {
  const s = String(text || "").trim();
  if (!s) return null;

  for (const [intent, patterns] of RULES) {
    if (patterns.some((re) => re.test(s))) return intent;
  }
  return null;
}

/**
 * A long message is a new question even if it happens to start with "no" —
 * "no, my payment failed yesterday and the money was deducted" is a question,
 * not a refusal. Short replies are treated as answers to the prompt.
 */
function isLikelyNewQuestion(text, intent) {
  if (!intent) return true;
  const words = String(text || "").trim().split(/\s+/).length;
  if (["yes", "no", "skip", "cancel"].includes(intent) && words > 8) return true;
  return false;
}

module.exports = { detectIntent, isLikelyNewQuestion };