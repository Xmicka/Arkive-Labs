---
title: "How to Set Up SPF, DKIM and DMARC for Your Business Email"
description: "A step-by-step guide to the three DNS records that stop criminals sending email as your domain and help your real emails reach the inbox, with example records and a safe rollout plan."
date: 2026-12-18
category: Security & compliance
author: akesh
---

If someone can send an email that looks like it came from `accounts@yourbusiness.com`, they can send your customers a fake invoice with their own bank details. This is one of the most common and most damaging scams small businesses face, and it does not require hacking you at all.

Three DNS records make that much harder: SPF, DKIM and DMARC. They also help your genuine email get delivered. Google and Yahoo have required them for bulk senders since 2024, and other inbox providers increasingly expect them. Here is how to set them up without breaking your own email.

## What each record does

- **SPF (Sender Policy Framework)** lists the servers and services allowed to send email for your domain.
- **DKIM (DomainKeys Identified Mail)** adds a digital signature to your outgoing email, so the receiver can check it was not altered and really came from an authorised sender.
- **DMARC (Domain-based Message Authentication, Reporting and Conformance)** tells receiving servers what to do with email that fails those checks, and sends you reports about who is sending email as your domain.

You need all three. SPF and DKIM provide the checks. DMARC turns them into a policy.

## Before you start: list everything that sends email for you

This is the step people skip, and it is why DMARC rollouts break things. Make a list of every service that sends email using your domain:

- your main mailbox provider (Google Workspace, Microsoft 365, Zoho)
- newsletter and marketing tools (Mailchimp, Brevo, Klaviyo)
- your website's contact form and online store
- invoicing and accounting software
- helpdesk or CRM tools

Each will need to be covered by SPF or DKIM, or both. Each provider publishes its own setup instructions, usually under "domain authentication".

You will add the records in the DNS settings wherever your domain is managed: your registrar, your host or a DNS service such as Cloudflare.

## Step 1: Publish one SPF record

SPF is a single TXT record on your root domain. It starts with `v=spf1`, lists your senders, and ends with a rule for everything else. For a business using Google Workspace and one newsletter tool, it might look like this:

```
v=spf1 include:_spf.google.com include:servers.mcsv.net ~all
```

For Microsoft 365, the include is `include:spf.protection.outlook.com`. Use the exact value your providers give you.

Three rules to follow:

1. **Only one SPF record per domain.** If you already have one, edit it. Two records make SPF fail.
2. **Stay under ten DNS lookups.** Each `include:` can add lookups. Too many and SPF fails. If you use many services, rely on DKIM for some of them rather than adding every include.
3. **End with `~all` while you are setting up.** It marks unlisted senders as suspicious without rejecting them outright. Many organisations later move to `-all`.

## Step 2: Turn on DKIM for every sender

DKIM is set up per service. In each one, find the domain authentication or DKIM section. It will give you one or more records to add, usually a TXT or CNAME record at a name such as `google._domainkey` or `selector1._domainkey`.

- **Google Workspace:** generate the key in the Admin console's Gmail authentication settings, add the TXT record, then return to the console and click to start authentication.
- **Microsoft 365:** enable DKIM for your domain in the security portal and add the two CNAME records it shows.
- **Marketing and other tools:** follow their domain authentication guide. Most now set up DKIM with a couple of CNAME records.

Do not skip the final "start" or "verify" step in each tool. Adding the record alone often is not enough.

## Step 3: Publish DMARC in monitoring mode

DMARC is a TXT record at `_dmarc.yourdomain.com`. Start with a policy of `none`, which changes nothing about delivery but starts sending you reports:

```
v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com
```

Create the reporting address first, or use a DMARC reporting service that turns the raw reports into readable summaries. Raw reports are XML files that are hard to read by hand.

## Step 4: Read the reports for two to four weeks

The reports show every source sending email as your domain and whether it passed SPF and DKIM. You are looking for:

- **Your legitimate services failing.** A newsletter tool or invoicing system you forgot. Fix it by adding its DKIM records or SPF include.
- **Unknown sources.** Servers you do not recognise sending as your domain. These are often spoofing attempts, which is exactly what the next step will stop.

Keep going until all your legitimate sources pass consistently.

## Step 5: Tighten the policy gradually

Once your real email passes, move DMARC from monitoring to enforcement:

1. `p=quarantine`: failing email goes to spam. Run this for a few weeks and keep checking reports.
2. `p=reject`: failing email is refused entirely. This is the goal.

```
v=DMARC1; p=reject; rua=mailto:dmarc-reports@yourdomain.com
```

If you are cautious, DMARC lets you apply the policy to a percentage of failing mail first using `pct=`, increasing it over time.

## Step 6: Test

Send an email from each service to a Gmail address. Open it, choose "Show original", and check that SPF, DKIM and DMARC all show **PASS**. Repeat whenever you add a new email tool.

## Common mistakes

- **Two SPF records** after adding a new tool. Merge them into one.
- **Jumping straight to `p=reject`** before checking reports, which blocks your own invoices or newsletters.
- **Forgetting subdomains and new tools.** Every new service that sends email needs authenticating.
- **Never reading the reports.** DMARC is most useful when someone checks it monthly.

## Do not forget domains you do not use for email

Criminals also spoof domains that never send email, such as an old brand name. For those, publish a strict SPF and DMARC policy so that nothing can pass:

```
v=spf1 -all
```

```
v=DMARC1; p=reject;
```

Setting this up takes an afternoon of work spread over a few weeks of monitoring. In return, your customers are far better protected from fake invoices in your name, and your real emails are more likely to reach the inbox. It is one of the highest-value security changes a small business can make. For the rest of the basics, see our [website security checklist](/blog/website-security-checklist-for-small-businesses).
