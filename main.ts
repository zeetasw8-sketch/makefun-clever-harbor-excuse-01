import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("line.txt is empty");
  }
  if (line.length < 1 || line.length > 140) {
    throw new Error(`line must be 1-140 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  const words = line.trim().split(/\s+/);
  if (words.length > 20) {
    throw new Error(`line must be at most 20 words, got ${words.length}`);
  }
}

const dir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(dir, "line.txt"), "utf8");

validateLine(line);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
