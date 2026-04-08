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
| FR-001 | Publish consultant-focused hero and services narrative | Done | [BI-260001.md](backlog-items/BI-260001.md) | [ADR-260001](adr/ADR-260001.md), [ADR-260003](adr/ADR-260003.md) | Implemented: hero, 3 service cards, CTA to contact. |
| FR-002 | Publish schema-backed consultant project listing | Done | [BI-260002.md](backlog-items/BI-260002.md) | [ADR-260002](adr/ADR-260002.md), [ADR-260003](adr/ADR-260003.md) | Implemented: schema-backed project cards with 2 seed records. |
| FR-003 | Deliver reliable consultant contact conversion path | Done | [BI-260003.md](backlog-items/BI-260003.md) | [ADR-260001](adr/ADR-260001.md), [ADR-260003](adr/ADR-260003.md) | Implemented: contact page with email channel, response expectations, nav entry. |
| FR-004 | Publish display-only reviews section | Done | [BI-260004.md](backlog-items/BI-260004.md) | [ADR-260002](adr/ADR-260002.md), [ADR-260003](adr/ADR-260003.md) | Implemented: reviews page with schema-backed cards, 2 seed records, nav entry. |
| FR-005 | Modernize layout and technology-forward visual style | Done | [BI-260005.md](backlog-items/BI-260005.md) | [ADR-260001](adr/ADR-260001.md), [ADR-260003](adr/ADR-260003.md) | Implemented: dark hero sections, modern tech-forward palette (slate/teal), Google Fonts (Inter + Space Grotesk), logo in nav, card hover effects, full-bleed page headers, footer, base-path-aware links. |
| FR-006 | Highlight active top-level page in navigation | Done | [BI-260006.md](backlog-items/BI-260006.md) | [ADR-260004](adr/ADR-260004.md) | Implemented: shared layout highlights the current page with accessible `aria-current` styling on Home, Projects, and Contact. |
| FR-007 | Prevent scrollbar-induced page shift between routes | Done | [BI-260007.md](backlog-items/BI-260007.md) | [ADR-260005](adr/ADR-260005.md) | Implemented: root layout reserves consistent vertical scrollbar space so switching between shorter and longer pages no longer causes horizontal jump. |
| FR-009 | Deliver multilingual site experience for English, Dutch, and Portuguese | Refined | [BI-260009.md](backlog-items/BI-260009.md) | [ADR-260006](adr/ADR-260006.md) | Planning item: add a shared language switcher, localized content, and localized metadata while preserving the static-first architecture. |

## Quality Requirements (QR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| QR-001 | Enforce CI quality gate baseline | In Progress | [BI-260101.md](backlog-items/BI-260101.md) | [ADR-260001](adr/ADR-260001.md) | CI workflow (typecheck, lint, format:check, build) is green on PRs. Remaining: enable branch protection required checks in GitHub repo Settings → Branches. |

## Operational Requirements (OR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| OR-001 | Automate GitHub Pages deployment | In Progress | [BI-260201.md](backlog-items/BI-260201.md) | [ADR-260001](adr/ADR-260001.md) | Workflow implemented with GitHub Pages default URL/base path and deployment provenance; .nojekyll present. Remaining: confirm Pages source is "GitHub Actions" in repo Settings → Pages. |

## Compliance/Constraint Requirements (CR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| CR-001 | Enforce contract change approval workflow | Done | [BI-260301.md](backlog-items/BI-260301.md) | [ADR-260002](adr/ADR-260002.md) | CI enforces PR metadata for contract-sensitive changes and requires ICR + migration notes for breaking changes. |

## Notes

- Current planning source: `.github/project/evolution/design-plan.md`.
- Backlog item files under `.github/project/evolution/backlog-items/` follow the `BI-YYNNNN.md` naming convention and trace to canonical requirement records.
- Execution order: `QR-001` + `OR-001` -> `FR-001` -> `FR-002` -> `FR-003` -> `FR-005` -> `FR-006` -> `FR-007` with `CR-001` active as governance gate.
