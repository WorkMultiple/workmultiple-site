# Website Agent Handover Prompt

> **What this is:** A ready-to-paste prompt for the next Claude Cowork session (or any AI agent) to build the WorkMultiple website. Copy everything below the line and paste it as your opening message.

---

## Prompt

You are helping me build the website for WorkMultiple, my done-for-you AI agency. This is Phase 1, Step 2 of our roadmap.

**Before doing anything else, read these two files in order:**

1. `WorkMultiple/PROJECT_CONTEXT.md` — This is the master context file for the entire business. It contains the brand overview, target audience, voice guidelines, roadmap, decisions made so far, and instructions for how you should operate as an agent on this project.

2. `WorkMultiple/01 - Brand/Brand Foundation.md` — This contains the brand name, positioning statement, tagline, voice principles, key messages, and competitive differentiation.

**After reading both files, here's your task:**

Build a single-page landing website for WorkMultiple. This is a launch-ready landing page — not a full multi-page site. The goal is to clearly communicate what WorkMultiple does, who it's for, and give visitors a way to get in touch.

### Requirements

**Page structure (top to bottom):**

1. **Navigation:** Logo (text-based for now: "WorkMultiple") + a single CTA button (e.g., "Get Started" or "Book a Call")
2. **Hero section:**
   - H1: "More done. Same team."
   - H2: Needs to complete the phrase "Multiply your workforce with AI agents that [X]." Refer to the open item in PROJECT_CONTEXT.md — present me with 2-3 refined options before building. The H2 should convey that agents handle complex work (not just busywork) and deliver tangible business outcomes.
   - CTA button
3. **Problem section:** 2-3 short pain points that resonate with SMBs (10-100 employees). Reference the target audience section of the context file.
4. **How it works:** 3-step process (simple, visual). Something like: Audit → Build → Run.
5. **What we deploy (services/use cases):** Brief descriptions of the types of agentic workflows we set up. Examples: operations automation, sales pipeline, marketing workflows, reporting, onboarding. Keep it outcome-focused per the voice principles.
6. **Differentiator section:** Why WorkMultiple is different. Key point: we use the same tools on ourselves. Our business IS the demo.
7. **Social proof / trust placeholder:** We don't have testimonials yet. Design a section that can hold them later. For now, consider a "Built on Anthropic's Claude" trust badge or a short founder credibility statement.
8. **CTA section:** Final call to action before the footer. Reinforce the tagline.
9. **Footer:** Logo, email, links placeholder, copyright.

**Design direction:**
- Clean, modern, professional. Not flashy or over-designed.
- Think: Stripe, Linear, Vercel — confident and minimal.
- Dark or light theme is fine, but it should feel premium, not generic.
- Mobile responsive.
- Use a system font stack or Google Fonts (Inter, DM Sans, or similar).
- No stock photography. Use whitespace, typography, and subtle geometric elements.

**Technical requirements:**
- Single HTML file with inline CSS and JS (no external dependencies beyond fonts).
- No framework needed — vanilla HTML/CSS/JS is fine.
- The CTA buttons should link to `mailto:leodotbiz@gmail.com` as a placeholder until we set up a booking tool.
- Must be responsive (mobile-first).
- Semantic HTML, accessible.

**Voice and copy:**
- Follow ALL voice principles from the Brand Foundation document.
- Lead with outcomes, not technology.
- Be direct. No fluff.
- Make AI feel normal, not intimidating.
- Do NOT use jargon like "agentic frameworks," "LLMs," "multi-step reasoning," etc.

**Before building, ask me:**
1. Your 2-3 refined options for the hero H2.
2. Whether I want dark or light theme.
3. Any other clarifying questions you have after reading the context files.

**When finished:**
- Save the HTML file to `WorkMultiple/02 - Website/index.html`
- Create the `02 - Website/` folder if it doesn't exist.
- Update `PROJECT_CONTEXT.md`: mark Step 2 as COMPLETE, add any new decisions to the log, and update open items.
- Show me the result and ask for feedback before considering it done.
