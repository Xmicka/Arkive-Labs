---
title: "A Website Security Checklist for Small Businesses"
description: "Twelve checks that stop the most common ways small business websites get hacked, from domain lock and backups to email spoofing, explained without jargon."
date: 2026-11-13
category: Security & compliance
author: akesh
---

Most small business websites are not hacked by someone who chose them. They are hacked by automated scripts that scan millions of sites for the same handful of weaknesses: an outdated plugin, a reused password, an admin login with no second factor. That is good news, because it means a short list of habits blocks most real attacks.

I studied cybersecurity before co-founding Arkive Labs, and this is the checklist I run through when we take over a site from another team. It is written for owners, not engineers. You can do most of it in an afternoon.

## 1. Know who controls your domain

Your domain name is the root of everything: your website, your email and your customers' trust. Before anything else, answer three questions.

- **Which registrar holds the domain, and whose account is it in?** It should be an account the business owns, not a former developer's personal login.
- **Is auto-renew on, with a card that will not expire soon?** Expired domains get picked up and resold, sometimes with your old traffic and email still pointing at them.
- **Is the domain locked?** A registrar lock (often called "transfer lock") stops the domain being moved to another registrar without extra confirmation.

Turn on two-factor authentication at the registrar. If someone takes your domain, they can redirect your site and receive your email, which lets them reset almost every other password you have.

## 2. Use HTTPS everywhere

Your site should load on `https://`, show no browser warning, and redirect `http://` visits to the secure version automatically. Most hosts now provide free certificates that renew themselves. Check it properly: open your site, then try a few inner pages and your contact form. A certificate that covers `www.yoursite.com` but not `yoursite.com` (or the other way round) is a common gap.

## 3. Turn on two-factor authentication for every admin

Passwords leak. Two-factor authentication (a code from an app, or a hardware key) means a leaked password alone is not enough. Turn it on for:

- your website admin (WordPress, Shopify, Wix, Webflow and others all support it)
- your hosting account
- your domain registrar
- the email account that receives password resets

That last one matters most. Whoever controls the reset inbox controls everything else.

## 4. Use a password manager and unique passwords

Reused passwords are the single most common way small businesses lose accounts. When one unrelated service leaks, attackers try the same email and password everywhere else. A password manager lets every account have a long, random, unique password without anyone having to remember it. Shared business logins should live in a shared vault, not in a WhatsApp chat or a spreadsheet.

## 5. Give people only the access they need

Look at your website's user list today. You will often find old freelancers, an agency you stopped working with, or a "test" account with full admin rights.

- Remove anyone who no longer works on the site.
- Give content writers an editor or author role, not administrator.
- Never share one admin login between several people. Individual accounts mean you can remove one person cleanly and see who changed what.

## 6. Keep software updated, and remove what you do not use

On platforms like WordPress, most compromises come through plugins and themes that were not updated after a security fix was released. The routine is simple:

- Update the core software, themes and plugins at least monthly, sooner when a security release is announced.
- Delete plugins and themes you are not using. A deactivated plugin can still be exploited if its files are on the server.
- Prefer well-maintained plugins with recent updates and a large user base over abandoned ones.

Hosted platforms such as Shopify or Squarespace handle core updates for you, but apps and third-party scripts you add are still your responsibility.

## 7. Back up properly, and test a restore

A backup you have never restored is a hope, not a backup. A sensible rule for a small business is:

- **Automatic daily backups** of the files and the database.
- **At least one copy stored away from your host**, so a problem with the hosting account does not take the backups with it.
- **Thirty days or more of history**, because some infections are only noticed weeks later.
- **One test restore** to a staging copy, so you know it works and how long it takes.

## 8. Protect your email domain from spoofing

Even if your website is secure, criminals can send email that appears to come from your domain, for example a fake invoice to your customers. Three DNS records help receiving mail servers reject those messages:

- **SPF** lists the services allowed to send email for your domain.
- **DKIM** signs your outgoing email so it can be verified.
- **DMARC** tells receiving servers what to do with mail that fails those checks, and sends you reports.

Your email provider (Google Workspace, Microsoft 365, Zoho and others) publishes the exact records to add. Start DMARC on a monitoring policy, read the reports for a few weeks to make sure your legitimate tools are covered, then move to a stricter policy. Major inbox providers now expect bulk senders to have these in place, so this also helps your real emails get delivered.

## 9. Lock down forms

Contact and enquiry forms attract spam and, occasionally, attempts to abuse them. Add spam protection (a modern, low-friction challenge or a hidden honeypot field), limit file uploads to the types you actually need, and make sure form submissions are not stored in a public folder. If a form collects personal data, only ask for what you will use.

## 10. Be careful with scripts and third-party code

Every chat widget, tracking pixel and embedded tool you add runs code on your site. Keep a simple list of what is installed and why. When a tool is no longer used, remove its code. Only add scripts from vendors you trust, and avoid copying snippets from random tutorials into your site's header.

## 11. Watch for problems

You do not need a security team to notice trouble early.

- A free **uptime monitor** emails you when the site goes down.
- **Google Search Console** warns you if Google detects malware or hacked content on your site, and shows when unfamiliar pages appear in search.
- Your platform's **login notifications** tell you when someone signs in.

Set these up once and they quietly watch for you.

## 12. Write down what to do if something goes wrong

When a site is hacked, people panic and lose hours. A half-page plan saves that time:

1. Who to call: your developer or agency, and your host's support contact.
2. Where the backups are, and who can restore them.
3. Change passwords for the website, hosting, registrar and admin email, starting with email.
4. Remove unknown admin users and check recently changed files.
5. Restore a clean backup from before the problem started, then update everything.
6. Request a review in Google Search Console if Google flagged the site.
7. If customer data may have been exposed, check your legal obligations. In Sri Lanka, the Personal Data Protection Act places duties on businesses that handle personal data, including dealing with breaches.

## A realistic order of work

If you only have one hour, do these first: two-factor authentication on email, registrar and website admin; remove old admin users; confirm backups exist off the host. Those three steps close the doors that automated attacks try most often.

Then work through the rest over the following weeks: updates and unused plugins, email authentication, monitoring and the written plan.

Security is not a product you buy once. It is a short list of habits, repeated. Most small businesses that get hacked were not unlucky. They skipped one of the basics above, and an automated scanner found it.
