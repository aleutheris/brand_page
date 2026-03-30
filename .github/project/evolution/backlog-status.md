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
| FR-001 | Publish consultant-focused hero and services narrative | Ready | [FR-001.md](backlog-items/FR-001.md) | [ADR-BP-001](adr/0001-static-first-baseline.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Personal B2B consultant positioning, services clarity, and direct CTA intent. |
| FR-002 | Publish schema-backed consultant project listing | Ready | [FR-002.md](backlog-items/FR-002.md) | [ADR-BP-002](adr/0002-data-contracts-before-dynamics.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Early-stage portfolio proof using problem-solution-outcome cards. |
| FR-003 | Deliver reliable consultant contact conversion path | Ready | [FR-003.md](backlog-items/FR-003.md) | [ADR-BP-001](adr/0001-static-first-baseline.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Clear consultation request route from nav and CTAs. |
| FR-004 | Publish display-only reviews section | Idea | [FR-004.md](backlog-items/FR-004.md) | [ADR-BP-002](adr/0002-data-contracts-before-dynamics.md), [ADR-BP-003](adr/0003-extension-through-seams.md) | Phase 2 — deferred; no real review content in Phase 1. |

## Quality Requirements (QR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| QR-001 | Enforce CI quality gate baseline | In Progress | [QR-001.md](backlog-items/QR-001.md) | [ADR-BP-001](adr/0001-static-first-baseline.md) | Workflows and local gates are green; branch protection merge blockers pending repo settings. |

## Operational Requirements (OR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| OR-001 | Automate GitHub Pages deployment | In Progress | [OR-001.md](backlog-items/OR-001.md) | [ADR-BP-001](adr/0001-static-first-baseline.md) | Deployment workflow implemented; first successful Pages run and Pages source verification pending. |

## Compliance/Constraint Requirements (CR-*)

| ID | Title | Status | Backlog Item | Related ADRs | Notes |
| --- | --- | --- | --- | --- | --- |
| CR-001 | Enforce contract change approval workflow | Ready | [CR-001.md](backlog-items/CR-001.md) | [ADR-BP-002](adr/0002-data-contracts-before-dynamics.md) | Breaking contract changes require approved ICR. |

## Notes

- Current planning source: `.github/project/evolution/design-plan.md`.
- Backlog item files under `.github/project/evolution/backlog-items/` are static requirement records.
- Execution order: `QR-001` + `OR-001` -> `FR-001` -> `FR-002` -> `FR-003` with `CR-001` active as governance gate.
