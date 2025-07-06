# CLAUDE.md
常に日本語で応答してください.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (runs on port 3010)
npm run dev

# Production build
npm run build

# Production server (runs on port 3010)
npm run start

# Linting
npm run lint
```

## Architecture Overview

### Internationalization System
- **Provider**: `I18nProvider.tsx` manages locale state via React Context
- **Hook**: `useI18n.ts` provides translation functionality (currently incomplete)
- **Storage**: Locale preference stored in cookies with `localKey` from `@/lib/key`
- **Fallback**: Defaults to 'en' if no locale detected
- **Files**: Translation files in `/src/i18n/` (en.json, ja.json)

### Theme System
- **Provider**: `ColorThemeProvider.tsx` manages dark/light mode
- **Storage**: Theme preference stored in localStorage
- **Implementation**: Uses `data-theme` attribute on document root
- **CSS**: Global styles in `globals.scss` respond to theme changes

### Timeline System
The core content management system with chronological entries:
- **Data**: `@/lib/timeline/timelines.ts` contains 30+ timeline entries
- **Categories**: `@/lib/timeline/timelineCategoryes.ts` defines filterable categories
- **Type**: Each entry has `title`, `feature` (with URL/description/techs), `year`, `date`, `kind`
- **Filtering**: Categories include 'released', 'award', 'writing', 'internship', 'hackathon', 'other'

### Album System
Interactive photo galleries with three categories:
- **Canada**: Travel photos from Toronto trip
- **Sweet**: Baking and dessert photos
- **Fish**: Sushi and seafood photos
- **Images**: Stored in `/src/public/album/` with TypeScript arrays in `/src/lib/image/`
- **Interaction**: Hover effects and modal displays using Framer Motion

### Component Organization
- **UI components**: Reusable elements in `@/components/UI/`
- **Feature components**: Page-specific components in respective directories
- **Styling**: Sass modules (`.module.scss`) for component-scoped styles
- **Animations**: Framer Motion integrated throughout for smooth transitions

### Data Flow
- **Static data**: Content stored as TypeScript files in `/src/lib/`
- **State management**: React Context for global state (theme, i18n)
- **Props**: Data flows down via props, no external state library
- **Type safety**: Full TypeScript coverage with custom types in `/src/types/`

## Key Technical Details

### Path Aliases
- `@/*` maps to `src/*` (configured in tsconfig.json)

### Sass Configuration
- Sass options configured in next.config.js
- Component-scoped styles using CSS modules

### Metadata Strategy
- SEO-optimized with Open Graph and Twitter Card metadata
- Template-based title generation: `%s - ${siteName}`
- Localized content support for Japanese

### Port Configuration
- Development and production servers run on port 3010
- Configured in package.json scripts

## Current Development Status
- Active branch: `feature/create-l18n-#49` (internationalization implementation)
- i18n system partially implemented, useI18n hook needs completion
- New components: I18nProvider, useI18n hook, locale types added