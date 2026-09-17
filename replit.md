# ULeadRTH Public Website

A premium, multi-page public website explaining ULeadRTH's residential and supportive care philosophy, services, daily life, resources, and contact process.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/uleadrth-site run dev` — run the public website through its managed workflow
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/uleadrth-site/src/pages/` — public website routes
- `artifacts/uleadrth-site/src/components/layout/` — shared navigation, shell, and footer
- `artifacts/uleadrth-site/src/index.css` — visual tokens and global styles
- `artifacts/uleadrth-site/src/components/SEO.tsx` — route metadata updates

## Architecture decisions

- The public site is frontend-only; do not add authentication, portals, dashboards, or a database in this phase.
- Unconfirmed operational, clinical, licensing, payment, insurance, eligibility, and outcome claims must remain clearly qualified.
- The inquiry form is a visual preview until a secure delivery method and real organizational contact details are approved.

## Product

- Multi-page public information architecture covering Home, About, Services, Approach, Life at ULeadRTH, Resources, FAQ, Contact, Privacy, and Accessibility.
- Responsive editorial experience with accessible navigation, mobile menu, FAQ interactions, route metadata, and reduced-motion support.

## User preferences

- The website must feel advanced, modern, professional, and intentionally art-directed rather than simple or AI-template-generated.
- Do not collapse the public website into a single-page experience.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
