# Gotchas

## 2026-09-21 — Sales-tax article listed outdated states
- What went wrong: The state-by-state sales-tax article (sales-tax-precious-metals-by-state-2026) shipped with an outdated state list; Maryland, Washington, and Virginia had recently added tax and Florida had removed its threshold.
- Root cause: State tax and regulation landscapes shift between annual updates, and the source draft was not checked against current state Department of Revenue rules.
- Rule going forward: Any article listing specific states must be dated, include a "verify with source" note, and be flagged for annual review even if not in the current update queue. Cross-check state lists against current DoR sources before deploying. Also check that headline counts match the lists in the body.

## 2026-10-11 — FAQ "Learn More" links pointed to posts that never existed
- What went wrong: Three FAQ entries (Eagle vs Maple Leaf, authenticating gold, APMEX/JM/SD comparison) linked to /blog slugs that were never published; they returned 404 live.
- Root cause: FAQ entries were added (a853fef) ahead of the posts, and no check compares FAQ hrefs against blog.ts slugs.
- Rule going forward: Every internal href in faq.ts must match a slug in blog.ts. The monthly audit should check this (and the lint should be extended to do so).
