# WorkMultiple — Project Context File

> **Purpose:** This is the single source of truth for the WorkMultiple business. Any AI agent, collaborator, or future session should read this file first before taking action. It contains the full business context, current state, decisions made, open items, and the roadmap from here to launch.
>
> **Last updated:** 2026-02-26 (website build session)
> **Owner:** Emilio (leodotbiz@gmail.com)

---

## 1. Business Overview

**Company Name:** WorkMultiple
**Type:** Done-for-you AI agency
**Domain:** workmultiple.com (purchased)
**Tagline:** More done. Same team.
**Secondary tagline:** Multiply your workforce. (for contextual use on site)

**What we do:** We deploy AI agents that handle complex, repeatable work for small and mid-size businesses — so they can grow without growing headcount. We audit workflows, build the agents, and maintain them. This is not consulting. We do the work.

**What we don't do:** We don't hand clients a strategy deck and walk away. We don't sell software licenses. We don't do one-off chatbot builds.

**Underlying platform:** Anthropic's Claude Cowork (and the broader Claude ecosystem). WorkMultiple uses Cowork internally to run its own operations AND as the delivery mechanism for client engagements. The founder's personal Cowork instance doubles as a live demo.

---

## 2. Founder

**Name:** Emilio
**Email:** leodotbiz@gmail.com
**Background:** Filipino heritage. Bringing agency sensibility to AI deployment.
**Role in brand:** Behind the scenes. WorkMultiple is the entity — the brand stands alone and does not revolve around Emilio's personal brand.

---

## 3. Target Audience

**Primary:** SMBs with 10–100 employees. Specifically founders, ops leads, and office managers who are:
- Stretched thin by work that could be automated
- Unable to hire fast enough to keep up with growth
- Aware that AI matters but unsure where to start or how to implement

**Secondary:** Growth-stage startups and lean teams that want to operate like a company twice their size.

**What these people care about:** Results, speed, cost savings, simplicity. They do NOT care about the underlying technology — they care about what it does for them.

---

## 4. Brand Identity

### Voice: Capable. Clear. Grounded.

**We sound like:** A sharp operator who gets things done. A trusted contractor you'd rehire. Someone who explains AI without jargon. Confident, not arrogant.

**We don't sound like:** A futurist giving a TED talk. A SaaS company selling seats. A hype machine promising the singularity. Salesy or desperate.

### Voice Principles

1. **Lead with the outcome, not the technology.** We don't sell AI. We sell time back, output gained, and headcount saved.
2. **Be direct. Respect people's time.** Say what we do, what it costs, and what they'll get.
3. **Make AI feel normal, not intimidating.** Practical tool, not a threat.
4. **Show, don't just tell.** We use our own tools to run our own business. Every workflow we deploy for a client, we've tested on ourselves first.

### Logo
TBD. Considering a slash treatment (Work/Multiple) but this is a design decision, not finalized. The official brand name is one word: **WorkMultiple**.

### Visual Direction
Light theme, clean and minimal. Inter font. Inspired by Stripe/Linear/Vercel aesthetic. No stock photography. Whitespace, typography, and subtle geometric elements. Defined during website build (Phase 1, Step 2).

---

## 5. Key Messages

**Elevator pitch:**
"WorkMultiple is a done-for-you AI agency. We come in, identify the workflows eating your team's time, and deploy AI agents that handle them — like hiring five people overnight without the overhead."

**Cold outreach:**
"Your team is spending hours on work that an AI agent could handle in minutes. We build those agents for you — and they start running in weeks, not months."

**Website hero:**
- H1: "More done. Same team."
- H2: "Multiply your workforce with AI agents that actually run your operations, so your team can focus on growth."

---

## 6. Competitive Positioning

| Typical AI agency | WorkMultiple |
|---|---|
| "We build custom AI solutions" | "We multiply your team's output" |
| "Strategy + implementation" | "We deploy agents that run your operations" |
| "Let's explore the possibilities" | "Here's what we'll automate and when" |
| Vague case studies | Live demos using our own Cowork instance |

**Key differentiator:** We eat our own cooking. Our own business (lead sourcing, marketing automation, sales outreach, scheduling, demos) runs on the same agentic workflows we deploy for clients. Prospects can see it working in real time.

---

## 7. Roadmap: Now to Launch

### Phase 1: Foundation (COMPLETE)
| Step | Status | Notes |
|---|---|---|
| 1. Define brand (name, positioning, voice) | COMPLETE | See `01 - Brand/Brand Foundation.md` |
| 2. Build website (landing page minimum) | COMPLETE | See `02 - Website/index.html`. Light theme, single-page landing. |
| 3. Set up Cowork memory and skills | COMPLETE | Context files in `00 - Context/`. Skills roadmap in `SKILLS_ROADMAP.md`. |

### Phase 2: Pipeline
| Step | Status | Notes |
|---|---|---|
| 4. Define ICP and build lead lists | NOT STARTED | |
| 5. Set up outreach workflows | NOT STARTED | Email sequences, LinkedIn |
| 6. Create lead scoring system | NOT STARTED | |

### Phase 3: Sales & Delivery
| Step | Status | Notes |
|---|---|---|
| 7. Build demo flow using own Cowork | NOT STARTED | The Cowork instance IS the demo |
| 8. Create proposal/deck templates as skills | NOT STARTED | |
| 9. Design repeatable client onboarding process | NOT STARTED | |

### Phase 4: Scale
| Step | Status | Notes |
|---|---|---|
| 10. Marketing automation (content, SEO, social) | NOT STARTED | |
| 11. Scheduled tasks (daily briefings, pipeline reviews) | NOT STARTED | |
| 12. Refine and package skills into reusable playbooks | NOT STARTED | |

---

## 8. Project Folder Structure

```
WorkMultiple/
├── PROJECT_CONTEXT.md          ← You are here. Read this first.
├── WEBSITE_AGENT_PROMPT.md     ← Handover prompt for the website agent.
├── 01 - Brand/
│   └── Brand Foundation.md     ← Brand name, voice, positioning, messaging.
├── 02 - Website/
│   └── index.html              ← Landing page (single-file, inline CSS/JS).
├── 03 - Sales/                 ← (to be created) Outreach templates, lead lists, scoring.
├── 04 - Operations/            ← (to be created) Internal skills, scheduled tasks, SOPs.
└── 05 - Clients/               ← (to be created) Client engagement templates, onboarding.
```

---

## 9. Decisions Log

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
| 2026-02-26 | Website v1 complete | Single-page landing. CTA links to mailto as placeholder. |

---

## 10. Open Items

- [x] ~~Finalize website hero H2 copy~~ (DONE: "...actually run your operations, so your team can focus on growth.")
- [x] ~~Build website (Phase 1, Step 2)~~ (DONE: `02 - Website/index.html`)
- [ ] Logo and visual identity (colors, typography, imagery direction)
- [ ] Define service packages and pricing
- [ ] Set up booking tool to replace mailto CTA links
- [x] ~~Set up Cowork skills and memory for internal operations (Phase 1, Step 3)~~ (DONE: context files in `00 - Context/`, skills roadmap in `SKILLS_ROADMAP.md`)
- [ ] Build Phase 2 skills (ICP Builder, Lead List Builder, Lead Scorer, Outreach Drafter)

---

## 11. Agent Instructions

**If you are an AI agent reading this file:**

1. Read this file completely before taking any action.
2. Check the roadmap (Section 7) to understand what phase we're in and what's been completed.
3. Check the decisions log (Section 9) — do not revisit settled decisions unless Emilio explicitly asks.
4. Check open items (Section 10) for current priorities.
5. Read the Brand Foundation file (`01 - Brand/Brand Foundation.md`) before producing any client-facing content.
6. Follow the voice principles in Section 4. All content should sound capable, clear, and grounded.
7. When your work is complete, update this context file with any new decisions, completed steps, or new open items.
8. Save all deliverables to the appropriate numbered subfolder.
9. Emilio prefers to be asked clarifying questions before detailed work begins.
10. Take things one step at a time — do not jump ahead in the roadmap without explicit instruction.
