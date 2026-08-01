# Nexiqa Global — Website

A Next.js 14 (App Router) marketing site for Nexiqa Global, built from the brand's
logo and flyer: near-black background, cyan-to-blue gradient accents, Space Grotesk
for display type, Inter for body copy, and JetBrains Mono for labels.

## Pages

- `/` — Home: hero, trust strip, services, industries served, process, closing CTA.
- `/book-a-meeting` — Standalone meeting-request page with a booking form.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx          Root layout, fonts, nav/footer
  page.tsx             Homepage
  book-a-meeting/page.tsx
  globals.css
components/
  Navbar.tsx, Footer.tsx
  Hero.tsx, TrustStrip.tsx, Services.tsx, Industries.tsx, Approach.tsx, CtaBand.tsx
  BookingForm.tsx, CircuitField.tsx
public/
  logo.png             Brand logo (from upload)
```

## Connecting the booking form

`components/BookingForm.tsx` currently simulates a submission on the client.
To make it functional, replace the `setTimeout` in `handleSubmit` with a real
request — e.g. POST to an API route, a form backend (Formspree/Basin), or a
scheduling provider (Calendly/Cal.com embed) — and wire up email notifications
on your end.

## Customizing the brand palette

Color tokens live in `tailwind.config.ts` under `theme.extend.colors` and
`backgroundImage` (for the gradients). Update the hex values there to adjust
the palette site-wide.
