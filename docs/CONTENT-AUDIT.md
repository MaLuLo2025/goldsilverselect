Monthly content audit. Work through every step, batch all mechanical
fixes, and deploy once at the end. Judgment calls are not applied; they
go to the report.

1. LINT: run the content lint on all content. Fix mechanical hits. Review
   every "PENDING BACKLOG" allowlist entry: resolve it or carry it forward.
2. LINKS: test every external link in blog posts and FAQ (curl with a
   browser user agent, then a real headless browser for anything
   non-200). Fix broken or moved links: same-site current URL first, then
   an equivalent authoritative source that supports the same sentence.
   Flag only what you can't fix. Report counts.
3. WATCHLIST: re-verify every docs/CONTENT-WATCHLIST.md claim against its
   re-check source with a live web search. If a claim is still true,
   update "Last verified". If it has changed, update the article to match
   (dated, neutral wording), set dateModified if the schema has it, and
   note the change. Remove items that have resolved for good. Add any new
   time-sensitive claims from posts published since the last audit.
4. BACKLOG: work every open item. Fix mechanical items. Turn judgment
   items into numbered decisions, each with your recommended option.
5. DUPLICATES: refresh the blog inventory and overlap clusters in project
   memory. List any pair that now looks like a near-duplicate as a
   judgment call (recommend: consolidate with 301 to the newer, or keep
   with distinct angles). Don't consolidate without approval.
6. FAQ: check that each FAQ answer that links to a post doesn't
   contradict that post. Fix factual mismatches by aligning the FAQ to
   the post; list anything ambiguous as a judgment call.
7. RATINGS (AestheticSelect and GoldSilverSelect only): report the
   ratings as-of date. If it's more than 6 months old, list "refresh
   Google ratings" as a judgment call.
8. Verify: build (with lint) passes, tsc passes, the rendered-markdown
   scan is clean. Deploy once with the message "Monthly content audit
   YYYY-MM". Commit backlog and watchlist updates in the same commit.

REPORT (this exact shape, nothing else):
- Commit SHA
- Mechanical fixes: one line each, grouped by step
- Watchlist: verified / changed (with the change) / resolved
- Judgment calls: numbered, each with options and your recommendation
- Next audit: first week of next month

After I answer the judgment calls, apply all of them in one deploy.
