---
title: "Prompt Templates for Product Descriptions"
description: "Three prompts for writing product descriptions with AI that stick to the facts you supply, plus a test that shows which facts the AI says are missing."
date: 2026-10-20
category: Prompts
---

# Prompt Templates for Product Descriptions

Product descriptions are one of the easiest things to get wrong with AI. Left alone, it will describe a product as "sleek", "durable" and "perfect for any lifestyle", and will add features the product doesn't have. A made-up feature is worse than a boring description, because the buyer finds out when the product arrives.

These three prompts keep the AI to the facts you give it.

## Template 1: Description from facts only

```
Write a product description of [40-60] words for [PRODUCT]. Use ONLY these facts: [LIST]. Audience: [WHO]. Tone: [TONE]. Do not use these words: [LIST OF BANNED WORDS]. Do not invent features. Then list the facts you left out because I did not give them to you but a buyer would probably want.
```

I tested it with a reusable water bottle for students, using these facts only: 750 ml, stainless steel, fits standard car cup holders, comes in three colours. I asked for a dry, a little funny tone and banned the words "hydrate", "sleek", "perfect", "ultimate" and "journey".

![The water bottle description and the list of missing facts](/images/post24-bottle-description.png)

The description came to 55 words. It used the four facts and nothing else invented about the product. It was written in the tone I asked for, and it avoided the banned words.

The second half is the real value. The AI listed ten things a buyer would likely want to know that I hadn't told it, including whether the lid is leak-proof, whether it is insulated, the weight and dimensions, the colour names, what the lid and seals are made of, whether it is dishwasher safe, and the price and return terms.

## What I'd edit

The description contains lines such as "built for people who forget to drink anything until 4 p.m." That is a joke about customers rather than a product fact, but it is still a claim about how people behave. Keep jokes like that only if they fit your brand and don't overreach. Otherwise cut them.

The missing-facts list is the part I'd send to the client or the product team. It is a ready-made question list.

## Template 2: Three versions, different tones

```
Write three versions of a product description for [PRODUCT], each about [50] words, in three tones: plain and practical, dry humour, warm and personal. Use ONLY these facts: [LIST]. Don't invent anything. Mark the version you would use for [AUDIENCE] and say why in one sentence.
```

Use it when you aren't sure what the client's voice is. Show all three and let them choose.

## Template 3: Fix an existing description

```
Here is a product description. List every claim in it that isn't backed by the fact sheet below. Then rewrite it using only the fact sheet.

DESCRIPTION: [paste]
FACT SHEET: [paste]
```

This is useful when a client already has copy full of marketing claims. It shows exactly what can't be supported.

## Rules that help

- **Always supply a fact sheet.** The fewer facts you give, the more the AI will fill in.
- **Ban the words you're tired of.** "Perfect", "ultimate", "premium" and "sleek" are common.
- **Ask for what's missing.** It is quicker than finding out from the customer.
- **Check claims that sound technical.** "Leak-proof" and "BPA-free" are legal and safety claims. Only use them if the manufacturer confirms.

## The takeaway

Good AI-written product copy comes from good inputs. Give it the facts, ban the clichés, and read the "missing facts" list carefully, because that is the part that stops you misleading anyone.
