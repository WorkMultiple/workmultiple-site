# Article 1: The Pivot Story - Outline

> **Working title:** "We Built an Entire AI Automation Agency Using AI. Here's Why We Stopped Before Signing a Single Client."
>
> **Alternate titles to test:**
> - "How We Used AI to Build a Full Business From Scratch (and Why We Pivoted Before Launch)"
> - "We Built an AI Agency With AI. Every ICP, Every Sales Process, Every Agent. Then We Pivoted."

---

## Voice and Constraints

- All pronouns: "we" (WorkMultiple as a team, not "I")
- No em dashes
- Brand voice: Capable. Clear. Grounded. (see BRAND.md)
- Full technical detail on plugin architecture, context files, skill design
- Tools mentioned throughout for natural affiliate link placement
- No playbook CTA (omitted until the playbook is ready)

---

## 1. The Hook

What we set out to build: a done-for-you AI automation agency. Not consulting. Not SaaS. We deploy AI agents that run operations for high-ticket contractors. The gap: contractor tools (Buildertrend, CoConstruct, ServiceTitan) handle scheduling and project management, but nobody is automating lead follow-up, client communication, sub coordination, or change order workflows.

The kicker: we built the entire business using the same AI tools we planned to sell. And we did it in about 15 hours across 5 working sessions.

---

## 2. The Timeline (narrative spine)

Use the five dates as milestones. Each section covers what was built, what tools were used, and what practical lesson came out of it.

### Day 1 (Feb 26): Brand, website, and business architecture

**What we built:**
- Named the company (WorkMultiple), defined positioning and voice ("Capable. Clear. Grounded."), wrote copy rules (no em dashes, no jargon, outcomes first)
- Built a full single-page website with a light theme, animations, and CTAs
- Set up the context architecture: modular files (BUSINESS.md, BRAND.md, ROADMAP.md, DECISIONS.md) that give AI agents persistent memory across sessions

**Practical takeaway: Context files are the most underrated AI productivity technique.** Without them, every session starts from zero. With them, AI works like a team member who remembers the full project history. Explain the structure: each file has a specific purpose, agents read only what they need, and a living decisions log prevents revisiting settled questions.

**Screenshot opportunity:** The context folder structure showing modular files.

**Tools:** Claude/Cowork, Netlify

### Day 2 (Feb 27): ICP, lead generation, and go-live infrastructure

**What we built:**
- Defined the ideal customer profile (initially broad: professional services, ecommerce, real estate, SaaS; 10-100 employees, $1M-$30M revenue)
- Built a lead scoring system (weighted 50/30/20 rubric: Fit 50pts, Signals 30pts, Engagement 20pts)
- Packaged everything as installable AI skills (ICP Builder, Lead List Builder, Lead Scorer, Outreach Drafter)
- Set up Google Workspace (emilio@workmultiple.com)
- Deployed the website to workmultiple.com via Netlify
- Configured Google Calendar booking (15-minute discovery calls via Google Meet)
- Built privacy and terms pages
- Added a favicon

**Practical takeaway: AI can handle infrastructure decisions.** Choosing a registrar, host, email platform, booking tool. Decisions that normally take hours of comparison research were resolved within the session because the AI can weigh the tradeoffs in real time.

**Tools:** Google Workspace, Netlify, Google Calendar

### Day 3 (Feb 28): Pricing and offer design

**What we built:**
- Designed the service packages and internal rate card
- Value-based pricing logic: for a contractor doing $2M/year, $4,500 is 0.2% of revenue. One recovered lead on a $50K project pays for the engagement 10x.
- Decided not to publish pricing on the website (site drives discovery calls; publishing prices either anchors low or scares off prospects before they understand the value)

**Practical takeaway: AI as a sparring partner for pricing.** Walking through ROI math, competitive positioning, and objection handling in a single conversation. The AI can pressure-test pricing from multiple angles (client perspective, competitive landscape, margin analysis) in minutes.

### Day 4 (Mar 2): Plugin architecture and sales assets

**What we built:**
- Designed the full plugin architecture: how every "AI agent" maps to a deliverable Cowork plugin (skills, MCP connections, commands, reference files, README)
- Generated an 18-prospect lead list with named contacts and emails
- Created outreach templates (cold email, LinkedIn connection, follow-up email, LinkedIn follow-up) with industry-specific variants for all 4 ICP segments
- Iterated on quality: removed agencies from the prospect list (competitors, not prospects), replaced departed contacts, enforced direct email requirements (no generic info@ addresses), retargeted from CEOs to directors/ops leads at larger companies

**Practical takeaway: The plugin architecture (full technical breakdown).** Explain the anatomy of a client-facing AI agent as a plugin. Directory structure, skill design (SKILL.md + references), MCP connections for tool integrations, commands for quick triggers, README for the client's team. How plugins are built, tested with real data, and handed off. The "eat your own cooking" demo strategy where the sales pipeline IS the live demo.

**Screenshot opportunity:** Plugin directory structure, skill architecture.

**Tools:** Claude/Cowork

### Day 5 (Mar 3): The big pivot

**What we built:**
- Narrowed the niche dramatically: from "SMBs 10-100 employees across 4 industries" to "high-ticket specialized contractors (custom home builders, high-end remodelers, commercial HVAC), 2-25 employees, $1M-$15M revenue"
- Restructured pricing into a single bundled offer ("The Buildout" at $4,500) with a value stack ($12,000 in standalone value)
- Designed the founding partner program: 3 agents at $4,500 (a bonus agent, not a discount), in exchange for testimonial, case study, and reference permission
- Built the two-call close sales system:
  - Call 1: 15-minute triage (qualification + pain discovery, no pricing)
  - Gap: deliver a customized before/after workflow diagram
  - Call 2: 45-minute Blueprint & Close (present solution, value anchor, pitch, close)
- Replaced the 14-day refund guarantee with a scope-of-work completion guarantee ("We iterate until it runs exactly as designed")
- SMS-first follow-up strategy (contractors live on phones, not laptops)
- Then stopped.

**Why we stopped:**
- Every engagement was fully custom (opposite of build-once-sell-many)
- The sales process required heavy outbound and two-call closes
- Contractor tools lacked the MCP connectors needed for seamless integration
- Client management didn't fit how we work best
- We are marketers and builders, not salespeople
- The model was good. The fit was wrong.

---

## 3. What We Learned

Consolidated practical takeaways:

1. **Context files are the foundation of any serious AI workflow.** Without persistent memory, every session is a cold start. With modular context files, AI agents work like team members who remember the full project history.

2. **AI can build a complete business infrastructure, but the business model still has to fit the founder.** The tools don't care what you build. The question is whether you want to run what you build.

3. **Building in a niche without existing AI tooling is a double-edged sword.** Big gap = big opportunity, but also missing integrations and connectors that would make delivery faster.

4. **Value-based pricing works when you can quantify the ROI in one sentence.** "One recovered lead pays for the engagement" is more compelling than any feature list.

5. **The iterative process matters.** Our ICP, pricing, guarantee, and sales process all evolved significantly across those 5 sessions. Settling on the first version of anything would have been a mistake. The decisions log captured every change and prevented backtracking.

---

## 4. What Came Next

Brief, forward-looking. All the work became source material for what WorkMultiple is now. None of it was wasted. The depth of research, the systems, the architecture... it all became the foundation for what we do today: practical AI guides and playbooks for business owners who want results, not theory.

End on the idea that sometimes the best move is recognizing when the build itself is the product.

---

## 5. Tools We Used

Consolidated list with brief notes on each tool and why it was chosen. Natural affiliate link placement.

- **Claude / Cowork** - Primary AI tool for everything: research, writing, architecture, coding, decision-making
- **Netlify** - Hosting and serverless functions. Free tier. Deployed via GitHub integration.
- **Google Workspace** - Professional email, calendar, video calls, booking
- **Astro** - Static site generator (chosen during the later site rebuild for content collections and SEO)
- **Beehiiv** - Email/newsletter platform (chosen later for simplicity and cost at low volume)
- Others as they come up in the draft

---

## Screenshot Opportunities

These are places where a screenshot would strengthen the article. Emilio will capture these during the writing process.

1. The context folder structure (modular files)
2. The do/don't table from the brand guide
3. Plugin directory structure
4. Lead scoring rubric or output
5. Before/after workflow diagram concept
6. The skills in the Cowork instance (ICP Builder, Lead List Builder, etc.)
7. The website at various stages (original light theme vs. current dark theme, if relevant)

---

## SEO Notes (for agent to handle during formatting)

- **Primary keyword target:** TBD (this article is authority/credibility content, not keyword-driven, but we should still optimize for discoverable long-tail terms)
- **Schema markup:** Article schema with author, datePublished, description
- **Meta description:** Should emphasize the "15 hours / 5 sessions" angle and the practical takeaways
- **Internal links:** Link to future articles as they're published (tool comparisons, tutorials)
- **External links:** Link to tools mentioned (affiliate links where available)
- **Open Graph / Twitter Card:** Craft a compelling social preview. The title is strong for sharing.
