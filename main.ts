// Tell a Whole Story in 32 Characters
// A breakup in one Wi-Fi name: she left, and she took the dog AND the Wi-Fi.
// The network name is listed next to the dog as a prized possession — the
// joke is the ranking. Before: a shared home, a shared dog, a shared network.
// After: he is left with neither. 23 characters, every word earns its place.
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";

const NAME = "SheTookTheDogAndTheWiFi";
const MAX_CHARS = 32;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Guard the gate before writing anything: 1–32 chars, not only whitespace,
// exactly one line — a name that fails the scorer never reaches the judge.
if (NAME.length < 1 || NAME.length > MAX_CHARS) {
  throw new Error(`Name must be 1–${MAX_CHARS} characters, got ${NAME.length}`);
}
if (!NAME.trim() || NAME.includes("\n") || NAME.includes("\r")) {
  throw new Error("Name must be a single non-blank line");
}

mkdirSync(OUT_DIR, { recursive: true });

// Clear only the CONTENTS of the output dir — never remove the dir itself
// (it is a mount point on the grader; removing it throws EBUSY).
for (const entry of readdirSync(OUT_DIR)) {
  rmSync(`${OUT_DIR}/${entry}`, { recursive: true, force: true });
}

writeFileSync(OUT_FILE, NAME, "utf8");

// Read back and verify byte-exactness: what the judge sees must be exactly
// the name above, one line, no trailing newline.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== NAME) {
  throw new Error(`Output mismatch: expected ${JSON.stringify(NAME)}, got ${JSON.stringify(written)}`);
}
console.log(`Wrote ${NAME.length} characters to ${OUT_FILE} (verified byte-exact)`);
