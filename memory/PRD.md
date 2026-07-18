# PRD — AI for Nigerian Businesses (Landing Page)

## Original Problem Statement
Build a modern, responsive, high-converting landing page for a digital product business called "AI for Nigerian Businesses". Sells a tiered ladder of AI education products for Nigerian SMEs, entrepreneurs, and churches. React + Tailwind, mobile-first. Frontend-only (confirmed by user 2026-01-18).

## Brand
- Primary: Navy `#1F3864`, Accent CTA: Gold `#B8860B`, backgrounds: white/light gray
- Supporting accents (sparse): blue `#1F6FB2`, coral `#C1440E`, teal `#0F766E`, amber `#B8860B`
- Typography: **Playfair Display** (headlines) + **Plus Jakarta Sans** (body)
- Editorial / premium feel — no stock people, no robot imagery

## Architecture
- Frontend: React 18 + Tailwind CSS via `react-scripts` 5 + `postcss.config.js`
- Backend: minimal FastAPI placeholder (`/api/health`) so supervisor stays happy; **no business logic**
- Fonts loaded via Google Fonts CDN in `public/index.html`
- Icons via `lucide-react`

## User Personas
1. Nigerian SME owner (retail, fashion, logistics, medical, restaurant)
2. Church / non-profit admin
3. Growing-team founder ready for SOPs & workspace
4. Enterprise buyer wanting done-for-you implementation

## What's Been Implemented (2026-01-18)
- Sticky top nav (logo, 4 links, primary CTA, mobile hamburger)
- Hero — "Your Unfair Advantage." headline, subheadline, primary CTA `Get the Prompt Pack — ₦7,500`, secondary "See all products ↓", editorial "Ladder" card
- Problem section (2-liner)
- Product ladder (4 pricing cards, "AI Business Operating System" highlighted as **Most Popular** with gold badge and scale)
- Why-this-is-different — 6-item feature grid with lucide icons (Naira pricing, Nigerian scenarios, WhatsApp-first delivery, Pidgin-toned options, Made by operators, Works with any AI)
- Testimonials — 3 clearly-labelled placeholder cards (SME-focused, Nigerian names & business types)
- FAQ accordion — 6 questions with smooth open/close
- Final CTA — full-width navy band with gold headline
- Footer — logo, tagline, Explore links, 4 social icons (aria-labelled), WhatsApp CTA, copyright
- SEO — proper `<title>`, meta description, OG tags, Twitter card, favicon
- All interactive elements carry `data-testid` attributes
- Fully responsive (mobile-first) — verified at 390px, 1440px

## Placeholder Links (documented in App.js as constants, easy to swap)
- `SELAR_PROMPT_PACK` → `https://selar.co/YOUR-PROMPT-PACK-LINK`
- `SELAR_PLAYBOOK` → `https://selar.co/YOUR-PLAYBOOK-LINK`
- `SELAR_OPERATING_SYSTEM` → `https://selar.co/YOUR-OS-LINK`
- `CONSULT_EMAIL` → `mailto:hello@ainigerianbusiness.com`
- `CONSULT_WHATSAPP` → `https://wa.me/234XXXXXXXXXX`

## Test Status
- Frontend testing agent (iteration_1.json): **100% pass, 0 console errors, 12 features verified**

## Backlog / P1 / P2
- P1: Swap in real Selar URLs once each product is live
- P1: Replace 3 placeholder testimonials with real customer quotes + optional photos/logos
- P2: Add lead-capture email form (free preview PDF) → would require backend + Resend/SendGrid integration
- P2: Add blog / articles hub for SEO traffic
- P2: Add analytics (GA4 / Plausible)
- P2: Consider light framer-motion entrance animations if design agent wants richer motion
- P2: Nigerian language toggle (Pidgin-first landing variant)

## Next Actions
1. Confirm design + copy with stakeholder
2. Swap placeholder Selar/WhatsApp/email links with real ones
3. Ship real testimonials
