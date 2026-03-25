## Purpose
- Contributor-facing summary of the current stack and delivery choices.

## Decision Status
- Status: Approved baseline for Phase 1 execution.
- Review cadence: Monthly or at major phase transition.
- Change control: Breaking contract changes require approved Interface Change Request (ICR).

## Current Stack (Phase 1)
- Site type: Static-first marketing/portfolio site.
- Language: TypeScript.
- Framework: Astro 5.x.
- Styling: Tailwind CSS 4.x with CSS custom properties for tokens.
- Content source: Repository-local data files/markdown (code-driven only).

## Runtime and Version Pinning Policy
- Node.js: 22 LTS (pin exact minor in `.nvmrc` and CI runtime).
- Package manager: npm 10.x with committed `package-lock.json`.
- TypeScript: 5.x (pin exact project version in `devDependencies`).
- Dependency pinning rules:
   - Runtime dependencies: exact versions.
   - Build/test/lint dependencies: pinned major+minor; patch updates allowed via lockfile refresh.
   - No floating `latest` references in scripts or CI.

## Project Toolchain
- Build: Astro CLI (`astro build`).
- Local preview: Astro preview (`astro preview`).
- Type checking: `tsc --noEmit` and `astro check`.
- Linting: ESLint with TypeScript and Astro plugins.
- Formatting: Prettier (run in CI as check mode).
- Schema validation: Zod for content contracts used by rendering.

## Hosting and Delivery
- Primary: GitHub Pages.
- Deployment model: GitHub Actions build and deploy to `gh-pages` branch.
- Fallback: publish from `main/docs` only for emergency/manual rollback windows.

### GitHub Pages Notes
- GitHub Pages serves static content from a publish source (`gh-pages` branch for this project).
- CI is the source of truth for generated artifacts; do not commit generated static output to `main`.
- For a custom domain, keep `CNAME` in deployment artifacts and configure DNS in Pages settings.

### Baseline GitHub Pages Setup (Astro)
1. Keep `outDir` at default build output unless deployment workflow requires override.
2. Add scripts:
    - `"build": "astro build"`
    - `"preview": "astro preview"`
    - `"check": "astro check && tsc --noEmit"`
    - `"lint": "eslint ."`
    - `"format:check": "prettier --check ."`
3. Use a GitHub Actions workflow to build on `main` and deploy to `gh-pages`.
4. In repo Settings -> Pages, set the source to GitHub Actions.

## Quality Gates (Required)
- CI must block merges when any of these fail:
   - Build (`astro build`).
   - Type checks (`astro check`, `tsc --noEmit`).
   - Lint (`eslint`).
   - Format check (`prettier --check`).
- Accessibility baseline:
   - Automated page-level checks on key routes (home, projects, contact).
   - No critical accessibility violations in CI reports.
- Performance baseline (Lighthouse on production build):
   - Performance >= 90
   - Accessibility >= 95
   - Best Practices >= 95
   - SEO >= 95

## Test Strategy (Phase 1)
- Primary verification:
   - Build and static route smoke checks.
   - Contract/schema validation for content records.
   - End-to-end smoke tests for top navigation and contact visibility.
- Secondary verification:
   - Component tests for high-risk rendering blocks.
   - Utility unit tests for data mapping and URL helpers.
- Minimum automation set:
   - Vitest for utility/component checks.
   - Playwright for route and navigation smoke checks.
   - axe-based accessibility checks in Playwright for critical routes.

## SEO and Analytics
- Required baseline: metadata, canonical URL, Open Graph, sitemap, robots.
- Analytics decision: enabled with privacy-first tooling only after explicit cookie/consent policy decision.
- Current default: analytics disabled until consent approach is approved.

## Content Contracts
- Project and review content must be validated against explicit schemas before rendering.
- Contract ownership: Engineering owner.
- Contract compatibility policy:
   - Additive fields are preferred.
   - Renames/removals require ICR and migration notes.
- Contract storage location: project schema definitions in source tree, referenced by feature modules.

## Security and Privacy
- Do not commit secrets/tokens in tracked files.
- If forms are introduced later, protect endpoints with anti-spam controls and server-side validation.
- Dependabot (or equivalent) must be enabled for dependency updates.
- CI must fail on high-severity dependency vulnerabilities that affect runtime dependencies.

## Planned Future Extensions (Not in Phase 1)
- Review submission flow with moderation.
- Project filtering/search.
- CMS or external content backend, if required by editing workflow.
