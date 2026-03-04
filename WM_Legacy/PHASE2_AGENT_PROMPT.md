# Phase 2: Pipeline — Agent Handover Prompt

> **What this is:** A ready-to-paste prompt for the next Claude Cowork session to begin Phase 2 of the WorkMultiple roadmap. Copy everything below the line and paste it as your opening message.

---

## Prompt

You are helping me build the pipeline infrastructure for WorkMultiple, my done-for-you AI agency. This is Phase 2 of our roadmap (Steps 4-6: Define ICP, set up outreach workflows, create lead scoring).

**Before doing anything else, read these files in this order:**

1. `WorkMultiple/00 - Context/AGENT_INSTRUCTIONS.md` — How to behave as an agent on this project. Start here.
2. `WorkMultiple/00 - Context/BUSINESS.md` — What WorkMultiple is, who it serves, competitive positioning.
3. `WorkMultiple/00 - Context/BRAND.md` — Voice, tone, messaging, visual direction, copy rules.
4. `WorkMultiple/00 - Context/ROADMAP.md` — Current status. Phase 1 is complete. You are starting Phase 2.
5. `WorkMultiple/00 - Context/DECISIONS.md` — Settled decisions. Do not revisit these.
6. `WorkMultiple/00 - Context/SKILLS_ROADMAP.md` — The skills plan for Phase 2. This is your build list.

**After reading all six files, here is your task:**

Build the Phase 2 skills one at a time, in this order:

### Skill 1: ICP Builder
- **Purpose:** Define the Ideal Customer Profile for WorkMultiple.
- **Output:** A structured ICP document saved to `WorkMultiple/03 - Sales/ICP.md` containing firmographics (industry, company size, revenue range, geography), psychographics (pain points, buying triggers, objections), where to find them (channels, communities, signals), and disqualification criteria.
- **Context it reads:** BUSINESS.md
- **Business area served:** Everything downstream. Lead lists, outreach, scoring, and proposals all depend on having a clear ICP.

### Skill 2: Lead List Builder
- **Purpose:** Given the ICP, use web research to compile a list of target companies and contacts that match the profile.
- **Output:** A structured prospect list saved to `WorkMultiple/03 - Sales/Lead List.md` (or .xlsx if appropriate).
- **Context it reads:** BUSINESS.md, the ICP document from Skill 1.
- **Business area served:** Pipeline. Feeds directly into outreach and scoring.

### Skill 3: Lead Scorer
- **Purpose:** Define scoring criteria based on the ICP, then provide a framework for evaluating prospects against those criteria.
- **Output:** A scoring rubric saved to `WorkMultiple/03 - Sales/Lead Scoring.md` with weighted criteria and scoring thresholds (hot, warm, cold).
- **Context it reads:** BUSINESS.md, the ICP document from Skill 1.
- **Business area served:** Prioritization. Tells us who to reach out to first.

### Skill 4: Outreach Drafter
- **Purpose:** Take a prospect (name, company, context) and draft personalized cold email or LinkedIn outreach. Must follow all voice and copy rules from BRAND.md.
- **Output:** Outreach templates saved to `WorkMultiple/03 - Sales/Outreach Templates.md` with at least 3 variants (cold email, LinkedIn connection request, follow-up email). Plus a demonstration using a real or example prospect.
- **Context it reads:** BRAND.md, BUSINESS.md, the ICP document.
- **Business area served:** Sales pipeline. First touchpoint with prospects.

### Rules for this session

1. **Build one skill at a time.** Present the rationale and plan for each skill before building it. Wait for my approval, questions, or revisions before proceeding.
2. **Ask clarifying questions first.** If anything about a skill's scope, format, or output is unclear, ask before building.
3. **Follow all voice and copy rules** from BRAND.md for any client-facing output (outreach templates especially). No em dashes in public-facing copy. No jargon. Lead with outcomes.
4. **Create the `03 - Sales/` folder** if it doesn't exist.
5. **When each skill is complete,** update `WorkMultiple/00 - Context/ROADMAP.md` (mark steps as complete, update open items) and `WorkMultiple/00 - Context/DECISIONS.md` (log any new decisions made during the session).
6. **When all four skills are complete,** mark Phase 2 Steps 4-6 as COMPLETE in the roadmap and update the current focus to Phase 3.
