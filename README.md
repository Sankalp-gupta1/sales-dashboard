# Sales Dashboard - Frontend Final Assessment

A complete Next.js 15 sales dashboard project built with TypeScript, Tailwind CSS and Recharts. The app visualizes mock sales data for 2022, 2023 and 2024 and follows an atomic structural principle.

## Features

- Dashboard page at `/dashboard`
- Mock sales dataset for 2022, 2023 and 2024
- KPI cards for revenue, orders and best month
- Custom sales threshold input filter
- Switch between Bar, Line and Pie charts
- Recharts chart components
- Atomic folder structure: atoms, molecules, organisms
- Responsive design using Tailwind CSS

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Recharts

## Project Structure

```txt
src/
  app/
    dashboard/page.tsx
    page.tsx
    layout.tsx
    globals.css
  components/
    atoms/
    molecules/
    organisms/
  data/
    sales.ts
```

## Setup

```bash
npm install
npm run dev
```

Open the project at:

```txt
http://localhost:3000
```

Dashboard page:

```txt
http://localhost:3000/dashboard
```

## Build

```bash
npm run build
npm run start
```

## What I Did

I created a professional sales analytics dashboard using Next.js 15. The dashboard uses mock monthly sales data for 2022, 2023 and 2024. Users can filter records using a custom sales threshold input and switch between multiple chart types. Components are separated using atomic structure so the project is easy to maintain and extend.

## Deployment

Deploy this project on Vercel and paste the live URL in the assessment form.
