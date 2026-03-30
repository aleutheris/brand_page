# ADR-BP-002: Data Contracts Before Dynamics

## Workflow

- Drafted by engineering and accepted for architectural stability.
- Stored as standalone ADR for lifecycle tracking.

Status: Accepted
Date: 2026-03-19
Owners: Engineering

## Context

Project and review capabilities are expected to evolve over phases. Without stable contracts, feature growth can cause schema drift and regressions.

## Decision

- Define stable schemas for projects and reviews before adding filtering/submission features.

## Alternatives Considered

- Option A: Build UI and behavior first, backfill contracts later.
- Option B: Establish contracts first, then build behavior on top.

## Consequences

- Positive: Reduced migration risk, predictable rendering boundaries.
- Negative: Additional upfront design effort.
- Risks: Over-constraining contracts too early without iteration feedback.

## Verification

- Schema validation gates run in CI.
- Invalid records fail validation before merge.

## Rollback

- Use additive schema evolution; for breaking changes require approved ICR and migration notes.

## Links

- Related requirement(s): FR-002, FR-004, CR-001
- Related ICR(s): n/a
- Related PR(s): n/a
