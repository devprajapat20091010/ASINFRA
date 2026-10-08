<<<<<<< HEAD
# AS Infra Concrete Pvt. Ltd. — Corporate Website

A premium, fully **static** corporate website for **AS Infra Concrete Pvt. Ltd.** — a ready-mix concrete and infrastructure solutions company.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Lucide React (icons)
- No backend · No database · No authentication · No external APIs

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/leadership` | Leadership / Founder |
| `/team` | Team |
| `/products` | Products & Services |
| `/ready-mix-concrete` | Ready Mix Concrete |
| `/infrastructure` | Infrastructure / Plant |
| `/projects` | Projects |
| `/quality` | Quality & Technology |
| `/gallery` | Gallery (with lightbox) |
| `/contact` | Contact Us |

## Editing content (no UI changes needed)

All editable content lives in `/data`:

| File | What it controls |
| --- | --- |
| `data/company.ts` | Company info, hero, highlights, values, vision/mission, contact placeholders, navigation links |
| `data/images.ts` | Centralized image paths |
| `data/products.ts` | Products & services cards |
| `data/founders.ts` | Founder / leadership profiles |
| `data/team.ts` | Team member profiles |
| `data/projects.ts` | Project portfolio (currently empty → professional empty state is shown) |
| `data/gallery.ts` | Gallery images and categories |

## Replacing images

Drop files into the matching folder under `/public/images/`:

```
/public/images/
  logo/       → company logo (navbar, footer, SEO)
  founders/   → founder / leadership portraits
  team/       → team member photos
  factory/    → plant & facility photos
  projects/   → project photos
  machinery/  → machinery photos
  concrete/   → concrete / pouring photos
  gallery/    → gallery photos
  hero/       → hero background images
```

Then update the path in `data/images.ts` or the relevant data file. Components never hard-code image paths.

## Placeholder policy

Text wrapped in `[square brackets]` is an **editable placeholder**. No company facts, statistics, certifications, awards, projects, clients, addresses, founders, phone numbers or email addresses have been invented. Replace every placeholder with verified information before publishing.
=======
# ASINFRA
>>>>>>> 2afa5997013bcba6ffd5f871b1807db0059b6d33
