# Requirements Log

> Legacy note: the canonical requirement index now lives in `requirements-index.md`. This file remains as a backward-compatible change log during the naming transition.

Tracks requirement lifecycle changes (added, changed, deprecated).

## Format

- Date: YYYY-MM-DD
- Type: Added | Changed | Deprecated
- ID: FR-*, QR-*, OR-*, CR-*
- Notes: short rationale and affected artifact(s)

## Entries

- 2026-04-06 | Added | [FR-009](requirements/REQ-FR-260009.md) | Add multilingual site support for English, Dutch, and Portuguese using a static-first routing and translation approach.
- 2026-04-03 | Added | [FR-007](requirements/REQ-FR-260007.md) | Keep top-level page layout stable by preventing horizontal shift when scrollbar presence changes between routes.
- 2026-04-03 | Added | [FR-006](requirements/REQ-FR-260006.md) | Visibly indicate the active top-level page in the primary navigation using accessible shared-layout behavior.
- 2026-04-01 | Added | [FR-005](requirements/REQ-FR-260005.md) | Deliver a modern, technology-forward layout refresh while preserving static-first delivery and accessibility.
- 2026-03-24 | Added | [FR-001](requirements/REQ-FR-260001.md) | Deliver hero plus services section to communicate professional positioning and offerings clearly.
- 2026-03-24 | Added | [FR-002](requirements/REQ-FR-260002.md) | Deliver projects listing with stable schema-backed cards and detail route structure.
- 2026-03-24 | Added | [FR-003](requirements/REQ-FR-260003.md) | Deliver contact section with clear CTA and reliable navigation from top-level menu.
- 2026-03-24 | Added | [FR-004](requirements/REQ-FR-260004.md) | Deliver display-only reviews section with curated static testimonial cards.
- 2026-03-24 | Added | [QR-001](requirements/REQ-QR-260001.md) | Enforce baseline quality checks in CI (build, type checks, lint, formatting), accessibility checks on critical routes, and Lighthouse thresholds (Perf >= 90, Acc >= 95, BP >= 95, SEO >= 95).
- 2026-03-24 | Added | [OR-001](requirements/REQ-OR-260001.md) | Use GitHub Pages as primary platform via GitHub Actions deployment to `gh-pages`, with Node.js 22 LTS, npm 10.x, Astro 5.x, and TypeScript 5.x as operational baseline.
- 2026-03-24 | Added | [CR-001](requirements/REQ-CR-260001.md) | Require approved ICR for breaking schema/interface contract changes; additive-first compatibility policy is mandatory.
