# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the production application
- `npm start` - Start the production server

### Testing
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- To run a single test file: `npm test -- path/to/test.ts`

### Code Quality
- `npm run lint` - Run Next.js linter
- TypeScript type checking happens during build (no explicit typecheck command)

## Architecture

### Framework & Stack
- **Next.js 15** with App Router - Server-side rendering and routing
- **React 19** - UI framework
- **TypeScript** - Type safety with strict mode enabled
- **Tailwind CSS** - Utility-first CSS with custom design system
- **shadcn/ui components** - Radix UI based component library
- **Airtable** - Form submission backend

### Project Structure
- `/app` - Next.js App Router pages and API routes
  - API routes handle form submissions and Airtable integration
  - Page components for each service offering (business-dna, fractional-cao, opportunity-blueprint)
- `/components` - Reusable React components
  - `/sections` - Page-specific section components organized by page
  - `/ui` - Base UI components (shadcn/ui)
- `/lib` - Utility functions (primarily `cn()` for className merging)
- `/public` - Static assets and images

### Key Patterns

#### Component Organization
- Section components are organized by page in `/components/sections/[page-name]/`
- Each page has dedicated hero, feature, and CTA sections
- Modal components handle service-specific interactions

#### Styling Approach
- Custom CSS variables in globals.css define the design system
- Tailwind config extends with custom colors, fonts, and responsive text sizes
- Mobile-first responsive design with specific mobile/desktop font scales
- `cn()` utility from `/lib/utils` for conditional className merging

#### Form Handling
- Multi-step form with progress tracking (`form-progress.tsx`)
- Forms submit to API routes that integrate with Airtable
- Environment variables required: `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_ID`, `AIRTABLE_API_KEY`

#### Testing Strategy
- Jest with Next.js configuration
- Tests located in `__tests__` directories
- Coverage reports generated in `/coverage` directory
- Component testing with React Testing Library

#### Performance Optimizations
- Image optimization enabled with WebP/AVIF formats
- Component-level code splitting via dynamic imports
- Optimized package imports for lucide-react and framer-motion
- Security headers configured in next.config.mjs

### Important Notes
- TypeScript errors and ESLint warnings are ignored during build (see next.config.mjs)
- Path alias `@/` maps to project root
- The site targets business executives with AI automation services
- Multiple service offerings with dedicated landing pages and forms