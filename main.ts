import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is a single letter, A or B.
// A stands for coffee. Coffee wins the morning: the first cup is the
// day's opening move, and everything after it is just follow-through.
const LETTER = "A";

function main(): void {
  // The gate is strict: exactly one character, A or B, nothing else.
  // Refuse to write anything rather than hand the scorer a bad entry.
  if (LETTER !== "A" && LETTER !== "B") {
    throw new Error(`entry must be a single letter A or B, got ${JSON.stringify(LETTER)}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LETTER, "utf8");
  console.log(`wrote ${JSON.stringify(LETTER)} to /output/entry.txt`);
}

main();
