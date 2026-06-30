# GoldSilverSelect — Search Console Indexing Audit
**Date:** 2026-06-29  
**Data source:** Google Search Console (last update: 6/11/26) + live codebase inspection  
**Scope:** Diagnostic only — no code changes made

---

## Status Overview

| Status | Count |
|--------|-------|
| Indexed | 33 |
| Not indexed | 332 |
| **Total known** | **365** |
| Sitemap URLs | 347 |
| **Indexation rate** | **9.5%** |

---

## Not-Indexed Breakdown (6 categories)

### 1. Page with redirect — 14 URLs
**What it means:** Google crawled these URLs and was 308-redirected to a different URL.  
**Root cause:** The old `robots.ts` pointed the sitemap URL to `https://goldsilverselect.com/sitemap.xml` (apex, no www). Google submitted or crawled apex domain URLs; the apex 308-redirects to `https://www.goldsilverselect.com`. Those apex URL impressions are now tracked as "page with redirect."  
**Status:** Fix already deployed — `robots.ts` now points to `https://www.goldsilverselect.com/sitemap.xml`. Google will resolve these as it re-crawls.  
**Action needed:** None beyond what's done. Monitor over next 4-6 weeks.

---

### 2. Alternate page with proper canonical tag — 9 URLs
**What it means:** Google found these pages, but the canonical tag points to a different URL, which Google respects. Google is indexing the canonical version instead.  
**Root cause:** Apex domain pages (`goldsilverselect.com/dealers/...`) carry canonical tags pointing to the www version (`https://www.goldsilverselect.com/dealers/...`). Google marks the apex as an "alternate" and indexes the canonical www version — this is correct behavior.  
**Action needed:** None. Google is doing the right thing.

---

### 3. Not found (404) — 2 URLs
**What it means:** Google crawled URLs that return 404.  
**Root cause:** City slugs that no longer have dealers in the data file, but Google found the URLs through an old sitemap submission, external link, or Google cache. Confirmed examples:
- `/dealers/california/fresno` → 404 (no Fresno dealers in data)
- `/dealers/colorado/colorado-springs` → 404 (no Colorado Springs dealers in data)

Both 404 pages carry `noindex` and inherit the homepage canonical (`https://www.goldsilverselect.com`) — the root canonical inheritance bug. They won't harm ranking but waste crawl budget.  

**Action needed:**  
- Identify all pages that were previously in the sitemap but are now 404.  
- These should return 410 (Gone) or 301-redirect to the state page.  
- Remove from any internal links.

---

### 4. Duplicate without user-selected canonical — 1 URL
**What it means:** Google found a page it considers a duplicate but no canonical was set to tell it which version is primary.  
**Likely cause:** A `?v=` vertical filter URL (e.g., `/dealers/texas?v=local-coin-bullion`) that generates unique query-param URLs but has no canonical pointing back to the base URL. Next.js does not auto-canonicalize query-param variants.  
**Action needed:** Add `rel="canonical"` pointing to the base URL for all `?v=` filter param pages.

---

### 5. Discovered — currently not indexed — 275 URLs
**What it means:** Google is aware of these pages (from sitemap or links) but has not yet chosen to index them. Google found insufficient reason to prioritize crawling and indexing them.

**Pattern breakdown (estimated from sitemap analysis):**

| Pattern | Count | Example | Issue |
|---------|-------|---------|-------|
| State pages, no local dealers | 28 | `/dealers/alabama` | Thin: just "expanding" message + online dealer list |
| State pages, few local dealers | ~10 | `/dealers/georgia` | Moderate content, mixed |
| City pages, 1–2 dealers | ~50–60 | `/dealers/maryland/silver-spring` | Thin: 1-2 dealer cards |
| Dealer detail pages | ~100–120 | `/dealers/texas/austin/[slug]` | Short profiles, low uniqueness |
| Blog/intelligence not yet crawled | ~20–30 | `/blog/...`, `/intelligence/...` | Not yet reached in crawl queue |

**Content quality spot checks:**
- `/dealers/illinois/chicago` — 4,003 words (8 dealers) ✓ Good
- `/dealers/florida/miami` — 3,060 words (5 dealers) ✓ Acceptable
- `/dealers/georgia/atlanta` — 3,232 words (3 dealers) ✓ Acceptable
- `/dealers/washington/kirkland` — 2,972 words (2 dealers) ⚠ Borderline thin
- `/dealers/alabama` (no dealers) — 2,607 words, but content is 90% the repeated online dealer list ✗ Thin

**Core problem:** Directory pages with few local listings look identical to each other — same structure, same online dealer list, minor variation in the local section. Google treats them as low-value thin content and deprioritizes indexing.

---

### 6. Crawled — currently not indexed — 31 URLs
**What it means:** Google actively crawled these pages and made a deliberate decision NOT to index them. These are the highest-priority fix targets — Google saw the content and judged it below its indexing bar.  
**Likely candidates:** The emptiest state pages (28 with no local dealers) and the thinnest 1-dealer city pages.  
**Action needed:** These pages need either substantially more content or should be removed from the sitemap with a noindex directive.

---

## Root Cause Summary

The site has **347 sitemap URLs but only 33 indexed (9.5%)**. This is a content quality problem, not a technical problem.

**The core issue:** ~200 of the 347 sitemap URLs are state/city directory pages with minimal or no local dealer listings. Each page has:
- The same navigation, header, footer
- The same online dealer list (repeated on every page)
- A variable local section ranging from 0 to 8 dealers

Pages with 0–2 local dealers are effectively indistinguishable from each other and look thin to Google's quality systems. Google's crawl budget on a new directory site is limited — it indexes the clearest high-value pages first (homepage, major city pages, blog), then stops.

---

## Sitemap Structure at Time of Audit

| URL type | Count | Indexed est. | Not indexed est. |
|----------|-------|--------------|------------------|
| Static pages | 12 | ~8 | ~4 |
| State pages | 50 | ~6 | ~44 |
| City pages | 90 | ~10 | ~80 |
| Dealer pages | 152 | ~5 | ~147 |
| Blog posts | 37 | ~3 | ~34 |
| Intelligence | 6 | ~1 | ~5 |
| **Total** | **347** | **~33** | **~314** |

---

## Technical Issues Found

| Issue | Severity | Status |
|-------|----------|--------|
| `robots.ts` sitemap URL was apex (no www) | High | ✅ Fixed 2026-06-29 |
| 404 city pages with homepage canonical inheritance | Medium | ⚠ Open |
| `?v=` query param pages missing canonical | Low | ⚠ Open |
| Empty state pages in sitemap waste crawl budget | High | ⚠ Open — content strategy decision |

---

## Content Strategy Decision Needed

This audit identified the problem clearly. The fix requires a content strategy call:

**Option A — Remove thin pages from sitemap:**  
Noindex or remove all state/city pages with fewer than 3 local dealers. Reduces sitemap from ~347 to ~100–120 URLs. Google indexes a higher % of remaining pages faster. Risk: smaller total indexed footprint.

**Option B — Add unique content to thin pages:**  
Add a paragraph of unique editorial content to each state/city page (local market context, popular coins in the area, etc.) to give Google a reason to index and rank it. Larger effort but scales better.

**Option C — Hybrid:**  
Remove the emptiest 28 state pages (0 dealers). Keep all pages with ≥1 dealer but add a content requirement before adding future state/city pages.

**Recommended for discussion with .ai:** Start with Option A to stop bleeding crawl budget. Layer in content per Option B as dealers are added.

---

*Files in this directory:*
- `AUDIT-SUMMARY.md` — this file
- `state-pages.csv` — all 50 state pages from sitemap
- `city-pages.csv` — all 90 city pages from sitemap
- `dealer-pages.csv` — all 152 dealer pages from sitemap
- `all-dealer-urls.csv` — all 292 dealer-related sitemap URLs
- `discovered-not-indexed-sample.csv` — 28 empty state pages (highest priority thin content)
