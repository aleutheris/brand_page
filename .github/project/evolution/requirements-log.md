# Requirements Log

Tracks requirement lifecycle changes (added, changed, deprecated).

## Format

- Date: YYYY-MM-DD
- Type: Added | Changed | Deprecated
- ID: FR-*, QR-*, OR-*, CR-*
- Notes: short rationale and affected artifact(s)

## Entries

- 2026-04-03 | Added | [FR-006](requirements/FR-006.md) | Visibly indicate the active top-level page in the primary navigation using accessible shared-layout behavior.
- 2026-04-01 | Added | [FR-005](requirements/FR-005.md) | Deliver a modern, technology-forward layout refresh while preserving static-first delivery and accessibility.
- 2026-03-24 | Added | [FR-001](requirements/FR-001.md) | Deliver hero plus services section to communicate professional positioning and offerings clearly.
- 2026-03-24 | Added | [FR-002](requirements/FR-002.md) | Deliver projects listing with stable schema-backed cards and detail route structure.
- 2026-03-24 | Added | [FR-003](requirements/FR-003.md) | Deliver contact section with clear CTA and reliable navigation from top-level menu.
- 2026-03-24 | Added | [FR-004](requirements/FR-004.md) | Deliver display-only reviews section with curated static testimonial cards.
- 2026-03-24 | Added | [QR-001](requirements/QR-001.md) | Enforce baseline quality checks in CI (build, type checks, lint, formatting), accessibility checks on critical routes, and Lighthouse thresholds (Perf >= 90, Acc >= 95, BP >= 95, SEO >= 95).
- 2026-03-24 | Added | [OR-001](requirements/OR-001.md) | Use GitHub Pages as primary platform via GitHub Actions deployment to `gh-pages`, with Node.js 22 LTS, npm 10.x, Astro 5.x, and TypeScript 5.x as operational baseline.
- 2026-03-24 | Added | [CR-001](requirements/CR-001.md) | Require approved ICR for breaking schema/interface contract changes; additive-first compatibility policy is mandatory.
