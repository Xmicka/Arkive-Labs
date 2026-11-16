---
title: "How to Use AI to Write Standard Operating Procedures"
description: "Turn the know-how in your team's heads into clear, usable step-by-step procedures, using AI to do the drafting while people supply the facts and check the result."
date: 2026-11-25
category: AI at work
author: akesh
---

Every small business runs on routines that live in someone's head: how to process a refund, how to onboard a new client, how to close the month in the accounts, how to publish a new product on the website. When that person is on leave or leaves for good, the routine breaks.

Standard operating procedures, or SOPs, solve this by writing the routine down. The problem is that writing them is slow and dull, so it rarely happens. AI tools such as ChatGPT, Claude and Gemini are genuinely useful here: they are good at turning messy notes into clear, consistent steps. The facts still have to come from the people who do the work, and a person still has to check the result. This guide shows how to combine the two.

## Decide which procedures to write first

Do not try to document everything at once. Start with procedures that are:

- **done often**, so a clear process saves time every week
- **done rarely but important**, like year-end tasks, where people forget the steps between occasions
- **known by only one person**, which is a risk if they are unavailable
- **error-prone**, where mistakes cost money or upset customers
- **security or compliance related**, such as adding a new user, handling a data request or making payments

Pick three to five to start with. A short list you finish is better than a long list you abandon.

## Step 1: Capture how the task is really done

The AI cannot know how your business works. Before using it, capture the real process from the person who does it. A few easy ways:

- **Record a walkthrough.** Ask them to do the task while explaining each step out loud, recorded on a phone or through a screen recording. Many meeting and recording tools can produce a transcript.
- **Write rough notes.** Bullet points, in any order, with every step they can think of.
- **Collect existing material**: old emails explaining the process, checklists, screenshots and templates.

Ask them to include the parts that are easy to forget: where to find things, who needs to approve, what to do when something goes wrong, and any "always remember to" tips.

## Step 2: Remove sensitive details before you paste

Before putting notes or transcripts into an AI tool, remove anything that should not be there:

- passwords, API keys and account numbers
- customer names, contact details and other personal data
- confidential pricing, contract terms or financial details

Replace them with placeholders, such as "[customer name]" or "[bank portal]". Use the AI accounts your business has approved, ideally business plans whose terms address how your data is handled. If your business does not yet have rules for this, our guide to [the PDPA for small businesses](/blog/sri-lanka-personal-data-protection-act-guide-for-small-businesses) explains why personal data needs care. This is general information, not legal advice.

## Step 3: Use a structured prompt

A clear prompt gives you a consistent format across every procedure. Here is one you can adapt:

```
You are helping a small business write a standard operating procedure.

Using the notes below, write an SOP with these sections:
1. Purpose: one or two sentences on what this procedure is for.
2. Scope: when it applies and when it does not.
3. Roles: who does each part and who approves.
4. Before you start: access, tools and information needed.
5. Steps: numbered, one action per step, in plain English.
6. Checks: how to confirm the task was done correctly.
7. If something goes wrong: common problems and what to do.
8. Records: what to save and where.

Rules:
- Use only the information in the notes. Do not invent steps, tools or names.
- Where information is missing or unclear, add a line starting "QUESTION:" instead of guessing.
- Use British English and short sentences.

Notes:
[paste the cleaned notes or transcript here]
```

The instruction to flag missing information with "QUESTION:" is the most important line. AI tools tend to fill gaps with plausible-sounding steps, and in a procedure, a plausible but wrong step is worse than a gap.

## Step 4: Review with the person who does the task

Send the draft back to the person who does the work. Ask them to:

- answer every "QUESTION:" line
- correct any step that is wrong, missing or in the wrong order
- remove anything the AI added that is not how things are actually done
- check names of systems, buttons, folders and forms

Then you can ask the AI to tidy the corrected version: "Here is the reviewed SOP with corrections. Keep every step and fact as written, improve clarity and consistency only."

Read the final version yourself. Our guide to [fact-checking AI-written content](/blog/how-to-fact-check-ai-written-content) has a useful approach for spotting confident errors.

## Step 5: Test it with someone new

The real test of an SOP is whether someone unfamiliar with the task can follow it. Ask a colleague who does not normally do the task to complete it using only the document, with the expert watching but not helping.

Note every place they hesitate, ask a question or make a mistake. Each one is a gap in the document. Fix them, then test again if the changes were significant.

## Step 6: Store, own and review

An SOP is only useful if people can find it and trust that it is current.

- **Store all SOPs in one place**, such as a shared drive folder or your team wiki, with a clear naming pattern like "SOP - Finance - Supplier payments".
- **Give each one an owner** responsible for keeping it accurate.
- **Add a version and review date** at the top.
- **Review at least yearly**, and whenever a tool or process changes.

AI also helps with maintenance. When a process changes, paste the existing SOP and a description of the change, and ask for an updated version that marks what changed. Then review it the same way.

## Other useful AI tasks for SOPs

Once you have a reviewed procedure, AI can help turn it into other formats:

- a one-page checklist for daily use
- a short training quiz to check new starters understand it
- a simpler version for customers, where relevant
- a translation into Sinhala or Tamil for team members who prefer it, checked by a fluent speaker before use

Always treat these as drafts that a knowledgeable person checks.

## Why this matters beyond convenience

Documented procedures make your business more resilient, easier to hand over and easier to grow. They also matter for compliance. ISO/IEC 27001 expects documented operating procedures where needed, and auditors will ask how your team knows the correct way to perform important tasks. Clear, reviewed SOPs, with owners and review dates, are strong evidence.

Start with one procedure this week. Record the walkthrough, use the prompt, review it with the expert and test it with a colleague. Within a couple of months, the knowledge that lived in a few people's heads will be written down where the whole team can use it.
