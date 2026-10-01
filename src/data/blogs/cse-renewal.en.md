> **What is the SDY Salon?**  
> A monthly salon where club members in their third year or above share self-directed projects they work on over three months. Each month, members present their progress and exchange feedback, building their portfolios on the way to becoming professional designers.

---

Hi, I'm Eugene Choi, a Visual Design major (class of '22) in the Department of Design. I'm especially interested in product design and UX research. Taking the SDY Salon — a space for freely sharing design work — as an opportunity, I'd like to record and share what I felt, experienced, and learned while leading the design and planning of the SNU Computer Science & Engineering website renewal over the past year.

![](/images/blog/cse-renewal/1.jpg)

> **Contents**
>
> 0\. Getting Started  
> 1\. Laying the Groundwork  
> 2\. First Design  
> 3\. Beta Tests and Feedback  
> 4\. Final Design  
> 5\. Release, and After

## 0. Getting Started

### Forming the team

I work as a designer at WaffleStudio, a developer club in the Department of Computer Science and Engineering. In May 2023, the department proposed a collaboration: a team of five or six developers and designers would renew the existing website over the summer break. Building a website felt like something fundamental that I'd wanted to try at least once — and it was for CSE, my second major — so I jumped in without much hesitation. Of course, I had no idea it would turn out to be such a big project...

Here's how the team was formed:

- Backend developers: 3 (now 2)
- Frontend developers: started with 3, now 2
- Designers: 2

![](/images/blog/cse-renewal/2.jpg)

The existing site was built ten years ago. It was packed with information, and while the UX was generally intuitive, it was also overly hand-holding in places.

---

## 1. Laying the Groundwork

### Planning: Reworking the navigation bar

Before starting anything, I figured we should get the structure right first, so we began by reorganizing the navigation bar.

At first glance, the existing site was in an odd state: "News," which took up a large area of the main page, and several important-looking pages in the footer couldn't be reached from the navigation bar at all.

![](/images/blog/cse-renewal/3.jpg)

After meetings with the department office to understand the situation, we added missing pages, moved pages that seemed to be grouped incorrectly, flattened pages that didn't need an extra level of depth, and reworded confusing category names. That gave us the content-based classification and hierarchy shown below.

![](/images/blog/cse-renewal/4.jpg)

![](/images/blog/cse-renewal/5.jpg)

The site is offered in both Korean and English. We initially planned the two versions separately, as before, but later merged them (as shown on the right) so only the category names need translating — for a consistent user experience and cleaner development.

### Classifying page structures

Even so, starting the actual design still felt daunting. With so many existing pages, it wasn't clear where to begin or how the two of us should split the work.

Having classified pages by purpose (content), we next tried classifying them by form. By form I mean layout — which had to reflect the kinds of information each page contains. So we spent some time chewing through every corner of the old site.

![](/images/blog/cse-renewal/6.jpg)

![](/images/blog/cse-renewal/7.jpg)

That's when it started to become clear how to group and tackle the pages, and we ended up with 11 simplified, wireframe-like structures. We had combed through the trees to see the forest. This helped not only with UI design, but also in getting the whole team to picture the same thing and in helping the backend design its APIs.

![](/images/blog/cse-renewal/8.jpg)

### Defining the concept

Next, we set out to define the concept and design style.

The school asked for a site that was "meaningful because students made it" (rather than an outside agency), "experimental," and "easy to use." We searched hard for references, but there weren't many department websites in Korea that felt handmade while also being tailored with UI, UX, and performance in mind.

Schools — and departments in particular — tend not to have strong branding. In such cases, I think the easiest way to make a website look polished is to use high-quality videos or photos of the department. But source material was so scarce that we had to take the photos for the "Facilities" page ourselves on our phones.

So we decided to first find what felt "CSE-like." The premise was to capture CSE's nerdy charm without turning it into a lighthearted meme. Given the large volume of information and the wide range of visitors — students and staff, prospective students and parents, and academics of all ages from around the world — we judged that the personality shouldn't be too strong. We also hoped the renewed site would be used for a long time.

![](/images/blog/cse-renewal/9.jpg)

![](/images/blog/cse-renewal/10.jpg)

After looking at countless images and visiting many sites, the keywords that remained were ASCII art, circuits, and files — along with the challenge of evoking software and hardware, digital and analog, in harmony.

For the main color, we kept orange, the symbolic color of the College of Engineering, and decided to mix in gray. But since readability and the main page graphics had to be considered, we held off on fixing exact color codes. Before settling, I must have tried hundreds of oranges and grays in the color palette...

![](/images/blog/cse-renewal/11.jpg)

For type, we went through Noto Sans and Yoon Gothic before finally settling on Pretendard throughout.

---

## 2. First Design

### UI design and sheer volume

About three weeks after the kickoff meeting, we began UI work in earnest.

![](/images/blog/cse-renewal/12.jpg)

![](/images/blog/cse-renewal/13.jpg)

Together with my fellow designer, I turned reusable elements into components in Figma, and we split up the structures classified above. While each of us designed our own parts, we always made sure the other reviewed them at least once before development — and over time, our perspectives grew quite similar. With so many pages, we pushed for speed by focusing on sheer volume.

![](/images/blog/cse-renewal/14.jpg)

![](/images/blog/cse-renewal/15.jpg)

We also had to build an admin page for the department office staff. With a tight development schedule, offering editing for every page wasn't feasible, so we prioritized Notices, News, and Seminars — the sections with the most posts.

![](/images/blog/cse-renewal/16.jpg)

We ran QA as things got developed, too. I'm truly grateful to the frontend teammates who stuck with me through endless rounds of revisions...

### Collaboration: Making the most of Figma

With so many categories and subpages, and several people designing, developing, and revising them in less than two months, things got hectic at times. I felt we needed an environment where structure and progress were visible at a glance, so I proposed organizing Figma into sections by category and by status, as below.

![](/images/blog/cse-renewal/17.jpg)

![](/images/blog/cse-renewal/18.jpg)

![](/images/blog/cse-renewal/19.jpg)

Personally, it boosted my productivity a lot and turned out to be quite useful. At the end, we gathered all the final versions in one place.

### A UX case: Designing the navigation bar

We worked through many UX questions; let me share just one.

The GNB (Global Navigation Bar), the most important tool for exploring a site, usually sits at the top of desktop screens, and the old site followed that pattern too. But we judged there were too many categories to place at the top, and reaching subcategories was cumbersome, so we made a left sidebar the main navigation that expands to reveal subcategories. (We referred to the SNU main website, which won an iF Design Award.)

We called these the Orange NB (depth 1) and the Gray NB (depth 2). On top of that, we introduced a Sub NB (depth 2) so that users entering from a parent category could move between subcategories without opening the navigation bar.

Deciding how to display these three navigation bars was a long journey of its own.

The Orange NB was wide and felt cramped on subpages, so we wanted to collapse it as naturally as possible. We made it collapse automatically everywhere except the main page, added a collapse/expand button, and — for users who expanded it even once — saved that preference (treating them as users who want to explore around) so it would stay expanded from then on.

![](/images/blog/cse-renewal/20.jpg)

However, we later received negative feedback about this unfamiliar logic, and some responses even contradicted each other. It seemed we had given users a poorly designed kind of autonomy. In the end, we decided to remove the collapse/expand button entirely.

![](/images/blog/cse-renewal/21.jpg)

- Hovering a category in the Orange NB expands the corresponding Gray NB.
- Main page: the Orange NB stays expanded.
- All other pages: the Orange NB is collapsed, and the Sub NB is shown instead.
- What's lost by having it collapsed by default is compensated for with UI that indicates the current location.

People now tell us the current approach is "intuitive, at least," so it feels like a case where, after going around in circles, I learned how to find the right compromise between convenience, intuitiveness, and aesthetics.

---

## 3. Beta Tests and Feedback

### Dark mode as the default?

![](/images/blog/cse-renewal/22.jpg)

![](/images/blog/cse-renewal/23.jpg)

![](/images/blog/cse-renewal/24.jpg)

After a few small meetings with our advisor and the department office, and a stretch of development, a meeting with the school arrived in late August 2023, just before the start of the semester — our planned release date. With most core features complete, we presented a comparison with the old site along with main page drafts, and received this feedback: dark mode as the default seemed better among the drafts; performance should be flawless; unnecessary design elements could be dropped; and it could be a bit more experimental.

We were supposed to release soon... and that was our first meltdown. I was worried about readability, but we decided to take on the major overhaul of switching the colors to a dark-mode default.

### A tearful beta test and feedback period

So, over about three weeks, we changed the colors, made the main page graphics more experimental, and completed and deployed the first design. Since the new site wouldn't run alongside the old one but replace it entirely from day one, we decided to take a long, careful feedback period and ran a variety of user tests.

- Usability review by a UI professor in the Department of Design who had worked at Figma
- Closed Beta Test: a Google Form for WaffleStudio members, the department office, and faculty
- Open Beta Test: a Google Form for all students, shared via Everytime, department group chats, and a post on the old site

![](/images/blog/cse-renewal/25.jpg)

![](/images/blog/cse-renewal/26.jpg)

![](/images/blog/cse-renewal/27.jpg)

We got through the first two stages fine, but the team had its second meltdown during the OBT. We'd expected the experimental design to be divisive for a department website, but it was our first time publicly exposing our design to an anonymous crowd — including anonymous communities — and being judged. I cried while trying to separate hurtful criticism and personal attacks from actual feedback... ᵕ ᵕ̩̩ and just gritted my teeth and pushed through. I'd written in my diary that a design I used to enjoy showing people had, for the first time, become something I wanted to hide.

![](/images/blog/cse-renewal/28.jpg)

In any case, the message came through that the biggest causes of negative feedback were the eye-straining dark mode and the overly experimental graphics. Since those had been core requirements, we briefly wondered what to do, but continuing as-is was impossible. To make matters worse, an internal department meeting was coming up. Reactions there were sharply divided as well, and we were told of objections to such a polarizing design.

On one hand, we hadn't managed to design the client's requirement — "an experimental dark-mode site" — in a way that drew a positive response. On the other, it taught me just how strong the resistance to experimental sites can be, even if we'd anticipated it — and that design inevitably touches on matters of taste. After three exhausting months of running nonstop, and with the semester starting and little time to spare, we coordinated with the department to postpone the release to the next break and decided to rebuild the site.

---

## 4. Final Design

### Dark mode? Light mode? Arriving at a hybrid

Funnily enough, pausing during the semester eased my mind, and as memories got rosier I found myself wanting to do it again... We set the direction for revisions: put readability first, keep the concept and elements, but simplify the design so it's less divisive.

Dark mode as the default was too much, but a half dark mode seemed okay — partly for visual density, and because I find it generally easier to make things look good on a dark background than on white.

For the dark-mode background gray, darker meant worse readability and lighter meant less polish; redder felt aggressive (hacker-ish), and bluer clashed with the orange and looked clunky. Finding the middle ground was key. After several rounds of readability testing, we finalized the main colors like this.

![](/images/blog/cse-renewal/29.jpg)

![](/images/blog/cse-renewal/30.jpg)

We worked hard to maximize dark-mode readability, but it still wasn't suitable for long text like notices. So we decided to use a light background for body content areas and a dark background for the remaining conceptual parts to keep the density. Reactions were that it was clearly better overall, though some said it felt a bit ambiguous. Balancing dark and light well was the crux, and that question carried over into making the main page graphics.

### Finalizing the main page

![](/images/blog/cse-renewal/31.jpg)

The main graphic was the first thing we started and the last thing we finalized. To express CSE's identity implicitly, without being a matter of taste, we went through endless drafts, and after several votes arrived at the elements below.

![](/images/blog/cse-renewal/32.jpg)

We created assets: a background shaped from the letters "CSE," and a module representing "SNUCSE" in binary. We also decided to refine a sentence excerpted from the department introduction and use it as the headline. The school offered to cover font costs, so we adopted Sandoll Jeongche, but shortly after release we exceeded the base traffic and the monthly cost grew far too large. For now, we've replaced it with Gowun Batang.

![](/images/blog/cse-renewal/33.jpg)

### Making it responsive for mobile

Mobile responsiveness was one of the core requests. The old site wasn't responsive, so on small screens you had to awkwardly zoom in and out.

It was the first responsive project for both the designers and the frontend developers, so we studied by looking up references. (LINE's website, with its left sidebar, was a great reference for the logic, and the SNU main website for the navigation bar.)

Since the body already had fairly generous side margins, we started with a single breakpoint at mobile resolution, without a separate tablet view. But in practice, always using a fixed layout at desktop sizes felt awkward. In the end, we set 1200px (a compromise we treated as a small desktop resolution) as the minimum width: above it the layout is fluid, and below it the layout stays fixed, even if parts get cut off.

![](/images/blog/cse-renewal/34.gif)

![](/images/blog/cse-renewal/35.jpg)

Turning the finished web into a mobile version didn't take as long as I'd feared. For each of the layouts we'd classified (the 11 structures from earlier), I designed two or three pages, derived generalized rules like those in the image above, discussed them with the frontend developers, applied them across the board, and then handled exceptions as we found them. In other words, only some pages' responsive designs were actually made in Figma.

---

## 5. Release, and After

### Maintenance and remaining tasks

![](/images/blog/cse-renewal/36.jpg)

![](/images/blog/cse-renewal/37.jpg)

At the very end, we paid for the font, applied it... and when we released, I felt relief — "finally!"

When someone reached out to say they immediately noticed the main graphic was binary, and that we'd nailed the taste of CSE students, I felt like that one comment was what I'd been running for all along.

![](/images/blog/cse-renewal/38.jpg)

I also made some of the images and PDF documents used on the site, and it's nice to spot them around.

Now, during the first break since release, I'm building the various admin pages we had put off, and unifying components that had become too diverse (because we did everything we wanted) under the rule "same function, same look." The developers are optimizing code and checking for web vulnerabilities.

I'm also tidying up the chaotic Figma file, preparing to systematize a design system, and thinking about how best to sustain collaboration with the department office staff, who are the site's main administrators.

### Closing

Two inexperienced designers, whose real-world experience amounted to internships and side projects, and five developers came together and went through trial and error on everything from A to Z. At times, the school as a client felt unnecessarily difficult. But I definitely learned a lot.

When I once complained, "Why is this so hard?", someone said the problems came from "being sincere where you're not supposed to be." That might be the phrase that runs through this whole project. Still, the teammates who kept our weekly meeting-and-meal tradition and ran together closely had a lot of affection and sense of responsibility for this site. I felt reassured having a fellow designer with whom I could discuss and decide even the smallest things, and to our do-it-all frontend and our quietly steadfast server teammates — great work, everyone!!

I'm also grateful to Bacchus, the department's server club we collaborated with, the many club members who helped as if it were their own work, and the professor who gave us advice.

Adding... removing... decorating... and paring back — I hope the site gets used the way we intended.

I'll be maintaining it for the next few years and polishing it bit by bit, so bug reports and feedback (and recruiting...) are always welcome :)

Thanks for reading this long post!

---

SNU Design Union (SNUSDY) Instagram | [@snu_sdy.official](https://www.instagram.com/snu_sdy.official)

SNU Design Union (SNUSDY) Linktree | [linktr.ee/snu_sdy.official](https://linktr.ee/snu_sdy.official)

![](/images/blog/cse-renewal/39.jpg)
