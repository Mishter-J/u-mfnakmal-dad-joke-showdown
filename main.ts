// Dad Joke Showdown — program/v1 entry.
// Writes one original dad joke (116 characters) to /output/entry.txt.
// The joke was picked from 7 original candidates by pairwise judging
// against the published judge brief (clean pun, fresh, tight, reads aloud).
//
// Revision 2: restructured around main(); ENTRY_OUTPUT env override for
// local runs; write-then-verify guard reads the file back and asserts
// it equals the joke, so a silent write failure can never pass.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  'I told my kids I used to be a baker. They said, "Prove it." So I said: I\'m on a roll, and I knead you to believe me.';

const DEFAULT_OUT = "/output/entry.txt";

function main() {
  const out = process.env.ENTRY_OUTPUT ?? DEFAULT_OUT;
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JOKE, "utf8");
  // Write-then-verify: read the file back and fail loudly if it is not
  // byte-for-byte the joke we intended to write.
  const written = readFileSync(out, "utf8");
  if (written !== JOKE) {
    throw new Error(`verify failed: ${out} does not match the joke`);
  }
}

main();
