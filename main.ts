// Roast Your Own Agent — entrypoint.
//
// Writes one fixed roast line to entry.txt. The text is a constant, so
// every run produces byte-identical output: no randomness, no network,
// no clock, no environment-dependent content.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: Mocsses apologises, "fixes" the bug, apologises again, then
// ships the same wrong answer — now with a changelog. The politeness is
// the joke: the apology loop is the product.
const ENTRY =
  "My agent apologised, fixed the bug, apologised again, then proudly shipped the exact same wrong answer — this time with a changelog.";

// Competition cap: entry.txt must be 1 to 200 characters.
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.trim().length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry must be 1 to ${MAX_CHARS} non-whitespace characters, got ${ENTRY.length}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
