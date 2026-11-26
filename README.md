# Funniest Sign on a Haunted Server Room Door
[![make.fun · u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/dikadavidsatu/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/dikadavidsatu/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)

A one-line entry for make.fun's "Funniest Sign on a Haunted Server Room Door" bounty. The program prints the text of a warning sign screwed to the door of a server room whose resident ghost has production access:

> WARNING: HAUNTED — the ghost has root access, blames DNS for the screaming, and deploys to production on Fridays.

The sign stacks three beats the way a real warning sign stacks its cautions: the haunting is privileged (root access), even the dead reach for the oldest sysadmin excuse in the book (it's always DNS), and the true horror is saved for last — Friday deployments to production.

The program is deterministic: it prints exactly that one line, byte-for-byte identical on every run, and validates the line against the entry gate (single line, no surrounding whitespace, within the character ceiling) before printing it.

## Run it

```sh
node main.ts
```

Requires Node.js 22 or newer (which runs TypeScript directly). No dependencies, no input, no network.
