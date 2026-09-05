# thomas-danielse.de

Personal portfolio homepage for Thomas Danielse — aimed at recruiters and
developers who open the link from a CV or portfolio.

**Live:** https://thomas-danielse.de |
**Repo:** https://github.com/Th-Da/thomas-danielse.de

<!-- Screenshot: add docs/screenshot.png and embed with:
![Homepage screenshot](docs/screenshot.png)
-->

## Why I built this

I needed a single place to present who I am, what I have built, and how to
reach me. The site is an Angular single-page app with section navigation,
a filterable project list, and a contact form that posts to a small PHP
endpoint on the same domain.

## Features

- Landing page with intro, skills, portfolio, about, and contact sections
- Anchor navigation from the navbar (desktop links and mobile burger menu)
- Portfolio filter by stack (All / React / Angular / JavaScript)
- Project cards with links to live demos and GitHub repositories
- Contact form with validation, loading spinner, and POST to `send_mail.php`
- Separate routes for Impressum and Legal Notice (hash routing)

## Tech stack

- **Angular 18** — SPA structure, routing, reactive forms
- **Angular Material** — form fields, menu, icons, progress UI
- **SCSS** — component and global styles
- **AOS** — scroll-triggered section animations
- **ngx-spinner** — feedback while the contact form submits
- **TypeScript** — Angular baseline
- **PHP (`src/assets/send_mail.php`)** — server-side mail for the contact form

## Running it locally

Prerequisites: Node.js 18.19+ or 20.11+ (Angular 18).
This environment uses Node 22.16.0. No `engines` field is set in
`package.json`.

```bash
npm install
npm start
```

`npm start` runs `ng serve` (default: http://localhost:4200/).

Other scripts from `package.json`:

```bash
npm run build   # production build -> dist/thomas-danielse.de
npm run watch   # rebuild on change (development configuration)
npm test        # Karma / Jasmine unit tests
```

The contact form expects `send_mail.php` at
`https://thomas-danielse.de/assets/send_mail.php` in production. Locally,
mail submit will not work unless that endpoint is available.

## Status

The site is live and maintained. Content was last updated for 2026 (about
text and portfolio entries).

## About me

Thomas Danielse — software developer.
Portfolio: https://thomas-danielse.de |
Contact: home@thomas-danielse.de
