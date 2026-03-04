# WorkMultiple - Skills Roadmap

> **Plan for all reusable Cowork skills.** Each skill is a repeatable workflow that agents can execute. Skills will be built phase by phase, starting with Phase 2. This file is a reference for planning and prioritization.

---

## Phase 1: Foundation

No skills required. This phase covered brand definition, website build, and context architecture.

---

## Phase 2: Pipeline

These skills generate and qualify leads. They build on each other sequentially: ICP feeds Lead List Builder feeds Lead Scorer feeds Outreach Drafter.

| Skill | What it does | Context it reads |
|---|---|---|
| ICP Builder | Takes the business context and researches/defines the Ideal Customer Profile. Outputs a structured ICP document with firmographics, pain points, buying triggers, and where to find prospects. | BUSINESS.md |
| Lead List Builder | Given an ICP, uses web research to compile a list of target companies and contacts that match the profile. Outputs a structured prospect list. | BUSINESS.md, ICP document |
| Outreach Drafter | Takes a prospect (name, company, context) and drafts a personalized cold email or LinkedIn message. Follows voice rules, leads with outcomes. | BRAND.md, BUSINESS.md |
| Lead Scorer | Defines scoring criteria based on the ICP, then evaluates a prospect against those criteria. Helps prioritize who to reach out to first. | BUSINESS.md, ICP document |

---

## Phase 3: Sales & Delivery

These skills close deals and onboard clients.

| Skill | What it does | Context it reads |
|---|---|---|
| Call Prep | Before a sales call, researches the prospect's company and generates a briefing: what they do, likely pain points, talking points, questions to ask, and which services to lead with. | BUSINESS.md, BRAND.md |
| Proposal Builder | Generates a tailored proposal for a specific prospect. Includes their problem, proposed solution (which agents to deploy), timeline, and pricing placeholder. | BRAND.md, BUSINESS.md |
| Demo Script | Creates a demo walkthrough script using the Cowork instance as the live demo. Tailored to the prospect's industry and pain points. | BUSINESS.md, BRAND.md |
| Client Onboarding | Generates onboarding materials for a new client: kickoff agenda, intake questionnaire, welcome email, and a project timeline template. | BRAND.md, BUSINESS.md |

---

## Phase 4: Scale

These skills run the business on autopilot. The scheduled tasks are the same kinds of automated workflows deployed for clients.

| Skill | What it does | Context it reads |
|---|---|---|
| Content Drafter | Drafts blog posts, social posts, and SEO content following brand voice. Takes a topic and audience, outputs ready-to-publish content. | BRAND.md, BUSINESS.md |
| Performance Report | Compiles marketing and sales metrics into a formatted briefing. Trends, what's working, what needs attention. | BUSINESS.md |
| Daily Briefing (scheduled) | Morning summary delivered automatically: pipeline status, tasks due, priorities for the day. | ROADMAP.md, BUSINESS.md |
| Weekly Review (scheduled) | End-of-week recap: new leads, outreach performance, deals in progress, open items. | ROADMAP.md, BUSINESS.md |

---

## Build Order

Skills will be built one at a time within each phase. The recommended order within Phase 2 is:

1. ICP Builder (everything else depends on having a defined ICP)
2. Lead List Builder (needs the ICP to target)
3. Lead Scorer (needs leads to score)
4. Outreach Drafter (needs scored leads to prioritize outreach)

Phase 3 and 4 skills will be planned in detail when those phases begin.
