# GoldSilverSelect.com

## Project Overview
Independent directory of precious metals dealers, Gold & Silver IRA custodians, recyclers, and jewelers. Part of the Select Sites portfolio (AestheticSelect, FirearmSelect, GoWeddingSelect, GoLawyerSelect, GoldSilverSelect).

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS + custom CSS in globals.css
- **Hosting:** Vercel (auto-deploy from GitHub)
- **Domain:** goldsilverselect.com (Cloudflare DNS → Vercel)
- **Analytics:** GA4 (ID TBD — not yet set up)

## Design System — "Mint" Theme
- **Ticker bar:** #111110 (near-black)
- **Body:** #FAFAF5 (cream)
- **Gold accent:** #C5A44E
- **Forest green secondary:** #1B3D2F
- **Charcoal:** #1E1E1E (footer, signup)
- **Border:** #e8e5dd
- **Typography:** Georgia serif + Helvetica Neue sans
- **Logo:** Triple concentric ring mark with serif G in gold

## Architecture
- `/dealers/[state]/` — state dealer hub
- `/dealers/[state]/[city]/` — city dealers
- `/dealers/[state]/[city]/[dealer]/` — dealer detail (Schema.org)
- `/online-dealers/` — web-based dealers
- `/gold-silver-iras/` — IRA custodians
- `/recycling/` — precious metals recyclers
- `/jewelry/` — local jewelers
- `/intelligence/` — curated video/research library
- `/blog/[slug]/` — blog articles

## Five Verticals
1. Local Coin & Bullion Dealers
2. Online Coin & Bullion Dealers
3. Gold & Silver IRAs
4. Precious Metals Recycling
5. Jewelry Stores & Custom Jewelers

## Key Features
- Scrolling live price ticker (Gold, Silver, Platinum, Palladium)
- Market hours display (Hong Kong, London, Chicago, Shanghai — Eastern Time)
- Au:Ag ratio display
- Market Intelligence section (curated YouTube embeds + research links)
- Unified email signup with checkboxes (price alerts, % change, ratio, intel summaries)

## Content Standards
- **NEVER** use superlative claims in dealer descriptions (no "best," "top," "leading," "#1")
- All descriptions must be factual only — certifications, services, location
- No CTA buttons unless connected to a real system — use dealer website links
- Editorial voice: summarize, synthesize, bullet point — NEVER advocate or opine
- Outbound links to authoritative .gov/.org sources on every content page

## Legal Standards
- Colorado law, Durango/La Plata County venue, binding arbitration + class action waiver in TOS
- Cookie consent banner with Accept/Reject/Manage
- Privacy policy, terms, cookie policy from day one
- Financial disclaimer on every page

## Deployment
- `./deploy.sh "commit message"` — git add, commit, push (Vercel auto-deploys)
- Files with template literals: downloadable files, never Terminal heredocs
- Modifying existing files: produce full replacement download, not sed scripts
- Always verify Vercel status after push

## Git Permissions
- Allowed: git add/commit without asking in this project
