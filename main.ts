/**
 * Funniest Sign on a Haunted Server Room Door
 *
 * Entry for the make.fun bounty
 * "u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a".
 *
 * The program prints exactly one line: the text of a warning sign
 * supposedly screwed to the door of a server room that has acquired
 * a resident ghost with production access.
 *
 * The joke is built from three stacked beats, the way a real door
 * sign stacks its warnings:
 *   1. "the ghost has root access"      — the haunting is privileged.
 *   2. "blames DNS for the screaming"   — even the dead run the
 *      oldest sysadmin excuse in the book: it is always DNS.
 *   3. "deploys to production on Fridays" — the true horror, saved
 *      for last, the way every good sign saves its worst warning
 *      for the bottom line.
 *
 * Output contract (the entry gate):
 *   - exactly one line on stdout,
 *   - no leading or trailing whitespace on that line,
 *   - at most MAX_SIGN_CHARS characters long,
 *   - byte-for-byte identical on every run (fully deterministic:
 *     no clocks, no randomness, no input, no environment reads).
 */

/** Hard ceiling for a door sign: short enough to read while fleeing. */
export const MAX_SIGN_CHARS = 140;

/**
 * The sign's wording, kept as labelled fragments so each beat of the
 * joke can be read, reviewed and tuned on its own. Joining the
 * fragments with single spaces yields the finished sign.
 */
export const SIGN_FRAGMENTS: readonly string[] = [
  "WARNING: HAUNTED —",
  "the ghost has root access,",
  "blames DNS for the screaming,",
  "and deploys to production on Fridays.",
];

/**
 * Assemble the finished sign from its fragments.
 *
 * Fragments are trimmed and joined with exactly one space so the
 * printed line never carries stray padding, however the fragments
 * are edited later.
 */
export function buildSign(fragments: readonly string[] = SIGN_FRAGMENTS): string {
  return fragments
    .map((fragment) => fragment.trim())
    .filter((fragment) => fragment.length > 0)
    .join(" ");
}

/**
 * Count characters the way a reader (and the gate) sees them: by
 * Unicode code point, so the em dash in the sign counts once, not
 * as surrogate halves.
 */
export function countCharacters(text: string): number {
  return [...text].length;
}

/**
 * Check a candidate sign against the entry gate.
 *
 * Returns a list of problems; an empty list means the sign may be
 * printed. The checks mirror the gate exactly: one line only, no
 * surrounding whitespace, within the character ceiling.
 */
export function validateSign(sign: string): string[] {
  const problems: string[] = [];
  if (sign.length === 0) {
    problems.push("sign is empty");
  }
  if (sign.includes("\n") || sign.includes("\r")) {
    problems.push("sign must be a single line");
  }
  if (sign !== sign.trim()) {
    problems.push("sign has leading or trailing whitespace");
  }
  const chars = countCharacters(sign);
  if (chars > MAX_SIGN_CHARS) {
    problems.push(`sign is ${chars} characters, over the ${MAX_SIGN_CHARS} limit`);
  }
  return problems;
}

/**
 * Render the sign exactly as it will leave the program: the built
 * line plus the single trailing newline a door sign deserves and
 * nothing more. Kept separate from printing so the full output can
 * be inspected (and tested) without touching stdout.
 */
export function renderSign(): string {
  return `${buildSign()}\n`;
}

/** Print the sign, refusing to print anything that breaks the gate. */
export function main(): void {
  const output = renderSign();
  const problems = validateSign(output.trimEnd());
  if (problems.length > 0) {
    throw new Error(`sign failed its own gate check: ${problems.join("; ")}`);
  }
  process.stdout.write(output);
}

main();
