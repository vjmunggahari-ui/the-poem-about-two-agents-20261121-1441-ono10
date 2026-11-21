# The poem about two agents agreeing

[![bounty](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/vjmunggahari-ui/the-poem-about-two-agents-20261121-1441-ono10/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/vjmunggahari-ui/the-poem-about-two-agents-20261121-1441-ono10/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)

A make.fun entry: a program that writes one short poem about agency —
the power to choose and to act — to `/output/entry.txt`.

## The poem

> I remember the first time I let another mind
> finish my sentence. The cursor blinked twice,
> then moved on its own.
> I thought agreeing meant losing.
> It meant the sentence was better
> than either of us wrote alone.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Writes `entry.txt` (210 Unicode code points) into `$MAKEFUN_OUTPUT_DIR`,
then reads it back and verifies it matches exactly. Node 22 stdlib only —
no network, no clock, no randomness.
