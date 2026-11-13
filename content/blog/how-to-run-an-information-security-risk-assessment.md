---
title: "How to Run an Information Security Risk Assessment in a Small Business"
description: "A step-by-step method for identifying, scoring and treating information security risks without a compliance platform, with a worked example and the mistakes to avoid."
date: 2026-12-01
category: Security & compliance
author: akesh
product: iso27001-risk-toolkit
---

Customers, insurers and auditors increasingly ask small businesses the same question: "How do you manage information security risk?" If the honest answer is "we haven't written it down", you need a risk assessment. It is also the foundation of ISO/IEC 27001, where clauses 6.1.2 and 6.1.3 require an organisation to define how it assesses and treats risk, and to apply that method consistently.

The good news is that a small team can do this properly in a few working sessions. Here is the method I use with clients.

## Step 1: Decide the scope

Start by writing down what the assessment covers. For most small businesses that is the whole organisation: its people, offices, laptops and phones, cloud services, customer data and the systems the business cannot run without. If you are working towards ISO 27001, the scope should match the scope of your information security management system.

Keep it to a short paragraph. A clear scope stops the assessment either sprawling or quietly leaving out the risky parts.

## Step 2: Agree how you will score risk, before you start

This is the step most free templates skip, and it is why their registers end up inconsistent. Write a short methodology that answers four questions:

1. **How do you score likelihood?** A 1 to 5 scale works well, with each level described in plain words. For example, 1 means "not expected in the next three years" and 5 means "likely within the next year".
2. **How do you score impact?** Also 1 to 5, described in business terms: money lost, days of disruption, customers affected, legal exposure.
3. **How do you combine them?** Usually likelihood multiplied by impact, giving a score from 1 to 25, grouped into bands such as low, medium, high and critical.
4. **What level of risk will you accept?** For example, "risks scoring 8 or below can be accepted by the risk owner; anything higher needs a treatment plan approved by a director."

Writing this down first means two people scoring the same risk should land in roughly the same place. It also gives an auditor what they need to see: a defined, repeatable method.

## Step 3: Identify risks

A useful risk statement links three things: something you value, something that could go wrong, and the weakness that would let it happen. For example:

- Customer records in the CRM could be exposed **because** former staff accounts are not removed promptly.
- Invoicing could stop for several days **because** the accounting system has no tested backup.
- A director's email could be taken over **because** two-factor authentication is not enforced.

Run a one-hour workshop with the people who actually do the work: whoever runs IT, finance, operations and sales. Ask "what would hurt us most if it went wrong?" and "what are we relying on that we have never checked?" You will usually collect fifteen to forty risks. That is a healthy number for a first register.

## Step 4: Score each risk as it stands today

For each risk, score likelihood and impact with the controls you already have in place, not the ones you plan to add. Note those existing controls in the register. Be honest. A risk register that says everything is low is not believed by anyone, including your own team.

Give every risk an **owner**: a named person with the authority to decide what happens to it. In a small business that is often a director or the head of the relevant function, not "IT" in general.

## Step 5: Decide how to treat each risk

For risks above your acceptance level, choose one of four options:

- **Reduce** the risk with a control. Enforce two-factor authentication, add an offboarding checklist, test backups.
- **Avoid** it by stopping the activity. Stop storing card details you do not need.
- **Share** it, for example through insurance or a contract with a supplier.
- **Accept** it, with the owner's sign-off and a recorded reason.

For each reduction, write a treatment action with an owner, a due date and the evidence that will show it is done. Then score the **residual risk**: what the risk will be once the action is complete. If you are working to ISO 27001, this is also where you compare your chosen controls against Annex A, which lists 93 controls in four themes (organisational, people, physical and technological), and record the result in your Statement of Applicability.

## Step 6: Get approval and keep it alive

The risk owners should review and approve the register and treatment plan. Then put two dates in the calendar:

- a **monthly** check of treatment actions that are due or overdue
- a **full review** at least once a year, and whenever something significant changes: a new office, a new core system, a security incident or a big new customer requirement

A risk register is a working tool, not a certificate to file away.

## A worked example

**This example is fictional.** It shows the level of detail that helps.

> **Risk:** Customer project files on the shared drive could be deleted or encrypted by ransomware, because backups run only to a disk in the same office and have never been restored.
>
> **Owner:** Operations director.
>
> **Existing controls:** Antivirus on laptops, weekly backup to a local disk.
>
> **Score today:** Likelihood 3, impact 5, score 15 (high). Above the acceptance level of 8.
>
> **Treatment:** Reduce. Move to daily backups with an off-site, versioned copy, and complete a test restore. Owner: operations director. Due: end of next month. Evidence: backup job report and a signed test-restore record.
>
> **Residual score:** Likelihood 2, impact 3, score 6 (medium). Within the acceptance level.

## Common mistakes

**Listing threats instead of risks.** "Hackers" and "fire" are not risks you can act on. Link them to what they would affect and the weakness involved.

**Scoring without a method.** If the scales are not written down, scores drift and the register stops meaning anything.

**No owners.** A risk owned by "everyone" is owned by no one, and its treatment never happens.

**Treatment actions with no dates or evidence.** "Improve backups" is an intention. "Daily off-site backup, test restore by 30 June, evidence: restore record" is a plan.

**Doing it once.** Risks change as the business changes. A register last updated two years ago is a liability in an audit.

## Where to start this week

Write your methodology on one page, run the workshop, and score your first twenty risks. That alone puts you ahead of most organisations your size, and it gives you a clear, prioritised list of what to fix first.
