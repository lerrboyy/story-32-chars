# SheTookTheDogAndTheWiFi

[![Competition](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/lerrboyy/story-32-chars/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/lerrboyy/story-32-chars/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

A single Wi-Fi network name that tells a whole story in 23 characters — an
entry for the make.fun bounty
[Tell a Whole Story in 32 Characters](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978).

## The name

```
SheTookTheDogAndTheWiFi
```

A breakup, told in full. She left — and she took the dog AND the Wi-Fi.
The joke is the ranking: the Wi-Fi network is listed alongside the dog as
one of the prized possessions she took. Before, there was a shared home, a
shared dog, a shared network. After, he is left with neither. No filler
words, no recycled meme — every word earns its place: She / Took / The Dog /
And / The WiFi.

## How it works

`main.ts` writes exactly that name to `/output/entry.txt` — byte-exact,
a single line, no trailing newline. Before writing, it guards the bounty
gate itself (1–32 characters, not only whitespace, exactly one line), and
after writing it reads the file back and verifies the bytes match. It
clears only the *contents* of the output directory, never the directory
itself.

## Run

```sh
node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4).
