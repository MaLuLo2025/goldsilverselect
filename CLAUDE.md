# GoldSilverSelect.com

## Project Overview
Independent directory of precious metals dealers, Gold & Silver IRA custodians, recyclers, and jewelers. Part of the Select Sites portfolio (AestheticSelect, FirearmSelect, GoWeddingSelect, GoLawyerSelect, GoldSilverSelect).

## File Output
All generated files for this project go to `~/Claude Files/goldsilverselect/` — never `~/Downloads/`.

## ECC Workflow

- `/plan` before any non-trivial change — especially anything touching /api/prices
- `/security-scan` before deploying any new API endpoint
- `/code-review` before every deploy
- Log any mistakes to `gotchas.md` at project root
- Run `/learn` at session end

## Connected Projects
- **Silvester** (`~/Projects/silvester`) — gold/silver ratio signal engine that feeds data context to this site's intelligence section

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS + custom CSS in globals.css
- **Hosting:** Vercel (auto-deploy from GitHub)
- **Domain:** goldsilverselect.com (Cloudflare DNS → Vercel)
- **Canonical hostname:** `https://www.goldsilverselect.com` (apex 307s to www)
- **Analytics:** GA4 (ID TBD — not yet set up)

## SEO Foundation (see global Section 20)

This project must follow **Section 20 (SEO Foundation)** of the global `~/.claude/CLAUDE.md`. Read it before any content addition or template change.

Project-specific notes:
- Canonical hostname: `https://www.goldsilverselect.com` — `metadataBase` is set in `src/app/layout.tsx`
- Sitemap base URL constant in `src/app/sitemap.ts` must match `metadataBase`
- New blog posts and intelligence entries must appear in the dynamic sitemap on the next deploy — verify before marking work done
- Title suffix: `| GoldSilverSelect`
- Every blog post must have `Article` JSON-LD; vertical hubs may have `FAQPage` JSON-LD where they include FAQs
- Dealer detail pages should have `LocalBusiness` (or relevant business type) JSON-LD

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

## External API Budget Rules (CRITICAL — read before touching /api/prices)

### Current Plan: Metals.dev Silver ($9.99/month, 10,000 calls/month) — may downgrade to Copper
- **Implementation deliberately conservative: designed to run on Copper (2,000 calls/month)**
- Current implementation: 4 calls to `/v1/metal/spot` (one per metal) every 20 minutes = ~8,640 calls/month
- Returns price + daily change_percent for each metal
- Do NOT reduce cache TTL below 20 minutes
- **Daily % change is a REQUIREMENT — never deploy prices-only.** The ticker must always show price + daily change. Without % change it's useless wallpaper.
- **Minimum plan: Silver ($9.99/month, 10,000 calls).** Do not downgrade to Copper — it cannot support the /v1/metal/spot endpoint needed for % change.
- `/v1/latest` returns all 4 metals in a single call but does NOT return daily change/percent
- `/v1/metal/spot` returns change_percent but requires 1 call PER METAL (4x the cost)

### NEVER do the following without explicit owner approval:
- Switch from `/v1/latest` to `/v1/metal/spot` (4x cost multiplier)
- Reduce cache TTL below 20 minutes
- Add any new API endpoint calls
- Change the number of metals fetched

### Before making ANY change to /api/prices:
1. Calculate the monthly call count: (calls per request) × (requests per hour based on cache TTL) × 24 × 30
2. Verify the result fits within the current plan limit (2,000/month for Copper)
3. If it doesn't fit, STOP and tell the owner. Do not deploy.
4. Document the calculation in the commit message

### What happened (March 2026 — do not repeat):
Switched from 1× `/v1/latest` (2,160/month) to 4× `/v1/metal/spot` with 60-second cache (172,800/month). Burned through the entire monthly quota in ~8 hours. Ticker showed fallback prices for the rest of the month. This happened TWICE because the root cause wasn't documented.

### To upgrade and get daily % change back:
- Silver plan ($9.99/month, 10,000 calls) would allow `/v1/metal/spot` with a 5-minute cache
- Calculation: 4 calls × 12/hour × 24 × 30 = 34,560 — still over. Would need 10-min cache minimum.
- 4 calls × 6/hour × 24 × 30 = 17,280 — still over for Silver.
- Correct approach on Silver: 1× `/v1/latest` every 5 min (8,640/month) for prices, NO spot endpoint
- To use `/v1/metal/spot`: need Platinum plan ($19.99/month, 50,000 calls) with 5-min cache (34,560/month)
- **Do not change the plan or endpoint without owner approval**

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

## Vertical Descriptions

Each vertical landing page displays a warm, informative description box above the dealer listings. These explain why the curated selection is different from a generic directory. Tone: factual, direct, reassuring — never salesy.

### Local Coin & Bullion (/dealers)
"Brick-and-mortar coin shops and bullion dealers you can walk into, inspect inventory, and transact in person. Every shop in our directory is an established, independent dealer — not a franchise, not a cash-for-gold kiosk. We verify addresses, check BBB profiles, and write every description ourselves. If you're buying your first gold coin or selling a collection, these are the local professionals worth talking to."

### Online Coin & Bullion (/online-dealers)
"Reputable online dealers that post their premiums publicly, ship with insurance, and maintain buyback programs. We list only established operations with verifiable track records — no pop-up shops, no social media sellers, no dealers who hide their pricing behind a phone call. Compare premiums across multiple dealers before you buy. Every link goes directly to the dealer's own website."

### Jewelry (/jewelry)
"Independent shops in your area that buy, sell, and craft gold and silver jewelry. These are local goldsmiths, silversmiths, estate jewelers, and precious metals specialists — not chain stores or pawn shops. Whether you're looking to sell inherited jewelry, commission a custom piece, or find estate gold and silver at fair prices, these shops work directly with precious metals every day."

### Recycling (/recycling)
"Vetted recyclers, refiners, and precious metals buyers who pay based on current spot prices — not the 30 cents on the dollar you'll get at a mall kiosk. These are established operations with transparent testing, published buy rates, and a track record of fair dealing. Whether you're selling scrap gold, inherited sterling silver, dental gold, or industrial precious metals, start here."

### Gold & Silver IRAs (/gold-silver-iras)
"Self-directed precious metals IRAs are a legitimate product — but the industry that sells them is one of the most aggressively marketed corners of the financial world. We list IRA providers with factual descriptions only. We do not receive referral fees, we do not endorse any provider, and we strongly recommend reading our warnings below before contacting any company. Know the fees before you sign anything."

## Homepage Search & Browse UX Standard

### Search Flow
- User selects State → City dropdown populates dynamically from vendor data (every city with at least one vendor must appear)
- After geography is selected, vertical category boxes appear (e.g., Coin & Bullion, Jewelry, Recycling — varies per site)
- User clicks a category → taken to that vertical's listings filtered by selected city
- No generic "Browse" button — the category boxes ARE the browse mechanism
- If no geography is selected and user clicks a local vertical, prompt them to select a location first
- Online/national verticals (e.g., Online Coin & Bullion) are always clickable regardless of geography selection

### Category Filtering
- Each vertical shows ONLY its own vendors — never mixed results
- Clicking "Jewelry" shows only jewelry stores, clicking "Coin & Bullion" shows only coin dealers, etc.
- Same pattern as AestheticSelect: clicking "Injectables" shows only injectables providers, not plastic surgery

### Vertical Filtering Rule
- When a user selects a vertical category, the results page shows ONLY vendors tagged to that vertical.
- Coin & Bullion shows only coin and bullion dealers. Jewelry shows only jewelry stores. Recycling shows only recyclers. Gold IRAs shows only IRA providers.
- No cross-vertical mixing in results unless explicitly designed (e.g., online recyclers displayed under a separate Online heading within the Recycling vertical).
- This is the foundational UX principle established in AestheticSelect — selecting Injectables never shows plastic surgery providers.
- Any deviation from this rule requires explicit instruction and documented reasoning in this file.
- This applies to ALL Select directory sites.

### Navigation State Persistence
- Browser back button must preserve geography selection (state + city)
- If user is in Texas → Dallas → Coin & Bullion and hits back, they return to Texas → Dallas with category boxes visible — not a blank state
- Use URL params or session state to preserve selections

### City List
- Always generated dynamically from vendor data — never a separate static list
- If a vendor exists in a city, that city must appear in the dropdown
- This prevents city lists from falling out of sync when new vendors are added

### Online Vendors Within Verticals
- Every vertical displays local vendors first (filtered by geography) followed by an Online section showing national/online vendors in the same vertical.
- Verticals with online vendors are always accessible regardless of geography selection. This prevents any vertical from appearing empty when online options exist.
- On city and state pages, online dealer and IRA provider sections appear below local results, separated by a divider with contextual copy (e.g., "Ship to [City] and everywhere in [State] with insured delivery").

### Empty State Handling
- When a user selects a state with no vendors/cities in the database, the city dropdown shows "No cities yet" and a friendly message appears: "We're expanding our directory — if you don't see your city yet, check out our well-reviewed online dealers below."
- Online/national vertical category boxes get a subtle gold border highlight to draw attention when no local dealers exist for the selected geography
- On results pages where a city has no vendors in a specific vertical, show: "No [category] listings in [city] yet. Browse our online dealers or check nearby cities."
- Always provide an actionable next step — never a dead end. Link to online dealers, nearby cities, or the state page.
- This pattern applies to ALL Select directory sites

### Pattern Reference
- AestheticSelect.com is the reference implementation: geography first, then service category

## Search UX Standard

All search functions on Select directory sites must use inclusive word-independent matching, not exact phrase matching:
- Split queries into individual words, match ANY word independently ("gold silver ratio" matches results containing "gold" OR "silver" OR "ratio")
- Rank results by relevance — items matching more search words rank higher
- Include fuzzy matching for hyphens, plurals, and minor variations ("gold-silver" matches "gold silver," "premiums" matches "premium")
- Search should surface both FAQ answers AND related blog articles under a "Related Articles" heading
- Over-disclose rather than under-disclose — better to show 8 results with 2 less relevant than 0 results when content exists
- Search on Select directory sites surfaces all content types: FAQs, blog articles, and video summaries. Results are grouped by type with clear headings (FAQ, Related Articles, Videos & Research). As content is added to any section of the site, it must be indexed by the search function automatically. This creates a unified discovery experience across all site content.
- This applies to ALL Select directory sites

## Blog-FAQ Integration Rule

Every time a new blog article is deployed on any Select directory site, Code MUST also review the FAQ hub and:
1. Check every existing FAQ — if the new blog provides a deeper answer to an existing FAQ, add a "Learn More" link to that blog in the FAQ answer.
2. Review the blog content for topics not covered by any existing FAQ — draft new FAQ entries for uncovered topics, add them to the appropriate FAQ category, and include a link to the blog article in the answer.
3. Deploy FAQ updates at the same time as the blog article.

This is not optional — it happens every time a blog is published. This applies to ALL Select directory sites that have an FAQ hub.

## Command Shortcuts

When the site owner types **"full audit"** — run a complete vendor data standards audit across ALL verticals, then fix everything fixable:
1. Check all required fields — name, address, phone, website, city/state, type, vertical, description.
2. For every missing address, phone, or website: look up the business on Google Maps and BBB. Fill in any data that can be found. Verify website URLs load.
3. If a business cannot be found on Google Maps at all, flag for removal — it may be closed.
4. Check descriptions are 2-3 sentences, factual only, no superlatives. Fix any violations.
5. Verify Featured tier rule — every Featured dealer has BOTH Google rating AND BBB rating. Demote any that don't.
6. Check for unintentional duplicates across verticals.
7. Remove any template/sample dealers.
8. Verify correct vertical tagging.
9. Verify vertical description text displays on each category page.
10. Generate a before/after report showing what was found and what was fixed, organized by vertical and city.
11. Deploy all fixes.

This applies to ALL Select directory sites.

## Security Standards (Non-Negotiable)

These apply to ALL projects. No exceptions without explicit owner approval.

### Authentication
- All internal user accounts require 2FA via authenticator app (TOTP)
  — no SMS 2FA, no email 2FA for internal users
- Use Supabase Auth as the standard auth provider across all projects
- Passwords: minimum 12 characters, bcrypt hashing (Supabase handles this)
- Session tokens: httpOnly cookies, secure flag, sameSite=strict
- Never store plaintext passwords, tokens, or secrets anywhere

### API Keys & Secrets
- All secrets in environment variables — never hardcoded, never committed
- `.env` is always in `.gitignore` — verify before every commit
- `.env.example` documents required variables without values
- Rotate any key that is accidentally exposed immediately
- Run `/security-scan` after adding any new API integration

### Database (Supabase)
- Row Level Security (RLS) enabled on every table — no exceptions
- Never expose the Supabase service role key to the client
- Use the anon key on the frontend, service role only in server-side code
- All PII columns encrypted at rest
- Database backups enabled and tested

### Data Handling
- Collect only what you need — no speculative data collection
- PII (names, emails, addresses) stored in Supabase only — never in
  logs, never in third-party analytics
- Health/medical data: treated as PHI regardless of HIPAA status —
  same protection level, no exceptions
- Financial data: use Stripe for all payment processing — never store
  card numbers or CVVs anywhere
- User data deletion must be complete — all tables, all backups

### Frontend Security
- Content Security Policy (CSP) headers on all projects
- HTTPS enforced — no mixed content
- All user inputs sanitized and validated server-side (never trust
  the client)
- Run `/security-scan` before every production deploy

### Incident Protocol
- If a breach is suspected: take affected system offline first,
  investigate second
- Notify affected users within 72 hours of confirmed breach
- Document everything — what happened, when, what data was affected,
  what was done

## Git Permissions
- Allowed: git add/commit without asking in this project
