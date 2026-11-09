---
title: "VitaLight: I reopened my Imagine Cup pitch two years later and built the real thing"
date: 2026-11-09
tags: [projects, vitalight, machine-learning, health-ai, startup]
summary: "In 2024, VitaLight was a pitch, a Lean Canvas and an architecture diagram. In 2026, I turned it into a working system: a trained model, a clinician app, a parent app, and an honest look at what the model can and can't do."
seo_description: "How I turned VitaLight, my Microsoft Imagine Cup 2025 health-AI concept, into a working system: explainable model, synthetic data, honest metrics."
cover: vitalight/cover-en.jpg
cover_alt: "The VitaLight demo landing page"
---

<!--
Sources: Portfolio/vitalight/README.md, api/models/vitalight-model.json (vl-2026.10.18-poisson), content.md (VitaLight detail).
Hard rules: Imagine Cup = "Participant", never "selected". Synthetic data only, not a medical device. No teammates' names.
-->

# VitaLight: I reopened my Imagine Cup pitch two years later and built the real thing

[SIDE: dusty]

In October 2024, I put together a team of four students to enter the **Microsoft Imagine Cup 2025** with an idea called **VitaLight**: use AI to estimate a newborn's health risks from both parents' medical history, so that families and doctors can prepare *before* the baby is born, not after.

We had a pitch, a Lean Canvas, a brand and an architecture plan on Azure. What we didn't have was a product. Then internships and exams happened, and VitaLight went into a folder.

Two years later, I opened that folder again. This post is about what I found in it, what I built, and what I learned on the way.

---

## Where the idea came from

The core observation is simple. A lot of what doctors ask parents during pregnancy is already a risk assessment: *Does anyone in the family have asthma? Diabetes? A heart condition?* But the answers usually end up as notes in a file. VitaLight's idea was to turn those answers into a clear picture: which conditions deserve attention for this baby, by how much, and why.

---

## The Imagine Cup: a pitch is not a product

As a **participant in the Imagine Cup 2025**, my job on the team was the story and the business side: I wrote the pitch and built the business model (a Lean Canvas), the brand and the Azure architecture plan.

Looking back, the competition taught me something I only fully understood later: **a pitch describes a product that doesn't exist yet.** We could explain *what* VitaLight would do. We couldn't show *how*, and we hadn't faced the hard questions: what data would the model learn from? How good could it ever be? What happens to a family's medical data once it's typed in?

Those questions are why VitaLight stayed a concept. They're also exactly what I wanted to answer when I came back to it.

---

## Two years later: building the real thing

The new VitaLight is a full working system, built on my own from scratch:

- **A clinician app:** enter both parents' history in a 5-step form, get a risk report for 7 conditions, follow the families over time.
- **A Python API** (FastAPI) that stores the files, runs the trained model, and keeps an audit log.
- **A parent app** that turns the report into plain language and sends one pregnancy tip a week.

[FIG: vitalight/dashboard-en.jpg | VitaLight clinician dashboard with families followed, recent assessments and cohort by attention level | The clinician dashboard. Every family in it is fictional.]

Everything runs on **synthetic data**. No real patient data exists for this project, and I didn't want to pretend otherwise. The risk figures are illustrative orders of magnitude, not a diagnosis, and VitaLight is not a medical device. The app says so itself, in plain sight.

---

## How one risk is calculated

The most important design decision was this one: **a doctor should be able to read the answer and check it.** So every risk is built the same way. Start from the risk for a baby with no particular family history, then multiply by a relative risk for each factor that applies.

[ANIM: risk-math]

For asthma, a baby with no family history starts at about **6.5%**. If the mother has asthma, the model multiplies that by 2.2. If the father has it too, by another 1.8. The result is **25.9%**, almost three times the population average of 9.1%.

[FIG: vitalight/report-en.jpg | Risk report for the fictional Martin family, with each condition compared to the population baseline and the factors behind it | The risk report: each condition against the population baseline, with the factors that moved it.]

The model behind those numbers is a **Poisson regression**, a standard method in epidemiology. I chose it on purpose. Its coefficients *are* the relative risks, so the factor bars in the report aren't an approximation added afterwards to explain a black box. The explanation **is** the model.

---

## Don't learn what biology already knows

[SIDE: punnett]

Not every condition should be learned from data. For cystic fibrosis and sickle cell disease, inheritance follows exact rules: if both parents are carriers, each child has a **1 in 4** chance. For trisomy 21, the risk follows a known table by the mother's age.

Training a model on that would only add noise to something that's already known. So VitaLight mixes two methods:

- **A trained model** for asthma, eczema, type 1 diabetes and heart defects, where many small factors add up and their size has to be estimated from data.
- **Exact rules** for genetic conditions, where the answer is already known.

For me, this was the biggest change since 2024. Back then, "AI" was the answer to everything in the pitch. Now I see it as one tool among others, and the skill is knowing when *not* to use it.

---

## The honest part: how good is it?

Because there's no real data, I wrote a simulator that generates a synthetic population of families, with a hidden "ground truth" deliberately richer than anything the model can see. Then I trained on 1.5 million simulated families and tested on 400,000 new ones.

To know what a good score even looks like, I compared three things: my original hand-written rules, the trained model, and an **oracle** that knows the true simulated risk of every baby. No model can beat the oracle. It's the ceiling.

[ANIM: model-scores]

Here's what I learned:

- **The scores are modest for everyone, including the oracle.** Parents' history only explains a small part of who gets these conditions. That's the real clinical picture, and it's why VitaLight shows risk *levels* and follow-up suggestions, never "your baby will have asthma".
- **The model reaches the ceiling for type 1 diabetes and heart defects**, and its average predictions match reality almost exactly (9.1% predicted vs 9.1% observed for asthma).
- **Gradient boosting didn't do better.** It scored the same as the simple model, so explainability cost nothing in accuracy.
- **It has known limits.** It misses some interactions, it underestimates a rare factor (mother with type 1 diabetes), and every number comes from a simulation. Validation on a real cohort is the next step, not a detail.

[FIG: vitalight/model-card-en.jpg | VitaLight model card with held-out scores against the rules, gradient boosting and the oracle, calibration plots and learned relative risks | The model card, inside the app: scores, calibration and every learned relative risk, visible to anyone.]

Writing "AUC 0.60" on a portfolio is less impressive than writing "95% accuracy". But I'd rather show a number I can defend in front of a doctor than one I'd have to explain away.

---

## Treating health data like health data

A health app isn't finished when the model works. A few things I built in from the start:

- **No consent, no assessment.** The API rejects a family file if the parents' consent box isn't checked.
- **An audit log:** who opened, created, reviewed or deleted which file, and when.
- **The right to erasure:** one call deletes a family's data (GDPR, article 17).
- **Locked sign-in** after repeated failed attempts.

[SIDE: parity]

The public demo runs without a server: the **same trained model** runs in your browser. That raised a new risk. What if the browser version and the Python version slowly started giving different answers? So the 38 automated tests include **parity tests**: 11 test families go through both, and the build fails if a single risk, level or factor differs.

---

## The parent side

[FIG: vitalight/parent-push-en.jpg | The VitaLight parent app showing a weekly pregnancy notification | The parent app: one tip a week, timed to the week of pregnancy.]

The report is written for doctors. Parents get a plain-language version, plus **one notification a week**, timed to the week of pregnancy: something to eat, avoid or check. The food-safety advice follows NHS guidance and the nutrition advice follows published research. Some messages come from the family file itself, such as a reminder about genetic counselling or about smoking.

---

## What I learned

- **A pitch is not a product.** The hard questions (data, accuracy, privacy) only show up when you build.
- **Use AI where it adds something.** Exact genetics doesn't need a model; multifactorial risks do.
- **Explainable can be just as accurate.** Here, the simple, readable model scored the same as gradient boosting.
- **Show your ceiling.** Reporting the oracle next to the model made the modest scores make sense instead of hiding them.
- **Synthetic data is a start, not a proof.** It let me build and test the whole system, but only real data can validate it.

---

## Try it

The demo is live at **[assim-ben-ahmed.github.io/vitalight](https://assim-ben-ahmed.github.io/vitalight/)**. It runs entirely in your browser, with the trained model and 8 fictional families: open a report, fill in a new family with "Fill with example", or switch to the parent view. The code is on [GitHub](https://github.com/assim-ben-ahmed/vitalight).

What's still missing: real push notifications, parents' own accounts, certified health-data hosting, and above all, validation on real data with clinicians. If you work in health data or neonatal care and this interests you, I'd genuinely like to hear what I got wrong: [LinkedIn](https://www.linkedin.com/in/assim-ben-ahmed-6268741a8/) or [assimben2004@gmail.com](mailto:assimben2004@gmail.com).

— Assim
