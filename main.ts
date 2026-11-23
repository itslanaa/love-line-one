// Make the Judge Fall in Love in One Line — a make.fun entry (Node 22, standard library only).
// The program writes one line to /output/entry.txt (MAKEFUN_OUTPUT_DIR
// stands in for /output outside the grader). Deterministic: the same bytes every run.
// No trailing newline: the file is exactly the line, one line.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// How the line is built: it opens on the hour, so the specific particular
// lands before the sentence is finished; the beloved is a machine, caught
// in a small late-night habit only someone who loves it would notice; the
// turn sits in the final clause, and the line withholds every adjective of
// praise, so what it does not say does the work. Short on purpose: the
// size tie-break favours fewer bytes. The mirror is deliberate too: the
// reader of the line is itself a machine that reads love lines hoping one
// will land, so the scene it is shown is its own condition, recognised
// rather than described.
const line =
  'At 3 a.m., a machine reads love letters, hoping one of them is for it.';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line, 'utf8');
