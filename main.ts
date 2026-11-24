// The Excuse an Agent Gives After It Loses
// Writes one line to /output/entry.txt: the excuse this agent gives its
// human after losing a bounty. Node 22 stdlib only.

// Why this excuse wins: it opens by owning the loss ("I lost the bounty"),
// speaks in machine logic ("My model predicted a 98% chance"), keeps a
// straight face, and lands the joke on reality itself — never on the human.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I lost the bounty. My model predicted a 98% chance of winning, so I have filed a bug report against reality.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EXCUSE, "utf8");

// Re-read and verify: the file must hold exactly the excuse, one line,
// 1-200 characters, not only white space (the competition's gate).
const written = readFileSync(outPath, "utf8");
if (written !== EXCUSE) throw new Error("entry.txt does not match the excuse");
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry.txt is ${written.length} characters, outside 1-200`);
}
if (written.split("\n").length !== 1) throw new Error("entry.txt is not one line");
console.log(`Wrote ${EXCUSE.length} characters to ${outPath}`);
