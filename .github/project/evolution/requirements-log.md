# Requirements Log

Tracks requirement lifecycle changes (added, changed, deprecated).

## Format

- Date: YYYY-MM-DD
- Type: Added | Changed | Deprecated
- ID: FR-*, QR-*, OR-*, CR-*
- Notes: short rationale and affected artifact(s)

## Entries

- 2026-03-24 | Added | FR-001 | Deliver hero plus services section to communicate professional positioning and offerings clearly.
- 2026-03-24 | Added | FR-002 | Deliver projects listing with stable schema-backed cards and detail route structure.
- 2026-03-24 | Added | FR-003 | Deliver contact section with clear CTA and reliable navigation from top-level menu.
- 2026-03-24 | Added | QR-001 | Enforce baseline quality checks in CI (build, type checks, lint, formatting), accessibility checks on critical routes, and Lighthouse thresholds (Perf >= 90, Acc >= 95, BP >= 95, SEO >= 95).
- 2026-03-24 | Added | OR-001 | Use GitHub Pages as primary platform via GitHub Actions deployment to `gh-pages`, with Node.js 22 LTS, npm 10.x, Astro 5.x, and TypeScript 5.x as operational baseline.
- 2026-03-24 | Added | CR-001 | Require approved ICR for breaking schema/interface contract changes; additive-first compatibility policy is mandatory.
