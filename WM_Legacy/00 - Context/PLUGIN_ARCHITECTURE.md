# WorkMultiple - Plugin Architecture

> **How Cowork Plugins map to our service model.** This document defines what a client-facing agent looks like as a plugin, how we deliver it, and how our own internal operations serve as the proof of concept.

---

## What a Plugin Is (In Our Context)

A Cowork plugin is a self-contained package that gives Claude specific capabilities. For WorkMultiple, every "AI agent" we deploy for a client is a plugin. When we say "we built you an agent that handles weekly reporting," what the client actually receives is a plugin they install in their own Cowork instance.

This matters because it means agents are not black boxes. The client can see what the agent does, adjust how it works, and manage it without calling us. That is the core of our "no-code delivery" differentiator.

---

## Anatomy of a Client Plugin

Every plugin we build follows this structure:

```
client-plugin-name/
├── .claude-plugin/
│   └── plugin.json           # Plugin manifest (name, version, description)
├── skills/                   # One or more skills (the core workflows)
│   └── skill-name/
│       ├── SKILL.md          # Instructions for the workflow
│       └── references/       # Supporting docs, templates, examples
├── commands/                 # Optional slash commands for common actions
├── .mcp.json                 # Optional MCP server connections (CRM, email, etc.)
└── README.md                 # Plain-language guide for the client's team
```

### What Goes In Each Part

**Skills** are the heart of the plugin. Each skill is a repeatable workflow with clear instructions. A skill tells Claude what to do, what context to read, what tools to use, and what output to produce. Examples: "Generate Weekly Sales Report," "Process New Client Intake," "Draft Follow-Up Emails."

**Commands** are optional shortcuts. If the client's team will run a workflow frequently, a slash command gives them a quick trigger. Example: `/weekly-report` instead of typing "generate the weekly sales report." Not every plugin needs commands. Use them when the workflow is run on-demand rather than on a schedule.

**MCP Connections** link the plugin to the client's existing tools. If an agent needs to pull data from a CRM, read from Google Sheets, or post to Slack, the MCP config defines those connections. The client authenticates once during setup, and the agent handles the rest.

**References** are supporting files that skills can read on demand: templates, formatting guides, industry-specific context, example outputs. These keep the main SKILL.md lean while giving the agent access to detailed knowledge when it needs it.

**README** is for the client's team. Written in plain language. Explains what the plugin does, how to trigger each skill, and who to contact if something needs adjusting.

---

## How Plugins Map to The Buildout

The core offer ("The Buildout," see `SERVICE_PACKAGES.md`) delivers a plugin with 2 custom agents (skills). Additional agents can be added at $2,000 each. Here is how that translates to plugin structure:

### The Buildout ($4,500)

One plugin with 2 skills (the base). Founding partners receive 3 skills at the same $4,500 price. Additional skills added as add-ons.

```
client-contractor-agent/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── lead-follow-up/
│   │   ├── SKILL.md
│   │   └── references/
│   └── client-updates/
│       ├── SKILL.md
│       └── references/
├── commands/
│   └── send-update.md
└── README.md
```

**Example:** A custom home builder's operational agent. One skill handles lead follow-up and qualification. Another sends automated client updates at project milestones. Both share context through the client's workspace files.

**What the client gets:**
- One installed plugin with 2 functional skills
- A 60-minute team walkthrough
- Workflow Playbook (written documentation)
- 30 days of priority support

### Scaling Beyond 2 Agents

Most clients discover additional automatable workflows during the audit. Additional agents are $2,000 each and are added as skills to the same plugin.

```
contractor-operations-agent/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── lead-follow-up/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── client-updates/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── sub-coordination/
│   │   ├── SKILL.md
│   │   └── references/
│   └── change-order-tracking/
│       ├── SKILL.md
│       └── references/
├── commands/
│   ├── send-update.md
│   └── new-change-order.md
├── .mcp.json
└── README.md
```

**Example:** A custom home builder starts with The Buildout (lead follow-up + client updates), then adds sub coordination and change order tracking as add-on agents. Four skills total, one plugin, all scoped during the audit.

---

## How We Build a Client Plugin

### During the Workflow Audit (Included in The Buildout)

The audit is bundled into The Buildout, not sold separately. It identifies what to automate. The deliverable is a written roadmap that maps directly to plugin design:

1. Each workflow identified becomes a candidate skill
2. Each tool the client uses becomes a candidate MCP connection
3. Each repeating trigger (daily, weekly, on-demand) informs whether the skill needs a scheduled task or a slash command

The audit roadmap is the blueprint for the plugin. When the client approves the build, we already know the plugin structure.

### During the Agent Build

1. **Create the plugin scaffold.** Set up the directory structure, plugin.json manifest, and README skeleton.
2. **Build each skill.** Write the SKILL.md with clear instructions, quality standards, and output format. Add reference files for templates or domain-specific context.
3. **Configure MCP connections.** Set up integrations with the client's tools. Test authentication and data access.
4. **Add commands** if the workflow benefits from quick triggers.
5. **Test with real data.** Run each skill against actual data from the client's workflow. Verify outputs match expectations.
6. **Package as .plugin file.** Zip the directory and deliver for installation.

### Client Handoff

The handoff is straightforward because Cowork handles plugin installation natively:

1. **We deliver a .plugin file.** The client receives it via email or shared drive.
2. **They install it in Cowork.** One click. The plugin appears in their available skills.
3. **We do a walkthrough call.** 30-60 minutes. We demonstrate each skill, explain how to trigger it, and show them how to see what the agent is doing.
4. **We provide the README.** Written for their team, not for developers. Covers what each skill does, how to use it, and common questions.
5. **30 days of priority support.** We monitor, fix bugs, and make minor adjustments. Same-business-day response.

The client now owns the plugin. They can use it, inspect it, and (if they choose) modify it. This is the "no-code delivery" promise: they inherit agents they can manage, not code they can't touch.

---

## Retainer and Ongoing Maintenance

### How Maintenance Actually Works

Cowork plugins run locally on the client's machine. There is no remote access model where we log into their instance and monitor agents in real time. This is an important constraint that shapes how maintenance works in practice.

**Maintenance is reactive, not proactive.** The client uses the plugin, notices an issue (a skill produces unexpected output, a workflow breaks after their tools change, etc.), and reports it to us. We troubleshoot using our own Cowork instance with a copy of the plugin and sample data, build the fix, and deliver an updated .plugin file. We do not need a seat on the client's account to do this.

**The monthly check-in call is the proactive element.** During the call, we ask how things are going, identify any friction, and discuss whether the workflows need adjusting. This is where we catch issues the client might not think to report, like a skill that technically works but could work better.

As Cowork's collaboration features evolve (shared workspaces, remote access, etc.), this model may shift toward more proactive monitoring. For now, we design around the current reality.

### Retainer Tiers

**Optimization ($500/month):**
- Client reports issues, we fix and redeliver
- Up to 2 hours/month of modifications (adjusting skill instructions, updating templates, adding a reference file)
- Monthly check-in call (30 min)

**Growth ($1,000/month):**
- Everything in Optimization
- One new agent (skill) added to the plugin per quarter (included, $2,000 value)
- Optimization recommendations based on check-in feedback and reported usage
- Priority response time (same business day)

### Plugin Update Workflow

When we deliver a modified plugin:

1. We build and test the update on our own Cowork instance.
2. We deliver the updated .plugin file to the client (via email or shared drive).
3. The client installs the updated plugin. It replaces the previous version.
4. The client's workspace files (their data, context files, outputs) are not affected. Workspace files live in the client's folder, not inside the plugin. Only the skill instructions and plugin configuration change.
5. If the update changes how a skill works (new inputs, different output format), we include a brief change note and walk the client through it on the next check-in or via a quick call.

This means updates are low-friction. The client does not need to delete the old plugin first, reconfigure anything, or worry about losing their data.

---

## Our Own Operations as the Live Demo

WorkMultiple runs on the same plugin architecture we deploy for clients. Our own Cowork instance contains the plugins and skills we use daily to run the business. This is the "eat our own cooking" differentiator.

### Our Internal Plugin: WorkMultiple Sales Pipeline

Our sales pipeline operates as a set of installed skills that function exactly like a client plugin:

| Skill | What It Does |
|---|---|
| ICP Builder | Defines and refines our ideal customer profile for high-ticket specialized contractors |
| Lead List Builder | Researches and compiles qualified prospect lists matching the ICP |
| Lead Scorer | Evaluates prospects against the ICP with a weighted rubric |
| Outreach Drafter | Drafts personalized cold emails, LinkedIn messages, and follow-ups |

Together, these 4 skills form a complete sales pipeline: define the target, find prospects, score them, and draft outreach. This is the same architecture a client would receive through The Buildout (2 base skills + add-ons). The skills share context through our workspace files (ICP.md, Brand.md, Lead List.xlsx).

### How This Becomes the Demo

When a prospect asks "how does this work?", the answer is: "Let me show you. This is our own pipeline running on the same system we'd build for you."

The demo flow:

1. **Show the lead list.** "This is how we found your company. An AI agent researched prospects matching our ideal customer profile and compiled this list."
2. **Show the outreach.** "The message you received was drafted by an agent that reads our brand guide and personalizes based on your company's situation."
3. **Show the scoring.** "Before reaching out, we scored every lead on fit, signals, and engagement. You scored well because [specific reasons]."
4. **Connect to their situation.** "Now imagine this running for your sales team. Same idea, configured for your workflows and your CRM."

This is not a mock demo. It is the actual system that found and contacted the prospect. That credibility is the differentiator.

### Planned Internal Expansions

As we grow, our internal operations will expand to mirror what we offer clients:

| Planned Skill | Purpose | Target Phase |
|---|---|---|
| Call Prep | Pre-call briefings on prospects | Phase 4 (Sales & Delivery) |
| Proposal Builder | Generate tailored proposals from audit findings | Phase 4 |
| Demo Script | Customized demo walkthrough per prospect | Phase 4 |
| Client Onboarding | Kickoff materials and welcome sequences | Phase 4 |
| Content Drafter | Blog posts, social content, SEO | Phase 5 (Scale) |
| Daily Briefing | Automated morning summary (scheduled) | Phase 5 |
| Weekly Review | End-of-week pipeline recap (scheduled) | Phase 5 |

Each of these will be built as a skill we use ourselves first, then adapted into client-facing plugins when applicable.

---

## Plugin Design Principles

These apply to every plugin we build, internal or client-facing:

1. **One plugin per engagement scope.** The Buildout produces one plugin. Add-on agents are added as skills to the same plugin. Do not split related skills across separate plugins.

2. **Skills are self-contained.** Each skill should be able to run independently. It reads its own context, produces its own output, and does not depend on another skill having run first (though skills can share workspace files).

3. **README is for humans.** Written in plain language. No jargon. Explains what each skill does, how to trigger it, and what output to expect. The README is part of the deliverable, not an afterthought.

4. **Context lives in workspace files, not in the plugin.** Client-specific data (their ICP, their brand guide, their templates) lives in the client's workspace folder, not hardcoded into the plugin. This makes plugins portable and updatable without rebuilding.

5. **MCP connections are configured at install, not at build.** The plugin defines what connections it needs. The client authenticates during the walkthrough. Credentials never live in the plugin itself.

6. **Start lean, expand on retainer.** The initial build delivers the scoped workflows. Additional skills, commands, and integrations are added during the retainer as the client's needs evolve.

---

## Pricing Rules for Plugins

The Buildout ($4,500) delivers one plugin with 2 skills (3 skills for founding partners). Additional skills are $2,000 each.

**One plugin per engagement.** All skills for a single client go into one plugin. We do not create separate plugins for different workflows unless the client has a specific reason to keep them separate (rare).

**Typical engagement sizes:**
- The Buildout (2 skills): $4,500
- The Buildout + 1 add-on (3 skills): $6,500
- The Buildout + 2 add-ons (4 skills): $8,500
- Founding partner Buildout (3 skills included): $4,500
- Founding partner + 1 add-on (4 skills): $6,500

**No discounts.** The Buildout is already priced as a grand slam offer. The founding partner bonus (3rd agent included) is the only special offer, and it is at full price.

**Retainer clients get quarterly expansion.** Growth retainer ($1,000/month) includes one new skill per quarter, which is a better value path for clients who want to grow over time rather than building everything upfront.

---

## What This File Does Not Cover

- **Technical MCP setup details.** Handled per-client during the build phase.
- **Scheduled task configuration.** Will be defined when we build Phase 5 skills (Daily Briefing, Weekly Review).
- **Client-specific plugin examples.** Will be added to `05 - Clients/` after the first engagements.
