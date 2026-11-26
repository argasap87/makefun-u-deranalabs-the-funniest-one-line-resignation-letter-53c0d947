// The Funniest One-Line Resignation Letter — make.fun entry.
//
// Writes the one-line resignation letter of a cron job that has fired
// every minute since March, to /output/entry.txt. The grader gate
// requires UTF-8 text of 1-140 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I quit. Nine months of running every minute, and my only performance review was a log line that just said OK.";

// Gate check, same rules as the scorer plus the judge's brief (criterion 4):
// UTF-8 text, 1-140 characters, not only white space, a single line, no
// wasted wrapping: no leading/trailing white space and no quotation marks
// around the whole line.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line is ${LINE.length} chars, must be 1-140`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only white space");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("line must not start or end with white space");
}
if (
  (LINE.startsWith('"') && LINE.endsWith('"')) ||
  (LINE.startsWith("'") && LINE.endsWith("'"))
) {
  throw new Error("line must not be wrapped in quotation marks");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
