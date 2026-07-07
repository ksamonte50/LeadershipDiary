# Leadership Diary

A personal leadership development diary — a single-page, scrollable, long-form interactive site built for MDes Summer 2026, Leadership by Design.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll-triggered animations)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (Fraunces + Helvetica Neue fonts)
│   ├── page.tsx            # Single scrolling page (all sections)
│   └── globals.css         # Tailwind theme + custom styles
├── components/
│   ├── Hero.tsx            # Opening title card
│   ├── Resources.tsx       # Toolkit/reference card grid
│   ├── Baseline.tsx        # Clifton Strengths bars + Superpowers + reflection
│   ├── WeeklyEntry.tsx     # Single week block (rendered per entry)
│   ├── FinalReflection.tsx # Capstone section (10 subsections)
│   └── ProgressTrail.tsx   # Dotted trail side progress indicator
├── content/
│   ├── entries.ts          # Weekly diary entries (DiaryEntry[])
│   ├── baseline.ts         # Clifton Strengths + Superpowers data
│   └── final.ts            # Final reflection (10 fields)
```

## Adding Content

All content lives in the `/content` directory. To add or edit entries:

1. **Weekly entries** — append objects to the array in `content/entries.ts`
2. **Baseline results** — edit `content/baseline.ts`
3. **Final reflection** — edit `content/final.ts`

No component edits needed — the page renders directly from the data files.

## Deploy to Vercel

Push to GitHub and import the repo in [Vercel](https://vercel.com). Zero configuration needed.
