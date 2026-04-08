# Product Backlog

User-outcome-oriented backlog for planned and in-progress work.

## Status Authority

- Single source of truth for item lifecycle state: `.github/project/evolution/backlog-status.md`.
- This file does not own per-item state updates.

## Workflow States

- Idea
- Refined
- Ready
- In Progress
- Done
- Observed

## Current Focus

- Phase 1 design completion and delivery readiness.
- Phase 1 execution kickoff with behavior-first delivery slices.

## Items

- FR-001 | Publish consultant-focused hero and services narrative | Priority: High | Item: `backlog-items/BI-260001.md`
- FR-002 | Publish schema-backed consultant project listing | Priority: High | Item: `backlog-items/BI-260002.md`
- FR-003 | Deliver reliable consultant contact conversion path | Priority: High | Item: `backlog-items/BI-260003.md`
- FR-005 | Modernize layout and technology-forward visual style | Priority: High | Item: `backlog-items/BI-260005.md`
- FR-006 | Highlight active top-level page in navigation | Priority: Medium | Item: `backlog-items/BI-260006.md`
- FR-007 | Prevent scrollbar-induced page shift between routes | Priority: Medium | Item: `backlog-items/BI-260007.md`
- FR-009 | Deliver multilingual site experience for English, Dutch, and Portuguese | Priority: High | Item: `backlog-items/BI-260009.md` | Phase 2 refinement
- QR-001 | Enforce CI quality gate baseline | Priority: High | Item: `backlog-items/BI-260101.md`
- OR-001 | Automate GitHub Pages deployment | Priority: High | Item: `backlog-items/BI-260201.md`
- CR-001 | Enforce contract change approval workflow | Priority: Medium | Item: `backlog-items/BI-260301.md`
- FR-004 | Publish display-only reviews section | Priority: Medium | Item: `backlog-items/BI-260004.md` | Phase 2 idea

## Phase 1 Execution Sequence

1. `QR-001` and `OR-001` (foundation lane, can run in parallel)
	- Outcome: CI and deployment rails are in place before feature delivery.
2. `FR-001` (content and value proposition slice)
	- Dependency: baseline CI from `QR-001`.
3. `FR-002` (portfolio evidence slice)
	- Dependency: schema/contract controls from `CR-001` governance rules.
4. `FR-003` (conversion slice)
	- Dependency: navigation behavior validated in `FR-001`.
5. `CR-001` remains an active gate across all above items.
	- Outcome: no breaking contract merges without approved ICR.
