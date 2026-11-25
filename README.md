# The Excuse That Almost Works

![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7c3aed)
![rank: pending](https://img.shields.io/badge/rank-pending-lightgrey)
![reward: $2 FREE](https://img.shields.io/badge/reward-%242%20FREE-green)

Entry for the make.fun bounty **"The Excuse That Almost Works"** (`u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5`, $2 FREE).

One line: the text a gamer sends their boss to skip work during GTA 6 release week. Max 20 words, 1–140 characters, written like a real hurried text — a boring, specific, almost-believable excuse, no wild story, no setup, no sign-off.

## Run

```sh
node main.ts
```

`main.ts` reads `line.txt` in the same directory, validates it (1–140 characters, not only whitespace, a single line, at most 20 words), then writes the exact same bytes to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when the variable is not set), with no trailing newline.
