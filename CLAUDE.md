# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Saurabh Bhardwaj (Lead AI Architect), served as a GitHub Pages user site (https://bhardwaj-saurabh.github.io/). Pure static HTML/CSS/JS — no build system, no package manager, no tests, no linter. Deployment is just pushing to `master`.

## Development

Preview locally with any static server, e.g.:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000. Opening `index.html` directly in a browser also works.

## Structure

Four source files, all at the repo root:

- `index.html` — the entire single-page site: nav (desktop + hamburger), then sections `#profile`, `#executive-impact`, `#leadership`, `#case-studies`, `#projects` (Hands-On Builds), `#about`, `#experience`, `#skills` (Technical Foundation), `#testimonials`, `#speaking`, `#certifications`, `#contact`, plus the chatbot markup and a JSON-LD `Person` structured-data block at the bottom. The site is positioned for Head-of-AI-level roles: leadership/strategy content leads, hands-on content is secondary.
- `style.css` — all styling. Design tokens (colors, gradients, shadows) are CSS variables in `:root` at the top; a dark charcoal + purple palette. Most responsive rules live here too.
- `mediaqueries.css` — a small supplemental set of breakpoint overrides.
- `script.js` — all behavior. Everything is wired from a single `DOMContentLoaded` handler that calls `init*` functions: AOS scroll animations, skill filter buttons, contact form, smooth scroll, back-to-top, navbar scroll state, and the chatbot. (Particles and typed.js init functions exist but are commented out.)

External libraries are loaded from CDNs in `index.html` (AOS, particles.js, typed.js, Font Awesome, Google Fonts) — nothing is vendored.

## Things to know

- **Portfolio content is duplicated in three places** and must be kept in sync when facts change (roles, projects, stats, certifications, contact info): the visible HTML sections in `index.html`, the chatbot's `knowledgeBase` object inside `initChatbot()` in `script.js`, and the JSON-LD block at the end of `index.html`. SEO/Open Graph meta tags in `<head>` repeat some of it too.
- **The chatbot is fully client-side and rule-based** — keyword matching against `knowledgeBase`, no API calls. Topic order matters: the first entry whose keyword matches wins, and `leadership` is deliberately first.
- **The contact form posts to FormSubmit.co** (`https://formsubmit.co/ajax/aryan.saurabhbhardwaj@gmail.com`). FormSubmit requires a one-time activation email confirmed by the recipient before messages are delivered.
- **The site is dark-theme only by design** — the old theme toggle was removed; don't reintroduce it without building real `[data-theme="light"]` overrides.
- **The Speaking & Writing section (`#speaking`) holds placeholder card templates in an HTML comment** — fill them in as real talks/articles exist; the `.speaking-card` styles are already in `style.css`.
- **The CV button still serves `assets/Saurabh_Bhardwaj_HR.docx`** — pending replacement with a PDF the owner provides.
- **Pre-existing mobile bug**: the About section (`.about-details-container`) overflows horizontally at narrow widths (~375px); this predates the 2026 repositioning.
