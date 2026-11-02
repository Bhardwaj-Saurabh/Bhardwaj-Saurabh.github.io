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

- `index.html` — the entire single-page site: nav (desktop + hamburger), then sections `#profile`, `#executive-impact`, `#experience`, `#leadership`, `#projects` (Hands-On Builds), `#about`, `#skills` (Technical Foundation), `#testimonials`, `#speaking`, `#certifications`, `#contact`, plus the chatbot markup and a JSON-LD `Person` structured-data block at the bottom. The site is positioned for Head-of-AI-level roles: leadership/strategy content leads, and Experience sits right after Executive Impact because recruiters scan the career timeline first. (An Enterprise Case Studies section existed briefly in Aug 2026; the owner removed it as low-value — don't reintroduce it.)
- `style.css` — all styling. Design tokens (colors, gradients, shadows) are CSS variables in `:root` at the top; a dark charcoal + purple palette. Most responsive rules live here too.
- `mediaqueries.css` — a small supplemental set of breakpoint overrides. It is linked after `style.css`, so its rules win on equal specificity.
- `script.js` — all behavior. Everything is wired from a single `DOMContentLoaded` handler that calls `init*` functions: AOS scroll animations, skill filter buttons, contact form, smooth scroll, back-to-top, navbar scroll state, scroll-progress indicator, and the chatbot. (Particles and typed.js init functions exist but are commented out.)

`assets/` holds images and the CV. `github_profile_readme.md` is not part of the site: it appears to be the source for the owner's GitHub profile README. Its "AI Architect" positioning predates the 2026 repositioning, so it is stale.

External libraries are loaded from CDNs in `index.html` (AOS, particles.js, typed.js, Font Awesome, Google Fonts) — nothing is vendored.

## Things to know

- **Portfolio content is duplicated in three places** and must be kept in sync when facts change (roles, projects, stats, certifications, contact info): the visible HTML sections in `index.html`, the chatbot's `knowledgeBase` object inside `initChatbot()` in `script.js`, and the JSON-LD block at the end of `index.html`. SEO/Open Graph meta tags in `<head>` repeat some of it too.
- **The chatbot is fully client-side and rule-based** — keyword matching against `knowledgeBase`, no API calls. Topic order matters: the first entry whose keyword matches wins, and `leadership` is deliberately first.
- **The contact form posts to FormSubmit.co** (`https://formsubmit.co/ajax/aryan.saurabhbhardwaj@gmail.com`). FormSubmit requires a one-time activation email confirmed by the recipient before messages are delivered.
- **The site is dark-theme only by design** — the old theme toggle was removed; don't reintroduce it without building real `[data-theme="light"]` overrides.
- **The Speaking & Writing section (`#speaking`) holds placeholder card templates in an HTML comment** — fill them in as real talks/articles exist; the `.speaking-card` styles are already in `style.css`.
- **The CV button still serves `assets/Saurabh_Bhardwaj_HR.docx`** — pending replacement with a PDF the owner provides.
- **Responsive widths**: the page fits 360px phones with no horizontal scroll (as of Nov 2026). Use `min(Npx, 100%)` rather than fixed px widths in new grids and boxes so they don't reintroduce horizontal scroll.
- **Visual checks**: headless Chrome won't render narrower than 500px, so a `--window-size=390,…` screenshot is really a cropped 500px page. To check phone widths, load the page inside an `<iframe width="390">` in a throwaway file. The page fades content in on scroll, so inject `[data-aos]{opacity:1!important;transform:none!important}` into that copy to see everything.
