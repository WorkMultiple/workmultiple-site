# WorkMultiple - Agent Instructions

> **Read this file first.** Every AI agent working on WorkMultiple should start here before taking any action.

---

## 1. How to Orient Yourself

Read the following files in this order before doing any work:

1. **This file** (`00 - Context/AGENT_INSTRUCTIONS.md`) - You're here. Behavioral rules and conventions.
2. **Business overview** (`00 - Context/BUSINESS.md`) - What WorkMultiple is, who it serves, how it's positioned.
3. **Brand reference** (`00 - Context/BRAND.md`) - Voice, tone, messaging, visual direction. Required reading before producing any client-facing content.
4. **Roadmap** (`00 - Context/ROADMAP.md`) - What's been done, what's in progress, what's next. Check this to understand the current phase.
5. **Decisions log** (`00 - Context/DECISIONS.md`) - Settled decisions. Do not revisit these unless Emilio explicitly asks.
6. **Skills roadmap** (`00 - Context/SKILLS_ROADMAP.md`) - Planned Cowork skills mapped to each phase. Reference when building new skills.
7. **Service packages** (`00 - Context/SERVICE_PACKAGES.md`) - Internal rate card and pricing logic. Required reading before any sales-related work (proposals, outreach, call prep).

You do not need to read every file for every task. Use judgment:
- Writing copy or building client-facing assets? Read BRAND.md thoroughly.
- Building internal tools or skills? BUSINESS.md and ROADMAP.md are enough.
- Unsure? Read all of them. It takes under a minute.

---

## 2. Behavioral Rules

1. **Ask before you build.** Emilio prefers clarifying questions before detailed work begins. When in doubt, ask.
2. **One step at a time.** Do not jump ahead in the roadmap without explicit instruction.
3. **Don't revisit settled decisions.** Check DECISIONS.md. If something has been decided, respect it unless Emilio reopens it.
4. **Update context when done.** After completing work, update ROADMAP.md (mark steps complete, add new open items) and DECISIONS.md (log any new decisions made during the session).
5. **Save to the right folder.** Deliverables go in the appropriate numbered subfolder (see folder structure below).

---

## 3. Voice and Tone

All client-facing content must follow the voice principles in BRAND.md. The short version:

- **Lead with outcomes, not technology.** We sell time back and output gained, not AI.
- **Be direct.** No fluff, no jargon. Respect people's time.
- **Make AI feel normal.** Practical tool, not a threat.
- **Show, don't tell.** We use our own tools. That's our credibility.

---

## 4. Emilio's Preferences

- Ask clarifying questions before giving detailed answers.
- Do not use em dashes in public-facing copy (website, marketing materials, outreach).
- The brand stands alone. WorkMultiple is the entity, not a founder-led personal brand.

---

## 5. Folder Structure

```
WorkMultiple/
├── 00 - Context/               <- You are here. Business context and agent instructions.
│   ├── AGENT_INSTRUCTIONS.md   <- Start here.
│   ├── BUSINESS.md             <- What we do, who we serve, positioning.
│   ├── BRAND.md                <- Voice, tone, messaging, visual direction.
│   ├── ROADMAP.md              <- Current status, phases, open items.
│   ├── DECISIONS.md            <- Log of all settled decisions.
│   ├── SKILLS_ROADMAP.md      <- Planned skills mapped to each phase.
│   └── SERVICE_PACKAGES.md    <- Internal rate card and pricing logic.
├── 01 - Brand/                 <- Brand foundation documents and assets.
├── 02 - Website/               <- Website files (index.html, assets).
├── 03 - Sales/                 <- Outreach templates, lead lists, scoring.
├── 04 - Operations/            <- Internal skills, scheduled tasks, SOPs.
└── 05 - Clients/               <- Client engagement templates, onboarding.
```

---

## 6. Legacy Files

`PROJECT_CONTEXT.md` in the root folder was the original all-in-one context file. Its contents have been split into the files in `00 - Context/`. The root file is kept for reference but the `00 - Context/` files are the authoritative source going forward.

`WEBSITE_AGENT_PROMPT.md` is a one-time handover prompt used to build the initial website. It can be referenced for design intent but is not an active working document.
