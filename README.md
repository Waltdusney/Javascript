# Javascript
Some java stuff

## day-trader-skill (Claude Code plugin)

This repo is also a Claude Code plugin marketplace with one plugin, `day-trader-skill`,
which provides the `trader-scanner` skill:

```
/day-trader-skill:trader-scanner daily      # full pre-market brief for today
/day-trader-skill:trader-scanner week       # week-ahead earnings + macro calendar
/day-trader-skill:trader-scanner NVDA AMD   # focused check on specific tickers
```

Install in Claude Code:

```
/plugin marketplace add waltdusney/javascript
/plugin install day-trader-skill@waltdusney-trading
```

Files: `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`,
`skills/trader-scanner/SKILL.md`.

The scan is built from web search, not a live market-data feed, so verify prices
before trading. It's research, not trading advice.

## taste-skill (third-party, via this marketplace)

The marketplace also lists [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)
(MIT), a frontend design skill for building polished, non-generic websites. It is
fetched from upstream on install, not copied into this repo:

```
/plugin install taste-skill@waltdusney-trading
```

It needs Node 22+ and Chrome/Chromium for its browser checks, and it adds a Stop hook
that runs its finish gate.
