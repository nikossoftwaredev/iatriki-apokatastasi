# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a medical rehabilitation clinic website for Dr. Stavros N. Dimitrakopoulos, a physiatrist (rehabilitation medicine physician) in Ilioupoli, Greece. The project is built with Next.js 15 and uses modern web technologies.

## Development Commands

```bash
# Install dependencies (project uses pnpm)
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture & Key Technologies

### Core Stack
- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: shadcn/ui (New York style, zinc color scheme)
- **Package Manager**: pnpm

### Project Structure
- `/app` - Next.js App Router pages and layouts
- `/components/ui` - Reusable UI components from shadcn/ui
- `/lib` - Utility functions (includes `cn` helper for className merging)
- `/public` - Static assets

### Key Configuration
- **TypeScript**: Path alias `@/*` maps to project root
- **Tailwind CSS**: Version 4 with CSS-in-JS utilities
- **Fonts**: Using Roboto from Google Fonts via Next.js font optimization
- **Language**: Site metadata is in Greek, targeting Greek-speaking users

## Development Guidelines

### Component Development
- Use shadcn/ui components from `/components/ui` as building blocks
- Follow the existing pattern for component variants (see button.tsx)
- Use the `cn()` utility from `/lib/utils` for conditional className merging

### Styling
- Tailwind CSS v4 is configured - use utility classes
- Global styles are in `/app/globals.css`
- Component-specific styles should use Tailwind utilities with `cn()` helper

### TypeScript
- Strict mode is enabled - ensure proper typing
- Use the `@/` path alias for imports from the project root

## Important Notes

- The project is in early development stage with minimal content implemented
- Site content should be in Greek to match the target audience
- This is a medical professional's website - maintain professional tone and accuracy
- No testing framework is currently set up