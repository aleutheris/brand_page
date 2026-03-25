# Software Project Instruction Framework (Abstract)

This framework defines values, governance, and quality rules for software projects.
It is intentionally stack-agnostic.

## 1. Purpose and Scope

- This file defines principle-level policy for software projects.
- Concrete tech stack decisions belong to project-specific artifacts in `.github/project/`.

## 2. Non-Negotiable Values

- Human readability over cleverness.
- Stable contracts over local optimization.
- Small, reversible changes over large risky rewrites.
- Observable behavior over assumptions.
- Long-term maintainability over short-term speed hacks.
- Human oversight over autonomous drift.

## 3. Architectural Governance

### 3.1 Module Boundaries

- Treat each module as an autonomous unit with explicit responsibilities.
- Keep logic localized; cross-module orchestration must remain explicit.
- Prevent leaky abstractions: low-level details must not leak into business-level policies.
- Prefer behavior-oriented architecture (vertical slices by capability) over broad technical buckets.

### 3.2 Interface Change Control (Human-In-The-Loop)

The LLM has no authority to change interfaces without explicit human approval.

This applies to:

- Public APIs.
- Module and service interfaces.
- Database schema contracts.
- Event and message contracts.
- External configuration and environment contracts.

Required workflow for interface changes:

1. Propose an Interface Change Request (ICR).
2. Include impact analysis, compatibility strategy, and migration plan.
3. Wait for explicit human approval.
4. Only then implement and validate.

## 4. Design Principles

Use SOLID and clean code principles as heuristics, not dogma.

Code cohesion guardrails:

- Keep files cohesive; <= 200 lines unless justified and approved.
- Keep functions focused; <= 30 lines where practical.

Detailed SOLID heuristics and verification signals: `.github/generic/process/framework-reference.md`.

## 5. Behavior-First Verification Strategy

Quality is validated by behavior, not by test count.

Use end-to-end and boundary contract checks as primary verification.
Use component/service and unit checks for localization and high-risk internals.
Detailed verification ladder: `.github/generic/process/framework-reference.md`.

## 6. Delivery and Change Strategy

- Prefer trunk-based, short-lived branches and frequent integration.
- Keep commits small and intention-revealing.
- Remove dead code and unnecessary complexity when safe.
- Reject throughput gains that reduce codebase fitness or maintainability.

## 7. Measurable Quality Gates

Define concrete acceptance checks for:

- Portability: Build/run in intended target environments without hidden assumptions.
- Maintainability: Clear ownership boundaries and low-friction change paths.
- Observability: Logs, metrics, and traces sufficient to diagnose critical flows.
- Contract stability: No unapproved interface changes.
- Readability: Code and docs understandable by humans with minimal context switching.
- Requirements taxonomy clarity: use explicit classes (`FR-*`, `QR-*`, `OR-*`, `CR-*`) and avoid generic "non-functional requirements" buckets.

## 8. Extensibility Model

- Keep this file abstract and stable.
- Keep detailed rationale and deep examples in `.github/generic/process/framework-reference.md`.
- Build concrete `project-instructions.md` from this framework.

## 9. Context Budget and Loading Policy

Loading tiers:

1. Always-on: only high-authority, concise governance files.
2. Usually referenced: project-shaping files needed often, but not for every task.
3. On-demand: large/evolving artifacts loaded only when task-relevant.

Budget guardrails:

- `.github/copilot-instructions.md` <= 120 lines.
- Each always-on companion file <= 120 lines.
- Split on-demand files when they exceed ~400 lines or become review bottlenecks.

Duplication rule:

- Keep one source of truth per policy concern.
- Always-on files should summarize and reference; avoid copying large policy blocks.

Loading tier assignments:

- Always-on:
  - `.github/copilot-instructions.md`,
  - `.github/generic/process/framework.md`.
- Usually referenced:
  - `.github/generic/process/framework-reference.md`,
  - `.github/generic/process/llm-software-execution.md`,
  - `.github/project/project-instructions.md` (project-instantiated governance),
  - `.github/project/` files (tech stack, architecture, requirements).
- On-demand: all files under
  - `.github/generic/templates/`,
  - `.github/project/evolution/`, and
  - `.github/project/learnings/` (ADRs, backlog, requirements log, learnings index, detailed learning records).

Template loading rule:

- Files under `.github/generic/templates/` are never loaded automatically.
- Load a template only when the user explicitly requests to create or fill one out.
- Suggest template use when relevant, but do not load template content until requested.
