---
title: "I put a tracker on my own portfolio. Here's what week one told me."
date: 2026-10-27
tags: [notes, portfolio, google-analytics, web-analytics, data]
lang: en
summary: "19 visitors, 37 visits, 291 page views: what one week of Google Analytics taught me about my own portfolio, including the fact that my biggest visitor was me."
seo_description: "What adding Google Analytics to my portfolio taught me: where visitors come from, what they open, and the bugs the data caught."
cover: portfolio-analytics/cover.jpg
cover_alt: "The new portfolio homepage"
---

<!--
Authoring notes (comments never reach the page):
[ANIM: id]  full-width animated explainer   [SIDE: id]  small visual in the side column
Both live in src/components/blog/Anims.tsx. Media for this post goes in src/content/blog/portfolio-analytics/.
Data source: GA4, Oct 21 – Oct 26, 2026 (tracking start → last processed day)
-->

# I put a tracker on my own portfolio. Here's what week one told me.

[SIDE: bottle]

Most portfolios are a bit like a message in a bottle. You build it, you throw it into the internet, and you hope someone finds it. Maybe a recruiter reads it. Maybe nobody does. You'll never know.

I study AI & Data Science. My whole field is about *not guessing*. So it felt a little embarrassing that I had no idea what happened to my own website once I hit deploy.

So I rebuilt my portfolio, and this time I gave it eyes.

---

## Why I rebuilt it in the first place

My old portfolio did its job, but it undersold what I'd actually done. Projects were buried, the contact info was out of date, and it looked like every other student template on GitHub Pages.

The new one has a clearer structure: who I am, what I've built, and how to reach me. It's fully bilingual, French and English, and every project, from **VitaLight** to **WellPack Manager**, gets its own page instead of one line in a list.

It's built with React, TypeScript and Vite. Every page is pre-rendered to plain HTML at build time, so it loads fast and search engines can read it, and it deploys itself to GitHub Pages on every push.

But the part I want to talk about isn't the design. It's what happens *after* someone lands on the page.

---

## Giving the site eyes: Google Analytics

[ANIM: data-flow]

Here's the simple version of how it works:

1. Every page loads a small script from Google (the **gtag** snippet).
2. When something happens — a page view, a click, a scroll — the script sends a tiny "event" to Google Analytics.
3. Google aggregates those events into reports: how many people came, from where, on what device, and what they did.

Page views, scrolls and file downloads come for free. The interesting part is **custom events**, the things *I* decided were worth measuring:

- `project_open`: someone opens a project
- `cv_download`: the closest thing I have to a "conversion"
- `github_click` and `email_click`: someone wants to see my code or talk to me

[ANIM: realtime]

The first time I opened my site on my phone and watched "1 active user" appear in the Realtime view, I was way too happy about it. That one user was me. Still counts.

### A quick word on privacy

[SIDE: consent]

I'm in France, and tracking people without asking isn't OK here (or anywhere, really). So the site shows a small cookie banner where "Accept" and "Refuse" are equally easy to click, and Google Analytics isn't even loaded until you accept. Your choice is remembered for six months, and you can change it any time from "Cookie settings" at the bottom of every page. No names, no personal data, just aggregated numbers.

---

## So… what did the data say?

Tracking went live on **October 21**. This is one week of data: **19 visitors, 37 visits, 291 page views.** That isn't big data. It's barely data. But it's *my* data, and it already told me a few honest things.

**1. LinkedIn brings the people.**
62% of visits show up as "direct", meaning someone typed or pasted the link. A good chunk of that is me (more on that below). The real driver is **LinkedIn, with 30% of visits**, mostly from the week I shared the site: 33 of the 37 visits happened in the first four days. Then it dropped to two a day. Launch spike, then reality.

[ANIM: traffic-sources]

**2. GitHub visitors are the real fans.**
Only 2 visits came from GitHub, but those people stayed almost **4 minutes** each. People coming from LinkedIn stayed about a minute. Makes sense: if you click through from my code, you actually want to see the projects.

**3. 84% of visitors were on their phone.**
16 out of 19. And a lot of them weren't even in a real browser. They opened the site *inside* the LinkedIn or Instagram app. So the version of my portfolio most people actually saw is the small one, not the nice desktop layout I spent hours on.

[SIDE: phones]

**4. The Projects page does the heavy lifting.**
It got **37% of all page views** (FR and EN combined), way more than the homepage. People opened a project 27 times. By page views, the most visited project was **WellPack Manager** (17 views), then **VitaLight** (13). At the bottom: **AI Study Buddy** and the **Dubai Al Safa 2 Park** project with 3 views each. Sorry, park. 🌳

[ANIM: project-race]

**5. 5 people downloaded my CV.**
Out of 19 visitors, that's about 1 in 4. Before I celebrate, though…

---

## Plot twist: my biggest visitor was me

[SIDE: it-was-me]

When I looked closer, one visitor stood out: a single desktop, in the same town every time, always on Edge. That one visitor had 13 sessions, around **5 minutes per visit**, and almost **half of all the events** on the site.

That's me. Testing, showing the site to people, clicking every button to check it works.

It's the most classic analytics mistake: forgetting to filter out your own traffic. It inflates "direct" visits, the desktop numbers and time-on-site. So the real story is smaller and more mobile than the totals suggest. Good lesson for any data project: **before you trust a number, ask who's in it.**

---

## What else the data caught

Analytics isn't just for counting visitors. It's also a pretty good bug detector:

- **A 404 page got hit while I was watching Realtime.** Somewhere there's a broken link.
- **11 page views with no page title at all**, and 0 seconds on page. Something isn't loading properly.
- **The same page counted twice**, once as `/vitalight` and once as `/vitalight/`, which splits the stats.
- **My CV download is counted twice**, by my custom event and by Google's automatic one.
- **I can see *that* people open projects, but not *which* ones.** The event sends the project name, but I never told Google Analytics to report it. That's why I used page views above.
- **Not a single LinkedIn click.** The button is tracked, but in a whole week nobody clicked it, even though LinkedIn sent 30% of the visits. People come *from* LinkedIn, but they don't go back *to* it.

[ANIM: bug-hunt]

---

## What I'm changing

Data is only useful if it changes something. So here's the to-do list it gave me:

- **Filter out my own visits** so the numbers are about real visitors
- **Make my LinkedIn easier to reach**, and report *which* project people open
- **Fix the 404, the missing titles and the duplicate URLs**
- **Polish the mobile experience** first, because that's what 84% of people actually see
- **Push the projects that get ignored**, or rethink how I present them

[ANIM: before-after]

It's a tiny version of what I want to do professionally: measure, understand, change, measure again. I'll share the "after" numbers in a follow-up.

---

## What's next

[SIDE: wave]

This is the first post on this blog, and the plan is to keep it casual and honest: what I'm building, what broke, what I learned. Next up: **VitaLight**, my health-AI startup project. Where the idea came from, what I built, and what I learned taking it to the Microsoft Imagine Cup.

If you clicked "Accept" on the banner, you've just been counted (hi 👋). Have a look around, open a project or two (the park one needs love), and if you want to talk AI, data, or an alternance opportunity, I'm on [LinkedIn](https://www.linkedin.com/in/assim-ben-ahmed-6268741a8/) and at [assimben2004@gmail.com](mailto:assimben2004@gmail.com).

— Assim
