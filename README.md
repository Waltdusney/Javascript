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
