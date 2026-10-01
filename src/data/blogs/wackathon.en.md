This is a write-up of my process as the designer on Icebreaker, a team project from Wackathon, WaffleStudio's hackathon. In just one to two weeks, we had to go from planning through UI, visualization, and animation.

## The idea

Our theme was **icebreaking**. The idea started from a common situation: you want to get closer to someone, but for one reason or another it's hard to start the conversation. Each person enters some information about themselves, and the service analyzes it — not to hand that information over as-is, but to surface shared interests or intriguing points of connection. I liked that the scope stayed manageable and the concept was clear, without being too student-specific or niche.

The overall flow looks like this:

> **Collect → (Analyze) → Connect → (Analyze) → Show results**

## Onboarding

First, we needed an onboarding screen for basic information like name and age. The twist was that every field was **optional**.

I had to choose between the "one question per screen" pattern common in mobile apps and laying out all the inputs on a single screen. Many apps, Toss among them, split questions into small steps so users' attention doesn't scatter. But ours was a web service, so I wanted to keep the number of pages to a minimum — and if every field is optional, showing them all at once has its advantages too. With that in mind, I made the draft below.

![](/images/wackathon/1.png)

One teammate pushed back on the form layout itself, and we spent some time figuring out what each of us actually wanted. My position came down to this:

- On mobile web there's more in the way than in a native app (the keyboard, browser toolbars, and so on), so I'm not a big fan of interaction-heavy flows.
- That said, I agree this draft could lead to a high drop-off rate.
- If drop-off is the concern and frontend resources allow it, collecting answers one at a time through a chat-like interaction would be perfectly good.

![](/images/wackathon/2.png)

In the end, it became clear the team had been imagining a kind of **chat-style UI**. Looking through chatbot references, I became confident we could present questions sequentially within a single screen, without extra loading or clicks. It was a choice that improved usability within a range I was also happy with — and it helped me understand the team's standard: they wanted the best possible screen, even if it took a bit more effort.

## Planning & LLM

### How should we analyze the data?

The analysis was driven mainly by the developers, since the questions were largely technical. I chimed in mostly when I sensed different views on what was necessary — for instance, suggesting we feed the basic info and the long free-form answers into the analysis together, even at some cost to accuracy. The final implementation used vector embeddings and semantic search, and by the end, the generated conversation prompts were surprisingly natural.

## How should we visualize the results?

We agreed early on that text alone wouldn't be enough, but we only got into the specific form fairly late. A Venn diagram and a card format came up as candidates, and I argued against the Venn diagram: this service had no reason to focus on differences, and a Venn diagram's main strength — summarizing information at a glance — wasn't what mattered here.

Spoiler: we went with **tarot cards**. The question you hear most in design classes is probably "why?", so I needed to be able to answer "Why tarot?"

The biggest constraint was that the keywords — fragments of what two people have in common, like "#TripToJapan" — had no fixed category and could be literally anything. To cover that, we could generate a custom image every time, find one every time, or attach inclusive images flexible enough to fit any keyword.

**1) Generating images**

At first I planned to generate images with DALL·E. Even if we accepted the long generation time, style consistency was a problem. If the style could stay as consistent as the image on the left, I thought that would be fine; the one on the right has DALL·E's characteristic awkwardness, but simply receiving a complete, personalized image seemed meaningful from a user's point of view.

![](/images/wackathon/4.png)

![](/images/wackathon/5.png)

But the team's bar for image quality turned out to be higher than I expected, so I dropped the idea of shipping raw outputs without post-processing. Instead, we discussed placing only a generated central asset inside a template that would keep the style consistent, and narrowed it down to line drawings as a way to achieve high consistency. After refining the prompt, I felt the last result was good enough to use — but there were objections, so we put it on hold.

![](/images/wackathon/6.png)

**2) Picking each time**

The second option was to combine existing emoji. With a set this large, almost any keyword could be covered, and since the prompt interprets the keyword first, the results rarely went off the rails. It was narrow enough to maintain quality and broad enough to cover everything.

![](/images/wackathon/7.png)

It didn't get much traction in our discussions, though, and since I personally prefer to avoid leaning heavily on iOS emoji in a design, I didn't push it further.

**3) Choosing from a fixed image set**

The third option was to choose from a fixed number of broadly applicable images. When you need to express something abstract with no fixed category, throwing out a context-free image didn't feel right, so I needed a method that was both efficient and convincing. That's when tarot cards came up, and the more I thought about it, the more I leaned toward them:

- There's a shared understanding that tarot is pleasantly abstract — connections that might otherwise seem arbitrary feel natural. Viewers don't expect strict meanings, so it's flexible enough to link with any keyword.
- The style is fairly consistent.
- There's plenty of reference material.

Since tarot's consistent style seemed promising, I tried generating the cards with ChatGPT, but it just wouldn't follow my direction, so I gave up.

![](/images/wackathon/8.png)

So I went looking for a good set of tarot illustrations. Unless we had months, drawing them myself wasn't realistic, and I'd been trying not to be too averse to using stock assets. Free sets with more than ten cards in a similar style were hard to find, but I eventually came across one artist's card series on a stock site. It came with the original .ai files under a license that allowed modification, and with a teammate's help, we gathered 20 tarot cards.

After some manual work — adjusting background color, line color, line weight, and opacity to even out the visual density — they worked as a single, cohesive set.

![](/images/wackathon/9.png)

![](/images/wackathon/10.png)

What still bothered me was showing the cards completely at random. In the end, we generated an interpretation for each card with GPT in advance and **picked the card semantically closest to each keyword**. We also decided to print a short version of that interpretation on the back of the card, which resolved most of my concerns.

![](/images/wackathon/11.png)

After a lot of back and forth, we found an efficient approach. One thing this project taught me is that AI can help a great deal during the design process, but it still has a long way to go before it's usable for final deliverables.

## Animation

Because the analysis inevitably took time, I knew from the start we'd need a loading animation. It was low priority, but it had almost no dependencies on development and wasn't directly tied to usability, so I could simply take it on myself.

I wanted to convey the idea of "a card created when two friends meet," so I animated a rotating card in After Effects and exported it with Lottie. It was my first time using Lottie, so I learned as I went; the frontend teammate quickly handled the parts that involved image files, so the animation made it onto the screen in no time.

Below the animation, I also wanted to show snippets of the intermediate analysis results to make the wait less boring and give a sense that something was happening. We settled on an approach, but there wasn't time to include it in the final build, so it remains a mockup animation.

![](/images/wackathon/12.png)

## Wrapping up

It was a short but intense project. Working with experienced developers, I learned to clearly explain the reasoning behind each design decision, and to find compromises — accepting what should be accepted. I also won't forget how my teammates brought even small wishes, like the card-flip animation, to life more beautifully than I'd imagined.
