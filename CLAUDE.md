# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A web-based Iceland trip planning app for 5 friends (Krysse, Marcella, Flavia, Biba, Tereza) traveling **June 7–14, 2026**, flying from Brazil. Arriving Reykjavík afternoon June 7, departing morning June 14. Renting a large SUV. Airbnb already booked in Reykjavík city.

**Design aesthetic:** Indie/editorial — dark (obsidian/charcoal), moody, photo-heavy with Unsplash Iceland imagery, serif display font (Cormorant Garamond) + sans (Inter), glacier blue + moss green accent palette.

## Commands

```bash
npm run dev        # Dev server at http://localhost:5173
npm run build      # tsc + vite build → dist/
npm run preview    # Preview production build
npm run typecheck  # tsc --noEmit
```

## Tech Stack

- **Vite + React 18 + TypeScript** — HashRouter (works as static file without server config)
- **Tailwind CSS v3** — custom design tokens in `tailwind.config.js`
- **framer-motion** — available for animations
- **lucide-react** — icons
- **No backend** — polls and form state use localStorage via `src/lib/storage.ts`
- **Deployment target:** Vercel (static)

## Architecture

### Routing (HashRouter)

```
/              → Home     (hero, countdown, photo grid, weather widget)
/itinerary     → Itinerary (8-day accordion, expandable day cards)
/crew          → Crew     (participant cards + flight details form)
/polls         → Polls    (interactive voting, localStorage-persisted)
/practical     → Practical (tabs: tickets to book / packing checklist / car rental)
/playlist      → Playlist  (Spotify embed slot + track suggestions)
```

### Data layer (`src/data/`)

All content is static TypeScript files — edit these to update itinerary, restaurant picks, packing items, polls, etc. No API calls except the Open-Meteo weather widget (free, no key needed).

- `itinerary.ts` — 8-day plan with meals (tagged `fine`/`casual`/`quick`), highlights, tips, tickets needed
- `participants.ts` — crew profiles with dining preferences and personality notes
- `polls.ts` — poll questions and options (votes stored in localStorage)
- `practical.ts` — packing list (categorized), tickets with urgency flags, car rental tips

### Key component details

- **`Countdown.tsx`** — live countdown to `2026-06-07T12:00:00`, updates every second
- **`PollCard.tsx`** — voter sets their name once (stored in localStorage as `iceland_user`), votes persist per-browser; shows percentages and voter names after voting
- **`Weather.tsx`** — fetches 7-day forecast from Open-Meteo for Reykjavík (64.13°N, -21.89°E)
- **`Nav.tsx`** — transparent on Home, opaque elsewhere; mobile hamburger menu

### Spotify integration

The playlist page has a placeholder for an `<iframe>` Spotify embed. To activate: create a collaborative playlist, get the embed code from Spotify (Share → Embed playlist), and replace the placeholder div in `src/pages/Playlist.tsx` around line 42.

### Design tokens (Tailwind)

Custom colors: `obsidian`, `ash`, `charcoal`, `stone`, `mist`, `glacier`, `glacier-light`, `moss`, `moss-light`, `cream`, `cream-dark`, `aurora`
Custom utilities: `card-glass`, `section-label`, `display-title`, `btn-primary`, `btn-ghost`, `nav-link`
Grain overlay: add className `grain` to any wrapper for the film grain CSS effect.

### Participant dining logic

- Tereza: fine dining only
- Biba: casual/cool atmosphere
- Marcella: non-drinker — mocktail options matter
- Krysse: flexible (both)
- Flavia: casual

Each itinerary day includes 2 meals: one `fine` + one `casual` or one `quick` for lunch. Restaurant notes account for Marcella's non-drinking status.
