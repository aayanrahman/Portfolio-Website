# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

The Next.js app lives in `/my-portfolio/`. All commands below should be run from that directory.

```
my-portfolio/
├── app/             # Next.js App Router — page.tsx composes all sections
├── components/      # One file per portfolio section + shared primitives
│   └── ui/          # Shadcn/ui components (Radix UI wrappers)
├── lib/utils.ts     # cn() helper (clsx + tailwind-merge)
└── public/          # Static assets: images, resume PDF, favicon
```

## Commands

```bash
cd my-portfolio
npm run dev      # Dev server with Turbopack at localhost:3000
npm run build    # Production build
npm run lint     # ESLint (Next.js + TypeScript rules)
```

No test framework is configured.

## Architecture

**Single-page composition**: `app/page.tsx` imports and stacks all section components. Each section (`Hero`, `About`, `Projects`, `Experience`, `Education`, `Skills`, `Personal`, `Contact`) is a self-contained component in `/components/`.

**Section wrapper**: `Section.tsx` provides the standardized layout for every portfolio section — consistent padding, optional accent color (`mint`, `blush`, `blue`), and a Japanese subtitle slot.

**Static data**: All content (project details, work history, skills) is defined inline in each component — no CMS or external API.

**Styling**: Tailwind CSS 4 with custom OKLCH color variables in `app/globals.css`. Use hardcoded hex values (e.g., `bg-[#FCFCFA]`) to match the existing palette rather than Tailwind defaults.

**Fonts**: Inter + Plus Jakarta Sans loaded via `next/font` in `app/layout.tsx`.

**Path alias**: `@/` maps to `my-portfolio/` root (configured in `tsconfig.json`).

**Client components**: Navigation uses `"use client"` for scroll detection. Add `"use client"` only when browser APIs or React state are needed.

## Key Notes

- ESLint is intentionally disabled during `npm run build` (set in `next.config.js`) — lint separately.
- New UI primitives should be added via Shadcn CLI to maintain consistency with the existing `components.json` config (New York style, neutral base color).