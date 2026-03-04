# WorkMultiple - Decisions Log

> **These decisions are settled.** Do not revisit them unless Emilio explicitly asks to reopen one. When a new decision is made during a session, add it to the bottom of this table.

---

| Date | Decision | Rationale |
|---|---|---|
| 2026-02-26 | Brand name: WorkMultiple | Descriptive, immediately communicates value. Available as .com. |
| 2026-02-26 | Tagline: "More done. Same team." | Direct, outcome-focused, speaks to SMB pain. |
| 2026-02-26 | Positioning: done-for-you agency | Not consulting, not SaaS. We build and maintain. |
| 2026-02-26 | Target: SMBs (10-100 employees) | Practical buyers, real pain, reachable market. |
| 2026-02-26 | Brand stands alone (not founder-led) | Scalable, not personality-dependent. |
| 2026-02-26 | Logo slash treatment TBD | Design decision deferred to visual identity phase. |
| 2026-02-26 | Hero H2 finalized | "...actually run your operations, so your team can focus on growth." Selected over 2 other options. |
| 2026-02-26 | Website theme: light | Clean, approachable Stripe-like aesthetic. Inter font. |
| 2026-02-26 | Website v1 complete | Single-page landing. CTA links to mailto as placeholder. Coral accent (#e9594a), fade-up animations added by Emilio. |
| 2026-02-26 | Context architecture: modular files in 00 - Context/ | Split PROJECT_CONTEXT.md into focused files (Agent Instructions, Brand, Business, Roadmap, Decisions) so agents can pull only what they need. |
| 2026-02-26 | Skills roadmap defined | 12 skills mapped across 4 phases. Phase 2 skills (Pipeline) to be built first. See SKILLS_ROADMAP.md. |
| 2026-02-26 | Phase 1: Foundation complete | Brand, website, context architecture, and skills roadmap all done. Ready for Phase 2. |
| 2026-02-27 | ICP: 4 best-fit industries | Professional services, e-commerce/DTC, real estate, growth-stage SaaS. Selected based on repeatable workflows, team size fit, and automation potential. |
| 2026-02-27 | ICP: US-primary geography | Secondary markets: Canada, UK, Australia. English-speaking markets with similar business culture. |
| 2026-02-27 | ICP: Sweet spot 15-50 employees, $1M-$30M revenue | Large enough for real operational pain, small enough that they can't build an internal AI team. |
| 2026-02-27 | Lead scoring: weighted 50/30/20 rubric | Fit (50 pts), Signals (30 pts), Engagement (20 pts). Thresholds: Hot 70+, Warm 45-69, Cool 25-44, Cold 0-24. |
| 2026-02-27 | Skills delivered as installable .skill files | All Phase 2 skills packaged as Cowork-installable .skill files rather than static documents only. |
| 2026-02-27 | Phase 2: Pipeline complete | ICP Builder, Lead List Builder, Lead Scorer, and Outreach Drafter skills all built and installed. ICP document created. Ready for Phase 3. |
| 2026-02-27 | Google Workspace for business suite | Gives professional email, Calendar, Meet, and Drive. Email: emilio@workmultiple.com. |
| 2026-02-27 | Netlify for website hosting | Free tier. Deployed via drag-and-drop. workmultiple.com is live and DNS confirmed. |
| 2026-02-27 | Google Calendar for booking | "WorkMultiple Discovery Call," 15 minutes, Google Meet. Booking link: https://calendar.app.google/j8mk2poAtLT5D6TUA. Form collects: name, email, website, and "What's taking your team the most time right now?" |
| 2026-02-27 | No skill needed for Privacy and Terms pages | One-time document creation, not a repeatable workflow. Build directly as HTML pages matching the site design. |
| 2026-02-27 | Privacy Policy: plain language, covers actual data collected | Covers Google Calendar booking form fields (name, email, website, custom question), Google Meet for calls, Google Workspace for email, Netlify for hosting, Google Analytics for site traffic. No legalese. |
| 2026-02-27 | Terms of Service: general, no pricing specifics | Appropriate for audit/build/maintain service model. IP transfers to client on payment. 14-day default termination notice. Pricing left to per-engagement agreements since packages not yet defined. |
| 2026-02-27 | Testimonials placeholder removed, not replaced | Trust section stands on its own with the "Built on Anthropic's Claude" badge and the founding quote. No gap. Testimonials will be added after first client engagements. |
| 2026-02-27 | SVG favicon: W in coral on white | Simple, brand-consistent. SVG format for sharpness at all sizes. Referenced in all three HTML pages. |
| 2026-02-27 | Phase 3 pre-launch cleanup complete | All four cleanup items done (Privacy, Terms, testimonials placeholder, favicon). Only the logo icon mark remains as optional. Site ready for re-upload to Netlify and then Phase 4. |
| 2026-02-28 | Pricing not published on website | Site drives discovery calls. Pricing discussed during or after the call. Publishing prices either anchors low or scares off prospects before they understand the value. |
| 2026-02-28 | Service packages defined (internal rate card) | Four-stage engagement: Free Discovery Call, Workflow Audit ($1,500-$2,500), Agent Build ($2,500-$6,000+ per agent), Optional Retainer ($750-$1,500/month). Audit fee credited toward build. Bundle discount of 15% for 3+ agents. See `00 - Context/SERVICE_PACKAGES.md`. |
| 2026-02-28 | Value-based pricing, middle-of-market positioning | Priced competitively against agencies charging $10K-$50K. Speed and no-code delivery (Cowork plugins/skills) are the key differentiators. Clients inherit agents they can manage, not code they can't touch. |
| 2026-02-28 | CTA text updated: "Book a Free Discovery Call" | Replaced "Book a Free Audit" on both homepage CTAs. The audit is now a paid service ($1,500+). The discovery call is what's free. "Discovery" signals exploratory, non-salesy intent matching the brand voice. |
| 2026-03-02 | Plugin architecture defined | Every client agent is a Cowork plugin. Standard ($2,500) = 1 plugin, 1 skill. Advanced ($4,500) = 1 plugin, 2-3 connected skills. Custom ($6,000+) = 1 plugin, up to 4 skills (additional skills $1,000-$1,500 each). See `PLUGIN_ARCHITECTURE.md`. |
| 2026-03-02 | Custom tier scope limits set | $6,000 base covers up to 4 skills. Scope locked during audit. Additional skills priced incrementally. No open-ended builds. |
| 2026-03-02 | Bundle discount: separate builds only | 15% discount applies to 3+ separate agent builds (Standard/Advanced), not to a single Custom engagement with multiple skills. Clarified in both `PLUGIN_ARCHITECTURE.md` and `SERVICE_PACKAGES.md`. |
| 2026-03-02 | Maintenance model: reactive, not remote monitoring | No remote access to client Cowork instances. Client reports issues, we fix and redeliver .plugin files. Monthly check-in call is the proactive element. Model may evolve as Cowork adds collaboration features. |
| 2026-03-02 | Plugin updates replace in-place, no data loss | Updated .plugin files replace previous version on install. Client workspace files (data, outputs) are unaffected because context lives in the workspace, not the plugin. |
| 2026-03-02 | Discovery call: qualify and book, not demo | 15-minute call focused on questions and listening. Demo only if asked, kept under 5 minutes. Full tailored demo saved for audit delivery call. |
| 2026-03-02 | Audit is an engagement, not a single call | Three parts: kickoff call (30-60 min, client walks through workflows), offline analysis (2-3 business days), delivery call (30 min, present roadmap and scope). Added to `SERVICE_PACKAGES.md`. |
| 2026-03-02 | Initial lead list generated (18 prospects) | 5 professional services, 4 ecommerce/DTC, 4 real estate/PM, 5 SaaS. Saved to `03 - Sales/Lead List.xlsx`. All prospects match ICP criteria. |
| 2026-03-02 | Outreach templates created | 4 template types (cold email, LinkedIn connection, follow-up email, LinkedIn follow-up) with industry-specific variants for all 4 ICP segments. Saved to `03 - Sales/Outreach Templates.md`. |
| 2026-03-02 | No agencies as prospects | Marketing, creative, and dev agencies are competitors, not prospects. Service businesses OK if specialized (e.g., accounting firms, law firms). |
| 2026-03-02 | Lead list quality standards | Every lead must have: named contact, contact email, verified current role (no departed founders), company size verified against LinkedIn. |
| 2026-03-02 | Lead list v2 rebuilt (18 prospects) | Removed 5 disqualified leads (Black Propeller, Funnel Boost Media, Single Grain as agencies; Tri-Merit too large; DEUX founder departed). Added 5 replacements (Reconciled, Ignite Spot, MUD\WTR, FlavorCloud, Westaway). All 18 leads now have contact name and email. Saved to `03 - Sales/Lead List v2.xlsx`. |
| 2026-03-02 | No SaaS companies as prospects | Growth-stage SaaS removed from ICP. These companies are likely already using technical automation methods or aware of available tools. They're not the right buyer for done-for-you AI agents. |
| 2026-03-02 | No generic emails in lead lists | Emails like info@, hello@, support@ are unlikely to reach the intended contact. Every lead must have a direct or role-specific email, or LinkedIn should be used as the primary outreach channel instead. |
| 2026-03-02 | Contact targeting: directors and ops leaders, not CEOs | For companies larger than ~10 people, target directors, COOs, senior managers, or ops leads rather than CEOs/founders. These roles are less inundated, more likely to evaluate and champion an operational solution. CEOs/founders OK only at very small companies (<10 people). |
| 2026-03-02 | Lead list v2 still has issues | v2 lead list requires further revision: remove all 5 SaaS companies, replace generic emails with direct contacts or flag for LinkedIn-only outreach, retarget contacts from CEO/founder to director/ops level where company is >10 people. Lead list generation paused until these rules are incorporated into the Lead List Builder skill and ICP. |
| 2026-03-02 | Next session: add Cowork plugins one-by-one | Emilio wants to install plugins to his Claude Cowork instance individually in the next session. This is the priority before resuming lead generation or outreach. |
| 2026-03-03 | WM_Sales plugin created and delivered | First custom plugin (wm-sales) packaged with 4 skills: ICP Builder, Lead List Builder, Lead Scorer, Outreach Drafter. Differentiates custom WM plugins from default Anthropic plugins. Commands to be added one-by-one after installation. |
| 2026-03-03 | Niche: high-ticket specialized contractors | Custom home builders, high-end remodelers, commercial HVAC. Selected after competitive analysis showed this niche has the widest gap between operational pain and AI tool availability. Existing tools (Buildertrend, ServiceTitan) handle scheduling/PM but not workflow automation. Insurance, dental, law, accounting, and property management all have purpose-built AI tools already. |
| 2026-03-03 | Target: 2-25 employees, $1M-$15M revenue | Narrowed from 10-100 employees. Sweet spot 5-15. Small enough to lack internal tech capability, large enough to have real workflow pain and budget. |
| 2026-03-03 | Contact targeting by company size | 2-10 employees: target owner/founder. 10-25 employees: target office manager, project coordinator, or ops lead. |
| 2026-03-03 | Pricing restructured: "The Buildout" at $4,500 | Replaced tiered pricing (audit + build + retainer) with single bundled offer. Includes audit, 2 custom agents, deployment, team walkthrough, 30-day support, and workflow playbook. Stacked value: $12,000. Add-on agents: $2,000 each. |
| 2026-03-03 | Founding client rate: $2,500 for first 5 clients | In exchange for testimonial, case study, and reference permission. Real scarcity (limited spots). Price moves to $4,500 after 5 clients. |
| 2026-03-03 | Guarantee: informal 14-day satisfaction | Not published on website. Mentioned during discovery call: "If within the first two weeks you're not happy with the direction, full refund." Covers audit phase. Easy to honor, low abuse risk. Can strengthen later with track record. |
| 2026-03-03 | Audit bundled into The Buildout | No separate paid audit step. Audit is Phase 1 of The Buildout. Reduces friction for small business buyers. |
| 2026-03-03 | Retainer repositioned as "Optimization" | Renamed from Maintenance/Growth to Optimization ($500/mo) and Growth ($1,000/mo). Reduced from $750/$1,500 to match smaller target audience budget. |
| 2026-03-03 | Previous lead list v2 invalidated | All 18 prospects from the previous lead list are for the old ICP (professional services, ecommerce, real estate, SaaS). A new lead list targeting high-ticket contractors must be built from scratch. |
| 2026-03-03 | Future plugin roadmap: WM_Marketing, WM_Operations | After WM_Sales, Emilio plans to build WM_Marketing (content, campaigns, brand voice) and WM_Operations (internal ops, reporting, scheduling) as custom plugins. |
| 2026-03-03 | Guarantee: scope-of-work, not refund | Replaced 14-day satisfaction refund with a scope-of-work completion guarantee. We iterate until agents execute exactly as defined in the workflow playbook. 30-day support window is the boundary. Eliminates risk of losing work to refunds and prevents clients from receiving a completed product for free. |
| 2026-03-03 | Two-call close system | Call 1: 15-minute triage (qualification + pain discovery, no pricing). Gap: deliver customized before/after workflow diagram. Call 2: 45-minute Blueprint & Close (present solution, value anchor, pitch, close). Separates diagnosis from prescription. |
| 2026-03-03 | 50/50 payment split | 50% upfront (non-refundable) to lock in the engagement and begin audit/build. 50% due immediately following successful deployment and team walkthrough. |
| 2026-03-03 | Founding partner program: bonus agent at full price | Replaced $2,500 founding discount with 3 agents instead of 2 at $4,500. Keeps price anchored at real rate. Avoids cheapening the offer. Produces stronger case studies. Every founding testimonial validates the $4,500 price point. |
| 2026-03-03 | SMS-first follow-up between calls | Contractors live on phones, not laptops. Send workflow diagram via email, then immediately text to drive attention to it. One follow-up only if Call 2 not booked within 48 hours. No chasing. |
| 2026-03-03 | Reusable workflow diagram template | Instead of custom Loom videos per prospect (doesn't scale), use a before/after workflow diagram template customizable in 15-20 minutes per prospect. Sent between Call 1 and Call 2 as the trust-building asset. |
| 2026-03-03 | Cold pipeline nurture automation | Prospects who don't convert after the single follow-up go into a nurture list. Automated check-in at 30 or 60 days. Uses the same workflow logic as the revenue leak auditor tools we sell to clients. Our pipeline management is a live proof point. |
