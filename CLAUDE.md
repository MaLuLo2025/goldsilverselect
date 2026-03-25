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

## Vendor Data Standards

### Required Fields (every vendor, no exceptions)
- Name
- Address (full street address with zip)
- Phone number
- Website URL (verified — must load)
- City/State
- Type: local or online
- Vertical: as defined per site taxonomy
- Description: 2-3 sentences, factual only, written by the directory. No superlatives ("best," "top-rated," "leading," "premier," "#1"). No unverifiable claims.

### Ratings (required for Featured tier)
- Google rating + review count (from Google Maps knowledge panel)
- BBB rating + accreditation status (from bbb.org)
- Featured tier requires BOTH Google rating AND BBB rating. No exceptions unless manually approved by site owner with documented reason.

### Exclusion Rules
- Any vendor with government enforcement actions (state AG, FTC, or relevant regulatory body) is excluded entirely.
- Any vendor whose primary business model conflicts with the directory's editorial standards is excluded from the relevant vertical. May appear in a different vertical with factual framing if appropriate.
- Any vendor that appears permanently closed on Google Maps is removed.

### Adding New Vendors — Standard Process
1. Research phase produces a data file with all fields populated. Fields that couldn't be confirmed are marked (verify).
2. Before submitting to Claude Code, resolve as many (verify) fields as possible via web search. Every vendor entry should have name, address, phone, website, and description confirmed. Ratings should be looked up and included wherever possible.
3. Claude Code receives the vendor data file WITH cleanup instructions in a single command:
   - Add all vendors from the file
   - Programmatically verify: website URLs load, Google Maps listings exist, BBB profiles exist
   - Look up any remaining missing ratings, phone numbers, addresses
   - Apply Featured tier rule (requires both Google and BBB ratings)
   - Remove any permanently closed businesses
   - Flag any BBB complaints or government actions for review
   - Remove existing template/sample vendors that don't match real businesses
   - Generate a summary report of all changes
   - Deploy
4. This is ONE command, not separate steps.

### Description Content Standards
- Factual only: certifications, services offered, location, year founded, verifiable third-party designations, notable operational details
- Never imply the directory endorses or recommends a specific vendor
- Never use: "number one," "best," "top-rated," "leading," "premier," "voted #1," or unverifiable rankings
- Include where available: founded year, headquarters/city, services offered, relevant professional certifications or accreditations, distinguishing factual details (e.g., "open Saturdays," "multiple locations," "offers free consultations")

### Vendor Card Display Standards
- Description truncation: 3 lines, cut at end of last complete sentence
- Show Google rating + BBB rating where available; omit cleanly if unavailable (no empty badges)
- Website as clickable link (domain only, opens in new tab)
- Phone as clickable tel: link
- Detail pages: website and phone prominently visible near top

## Search Console
- When submitting sitemaps to Google Search Console, the full URL is required (e.g., https://goldsilverselect.com/sitemap.xml), not just the filename.
- Every site must have a dynamic sitemap.xml generated at build time that includes all pages — homepage, dealer/vendor pages, city pages, state pages, blog articles, FAQ, and legal pages.

## Git Permissions
- Allowed: git add/commit without asking in this project
