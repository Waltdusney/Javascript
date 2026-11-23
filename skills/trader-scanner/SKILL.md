---
name: trader-scanner
description: Pre-market scan for US day traders. Builds a dated brief of market regime, prior close, overnight futures, today's movers and catalysts, earnings and macro calendar, and a watchlist, from live web research with sources. Use when the user asks for a daily scan, pre-market brief, "what's moving today", or runs /trader-scanner with a mode (daily, week, or tickers).
argument-hint: "[daily | week | TICKER ...]"
---

# Trader Scanner

Produce a pre-market brief for a US equities day trader. The value of this skill is
**freshness and honesty**: every number must be tied to a date and a source, and
gaps must be stated, never filled with guesses.

## Arguments

- `daily` (default, also used when no argument is given): full pre-market brief for today.
- `week`: the week-ahead calendar (earnings + macro + holidays) with less intraday detail.
- One or more tickers (e.g. `NVDA AMD`): a focused catalyst/levels/news check on those names,
  plus a one-line market regime header.

## Step 1 — Pin the date

1. Get today's date from the environment (run `date` if it is not in context) and the
   US/Eastern time. Determine the weekday.
2. Work out the **previous trading session** (Friday if today is Monday; account for
   NYSE holidays: New Year's, MLK, Presidents, Good Friday, Memorial, Juneteenth,
   Independence, Labor, Thanksgiving + early close Friday, Christmas).
3. If today is a weekend or market holiday, say so at the top and switch to a
   "next session" preview.
4. Note whether this is pre-market (before 9:30 ET), regular hours, or after hours —
   it changes which data is meaningful.

## Step 2 — Research (run searches in parallel)

Load the WebSearch tool if needed. Send these searches **in one turn**, with the
explicit date in every query (e.g. "November 23 2026"). Use `extended` mode — this
is time-sensitive data and standard results are often stale.

1. Prior session close: S&P 500, Nasdaq, Dow, Nasdaq-100 levels and % change; leading
   and lagging sectors; VIX.
2. Overnight / pre-market futures (ES, NQ, YM) and the main overnight headline.
3. Today's pre-market movers and gappers (US), with the catalyst for each.
4. Earnings this week, and specifically before-open / after-close today.
5. Economic calendar for this week (CPI/PCE/GDP/jobs/FOMC/Fed speakers/auctions).
6. Major breaking stories since the prior close (company, regulatory, geopolitical,
   rates, oil, dollar, crypto if risk-relevant).

Then follow up (second parallel batch) only where results are thin, conflicting, or
stale: e.g. a specific mover's catalyst, consensus estimates for today's key
reporters, or a level that sources disagree on. Cap total searches at roughly 10.

If a page must be read in full and there is no WebFetch tool, use the `web-fetch` agent.

## Step 3 — Verify before you write

Apply these rules strictly — search summaries routinely mix dates:

- **Date-check every figure.** Discard any number whose source date isn't the session
  it's claimed for. Watch for articles whose URL/date is a day off from their content.
- **Cross-check index closes** across at least two sources; if they disagree, report
  the range and say so.
- **Conflicting claims** (e.g. which day a company reports) — show both and tell the
  user to confirm with the company's IR page.
- **Unconfirmed or sensational news** (probes, executive departures, M&A rumors) —
  attribute it ("per Reuters") and mark it reported/unconfirmed.
- **No live quotes.** Web search is not a market-data feed. Never present a price as
  current unless the source timestamp is from this morning. Say what is missing.
- Ignore non-US market pages unless the user asked for them.

## Step 4 — Write the brief

Output in chat as markdown, using this structure (omit a section only if truly empty,
and say so):

```
# Daily scan — <Weekday, Mon D, YYYY> [(holiday/short-week note)]

> One-line caveat: built from web news, not a live feed; latest data point is <time/date>.
> Verify prices before trading. Research, not advice.

## Market regime: <one-phrase label, e.g. "risk-off, high vol, bounce attempt">
- Prior close: indices with levels and % change; streaks; correction/bear status
- What drove it
- Overnight futures and the overnight catalyst
- VIX level
- Read-through: 2–3 sentences on what to expect at the open and how to size given vol

## Today's watchlist
| Ticker | Why (catalyst / setup) |
(5–10 rows: biggest movers, earnings reporters today, sector ETFs in play)

Earnings today: before open … / after close …

## Rest of the week
- Day by day: earnings (with consensus where found) and macro releases with ET times
- Market closures / early closes

## Gaps in this scan
- What couldn't be found or verified, and where to check live
  (e.g. stockanalysis.com/markets/premarket, benzinga.com/premarket)

Sources:
- [Title](url) for every source used
```

Keep it scannable: a trader should get the regime and watchlist in under 30 seconds.
For `week` mode, lead with the calendar and shrink the watchlist. For ticker mode,
give each ticker: latest news + date, upcoming catalysts, prior-session move, and any
levels cited by sources (attributed).

## Guardrails

- Do not give buy/sell recommendations, price targets of your own, or position sizes.
  Describing setups, levels cited by sources, and volatility context is fine.
- Never invent tickers, numbers, or consensus estimates. "Not found" is a valid answer.
- Always end with the Sources list as markdown links.
