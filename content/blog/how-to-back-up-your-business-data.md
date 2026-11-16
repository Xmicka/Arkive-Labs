---
title: "How to Back Up Your Business Data: A Practical Plan for Small Businesses"
description: "Work out what to back up, where to keep the copies and how often, then prove it works with a restore test. A plan a small team can set up in a day and keep running."
date: 2027-01-09
category: Security & compliance
author: akesh
---

Most small businesses believe their data is backed up. Ask where the backups are, who checks them and when someone last restored a file from them, and the answers often get vague. Files sit "in the cloud", the accounting data lives on one laptop, and the only copy of the customer list is a spreadsheet in someone's personal Google Drive.

A backup plan does not need expensive software. It needs a clear list of what matters, copies kept in more than one place, and regular proof that you can get the data back. This guide walks through each step.

## Step 1: List the data you cannot afford to lose

Start with the question, "If this disappeared tomorrow, what would stop us working or cost us money?" Walk through the business and write down every important source of data. For most small businesses the list includes:

- **email**, including sent items and shared mailboxes
- **shared documents**: contracts, proposals, HR files, templates
- **accounting and payroll data**, whether in cloud software or a desktop program
- **customer records**: CRM, order history, booking systems, spreadsheets
- **the website**: files, database and any customer accounts or orders
- **design and production files**, which are often large and stored only on one machine
- **configuration you would struggle to rebuild**: domain and DNS settings, firewall and router settings, app integrations

For each item, note where it lives, who owns it and how much would hurt to lose. That last point decides how often you back it up.

## Step 2: Decide how much loss and downtime you can live with

Two questions turn "we should back up" into a plan:

- **How much work can we afford to redo?** If losing a day of invoices would be painful but survivable, a daily backup is enough. If losing an hour of orders is serious, you need something closer to continuous.
- **How long can we be without it?** Email might need to be back within hours. An archive of old projects might wait a week.

Write the answers next to each item on your list. Security professionals call these the recovery point objective and the recovery time objective, but plain language works just as well for a small team.

## Step 3: Follow the 3-2-1 rule

The 3-2-1 rule is a long-standing guideline that still works well for small businesses:

- **3 copies** of important data: the live copy plus two backups
- **2 different types of storage**, for example cloud storage and an external drive, or two separate cloud services
- **1 copy away from your office and your main accounts**, so a fire, theft or a compromised account does not take everything at once

Many organisations now add one more requirement: at least one copy that cannot be changed or deleted from your normal accounts. Ransomware and attackers who get into an admin account often delete or encrypt backups first. Look for backup services that offer immutable or locked backups, or keep an offline copy on a drive that is disconnected when not in use.

## Step 4: Do not mistake sync for backup

This is the most common misunderstanding. Tools like Google Drive, OneDrive and Dropbox **sync** files. If a file is deleted, overwritten or encrypted on one laptop, that change can sync everywhere within minutes.

These tools do offer useful protection, such as version history and a recycle bin, but those features are time-limited and controlled from the same account. If that account is compromised, or the retention period passes, the data can be gone.

The same applies to Google Workspace and Microsoft 365 generally. The provider keeps the service running, but under their standard terms you remain responsible for protecting your own data against deletion, mistakes and misuse. Check your plan's retention settings in the admin console, and consider a dedicated backup service for email and shared drives. Retention periods and features vary by plan and change over time, so confirm the details in your provider's own documentation.

## Step 5: Set up backups for each source

Work through your list from Step 1. A typical small-business setup looks like this:

1. **Email and shared drives:** a cloud-to-cloud backup service that copies your Google Workspace or Microsoft 365 data to separate storage, run at least daily.
2. **Accounting software:** if it is cloud-based, check what export or backup options it offers and schedule a regular export. If it runs on a desktop, back up its data file every day it is used, and keep a copy off that machine.
3. **Laptops and desktops:** encourage people to keep work files in shared drives rather than on the desktop. For machines that must hold local files, use an automatic backup tool to cloud storage or an external drive.
4. **Website:** automatic daily backups of files and database, with a copy stored away from your host. Our [website security checklist](/blog/website-security-checklist-for-small-businesses) covers this in more detail.
5. **Configuration:** export or screenshot DNS records, router settings and key app settings after any change, and store them with your other backups.

Make sure backups run automatically. A backup that depends on someone remembering to plug in a drive on Friday will eventually stop happening.

## Step 6: Protect the backups themselves

Backups contain everything an attacker or thief would want, so treat them as carefully as the live data:

- **Encrypt them**, especially external drives and anything stored with a third party.
- **Limit who can delete or change them.** Use a separate admin account for the backup service, with two-factor authentication, and do not use it for daily work.
- **Keep the business in control.** Backup accounts should belong to the business, not to a staff member or an outside developer.
- **Know what personal data is in them.** Sri Lanka's Personal Data Protection Act No. 9 of 2022 expects organisations to protect personal data with appropriate security measures, and that includes copies held in backups. This is general information, not legal advice. For your specific obligations, refer to the Act and guidance from the Data Protection Authority of Sri Lanka.

## Step 7: Test a restore, regularly

A backup you have never restored is an assumption, not a plan. Put a restore test in the calendar:

- **Monthly:** restore a few individual files or emails from different sources and check they open correctly.
- **Every six to twelve months:** a larger test, such as restoring a whole mailbox, a full copy of the accounting data or the website onto a test location.
- **After any change** to your backup setup or a major system.

Record each test: the date, what was restored, how long it took and anything that went wrong. If a restore takes far longer than the downtime you said you could tolerate in Step 2, fix the plan before you need it.

## Step 8: Write it down in one page

Your backup plan should fit on a single page that someone other than you could follow:

- what is backed up, where, how often and how long copies are kept
- who is responsible for checking backups and running tests
- how to restore each important source, with links to instructions
- who to call for help, such as your IT provider or the backup service's support

Store a copy somewhere you can reach if your main systems are down, such as a printed copy or a separate secure account. In an emergency, this page is what you will reach for first. Our guide to [the first hour of a security incident](/blog/what-to-do-in-the-first-hour-of-a-security-incident) explains where backups fit into a response.

## If you are working towards ISO 27001

ISO/IEC 27001:2022 includes information backup among its Annex A controls (control 8.13 in the 2022 version). Auditors will typically want to see a defined approach to backups, evidence that backups are running, and records of restore tests. The one-page plan and the test log from this guide are exactly that evidence. Check the wording of the standard itself for the full requirement.

## Where to start this week

You do not need to get everything perfect at once. Start with email, accounting and customer records, prove you can restore them, and build out from there.
