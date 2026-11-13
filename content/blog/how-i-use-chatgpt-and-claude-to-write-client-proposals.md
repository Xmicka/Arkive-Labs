---
title: "How I Use ChatGPT and Claude to Write Client Proposals"
description: "A repeatable workflow for drafting a freelance proposal with AI, with a worked example and the edits that stop it sounding like a template."
date: 2026-10-20
category: Freelancing
---

# How I Use ChatGPT and Claude to Write Client Proposals

Most freelance proposals get ignored for one reason: they could have been sent to any client. AI makes that worse, because it writes a polished, generic proposal in seconds. So I don't ask it to write the proposal. I ask it to help me read the job post, then I write the parts that matter myself.

Here is the workflow I use. The two AI steps each take seconds, so nearly all your time goes where it should: reading the job carefully and editing the draft until it sounds like you.

## Step 1: Pull out what the client actually wants

Paste the job post into Claude or ChatGPT and ask for analysis, not a draft:

```
Here is a job post. Do not write a proposal yet.
1. In two sentences, what does this client want?
2. List every concrete requirement they mention.
3. What are they worried about that they haven't said directly?
4. What questions would I need answered to quote accurately?

[paste job post]
```

Question 3 is the useful one. A client who writes "must be reliable and communicate well" has probably been let down before. Your opening line should speak to that, not to your skills.

![Claude's analysis of the job post: what the client wants, requirements and unstated worries](/images/post01-step1-analysis.png)

On the example job post below, it flagged the unstated worry straight away: the client has probably been burned by lazy transcript clean-ups before.

## Step 2: Choose one proof point

Clients read the first two lines, so you get one proof point. Pick the single piece of your work most like their request. If you are new, this is a portfolio piece, and you should call it what it is: "a LinkedIn post I wrote to show the style", not "a client project".

Don't claim results you don't have. If you haven't done this exact job, say what you have done that is close, and offer to start with a small paid first piece.

## Step 3: Get a rough draft, with strict rules

Now ask for the draft, with limits so it doesn't ramble:

```
Write a proposal for this job in under 150 words.
Rules:
- Open with something specific from their job post, not "I'm excited to apply".
- Mention only this one proof point: [your proof point].
- No claims about experience I don't have. Only use what I tell you.
- End with one clear question about their project.
- Plain words. No "passionate", "leverage", "dynamic" or "seamless".
```

Giving the AI only the facts you supply is what keeps it honest. Left alone, it will invent experience for you, and clients can tell.

## Worked example

Take this invented job post, written for this article:

> Looking for a writer to turn my 10-minute YouTube videos about home cooking into blog posts. I have 12 videos ready. Need someone who can keep my casual tone and doesn't just paste the transcript.

Step 1 pulls out the real requirement: keep the voice, and don't just transcribe. The unstated worry is that previous writers delivered cleaned-up transcripts. So the opening line should address exactly that.

Here is what Claude actually returned when I ran the Step 3 prompt on it:

> Hi, you said you don't want the transcript just pasted, and that's the part I'd focus on: a video that works when you talk doesn't automatically work as a post. It needs reshaping so the page reads the way you sound.
>
> I'd keep your casual voice, rework the order and pacing for reading, and make sure the cooking steps stay accurate and easy to follow.
>
> For proof, I've written a blog post from a video transcript, which sits as a portfolio piece on my Fiverr profile. It isn't a paid client project, but it shows how I turn spoken material into a written post without losing the speaker's tone.
>
> Twelve videos is a good-sized batch, and I'd be glad to do a sample post from one of yours first so you can judge the voice before we go further.
>
> Will you be sending transcripts, or should I work straight from the videos?

![Claude's draft proposal](/images/post01-step3-draft.png)

It's a solid start: it opens with the client's own words, it's honest that the proof piece isn't a paid job, and it ends on one question. But it runs to about 150 words, a couple of lines are padding ("a good-sized batch"), and it tells the client what it will do without showing anything. That is what Step 4 is for.

## Step 4: Edit it until it sounds like you

This is the step people skip, and it is why their proposals read the same. Do four things:

1. Read it aloud. Anything you would not say to a person, cut.
2. Delete the first sentence if it is a compliment to the client. Start with their problem.
3. Add one detail only you know: a number, a tool you use, how you'd approach their first piece.
4. Check every claim against reality. If you wouldn't say it in a call, remove it.

Here is the edit I made to the Claude draft above:

> You said you don't want the transcript just pasted, so here is how I'd avoid that. I'd rebuild each video as a post: a new opening, clear sections, your phrasing kept where it works, and the quantities and steps checked against the video so nothing gets garbled. As proof, I wrote a blog post from a video transcript, which is a portfolio piece on my Fiverr profile (not a paid client project). I'd write one post from one of your videos first, so you can hear whether it sounds like you before you commit to twelve. Are you sending transcripts, or should I work from the videos?

What changed: I cut the greeting and the line praising the size of the batch, because it said nothing. I replaced the abstract "reshaping" with what I would actually do. And I added the one detail the AI had no reason to think of: checking quantities against the video, since a cooking blog with a wrong measurement loses trust fast.

## Claude or ChatGPT?

For this task I found little difference, and which is better depends on your own voice. I use whichever one I have open. The workflow matters more than the tool. If you want to compare them, run the same Step 3 prompt in both and keep the draft that needs fewer edits.

I ran the identical Step 3 prompt in both. One caveat: I used my Claude account (Sonnet 5.5) and the logged-out free version of ChatGPT, so this is one run each, not a benchmark.

![ChatGPT's draft proposal](/images/post01-chatgpt-draft.png)

ChatGPT's draft opened with "sounds like a great fit for my writing style", which is the kind of generic opener the prompt was written to avoid. It also spent a paragraph on "a good blog post should read naturally", which tells the client nothing, and ended on a generic question about length. It did follow the honesty rule: it said plainly that the proof piece was a portfolio piece, not a paid project.

Claude's draft opened by quoting the client's own concern and ended on a question about transcripts, which changes how the job is priced. It needed fewer edits. With a different job post, or a different day, the result could easily flip. Run both on your own brief and keep whichever draft you'd edit less.

## What not to do

- Don't send the draft unedited. Clients can tell, and it reads the same as every other proposal they get.
- Don't let the AI list skills you don't have.
- Don't use the same proposal twice. Run Step 1 every time.
- Don't skip the question at the end. It is the easiest way to start a conversation.

## The takeaway

Use AI to understand the job quickly, then spend your own time on the two or three sentences that show you read it. That is what gets replies.
