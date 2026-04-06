# ADR-BP-006: Static i18n with Language-Prefixed Routes

## Workflow

- Drafted during multilingual planning for the public brand site.
- Stored as a standalone ADR for lifecycle tracking before implementation begins.

Status: Proposed
Date: 2026-04-06
Owners: Engineering

## Context

The site is currently English-first and static-first. The next product need is to support English, Dutch, and Portuguese without introducing unnecessary runtime complexity or creating a maintenance-heavy duplication of page logic.

The solution needs to preserve existing SEO/shareability, keep the site fast, and remain easy to evolve as content changes.

## Decision

- Keep the site static-first and implement localization through repository-local translation dictionaries/content files.
- Treat English as the default public language on existing routes and add Dutch and Portuguese via language-prefixed alternatives such as `/nl/` and `/pt/`.
- Add a shared language switcher in the base layout that keeps the visitor on the equivalent page when available.
- Localize page metadata (`title`, `description`, Open Graph, and `hreflang`) alongside visible content.
- Do not introduce runtime machine translation or third-party translation services in this phase.

## Alternatives Considered

- Option A: Duplicate each page manually per language with separate markup files.
- Option B: Use runtime translation or an external translation widget/service.
- Option C: Use static shared components with language dictionaries and prefixed routes.

## Consequences

- Positive: Preserves fast static delivery and SEO-friendly pages.
- Positive: Keeps page structure shared while allowing content to vary by locale.
- Positive: Supports a future editorial workflow without changing route contracts again.
- Negative: Each content update now requires translation maintenance in three languages.
- Risks: Incomplete translations or mismatched localized metadata can reduce trust if not validated carefully.

## Verification

- Confirm that `Home`, `Projects`, `About Me`, and `Contact` are reachable in `en`, `nl`, and `pt`.
- Confirm the language switcher preserves page context across locales.
- Confirm localized metadata and `hreflang` values are emitted correctly.
- Run format, type, and build checks successfully after implementation.

## Rollback

- Revert to English-only routes and keep the translation dictionaries dormant if the multilingual rollout is paused or quality is insufficient.

## Links

- Related requirement(s): FR-009
- Related ICR(s): n/a
- Related PR(s): n/a
