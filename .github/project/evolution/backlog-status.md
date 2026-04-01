# Backlog Status

Cross-reference of backlog items and their current state.

## Authority

- This file is the single source of truth for item lifecycle status.
- Status updates are made here, not in backlog item files or product backlog overview files.

## State Legend

- Idea
- Refined
- Ready
- In Progress
- Done
- Observed

## Status Index

## Functional Requirements (FR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| FR-001 | Publish consultant-focused hero and services narrative | Done | [FR-001.md](backlog-items/FR-001.md) | [ADR-BP-001](adr/0001-static-first-baseline.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Implemented: hero, 3 service cards, CTA to contact. |
| FR-002 | Publish schema-backed consultant project listing | Done | [FR-002.md](backlog-items/FR-002.md) | [ADR-BP-002](adr/0002-data-contracts-before-dynamics.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Implemented: schema-backed project cards with 2 seed records. |
| FR-003 | Deliver reliable consultant contact conversion path | Done | [FR-003.md](backlog-items/FR-003.md) | [ADR-BP-001](adr/0001-static-first-baseline.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Implemented: contact page with email channel, response expectations, nav entry. |
| FR-004 | Publish display-only reviews section | Done | [FR-004.md](backlog-items/FR-004.md) | [ADR-BP-002](adr/0002-data-contracts-before-dynamics.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Implemented: reviews page with schema-backed cards, 2 seed records, nav entry. |
| FR-005 | Modernize layout and technology-forward visual style | Done | [FR-005.md](backlog-items/FR-005.md) | [ADR-BP-001](adr/0001-static-first-baseline.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Implemented: dark hero sections, modern tech-forward palette (slate/teal), Google Fonts (Inter + Space Grotesk), logo in nav, card hover effects, full-bleed page headers, footer, base-path-aware links. |

## Quality Requirements (QR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| QR-001 | Enforce CI quality gate baseline | In Progress | [QR-001.md](backlog-items/QR-001.md) | [ADR-BP-001](adr/0001-static-first-baseline.md) | CI workflow (typecheck, lint, format:check, build) is green on PRs. Remaining: enable branch protection required checks in GitHub repo Settings → Branches. |

## Operational Requirements (OR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| OR-001 | Automate GitHub Pages deployment | In Progress | [OR-001.md](backlog-items/OR-001.md) | [ADR-BP-001](adr/0001-static-first-baseline.md) | Workflow implemented with GitHub Pages default URL/base path and deployment provenance; .nojekyll present. Remaining: confirm Pages source is "GitHub Actions" in repo Settings → Pages. |

## Compliance/Constraint Requirements (CR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| CR-001 | Enforce contract change approval workflow | Done | [CR-001.md](backlog-items/CR-001.md) | [ADR-BP-002](adr/0002-data-contracts-before-dynamics.md) | CI enforces PR metadata for contract-sensitive changes and requires ICR + migration notes for breaking changes. |

## Notes

- Current planning source: `.github/project/evolution/design-plan.md`.
- Backlog item files under `.github/project/evolution/backlog-items/` are static requirement records.
- Execution order: `QR-001` + `OR-001` -> `FR-001` -> `FR-002` -> `FR-003` with `CR-001` active as governance gate.
