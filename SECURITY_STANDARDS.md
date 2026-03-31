# Security Standards
## Select Sites Portfolio + Silvester
### Effective: March 2026 | Owner: Mark Stetler

This document defines the security standards for all projects in the Select Sites portfolio
(AestheticSelect, GoldSilverSelect, FirearmSelect, GoWeddingSelect, GoLawyerSelect) and Silvester.
All team members and contractors must read and follow this document before accessing any system.

---

## 1. Authentication Standards

### Internal Users (Admin, Operators, Partners)
- **2FA required for all internal accounts — no exceptions**
- Approved 2FA method: TOTP authenticator app only (Google Authenticator, Authy, or 1Password)
- SMS 2FA and email 2FA are NOT permitted for internal users — they are phishable
- Minimum password length: 16 characters
- Passwords must be unique per service — use a password manager (1Password or Bitwarden recommended)
- Sessions expire after 8 hours of inactivity
- Failed login attempts: lock account after 10 consecutive failures, require manual unlock

### Customer-Facing Accounts (future)
- Email + password minimum
- 2FA optional but strongly encouraged at signup
- Password minimum: 12 characters
- Breach detection: check passwords against HaveIBeenPwned API at registration
- Never store passwords — bcrypt hashing only (Supabase Auth handles this)

### Auth Provider
- **Supabase Auth** is the standard provider for all projects
- Do not build custom auth from scratch — use Supabase
- OAuth providers (Google, Apple) are acceptable additions but not replacements for email/password + 2FA
- JWT tokens: short expiry (1 hour access token, 7 day refresh token)
- Tokens stored in httpOnly cookies — never in localStorage

---

## 2. Database Standards (Supabase)

### Setup Checklist (every new project)
- [ ] Row Level Security (RLS) enabled on every table before any data is inserted
- [ ] Service role key stored only in server-side environment variables
- [ ] Anon key used on frontend — never the service role key
- [ ] Point-in-time recovery enabled
- [ ] Automated daily backups enabled and tested
- [ ] Database password: 32+ character random string, stored in 1Password
- [ ] SSL enforced for all connections
- [ ] Realtime disabled on tables containing PII unless explicitly required

### Data Classification
| Level | Examples | Requirements |
|-------|----------|--------------|
| Critical | Passwords, API keys, payment tokens | Encrypted, never logged, rotate regularly |
| Sensitive | Health data, SSN, financial records | Encrypted at rest, strict RLS, audit log |
| Private | Names, emails, addresses, phone | Encrypted at rest, RLS, no third-party sharing |
| Internal | Analytics, usage data | Standard protection, anonymize where possible |
| Public | Directory listings, blog content | Standard protection |

### Health Data (AestheticSelect)
- All procedure history, consultation notes, and medical information treated as PHI
- Stored in isolated Supabase tables with stricter RLS policies
- Never passed to third-party analytics or tracking services
- Never included in logs
- Deletion requests processed within 30 days, verified complete across all tables

### Financial Data
- **Never store card numbers, CVVs, or bank account numbers**
- Use Stripe exclusively for payment processing
- Store only Stripe customer IDs and payment method tokens
- Payment history stored as transaction records only (amount, date, status)

---

## 3. API Keys & Secrets Management

### Rules
- Every secret lives in environment variables — never hardcoded in source code
- `.env` files are always in `.gitignore` — verified before every commit
- `.env.example` documents all required variables with placeholder values
- Production secrets are different from development secrets — always
- Each project has its own set of secrets — never shared across projects

### Storage
- All production secrets stored in: Vercel Environment Variables (for deployed projects)
- All secrets also backed up in: 1Password shared vault (both partners have access)
- Local development: `.env.local` files only, never committed

### Rotation Schedule
| Secret Type | Rotation Frequency |
|-------------|-------------------|
| Database passwords | Every 90 days |
| API keys (third-party) | Every 180 days or on personnel change |
| JWT secrets | Every 90 days |
| Stripe keys | On suspected compromise only |
| Supabase service role key | On suspected compromise only |

### Emergency Rotation
If any secret is accidentally committed to Git or otherwise exposed:
1. Rotate the key immediately — do not wait
2. Assume it has been compromised
3. Check Git history and remove with `git filter-branch` or BFG Repo Cleaner
4. Audit logs for any unauthorized usage
5. Document the incident

---

## 4. GitHub Security

### Repository Settings (every repo)
- [ ] Branch protection on `main`: require pull request reviews, no direct pushes
- [ ] Secret scanning enabled
- [ ] Dependabot alerts enabled
- [ ] Dependabot security updates enabled (auto-merge patch updates)
- [ ] Code scanning enabled (GitHub Actions)
- [ ] No secrets in commit messages, PR descriptions, or issue comments

### Access Control
- Minimum permissions: contributors get write access to feature branches only
- No one gets admin access except the repository owner
- Remove access immediately when a contractor or partner relationship ends
- Review access list every 90 days

### Commit Standards
- Never commit: `.env`, `.env.local`, `*.pem`, `*.key`, `secrets.*`
- Run `git status` and review every file before committing
- Commit messages must not contain API keys, passwords, or sensitive data

---

## 5. Vercel Security Configuration

### Settings (every project deployment)
- [ ] HTTPS enforced — HTTP redirects to HTTPS automatically
- [ ] Environment variables set in Vercel dashboard (not in code)
- [ ] Preview deployments restricted — not publicly accessible
- [ ] Team access: minimum permissions per role
- [ ] Deploy hooks secured with secret tokens

### Headers (add to `next.config.js` for every project)
```javascript
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://*.supabase.co https://api.stripe.com",
      "frame-src https://js.stripe.com",
    ].join('; ')
  }
];
```

---

## 6. Frontend Security Standards

### Input Validation
- Validate ALL user inputs server-side — never trust the client
- Use Zod for schema validation on all API routes
- Sanitize HTML inputs to prevent XSS — use DOMPurify if rendering user HTML
- Parameterized queries only — never string-concatenate SQL

### Data Exposure
- Never return more data than needed from API endpoints
- Strip sensitive fields before sending responses
- Error messages must not expose system internals, stack traces, or data schema
- Rate limit all API endpoints — use Vercel Edge middleware or Supabase RLS

### Third-Party Scripts
- Audit every third-party script before adding
- Analytics (GA4): consent-aware loading only — never load before cookie acceptance
- No third-party scripts on pages that handle sensitive data (auth, payment, health)
- Subresource Integrity (SRI) on all externally hosted scripts

---

## 7. Stripe Integration Standards

### Implementation Rules
- Use Stripe.js loaded from `https://js.stripe.com` — never self-host
- Use Stripe Elements or Stripe Checkout — never build custom card input forms
- Webhook endpoints must verify Stripe signatures before processing
- Store only: Stripe customer ID, payment method ID, last 4 digits, card brand
- Never log full Stripe responses that contain card data

### Test vs Production
- Test keys in development only — never in production
- Production keys in Vercel environment variables only
- Separate Stripe accounts for test and production environments

---

## 8. Two-Factor Authentication Setup Guide

### For You and Your Partner — Initial Setup
1. Download Authy (recommended — multi-device, encrypted backup) or Google Authenticator
2. Enable 2FA on: GitHub, Vercel, Supabase, Stripe, your domain registrar, Cloudflare
3. Save backup codes for every service in 1Password immediately after enabling
4. Test 2FA login on each service before closing the setup session
5. Never store backup codes in email or unencrypted notes

### Services Requiring 2FA (complete this checklist)
- [ ] GitHub
- [ ] Vercel
- [ ] Supabase dashboard
- [ ] Stripe
- [ ] Cloudflare
- [ ] Domain registrar (Namecheap, GoDaddy, etc.)
- [ ] Google Workspace / Gmail (if used for business)
- [ ] 1Password (uses its own secret key system)
- [ ] Any future admin dashboard

---

## 9. Incident Response Runbook

### Severity Levels
| Level | Description | Response Time |
|-------|-------------|---------------|
| Critical | Active breach, data exposed, system compromised | Immediate |
| High | Suspected breach, credential exposure, service down | Within 1 hour |
| Medium | Vulnerability discovered, suspicious activity | Within 24 hours |
| Low | Security misconfiguration, non-sensitive exposure | Within 72 hours |

### Critical Incident Response (step by step)
1. **Contain** — take affected system offline immediately. Don't investigate first, contain first.
2. **Assess** — determine what data was accessed and for how long
3. **Rotate** — rotate all credentials that could be affected
4. **Document** — start an incident log immediately with timestamps
5. **Notify** — affected users within 72 hours (legal requirement in most jurisdictions)
6. **Remediate** — fix the root cause before bringing system back online
7. **Review** — post-incident review within 1 week, update standards accordingly

### Contact Protocol
- Both partners must be notified immediately for any Critical or High incident
- Do not post details of an active breach in Slack, email, or any cloud service
- Communicate via phone call for active incidents

---

## 10. Ongoing Security Practices

### Weekly
- Review Vercel deployment logs for anomalies
- Check Supabase logs for unusual query patterns
- Review GitHub security alerts

### Monthly
- Dependency audit: `npm audit` on all projects, update critical vulnerabilities
- Review user access lists — remove any stale accounts
- Test backup restoration on one project

### Quarterly
- Rotate database passwords and JWT secrets
- Review and update this document
- Run `/security-scan` with ECC's `--opus` flag for deep adversarial analysis
- Review third-party service access and API key usage

### On Personnel Change
- Immediately revoke all system access
- Rotate any secrets the person had access to
- Review Git history for any sensitive commits
- Update 1Password vault access

---

## 11. HIPAA-Adjacent Standards (AestheticSelect)

AestheticSelect handles information about aesthetic medical procedures. While the site itself
may not meet the legal definition of a covered entity under HIPAA, all health-related data
is treated with the same level of protection as PHI (Protected Health Information).

### Rules
- No health procedure data passed to Google Analytics or any third-party tracker
- No health data in error logs, application logs, or monitoring services
- Health data isolated in dedicated Supabase tables with strictest RLS policies
- Any contractor or integration that touches health data must sign a data handling agreement
- User deletion requests for health data: processed within 30 days, confirmed complete

---

*This document must be reviewed and updated every 90 days or after any security incident.
Last reviewed: March 2026*
