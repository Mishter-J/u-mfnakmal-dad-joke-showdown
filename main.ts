// Dad Joke Showdown — program/v1 entry.
// Writes one original dad joke (116 characters) to /output/entry.txt.
// The joke was picked from 7 original candidates by pairwise judging
// against the published judge brief (clean pun, fresh, tight, reads aloud).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  'I told my kids I used to be a baker. They said, "Prove it." So I said: I\'m on a roll, and I knead you to believe me.';

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
