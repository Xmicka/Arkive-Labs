---
title: "How Small Businesses Can Use AI for Customer Emails Without Losing Their Voice"
description: "A prompt that copies an owner's real voice from two sample emails and refuses to promise refunds the owner hasn't approved, tested on a complaint."
date: 2026-10-20
category: Small business
---

# How Small Businesses Can Use AI for Customer Emails Without Losing Their Voice

If you run a small business, your emails are part of your brand. A customer who writes to a shop with a bit of personality does not want a reply that sounds like a bank. But writing every reply from scratch takes time, and angry emails are the hardest to write.

AI can help, if you give it two things: your real voice, and strict limits on what it may promise. Here is the prompt I tested.

## The two problems with AI customer emails

1. **It sounds generic.** "We apologise for any inconvenience" is the voice of a company nobody likes.
2. **It makes promises.** Left alone, an AI will happily offer a refund, a discount or a delivery date that you never agreed to.

The prompt below handles both.

## The prompt

```
Here are two emails written by a small business owner, as voice samples.
SAMPLE 1: [paste a real email you wrote]
SAMPLE 2: [paste another]

Describe the owner's voice in five bullet points. Then draft a reply to the customer message below in that voice, under 100 words. Do not promise refunds, dates or discounts the owner has not decided; write [OWNER TO CONFIRM: what] instead.

CUSTOMER MESSAGE: [paste]
```

Asking for the voice description first gives you a chance to catch a wrong read before the draft is written.

## The test

I made up two short samples for a small workshop business:

> Hi Dana, thanks for flagging this. Honestly that one's on us, the label was wrong. I'll sort it today.
>
> Hey Tom, short answer: yes, we can do Saturday. Long answer: bring a jumper, the workshop is freezing.

And an invented complaint:

> My order arrived two weeks late and one of the mugs was chipped. I want to know what you're going to do about it.

![Claude's voice description and draft reply](/images/post12-owner-voice-and-reply.png)

The voice description was accurate: first-name casual, takes ownership plainly, short and direct, dry humour, informal British phrasing. The reply took ownership in the same way ("that's on us. I'm sorry."). And it did not decide anything for the owner. It left two placeholders: one for what to do about the chipped mug, and one for anything offered for the late delivery. It also asked for a photo of the chip, which is a sensible, practical request.

## What I'd edit

The draft ended with "Thanks for bearing with us." That is the customer-service line the owner's samples never use, so I would cut it. I would also use the customer's first name. The AI left the greeting as "Hi there" because the complaint did not include a name.

## Rules I follow with customer emails

- **Never send it without reading it.** You are accountable for every word.
- **Fill in decisions yourself.** The placeholders are not a bug. Refunds, replacements and dates are your call.
- **Don't paste private details.** Leave out full addresses, payment details and anything sensitive before using an AI tool.
- **Keep your samples fresh.** Use real emails that you were happy with, and update them as your voice changes.
- **Save the good ones.** A few approved replies make a template library you can reuse.

## The takeaway

The useful trick is the constraint. Giving the AI your voice makes the email sound like you, and the placeholder rule stops it making promises on your behalf.
