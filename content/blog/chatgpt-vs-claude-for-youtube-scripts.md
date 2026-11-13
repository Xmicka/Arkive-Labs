---
title: "ChatGPT vs Claude for YouTube Scripts: The Same Prompt, Tested Side by Side"
description: "I gave ChatGPT and Claude the same script prompt and fact-checked both openings against a real source. Here is what each got right and wrong."
date: 2026-10-20
category: YouTube
---

# ChatGPT vs Claude for YouTube Scripts: The Same Prompt, Tested Side by Side

Every "which AI is better" post has the same problem: the writer picks a prompt that flatters their favourite. So I did this the plain way. One prompt, one run in each tool, no retries, and then I checked the facts.

Two caveats up front. I used my Claude account (Sonnet 5.5) and the logged-out free version of ChatGPT, so this is not a test of the paid ChatGPT plans. And it is a single run each. Treat it as an example of what to look for, not a ranking.

## The prompt

I asked for the first 45 seconds of a faceless history-and-business video, the kind of channel where the opening decides whether people stay:

```
Write the first 45 seconds of a YouTube script (about 120 words, spoken voiceover) for a faceless channel video titled "Why Blockbuster Lost to Netflix". Rules: open with a hook in the first sentence that is not a question. Short sentences. Do not invent statistics, quotes or dates; if you state any fact, add [VERIFY] right after it. No phrases like "in today's video" or "let's dive in". End on a line that makes the viewer want to keep watching.
```

The [VERIFY] rule matters most. It stops the AI from presenting guesses as facts and gives you a checklist to work through before you record.

## What ChatGPT gave me

![ChatGPT's script opening](/images/post02-chatgpt-script.png)

It opened with "Blockbuster had the movie business in its hands. Then Netflix changed the rules." That is a clean first line. After that it got vague. It described renting movies from a store, said Netflix offered "a different way to rent movies", and called the cause "timing" and "the way a company thinks about its own success". It closed with a question and the line "a costly mistake that changed the future of entertainment forever."

It followed the rules, and it tagged two [VERIFY] marks. But the script contains almost no specific information. Nothing in it would make a viewer think "I didn't know that". The ending is the kind of line viewers have heard on a hundred channels.

## What Claude gave me

![Claude's script opening](/images/post02-claude-script.png)

It opened with "Blockbuster once had a store on almost every corner." Then it committed to an argument: Blockbuster "didn't lose because it was stupid. It lost because it was winning, in a game that was about to end." It named concrete events (Netflix mailing DVDs, Blockbuster being able to buy it and declining) and ended on a teaser about "something hiding inside Blockbuster's own cash register".

It also added a note after the script saying which claim most needed checking. That is useful, because that is the claim a comment section will argue about.

## Fact-checking both

I checked the claims against a CNBC report on the Netflix and Blockbuster rivalry ([source](https://www.cnbc.com/2020/09/22/how-netflix-almost-lost-the-movie-rental-wars-to-blockbuster.html)). Here is what it supports:

- **Blockbuster could have bought Netflix.** True. According to the report, Reed Hastings and Marc Randolph offered to sell Netflix to Blockbuster for $50 million in 2000, and Blockbuster turned it down.
- **The cash register teaser (late fees).** The report says Blockbuster collected about $800 million in late fees in 2000, and that Netflix's no-late-fee model appealed to customers who were tired of paying them. Claude's hook points at a real thing, but I can only call it a hook until the next section explains it properly.
- **"A store on almost every corner."** This is loose. I would replace it with a store count from a source before publishing.

ChatGPT's script made no claim specific enough to check, which is safe, but it is also the reason it is forgettable.

## What this test shows

1. **A specific argument beats a safe summary.** Claude's draft had a point of view and a story. ChatGPT's draft summarised. In a 45-second opening, the point of view is what keeps people watching.
2. **The [VERIFY] rule works, but it is not enough.** Both tools tagged claims. Neither tagged everything. You still have to read every sentence and ask, "could I prove this?"
3. **Specific does not mean true.** Claude's version was more concrete, so it carried more risk. It happened to hold up on the main claim. That will not always be the case, which is why the check against a real source comes before you record, not after.
4. **Your prompt matters more than your tool.** The rules did most of the work here: no question hook, no "in today's video", flag your facts, end on a pull. Without them, both tools drift towards the same generic voice.

## How I'd use this in practice

Draft the opening in whichever tool you prefer, using the prompt above. Then do three things before it goes into a video:

1. List every [VERIFY] claim and find a real source for each. Remove any you can't confirm.
2. Replace anything vague ("almost every corner") with a checked number or cut it.
3. Read it aloud. If a line sounds like every other YouTube video, rewrite it in your own words.

If you only take one thing from this: ask the AI to flag its own claims, and then do the checking yourself.
