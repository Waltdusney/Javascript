# Javascript
Some java stuff

## day-trader-skill (Claude Code plugin)

This repo is also a Claude Code plugin marketplace with one plugin, `day-trader-skill`.
It bundles the 11 skills from
[Jakeschincariol/day-trader-skill](https://github.com/Jakeschincariol/day-trader-skill)
(MIT, see `.claude/skills/LICENSE-day-trader-skill`) plus this repo's own `trader-premarket`.

The skills live in `.claude/skills/`, so in any Claude Code session opened on this repo
(including cloud sessions) they are plain slash commands: `/trader-premarket daily`,
`/trader-scanner orb`, `/trader-news TSLA`, and so on.

To use them in other projects, install the plugin:

```
/plugin marketplace add waltdusney/javascript
/plugin install day-trader-skill@waltdusney-trading
```

Installed as a plugin they show up namespaced, e.g. `/day-trader-skill:trader-scanner`.

| skill | what it does |
| --- | --- |
| `trader-premarket` | Pre-market brief from live web research: regime, futures, catalysts, calendar (`daily`, `week`, or tickers). |
| `trader-scanner` | Chart scanner: opening-range breakouts, flags, oversold bounces; writes `trader/watchlist.json`. |
| `trader-news` | Breaking headlines and 8-Ks for the watchlist. |
| `trader-entry` | Watches a setup bar by bar, says when it triggers. |
| `trader-exit` | Sets stop, target and flat-by time before entry. |
| `trader-timemachine` | Replays the session 10,000 times plus past occurrences of the setup. |
| `trader-budget` | Sizes the position to your account and max loss. |
| `trader-risk` | PASS / BLOCK each order against your limits. |
| `trader-broker` | Order tickets for Alpaca, paper by default, never without your yes. |
| `trader-alerts` | Rings on stop, target and the close. |
| `trader-analyst` | Earnings summary from SEC XBRL facts. |
| `trader-pelosi` | Congress members' periodic transaction reports. |

The Python tools need Python 3.8+ and nothing to pip install. The SEC tools want
`SEC_USER_AGENT="Your Name you@example.com"` (or `sec_user_agent` in `trader/config.json`).

Run the offline tests:

```bash
python3 -m unittest discover -s tests
```

Not financial advice. Data comes from free, unofficial sources; verify prices with your
broker before trading, and trade on paper first.

## taste-skill (third-party, via this marketplace)

The marketplace also lists [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)
(MIT), a frontend design skill for building polished, non-generic websites. It is
fetched from upstream on install, not copied into this repo:

```
/plugin install taste-skill@waltdusney-trading
```

It needs Node 22+ and Chrome/Chromium for its browser checks, and it adds a Stop hook
that runs its finish gate.

## marketing-skills (third-party, via this marketplace)

The marketplace also lists [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
(MIT), 53 marketing skills: CRO, copywriting, SEO and AI SEO, paid ads, cold email,
pricing, launches, analytics, referrals and more. Most skills read the `product-marketing`
skill's context first, so start there.

A copy of the skills (upstream commit `2bf95ed`, license in
`.claude/skills/LICENSE-marketingskills`) also lives in `.claude/skills/`, so in sessions
opened on this repo they are plain slash commands: `/product-marketing`, `/copywriting`,
`/seo-audit`, and so on. That copy does not update itself; re-copy from upstream to refresh it.

To use them in other projects, install the plugin, which is fetched from upstream:

```
/plugin install marketing-skills@waltdusney-trading
```
