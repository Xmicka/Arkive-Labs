---
title: "How to Write an ISO 27001 Statement of Applicability"
description: "What the Statement of Applicability is, what it must contain, how to justify including or excluding each Annex A control, and the mistakes auditors find most often."
date: 2027-01-02
category: Security & compliance
author: akesh
product: iso27001-risk-toolkit
---

The Statement of Applicability (SoA) is one of the documents a certification auditor reads first, and one of the most commonly misunderstood. Many organisations treat it as a box-ticking spreadsheet. Done properly, it is the bridge between your risk assessment and the controls you actually run, and a clear summary of your whole security programme.

Here is how to write one.

## What the standard requires

ISO/IEC 27001 requires a Statement of Applicability as part of information security risk treatment (clause 6.1.3 d). It must contain:

- the **necessary controls** you have determined
- the **justification for including** them
- **whether they are implemented** or not
- the **justification for excluding** any Annex A controls

In the 2022 edition, Annex A lists **93 controls** in four themes: organisational (37), people (8), physical (14) and technological (34). Your SoA must address every one of them, either including it or explaining why it is excluded.

## Where the SoA fits

The SoA does not come first. The order is:

1. Define the scope of your information security management system (ISMS).
2. Carry out a risk assessment using a defined method. Our guide to [running a risk assessment](/blog/how-to-run-an-information-security-risk-assessment) explains how.
3. Decide how to treat each risk, and determine the controls needed.
4. Compare those controls with Annex A to check nothing necessary has been missed.
5. Record the result in the SoA.

If you write the SoA before the risk assessment, you end up justifying controls by habit rather than by risk, which is exactly what auditors look for.

## The columns your SoA needs

A spreadsheet works well. For each Annex A control, include:

| Column | What to write |
|---|---|
| Control reference and name | For example, 5.15 Access control |
| Applicable? | Yes or No |
| Justification for inclusion | Why it is needed: risk treatment, legal, regulatory or contractual requirement, or business need |
| Justification for exclusion | Why it is not needed, if excluded |
| Implementation status | Implemented, partially implemented, or planned |
| How it is implemented | A short description and a reference to the policy, procedure or record |
| Owner | Who is responsible |

Version and date the document, and record who approved it.

## Writing justifications for inclusion

Link each included control to a reason you can show. The strongest reasons are:

- **Risk treatment:** reference the risks in your register that the control treats. "Treats risks R-04 and R-11 (unauthorised access to customer data)."
- **Legal or regulatory requirement:** for example, data protection law.
- **Contractual requirement:** a customer contract that requires it.
- **Business requirement:** a decision by management.

"Best practice" on its own is a weak justification. Linking to specific risks or requirements is what makes the SoA defensible.

## Writing justifications for exclusion

Exclusions are allowed, but each needs a real reason. Good exclusions describe why the risk or activity does not exist in your scope:

- **Strong:** "8.30 Outsourced development: excluded. We do not develop software or commission others to develop it. No in-scope systems are custom built."
- **Weak:** "Not applicable."

Be careful with exclusions that seem convenient. A small office still has physical security needs. A fully cloud-based business still needs to manage its cloud services and suppliers. If you exclude something an auditor would expect to see, your justification needs to be convincing.

## Implementation status must be honest

The SoA should reflect reality on the day it is approved. Marking a control as implemented when it is only planned is a common cause of audit findings, because auditors will ask for evidence. It is fine for a control to be partially implemented or planned, as long as the treatment plan shows when it will be complete.

## Reference evidence, do not repeat it

The "how it is implemented" column should point to where the evidence lives: a policy, a procedure, a system setting, a record. "Access control policy v1.2, rules 3 to 7; quarterly access review records in the shared ISMS folder." Short references keep the SoA readable and make audits much faster.

## Keep it in step with the risk register

The most common structural problem is an SoA that has drifted away from the risk register. A new risk is added but no control is updated, or a control is listed as treating a risk that was closed months ago. Review the SoA whenever the risk assessment is reviewed, and at least once a year.

## Common mistakes auditors find

- Controls excluded with only "N/A" as a justification.
- Controls marked as implemented with no evidence.
- No link between included controls and the risk assessment.
- The SoA references the old 2013 list of controls instead of the 2022 edition.
- No version, date or approval.
- Controls copied from a template that do not match how the organisation actually works.

## How long it takes

Once the risk assessment and treatment plan exist, a first SoA for a small organisation usually takes one or two working days. Most of that time goes into writing good justifications and finding evidence references, which is time well spent: it is the work an auditor will check.

A well-written SoA tells anyone reading it what your organisation protects, why, and how. That makes it useful far beyond the certification audit, including when customers ask how you manage security.
