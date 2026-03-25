# Brand Page Project Instructions

This file instantiates project-specific instructions without redefining foundational policy.

## Source of Truth

- Foundation policy: `.github/generic/process/framework.md`
- LLM behavior and collaboration policy: `.github/generic/process/llm-software-execution.md`
- Interface approval workflow template: `.github/generic/templates/interface-change-request.template.md`

## 1. Project Profile

- Project name: Brand Page
- Goal: Deliver a fast, accessible, and maintainable professional brand site with a clear path to future portfolio and review workflows.
- Primary users:
  - Site visitors evaluating services, projects, and contact options.
  - Project maintainers evolving content and features with low operational overhead.
- Constraints:
  - Static-first in Phase 1 with repository-local content.
  - No secret/token leakage in tracked files.
  - Small, reversible changes and explicit contract governance.

## 2. Architecture Instantiation

- Major modules and responsibilities:
  - Content/data module: project and review display data contracts.
  - Presentation module: page sections and reusable UI components.
  - Interaction adapters: feature-local seams for future CMS/API migration.
  - Delivery configuration: build, SEO metadata, and deployment settings.
- Module ownership map:
  - Engineering owns architecture and contracts.
  - Contributors own implementation within approved boundaries.
- Allowed dependency directions:
  - Presentation can depend on content/data contracts.
  - Adapters can depend on content contracts and external integration types.
  - Content contracts must not depend on presentation details.
- Boundary contract catalog (API/schema/events/config):
  - Schemas for projects and reviews (display-first in Phase 1).
  - Build/deployment configuration contracts (Astro, hosting settings).
  - SEO contract (metadata, canonical URL, Open Graph, sitemap, robots).
- Behavior-oriented slicing plan (vertical slices by capability):
  - Slice 1: Brand identity and services section.
  - Slice 2: Project listing and project detail templates.
  - Slice 3: Reviews display and later moderation workflow seam.
  - Slice 4: Contact and conversion path.

## 3. Interface Governance Instantiation

- Project-specific approval authority: Engineering owner plus repository maintainer approval.
- Required approval SLA: within 2 working days for normal changes, same day for release-blocking changes.
- Contract versioning strategy: additive-first; breaking changes require approved Interface Change Request (ICR) and migration notes.
- ICR storage location: `.github/project/evolution/adr/` or linked artifact in pull request discussion.

All contract changes must use `.github/generic/templates/interface-change-request.template.md`.

## 4. Verification Instantiation

- Critical end-to-end flows:
  - Landing page loads successfully on desktop and mobile.
  - Primary navigation reaches all key sections.
  - Contact path is functional and visible.
- Required boundary contracts to test:
  - Project/review data schema compatibility with page rendering.
  - SEO metadata generation contract.
- Integration points with highest failure risk:
  - Static build and hosting output path assumptions.
  - Future review intake integration seams.
- Component/service checks for fault localization:
  - Section rendering checks for brand, services, projects, and reviews blocks.
  - Data adapter checks for malformed or missing content records.
- Optional unit-test focus areas:
  - Data transformation utilities and schema guards.
  - URL/canonical construction helpers.

## 5. Delivery Instantiation

- Branching constraints for this project: short-lived feature branches with frequent integration to main.
- CI gates and blocking checks:
  - Build must pass.
  - Lint/type checks must pass when configured.
  - Required checks for accessibility/performance baseline in release PRs.
- Rollback strategy by release type:
  - Static deploy rollback to previous successful artifact.
  - Revert offending commit for contract regressions.
- Observability minimum for release:
  - Build logs retained.
  - Basic runtime visibility via host logs and uptime signal.
  - SEO artifact verification (sitemap/robots/canonical).

## 6. Quality Gate Instantiation

- Requirement taxonomy for project artifacts: `FR` (functional behavior), `QR` (quality attributes), `OR` (operational requirements), `CR` (constraints/compliance).
- Requirement ID rule: stable class-prefixed IDs (`FR-*`, `QR-*`, `OR-*`, `CR-*`).
- Terminology rule: avoid generic non-functional label; use explicit requirement classes.
- Portability acceptance checks:
  - Project builds in CI and target host.
  - Static output can be served without hidden environment assumptions.
- Maintainability acceptance checks:
  - Changes remain slice-oriented with stable boundaries.
  - File/function cohesion guardrails are followed unless justified.
- Observability acceptance checks:
  - Release evidence includes build output, route checks, and SEO checks.
- Contract-stability checks:
  - Any boundary contract change includes explicit approval trail.
- Readability and documentation checks:
  - New behavior changes include concise rationale and artifact updates where relevant.

Code cohesion defaults (required unless explicitly overridden with rationale):

- File size guardrail: `<= 200 lines`.
- Function size guardrail: `<= 30 lines where practical`.

## 7. Stack Addendum

- Language and runtime: TypeScript, Node.js runtime for tooling/build.
- Frameworks and platform: Astro 5.x, static-first website architecture, Tailwind CSS 4.x.
- Data/storage choices: repository-local markdown/data files in Phase 1 with schema validation at render boundaries.
- Infrastructure/deployment model: GitHub Pages is primary via GitHub Actions deployment to `gh-pages`.
- Source of operational stack detail: `.github/project/tech-stack.md`.

## 8. Evolution Tracking

- Decision cadence: record ADRs for cross-cutting, contested, or long-lived architectural decisions.
- Review cadence for project instructions: review monthly or when phase changes.
- Requirement ID allocation: Engineering owner allocates and approves new `FR-*`, `QR-*`, `OR-*`, `CR-*` IDs.
- Backlog item ownership: feature owner creates and updates backlog item artifacts.

Current tracking artifacts:

- ADR notes: `.github/project/evolution/adr/`
- Backlog status: `.github/project/evolution/backlog-status.md`
- Product backlog: `.github/project/evolution/product-backlog.md`
- Requirements log: `.github/project/evolution/requirements-log.md`
- Learnings index: `.github/project/learnings/index.md`

## 9. Loading Matrix Inheritance

Loading matrix authority remains in `.github/generic/process/framework.md` (section 9) and must not be redefined here.

Project-specific relevance hints (non-authoritative):

- Usually referenced for planning and implementation context:
  - `.github/project/tech-stack.md`
  - `.github/project/design-plan.md`
- On-demand for execution tracking and historical context:
  - `.github/project/evolution/` artifacts
  - `.github/project/learnings/` artifacts
