# Design Plan

Status: Draft
Owner: Engineering
Last Updated: 2026-03-19

## Phase Plan

### Phase 1: Static Professional Presence (Current)
- Deliver a clear professional brand page.
- Keep all content and project data code-driven.
- Include sections for branding, services, projects, reviews (display-only), and contact.
- Establish SEO/accessibility/performance baseline.

### Phase 2: Portfolio Evolution
- Add project taxonomies and filtering model.
- Add project detail templates with reusable schema.

### Phase 3: Reviews Workflow
- Add review intake flow with moderation.
- Add anti-spam controls and publication workflow.

## Architectural Decisions

### ADR-BP-001: Static-First Baseline
Status: Accepted

Decision:
- Build with static-first rendering and repository-local content.
- Defer dynamic services until clear product need.

Rationale:
- Minimizes complexity and cost.
- Maximizes speed, reliability, and portability.

### ADR-BP-002: Data Contracts Before Dynamics
Status: Accepted

Decision:
- Define stable schemas for projects and reviews before adding filtering/submission features.

Rationale:
- Prevents lock-in to page-level assumptions.
- Reduces migration cost when dynamic features are added.

### ADR-BP-003: Extension Through Seams
Status: Accepted

Decision:
- Isolate data access and interaction logic behind feature-local adapters.
- Keep presentation components independent from persistence and transport details.

Rationale:
- Supports later migration to CMS/API without redesigning core UI components.
