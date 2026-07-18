import React, { useState, useEffect } from 'react';
import './App.css';
import {
  ArrowRight,
  ArrowDown,
  Check,
  Plus,
  Minus,
  Menu,
  X,
  Sparkles,
  Coins,
  MessageCircle,
  MapPin,
  Quote,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Zap,
  ShieldCheck,
  BookOpen,
  Workflow,
  Cpu,
  Wrench,
} from 'lucide-react';

/* =========================================================================
   AI for Nigerian Businesses — Landing Page
   Frontend-only. All checkout CTAs point to placeholder Selar links marked
   with:  {/* SELAR LINK: replace with actual Selar checkout URL *\/}
   ========================================================================= */

// ---------- Placeholder links (easily editable) ----------
// {/* SELAR LINK: replace with actual Selar checkout URL */}
const SELAR_PROMPT_PACK = 'https://selar.co/YOUR-PROMPT-PACK-LINK';
// {/* SELAR LINK: replace with actual Selar checkout URL */}
const SELAR_PLAYBOOK = 'https://selar.co/YOUR-PLAYBOOK-LINK';
// {/* SELAR LINK: replace with actual Selar checkout URL */}
const SELAR_OPERATING_SYSTEM = 'https://selar.co/YOUR-OS-LINK';
// {/* IMPLEMENTATION LINKS: replace with actual mailto and WhatsApp */}
const CONSULT_EMAIL = 'mailto:hello@ainigerianbusiness.com?subject=Implementation%20Service%20Enquiry';
const CONSULT_WHATSAPP = 'https://wa.me/234XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20for%20the%20AI%20Implementation%20Service.';

// ---------- Nav links ----------
const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Why us', href: '#why' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

// ---------- Product data ----------
const PRODUCTS = [
  {
    id: 'prompt-pack',
    name: 'AI Prompt Pack',
    tag: 'Starter',
    price: '₦7,500',
    description:
      '500+ ready-to-use AI prompts for customer service, marketing, HR & finance — written for Nigerian businesses.',
    features: [
      '500+ prompts across 12 categories',
      'Customer service scripts in English & light Pidgin',
      'Marketing prompts for IG, WhatsApp & TikTok',
      'HR, admin & finance workflows',
      'Delivered as a PDF + Notion copy',
    ],
    cta: 'Get the Prompt Pack',
    href: SELAR_PROMPT_PACK,
    accentBar: 'bg-support-blue',
    accentText: 'text-[#1F6FB2]',
    icon: BookOpen,
  },
  {
    id: 'playbook',
    name: 'AI Business Playbook',
    tag: 'For growing teams',
    price: '₦25,000',
    description:
      'SOPs, prompt library, AI workflows & ready-to-use templates to run your business on autopilot.',
    features: [
      'Everything in the Prompt Pack',
      '25+ SOPs for daily operations',
      'AI workflow diagrams & checklists',
      'Fill-in templates (proposals, offers, JD)',
      'Free lifetime updates',
    ],
    cta: 'Get the Playbook',
    href: SELAR_PLAYBOOK,
    accentBar: 'bg-[#0F766E]',
    accentText: 'text-[#0F766E]',
    icon: Workflow,
  },
  {
    id: 'os',
    name: 'AI Business Operating System',
    tag: 'Most Popular',
    price: '₦75,000 – ₦150,000',
    description:
      'A full Notion workspace: CRM, HR, marketing planner, sales tracker & AI assistants — plug your business in.',
    features: [
      'Complete Notion workspace (10+ modules)',
      'CRM, HR, sales tracker & marketing planner',
      'Embedded AI assistants for each module',
      '90-day rollout roadmap',
      'Private community + monthly Q&A',
    ],
    cta: 'Get the Operating System',
    href: SELAR_OPERATING_SYSTEM,
    accentBar: 'bg-gold',
    accentText: 'text-gold',
    icon: Cpu,
    highlighted: true,
  },
  {
    id: 'implementation',
    name: 'Implementation Service',
    tag: 'Done-for-you',
    price: '₦300,000+',
    description:
      'Done-for-you setup, staff training, and full deployment — we install everything and train your team.',
    features: [
      'Custom AI workspace tailored to your business',
      '2-day on-site or remote staff training',
      'WhatsApp, CRM & tool integration',
      '30 days of post-launch support',
      'Quarterly optimisation reviews',
    ],
    cta: 'Book a Consultation',
    href: CONSULT_WHATSAPP,
    secondaryHref: CONSULT_EMAIL,
    accentBar: 'bg-[#C1440E]',
    accentText: 'text-[#C1440E]',
    icon: Wrench,
    consult: true,
  },
];

// ---------- Feature localisation grid ----------
const FEATURES = [
  {
    icon: Coins,
    title: 'Priced in Naira',
    body: 'No dollar sticker shock. Every product is priced for the Nigerian market — and payable on Selar with local cards & transfer.',
  },
  {
    icon: MapPin,
    title: 'Nigerian scenarios',
    body: 'Prompts that reference NEPA, POS agents, market days, church programmes, dispatch riders, and how customers actually message you.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp-first delivery',
    body: 'Every purchase is delivered straight to your WhatsApp with a downloadable pack, plus voice-note walkthroughs of the setup.',
  },
  {
    icon: Sparkles,
    title: 'Pidgin-toned options',
    body: 'Each prompt ships in two voices — polished English and a lightly Pidgin-flavoured version — so it sounds like your brand.',
  },
  {
    icon: ShieldCheck,
    title: 'Made by operators',
    body: 'Built by founders who run real Lagos, Abuja and Port Harcourt businesses — not by prompt influencers copying US content.',
  },
  {
    icon: Zap,
    title: 'Works with any AI',
    body: 'Prompts are tool-agnostic — ChatGPT, Claude, Gemini, Copilot. Bring whichever AI you already pay for.',
  },
];

// ---------- Testimonials (placeholder) ----------
const TESTIMONIALS = [
  {
    initials: 'AO',
    name: 'Adaeze Obi',
    role: 'Owner, Lagos boutique (fashion & accessories)',
    quote:
      'Within two weeks I stopped writing IG captions myself. My assistant uses the prompts and our DMs finally sound like us — not like a foreign brand.',
  },
  {
    initials: 'TA',
    name: 'Tunde Alabi',
    role: 'Founder, Ibadan logistics & haulage SME',
    quote:
      'The SOPs alone were worth the price. We handed the Playbook to a new ops lead and she was productive by day three.',
  },
  {
    initials: 'CE',
    name: 'Chinelo Eze',
    role: 'Admin lead, Port Harcourt medical practice',
    quote:
      'The Operating System replaced four different tools we were juggling. Our front desk now handles bookings and follow-ups on autopilot.',
  },
];

// ---------- FAQ ----------
const FAQS = [
  {
    q: 'Do I need to know how to code?',
    a: 'Not at all. Everything is copy-paste. If you can send a WhatsApp message, you can use these prompts and playbooks.',
  },
  {
    q: 'What AI tool do I use with these prompts?',
    a: 'Any of them. The prompts work with ChatGPT (free or Plus), Claude, Gemini and Microsoft Copilot. Use whichever one you already have access to.',
  },
  {
    q: 'How do I receive the pack after payment?',
    a: 'Instantly. Selar sends you a download link by email the moment payment clears, and we also DM you the pack on WhatsApp within a few hours.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Digital products are non-refundable once downloaded, but if the download link fails or the pack is incomplete, contact us on WhatsApp and we will make it right.',
  },
  {
    q: 'Is this useful for a church or non-profit?',
    a: 'Yes. The Playbook and Operating System include a dedicated section for churches, ministries and non-profits (rota planning, sermon assistants, donor comms).',
  },
  {
    q: 'Can you set everything up for me?',
    a: 'Yes — that is exactly what the Implementation Service is for. We install the workspace, train your team, and support you for 30 days after launch.',
  },
];

// =========================================================================

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(15,28,50,0.06)]'
          : 'bg-transparent'
      }`}
      data-testid="site-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] md:h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" data-testid="nav-logo">
          <span className="h-9 w-9 rounded-lg bg-navy flex items-center justify-center">
            <span className="font-serif text-gold text-lg font-black italic">A</span>
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-[15px] font-bold text-ink tracking-editorial">
              AI for Nigerian
            </span>
            <span className="font-serif text-[15px] font-bold text-ink -mt-1 tracking-editorial">
              Businesses
            </span>
          </span>
          <span className="sm:hidden font-serif text-base font-bold text-ink">AI · NG</span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-muted hover:text-navy transition-colors"
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* SELAR LINK: replace with actual Selar checkout URL */}
          <a
            href={SELAR_PROMPT_PACK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary items-center gap-2 bg-navy text-white hover:bg-navy-light px-5 py-2.5 rounded-full text-sm font-semibold shadow-card"
            data-testid="nav-cta-button"
          >
            Get the Prompt Pack
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
          <button
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-full border border-slate-200 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100" data-testid="nav-mobile-menu">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink font-medium"
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
            {/* SELAR LINK: replace with actual Selar checkout URL */}
            <a
              href={SELAR_PROMPT_PACK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gold text-white px-5 py-3 rounded-full font-semibold"
              data-testid="nav-mobile-cta"
            >
              Get the Prompt Pack — ₦7,500
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden hero-mask"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] text-muted mb-8 animate-fadeUp">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Built in Lagos · Priced in Naira
            </div>
            <h1
              className="font-serif font-black text-ink leading-[0.98] tracking-editorial text-[54px] sm:text-[64px] md:text-[84px] lg:text-[104px] animate-fadeUp"
              data-testid="hero-headline"
            >
              Your <span className="italic text-navy">Unfair</span>
              <br />
              <span className="underline-serif">Advantage.</span>
            </h1>
            <p
              className="mt-8 text-lg md:text-xl text-muted max-w-xl leading-relaxed animate-fadeUp"
              data-testid="hero-subheadline"
              style={{ animationDelay: '120ms' }}
            >
              500+ AI prompts, playbooks, and systems built for how Nigerian
              businesses actually work — from the market stall to the boardroom.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fadeUp"
              style={{ animationDelay: '220ms' }}
            >
              {/* SELAR LINK: replace with actual Selar checkout URL */}
              <a
                href={SELAR_PROMPT_PACK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center gap-3 bg-gold hover:bg-gold-hover text-white px-7 py-4 rounded-full text-[15px] font-semibold shadow-gold"
                data-testid="hero-primary-cta"
              >
                Get the Prompt Pack — ₦7,500
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-navy font-semibold text-[15px] border-b border-navy/30 hover:border-navy pb-0.5 transition-colors"
                data-testid="hero-secondary-link"
              >
                See all products
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            <div
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted animate-fadeUp"
              style={{ animationDelay: '320ms' }}
            >
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold" /> 500+ Prompts
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold" /> WhatsApp delivery
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold" /> Works with any AI
              </span>
            </div>
          </div>

          {/* Editorial hero card */}
          <div className="lg:col-span-5">
            <div
              className="relative animate-fadeUp"
              style={{ animationDelay: '180ms' }}
              data-testid="hero-visual-card"
            >
              <div className="absolute -top-6 -left-6 h-24 w-24 bg-gold/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-6 h-32 w-32 bg-navy/10 rounded-full blur-2xl" />

              <div className="relative rounded-3xl bg-navy text-white p-8 md:p-10 shadow-cardHover overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                     style={{
                       backgroundImage:
                         'radial-gradient(circle at 20% 30%, #B8860B 0%, transparent 40%), radial-gradient(circle at 80% 70%, #1F6FB2 0%, transparent 40%)',
                     }} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.24em] text-gold">
                      The Ladder
                    </span>
                    <span className="numeral text-3xl text-gold">04</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      { n: '01', name: 'Prompt Pack', p: '₦7,500' },
                      { n: '02', name: 'Playbook', p: '₦25,000' },
                      { n: '03', name: 'Operating System', p: '₦75k – 150k', pop: true },
                      { n: '04', name: 'Implementation', p: '₦300,000+' },
                    ].map((r) => (
                      <div
                        key={r.n}
                        className={`flex items-center justify-between border-b border-white/10 pb-3 ${
                          r.pop ? 'text-gold' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="numeral text-lg opacity-80">{r.n}</span>
                          <span className="font-serif text-lg">{r.name}</span>
                          {r.pop && (
                            <span className="text-[10px] uppercase tracking-widest bg-gold text-navy px-2 py-0.5 rounded-full font-bold">
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="font-medium text-sm">{r.p}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm text-white/60 font-serif italic">
                    Start on rung one. Climb when you are ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className="relative py-20 md:py-28 border-y border-slate-200/70 bg-cream/40"
      data-testid="problem-section"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <span className="text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
          The problem
        </span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.1] tracking-editorial text-ink">
          You are curious about AI. You just don&apos;t know how to make it
          <span className="italic text-navy"> work for a Nigerian business</span>.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-3xl">
          Every AI tutorial online is built for a coffee shop in Brooklyn or a SaaS
          startup in London. It doesn&apos;t know your customer types &quot;abeg&quot;, that
          your ops depend on POS agents, or that half your sales close on WhatsApp.
          That&apos;s the gap we close.
        </p>
      </div>
    </section>
  );
}

function ProductLadder() {
  return (
    <section id="products" className="py-24 md:py-32" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
            The product ladder
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-editorial leading-[1.05] text-ink">
            Four rungs. <span className="italic text-navy">Pick where you are.</span>
          </h2>
          <p className="mt-5 text-lg text-muted max-w-2xl">
            Start with a prompt pack for ₦7,500 or hand your whole operation to us.
            Every rung leads naturally to the next.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const Icon = product.icon;
  const isHighlight = product.highlighted;
  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white border card-hover ${
        isHighlight
          ? 'border-gold shadow-cardHover lg:scale-[1.04] lg:-translate-y-1 z-10'
          : 'border-slate-200 shadow-card hover:border-navy/20'
      }`}
      data-testid={`product-card-${product.id}`}
    >
      {isHighlight && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full shadow-gold"
          data-testid="product-badge-most-popular"
        >
          Most Popular
        </div>
      )}

      <div className="p-7 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className={`h-11 w-11 rounded-xl ${product.accentBar}/10 flex items-center justify-center`}
               style={{ backgroundColor: 'rgba(15,28,50,0.04)' }}>
            <Icon className={`w-5 h-5 ${product.accentText}`} strokeWidth={1.7} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-semibold">
            {product.tag}
          </span>
        </div>

        <h3 className="mt-6 font-serif text-2xl md:text-[26px] leading-tight text-ink tracking-editorial">
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed min-h-[68px]">
          {product.description}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-serif text-3xl font-bold text-navy">{product.price}</span>
        </div>

        <div className={`mt-5 h-[3px] w-10 rounded-full ${product.accentBar}`} />

        <ul className="mt-6 space-y-3 flex-1">
          {product.features.map((f, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] text-ink/85 leading-relaxed">
              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.accentText}`} strokeWidth={2.4} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {/* SELAR LINK: replace with actual Selar checkout URL */}
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary block text-center w-full px-5 py-3.5 rounded-full text-sm font-semibold ${
              isHighlight
                ? 'bg-gold text-white hover:bg-gold-hover shadow-gold'
                : 'bg-navy text-white hover:bg-navy-light'
            }`}
            data-testid={`product-cta-${product.id}`}
          >
            {product.cta}
          </a>
          {product.consult && (
            <a
              href={product.secondaryHref}
              className="mt-2 block text-center text-xs text-muted underline underline-offset-4 hover:text-navy"
              data-testid={`product-secondary-cta-${product.id}`}
            >
              or email us directly
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function WhyDifferent() {
  return (
    <section id="why" className="py-24 md:py-32 bg-white" data-testid="why-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
              Why this is different
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-editorial leading-[1.05] text-ink">
              Not another
              <br />
              <span className="italic text-navy">imported</span> AI course.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-md">
              Every rung is designed, priced and delivered around the reality of
              running a business in Lagos, Abuja, PH, Kano — or anywhere else in
              Nigeria.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureItem key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, body, index }) {
  const accent = ['bg-navy', 'bg-gold', 'bg-support-teal', 'bg-support-blue', 'bg-support-coral', 'bg-navy'][index % 6];
  return (
    <div
      className="p-6 rounded-2xl border border-slate-200 bg-white card-hover hover:border-navy/25 hover:shadow-card"
      data-testid={`feature-item-${index}`}
    >
      <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${accent}`}>
        <Icon className="w-5 h-5 text-white" strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-serif text-xl text-ink tracking-editorial">{title}</h3>
      <p className="mt-2 text-[14.5px] text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-cream/50 border-y border-slate-200/70"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
              Early reviews
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-editorial leading-[1.05] text-ink">
              Operators using it, <span className="italic text-navy">in their words.</span>
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Placeholder testimonials — to be replaced with real ones
          </span>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-card card-hover hover:shadow-cardHover"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-gold/30 rotate-180" strokeWidth={1.4} />
              <p className="font-serif text-[19px] leading-[1.5] text-ink italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-gold font-serif font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 md:py-32" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center">
          <span className="text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
            FAQ
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-editorial leading-[1.05] text-ink">
            Answers, <span className="italic text-navy">before you ask.</span>
          </h2>
        </div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((item, i) => {
            const isOpen = i === open;
            return (
              <div key={i} data-testid={`faq-item-${i}`}>
                <button
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-serif text-lg md:text-xl text-ink tracking-editorial pr-4">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center text-navy">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  data-testid={`faq-answer-${i}`}
                >
                  <p className="pb-6 pr-14 text-[15.5px] leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden" data-testid="final-cta-section">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(600px 300px at 10% 20%, rgba(184,134,11,0.5), transparent 60%), radial-gradient(700px 400px at 90% 80%, rgba(31,111,178,0.35), transparent 60%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.28em] text-gold font-semibold">
          Start here
        </span>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl tracking-editorial leading-[1.02] text-gold">
          Your <span className="italic text-white">unfair advantage</span>
          <br /> starts at <span className="whitespace-nowrap">₦7,500</span>.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          500+ prompts, tailored to Nigerian businesses. Instant delivery on WhatsApp.
          Works with the AI tool you already use.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* SELAR LINK: replace with actual Selar checkout URL */}
          <a
            href={SELAR_PROMPT_PACK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center gap-3 bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-full text-[15px] font-semibold shadow-gold"
            data-testid="final-cta-button"
          >
            Get the Prompt Pack — ₦7,500
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[15px] font-medium border-b border-white/20 hover:border-white/80 pb-0.5"
            data-testid="final-cta-secondary"
          >
            Explore all products
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="font-serif text-gold text-lg font-black italic">A</span>
            </span>
            <span className="font-serif text-white text-lg font-bold tracking-editorial">
              AI for Nigerian Businesses
            </span>
          </div>
          <p className="mt-5 text-sm max-w-sm leading-relaxed">
            The prompt packs, playbooks and systems Nigerian SMEs actually need — priced
            in Naira, delivered on WhatsApp, built by operators.
          </p>
        </div>

        <div>
          <h4 className="text-white text-xs uppercase tracking-[0.22em] font-semibold">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#top" className="hover:text-gold transition-colors" data-testid="footer-link-home">Home</a></li>
            <li><a href="#products" className="hover:text-gold transition-colors" data-testid="footer-link-products">Products</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors" data-testid="footer-link-faq">FAQ</a></li>
            <li>
              <a
                href={CONSULT_EMAIL}
                className="hover:text-gold transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs uppercase tracking-[0.22em] font-semibold">Follow</h4>
          <div className="mt-5 flex gap-3">
            {[
              { I: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
              { I: Twitter, label: 'Twitter / X', href: 'https://twitter.com/' },
              { I: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
              { I: Youtube, label: 'YouTube', href: 'https://youtube.com/' },
            ].map(({ I, label, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 hover:text-gold transition-colors"
                data-testid={`footer-social-${label.toLowerCase().replace(/[^a-z]/g, '-')}`}
              >
                <I className="w-4 h-4" strokeWidth={1.6} />
              </a>
            ))}
          </div>
          <div className="mt-6 text-xs">
            <a
              href={CONSULT_WHATSAPP}
              className="hover:text-gold transition-colors"
              data-testid="footer-whatsapp"
            >
              WhatsApp us →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} AI for Nigerian Businesses. All rights reserved.</span>
          <span className="font-serif italic">Made with care in Lagos.</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloatingButton() {
  return (
    <a
      href={CONSULT_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-[60] inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FB955] text-white pl-3 pr-4 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.35)] btn-primary"
      data-testid="whatsapp-floating-button"
    >
      <span className="h-9 w-9 rounded-full bg-white/15 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.24c-.29-.14-1.71-.85-1.98-.94-.27-.1-.46-.14-.66.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.5.07-.77.36-.27.29-1.02.99-1.02 2.42s1.05 2.81 1.19 3c.14.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.11.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.19-.55-.34zM16.02 5.33c-5.9 0-10.7 4.79-10.7 10.68 0 1.88.49 3.72 1.42 5.35L5.14 27l5.79-1.51a10.65 10.65 0 0 0 5.08 1.29h.01c5.89 0 10.68-4.79 10.68-10.68 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 0 0-7.55-3.22zm0 19.51h-.01c-1.61 0-3.19-.43-4.57-1.25l-.33-.19-3.44.9.92-3.35-.21-.34a8.87 8.87 0 0 1-1.36-4.72c0-4.9 3.99-8.88 8.9-8.88 2.38 0 4.61.93 6.29 2.6a8.85 8.85 0 0 1 2.61 6.29c0 4.9-3.99 8.88-8.9 8.88z" />
        </svg>
      </span>
      <span className="hidden sm:inline text-sm font-semibold pr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
}


function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased selection:bg-navy selection:text-gold">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <ProductLadder />
        <WhyDifferent />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
