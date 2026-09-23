# Style Sphere

Website for **Style Sphere**, a personal image and professional development brand by Sukanya Saha.

The website presents Style Sphere's services for individuals and organisations, with a focus on personal image, professional presence, communication, and practical soft-skills development.

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Next/Image**
* **Google Fonts** — DM Sans & DM Serif Display

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── sections/       # Homepage sections
│   └── ui/             # Reusable UI components
│
├── data/
│   └── siteContent.ts  # Website content and service data
│
public/
└── images/             # Local website images and assets
```

## Content

Most homepage content is centralised in:

```text
src/data/siteContent.ts
```

Update content there where possible rather than editing text directly inside individual components.

## Styling

Global design tokens and typography are defined in:

```text
src/app/globals.css
```

The site uses:

* DM Serif Display for editorial/display typography
* DM Sans for body and interface text
* Neutral warm surfaces
* Dark green as the primary text colour
* Burgundy as an accent colour

## WhatsApp CTA

The website includes:

* A persistent **"Book a 10-minute demo"** floating CTA
* A contextual booking prompt triggered when visitors reach the Services section

The WhatsApp number and pre-filled message are configured inside the relevant CTA component.

Before deployment, replace the placeholder WhatsApp number with the client's actual number.

## SEO

Basic metadata, Open Graph information, robots configuration, and the site's canonical base URL are configured in:

```text
src/app/layout.tsx
```

The production site is:

```text
https://www.thestylesphere.me
```

## Deployment

The project can be deployed as a standard Next.js application.

Before deployment, check:

* Production domain
* WhatsApp number
* Open Graph image
* Image alt text
* SEO metadata
* Production build with `npm run build`

## Development Notes

Keep reusable UI components in `components/ui` and page-specific sections in `components/sections`.

When adding or changing content, prefer updating `siteContent.ts` rather than duplicating content across components.
