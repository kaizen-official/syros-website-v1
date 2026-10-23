# Syros Healthcare Website

Official website for Syros Healthcare and Gajraj Hospital, Karnal. The site presents the hospital network, doctors, specialities, leadership, health packages, partnership opportunities, careers, and patient contact options.

Live site: [www.syroshealthcare.in](https://www.syroshealthcare.in)

## Tech stack

- Next.js 16 with the App Router and Turbopack
- React 19
- Tailwind CSS 4
- Framer Motion
- Tabler, Lucide, and React Icons
- FormSubmit.co for website form delivery

## Main pages

- `/` — Homepage
- `/about` — About Syros Healthcare
- `/hospitals` — Hospital network
- `/doctors` and `/doctors/[slug]` — Doctor directory and profiles
- `/specialities` — Medical specialities
- `/health-packages` — Health packages and booking enquiries
- `/leadership` — Leadership team
- `/quality-governance` — Quality and governance
- `/hospital-management` — Hospital management services
- `/insurance` — Insurance and TPA information
- `/partner` — Hospital partnership enquiries
- `/careers` — Career opportunities
- `/contact` — Contact and appointment requests

## Getting started

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build and run it locally:

```bash
npm run build
npm start
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Turbopack development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Run the production server |
| `npm run lint` | Run ESLint |

## FormSubmit integration

All public forms submit to the internal endpoint at `app/api/submit-form/route.js`. The endpoint forwards submissions to FormSubmit's AJAX endpoint for:

```text
syroshospitals@gmail.com
```

The integration covers:

- Header appointment form
- Homepage appointment and partnership forms
- Mobile floating appointment form
- Contact form
- Careers form
- Partnership form
- Health-package booking form

After FormSubmit confirms a successful submission, the visitor is redirected to the homepage (`/`). Email replies use the visitor's supplied email address when available, and submissions use FormSubmit's table email template.

### One-time activation

FormSubmit requires the recipient to approve a new form before it forwards submissions. An activation request has been sent to `syroshospitals@gmail.com` for `https://www.syroshealthcare.in`.

1. Open the FormSubmit activation email in that inbox.
2. Click **Activate Form**.
3. Submit one website form and confirm that the enquiry arrives in the inbox.

If the message is not visible, check the Spam folder. The website does not require Google Sheets credentials or form-related environment variables for the current FormSubmit setup.

## Content management

Frequently updated content is stored in these files:

| Content | File |
| --- | --- |
| Doctors and profile details | `app/doctors/data.js` |
| Leadership team | `app/leadership/data.js` |
| Health packages | `app/health-packages/packages.json` |
| Careers content | `app/careers/content.json` |
| Blog articles | `app/blog/articles.json` |
| Header and navigation | `components/layout/header.js` |
| Footer and contact information | `components/layout/footer.js` |
| Form delivery endpoint | `app/api/submit-form/route.js` |

Static images and other public assets belong under `public/`. Doctor photographs are in `public/doctors/`, and leadership photographs are in `public/leadership/`.

## Project structure

```text
app/
  api/submit-form/       FormSubmit server endpoint
  doctors/               Doctor directory, data, and profile routes
  leadership/            Leadership data and page
  health-packages/       Health-package data and booking page
  contact/               Contact page and enquiry form
  careers/               Careers content and application form
  partner/               Partnership page and enquiry form
components/
  layout/                Shared header, footer, and page layout
  sections/              Reusable homepage sections and forms
  ui/                    Reusable interface components
public/
  doctors/               Doctor photography
  leadership/            Leadership photography
```

## Deployment

Deploy the project to a hosting environment that supports a Node.js Next.js server. The `/api/submit-form` route is dynamic and must remain available in production; a static-only export will not support form delivery.

Before publishing:

```bash
npm install
npm run build
```

After deployment, verify the homepage, doctor profiles, contact details, responsive navigation, and one submission from each form type.
