---
title: "How to Run Your First ISO 27001 Internal Audit"
description: "A practical walkthrough of an ISMS internal audit for small teams: planning the programme, gathering evidence, grading and writing findings, and following them to closure."
date: 2026-12-15
category: Security & compliance
author: akesh
product: isms-internal-audit-toolkit
---

If your organisation is working towards ISO/IEC 27001, the internal audit is where many small teams get stuck. It sounds formal and intimidating. In practice it is a structured check that your information security management system (ISMS) does what you say it does, and that it meets the standard. Done well, it also finds problems before a certification auditor does.

This guide walks through a first internal audit for a small organisation.

## What the standard asks for

Clause 9.2 of ISO/IEC 27001 requires internal audits at planned intervals, to check that the ISMS conforms to your own requirements and the standard, and that it is effectively implemented and maintained. In practice that means you need:

- an **audit programme** that plans which parts of the ISMS are audited and when
- defined **criteria and scope** for each audit
- **auditors who are objective and impartial**, which means people should not audit their own work
- **results reported** to relevant management
- **documented evidence** of the programme and the results

Findings then feed into corrective action (clause 10.2) and management review (clause 9.3).

## Step 1: Plan the programme for the year

Lay out the year so the whole ISMS is covered: the management clauses (context, leadership, planning, support, operation, performance evaluation and improvement) and a sample of the Annex A controls you have selected. Higher-risk areas, and areas that changed recently or had problems before, deserve more attention.

A small organisation might run one full audit a year, or split it into two or three smaller audits spread across the year. Either works, as long as everything is covered over the cycle.

## Step 2: Choose an objective auditor

The auditor must not audit their own work. In a small organisation this is the hardest requirement. Common solutions are:

- a colleague from another function audits the areas they do not run
- two people swap and audit each other's areas
- an external consultant runs the audit, or audits the areas where independence is otherwise impossible

The auditor needs to understand the standard and auditing principles, but they do not need to be a certified lead auditor for an internal audit.

## Step 3: Write a short audit plan

For each audit, write a one-page plan covering:

- **objectives:** what the audit is for
- **scope:** which clauses, controls, locations and teams
- **criteria:** the standard, your own policies and procedures
- **schedule:** who will be interviewed and when
- **method:** interviews, document review, observation, sampling of records

Send it to the people involved in advance so they can prepare.

## Step 4: Gather evidence

An audit is not a conversation about intentions. It is a search for evidence. For each question, look for proof that the requirement is met. For example:

- **Risk assessment:** Is there a documented method? Has the register been reviewed when the method says it should be? Pick two risks and check their treatment actions were completed.
- **Access control:** Take the list of people who left in the last six months. Check that their accounts were removed on time.
- **Backups:** Ask for the last test-restore record, not just the backup schedule.
- **Awareness:** Ask a few staff members how they would report a security incident.

Sampling is your friend. You do not need to check every record, but you do need to check enough to be confident, and to note what you sampled.

## Step 5: Grade the findings

Most organisations use a simple grading scheme:

- **Major nonconformity:** a requirement is not met at all, or a failure seriously undermines the ISMS. For example, no internal audits or management reviews have ever taken place.
- **Minor nonconformity:** a requirement is partly met, or there is an isolated lapse. For example, one leaver's account stayed active for three weeks.
- **Opportunity for improvement:** not a failure, but something that could be better.

Grade consistently. A minor issue graded as major creates alarm and wasted effort. A major one graded as minor hides real risk.

## Step 6: Write findings people can act on

A good finding has three parts:

1. **The requirement:** what should happen, citing the clause, control or your own policy.
2. **The evidence:** exactly what you saw, with dates and references.
3. **The statement of fact:** the gap between the two.

**This example is fictional:**

> **Requirement:** Access control policy, rule 6: access is removed within one working day of an employee leaving.
>
> **Evidence:** Of five leavers sampled from January to June, one account (leaver dated 3 March) was disabled on 24 March.
>
> **Finding (minor nonconformity):** Access was not removed within the required time for one of five sampled leavers.

Notice what it does not do: it does not blame a person or speculate about why. It states facts that anyone can verify.

## Step 7: Follow every finding to closure

For each finding, the area's owner should record:

- the **correction** (fix the immediate problem: disable the account)
- the **root cause** (why it happened: HR did not notify IT of the leaving date)
- the **corrective action** (stop it happening again: add IT to the leaver checklist)
- an **owner** and **due date**
- an **effectiveness check** later (sample leavers again next quarter)

Track findings until they are closed and verified. An overdue list of open findings is one of the first things a certification auditor looks for.

## Step 8: Report and feed management review

Summarise the audit in a short report: scope, overall conclusion, findings by grade and the status of earlier findings. Present it at management review, where leadership considers whether the ISMS is working and what needs to change.

## Common first-audit mistakes

- **Auditing documents only.** Checking that a policy exists is not the same as checking it is followed.
- **Vague findings.** "Access control needs improvement" cannot be acted on or verified.
- **Skipping the root cause.** Fixing the symptom means the same finding returns next year.
- **Treating it as a test to pass.** An audit with zero findings in a young ISMS usually means it was not thorough enough.

## A realistic timeline

For a small organisation, a first full internal audit typically takes a few days spread over a couple of weeks: a day to plan, two or three days of interviews and evidence review, and a day to write up. Run it early enough before a certification audit that you have time to close the findings it raises.
