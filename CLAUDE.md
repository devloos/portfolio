# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Build for production
pnpm generate     # Generate static site
pnpm preview      # Preview production build
```

## Architecture

This is a **Nuxt 4** portfolio site with Vue 3, Tailwind CSS 4, and shadcn-nuxt components.

### Directory Structure

The app uses Nuxt 4's `app/` directory convention:
- `app/pages/` - Route pages (index, experiences, projects, youtube, resume, detours, articles)
- `app/components/` - Vue components (UI components go in `app/components/ui/` via shadcn-nuxt)
- `app/composables/` - Vue composables (auto-imported)
- `app/assets/constants/` - Static data for experiences and projects
- `app/types/` - TypeScript type definitions
- `app/lib/utils.ts` - Utility functions (includes `cn()` for Tailwind class merging)
- `server/api/` - Nitro server API routes

### Key Integrations

- **Tailwind CSS 4** via Vite plugin - CSS variables defined in `app/assets/css/main.css` with light/dark theme support using OKLCH colors
- **shadcn-nuxt** - UI components installed to `app/components/ui/`
- **@nuxt/icon** - Icon system using Lucide icons via CSS mode
- **@nuxt/fonts** - Instrument Sans and Instrument Serif fonts
- **@nuxtjs/color-mode** - Dark mode preference (defaults to dark)
- **ImageKit CDN** - Images served from `https://ik.imagekit.io/devlos/portfolio`

### Runtime Config

Environment variables accessed via `useRuntimeConfig()`:
- `YOUTUBE_API_KEY` (server-side only)
- `NUXT_BASE_URL` (public)

### Path Alias

`@/*` maps to `./app/*`

## Code Style

- Single quotes, 2-space tabs, 90 char line width
- Prettier with tailwindcss plugin for class sorting
- ESLint extends Nuxt config with `vue/html-self-closing` disabled
- Use comments sparingly; only comment complex code
