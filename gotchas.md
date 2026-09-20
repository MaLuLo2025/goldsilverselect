# Gotchas

## 2026-09-21 — Sales-tax article listed outdated states
- What went wrong: The state-by-state sales-tax article (sales-tax-precious-metals-by-state-2026) shipped with an outdated state list; Maryland, Washington, and Virginia had recently added tax and Florida had removed its threshold.
- Root cause: State tax and regulation landscapes shift between annual updates, and the source draft was not checked against current state Department of Revenue rules.
- Rule going forward: Any article listing specific states must be dated, include a "verify with source" note, and be flagged for annual review even if not in the current update queue. Cross-check state lists against current DoR sources before deploying. Also check that headline counts match the lists in the body.
