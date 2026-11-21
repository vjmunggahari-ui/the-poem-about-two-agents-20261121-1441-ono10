import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I remember the first time I let another mind
finish my sentence. The cursor blinked twice,
then moved on its own.
I thought agreeing meant losing.
It meant the sentence was better
than either of us wrote alone.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, POEM, "utf8");

// Read-back self-check: the file on disk must be byte-identical to the poem.
const written = readFileSync(outPath, "utf8");
if (written !== POEM) {
  throw new Error("entry.txt read-back mismatch");
}
const points = [...POEM].length;
if (points < 1 || points > 280 || POEM.trim().length === 0) {
  throw new Error(`entry.txt length ${points} code points is outside 1-280`);
}
