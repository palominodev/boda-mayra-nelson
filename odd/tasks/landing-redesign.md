# Landing Redesign (Inspo-guided)

## Objective and why

Redesign the visual language of the main invitation landing (`src/pages/index.astro` and its section components) using real production references studied through the Inspo MCP. The current page is a competent champagne-on-linen template with hardcoded hex colors repeated across every component; the goal is a more distinctive, editorial "hospitality letter" feel, and centralized design tokens so future visual changes are one-place edits.

## Product decisions (user-owned)

- Desktop keeps the phone-column format (`max-w-md` invitation-in-a-phone). Only the visual style inside that column is redesigned. (User answer, 2026-09-30.)
- Content, copy, section order, and behavior stay as they are. This is a visual redesign, not a content or feature change.

## Inspo study (evidence)

Calls: one `recommend` (wedding brief, light/luxe/warm) and one `search_screens` (roman-serif, light paper, warm accent). E-commerce/SaaS hits discarded. References kept:

- `mirazur-fr--en-reservation-html` (hospitality): muted ground, giant centered high-contrast serif wordmark with a tiny ornament as the only decoration, all-caps light serif display vs. sentence-case sans body, extreme scale contrast.
- `contralabs-com`: sepia paper, elegant serif, a single framed image with corner registration marks, airy composition.
- `buly1803-com`: warm brown ink (#74412a) on dusty rose, all-caps widely tracked serif display, flat rectangular CTA.
- `synthesis-partners--recent-work`: soft oversized serif on cream (#fdfaf6), hairline rules, deep red-brown accent.

Inspo guidance applied: hero complete in the first viewport; one vertical rhythm at every section seam; copy in a padded column (24px min inline padding); take composition, not rule-breaking.

## Design direction

- **Paper:** warm ivory `#F4EFE7`; alternate section ground `#EBE3D7`; card surface `#FBF8F3`.
- **Ink:** `#2B211C` (primary), `#6A5D54` (secondary, must keep ≥4.5:1 on paper).
- **Accent (single):** rosewood `#8A4B3E` for rules, numerals, links, and primary CTAs; hover/pressed `#6E3A2F`.
- **Lines:** hairline `#D8CEC1`.
- **Type:** display stays Cormorant Garamond, used two ways: all-caps light with wide tracking for section titles (Mirazur/Buly), italic for names and pull quotes. Body moves from Plus Jakarta Sans to Jost (geometric sans that pairs with classical serifs).
- **Signatures:** giant centered monogram/wordmark in the hero with a small ornament; roman-numeral section labels (`I · Nuestra historia`) over tracked caps titles; photos framed with corner registration marks instead of the arch; flat rectangular CTAs; hairline dividers instead of shadows and glass.
- **Rhythm:** one vertical section rhythm (about 80px on the column), 24px inline padding.

## Scope and constraints

- Tokens live in `src/styles/global.css` via Tailwind v4 `@theme` (for example `bg-paper`, `text-ink`, `text-accent`, `border-line`) so components stop hardcoding hex values. Existing CSS variables stay as-is to avoid breaking other pages.
- `Layout.astro` is shared with `/en-vivo` and admin pages: limit changes to the font stylesheet link and non-breaking token additions. The landing applies its own ground inside `index.astro`, so `/en-vivo` keeps its current look.
- **Excluded:** `src/components/RSVP.astro` carries uncommitted invitation-dashboard work. Editing or committing it here would sweep that work into this branch. Its restyle is deferred until that work is committed. It must still render correctly next to the new sections.
- Preserve every script hook: ids, `data-*` attributes, and classes queried by client scripts (countdown, lightbox, copy-to-clipboard, FAQ accordion, floating CTA visibility, audio player).
- Accessibility: text contrast ≥4.5:1, visible focus states, touch targets ≥44px, `prefers-reduced-motion` respected.
- Artifacts (code, comments, docs) in English; user-facing copy stays in its existing Spanish.
- TDD mode: off, source `openspec/config.yaml` (`strict_tdd: false`). No behavior changes are planned, so the checks are functional: `pnpm build` plus a visual check at 390px and 1280px widths.
- Route: delegated-direct, one writer (12+ non-trivial component files; reading prepares the write). Commits stage only this feature's files, never the unrelated uncommitted work.
- Forecast: about 900–1300 authored changed lines across T1–T5. Delivery strategy: ask-on-risk. The chain strategy is asked before any PR is created; push and PR stay the user's decisions.

## Tasks

### T1. Tokens, fonts, and landing shell

Status: completed. Route: delegated writer.

Add `@theme` tokens and Jost to `global.css` and the Layout font link; add the corner-frame utility; restyle the top live-mode banner and the landing ground in `index.astro`.
Acceptance: `pnpm build` passes; `/en-vivo` is visually unchanged apart from the body font.

### T2. Hero, Countdown, Story

Status: completed. Route: delegated writer.

Hero with the giant monogram and ornament, framed portrait, and hero complete in the first viewport. Countdown restyled with the same script hooks. Story as a letter with an italic pull quote.
Acceptance: build passes; the countdown still ticks.

### T3. Gallery, Timeline, Locations

Status: completed. Route: delegated writer.

Acceptance: build passes; the lightbox still opens and closes; map deep links are unchanged.

### T4. Lodging, DressCode, Gifts, FAQ

Status: completed. Route: delegated writer.

Acceptance: build passes; copy buttons and the FAQ accordion still work.

### T5. Footer, FloatingCTA, and docs

Status: completed. Route: delegated writer.

Update `INDEX_UI.md` tokens and typography to the new system.
Acceptance: build passes; the floating CTA still hides at the RSVP section.

### T6. Visual verification

Status: completed with review unavailable. Route: parent inline.

Screenshots at 390px and 1280px, contrast spot-check, per-commit risk assessment, and review under RDD.

## Progress and evidence

- 2026-09-30: Inspo installed at project scope (`.mcp.json`). Study done. Branch `feat/landing-redesign` created from `main`, carrying the unrelated uncommitted work unstaged.

- T1 (completed): `@theme static` tokens (paper, paper-alt, card, ink, ink-soft, accent, accent-strong, accent-soft, line, font-display, font-body), Jost added to the Layout font link (Plus Jakarta Sans kept: `font-sans` on /en-vivo and admin still resolves to it), `.landing` scoped ground (remaps `--font-sans` to Jost, focus-visible ring, selection), `.frame-marks` corner-mark utility, restyled live-mode banner. Legacy `.font-display`/`.font-body` rules removed (same family / unused elsewhere; utilities now come from the theme). Commit: 78a6a1e. `pnpm build`: passed.

- T2 (completed): new `SectionHeading.astro` (roman-numeral label, tracked-caps display title, hairline, optional intro; reused by the section components). Hero: giant tracked first-name wordmark with small-caps surnames, `.frame-marks` portrait (arch removed), flat rectangular CTAs, date in italic display. Countdown: hairline-divided numerals, same `#countdown-container`/`data-target`/`#cd-*` hooks (ticks in the browser). Story: letter card with drop cap, italic pull quote, signatures. Preserved hooks: `#cal-dropdown-root`, `#cal-toggle-btn`, `#cal-menu`, `#btn-download-ics`, `#rsvp` link. Live-mode banner got right padding so it clears the fixed audio button. Commit: d685cf5. `pnpm build`: passed. Visual spot check at 390px done.

- T3 (completed): Gallery tiles are flat hairline-framed photos with italic captions below; lightbox restyled with the same `data-lightbox-*` attributes and `#gallery-lightbox`, `#lightbox-*` ids. Additive a11y: tiles are `role="button" tabindex="0"` with Enter/Space activation, Escape closes the lightbox, close button is 44px with an aria-label. Timeline: hairline rail, rotated-square markers, caps time labels, no cards. Locations: flat paper cards, outlined badge, reception photo with `.frame-marks`, 44px map buttons; all Google Maps/Waze `href`s unchanged, map icons recoloured to the accent. Commit: 54fbb07. `pnpm build`: passed. Browser check at 390px: lightbox opens (click) and closes.

- T4 (completed): Lodging, DressCode, Gifts and FAQ use `SectionHeading` (V to VIII), flat `bg-card`/`border-line` surfaces, outlined badges, accent-filled or accent-outlined 44px buttons. Preserved hooks: `.btn-copy` with `data-copy`/`data-label`, `#alias-val`, `#cbu-val`, `#toast-notification` (+ `#toast-text` and the opacity/translate classes the script toggles, now also `role="status"`), `.faq-btn`/`data-faq-idx`/`aria-expanded`, `.faq-icon`, `.faq-content` with `hidden`. The reserved-colours note no longer uses amber; emerald accents replaced by the accent token. Commit: 53a9a70. `pnpm build`: passed. Browser check at 390px: FAQ accordion opens, swaps `+`/`−` and closes siblings.

- T5 (completed): Footer restyled (monogram ornament, flat coordinator card, accent WhatsApp button, extra bottom padding so the floating CTA never covers the sign-off). FloatingCTA is a flat ink rectangle with `motion-safe` animation; `#floating-rsvp-cta` and the opacity/translate classes toggled by its script are unchanged. `INDEX_UI.md` updated: new tokens, typography, utilities (`.landing`, `.frame-marks`), layout rhythm, `SectionHeading`, and component descriptions. Commit: 90adcf1. `pnpm build`: passed. Browser check at 390px: the CTA is visible while scrolling the page and hidden while the RSVP section is in view; `/en-vivo` still renders with its original look and body font.

- T6 (completed, review unavailable): parent spot check `pnpm build`: passed. Playwright screenshots at 390x844 (fold and full page) and 1280x800: the hero (monogram, names, framed portrait, date, CTA) reads as intended; desktop keeps the phone column. The reception photo looked blank in the full-page capture because of `loading="lazy"`; its markup is unchanged from `main`, so this is a capture artifact. Contrast: ink-soft 4.99–5.99:1, accent 5.23–6.28:1, ink >=12.3:1 across paper, paper-alt and card. Native RDD: `review assess` over `8ae8ab9..HEAD` (18 files, +574/-378) returned `unassessable` (untracked inventory required), so the range was treated as due. The preflight STATUS asked for an intended-untracked selection. The empty selection (all untracked files belong to the invitation-dashboard work) was refused with `invalid_request` ("must be exact ... JSON"). The review was stopped there without a retry loop, so there is no review receipt for this candidate. Known gaps: copy buttons not exercised in a real browser; RSVP keeps its old palette (deferred).

## Next step

User decisions: push `feat/landing-redesign` and/or open a PR (chain strategy to be chosen then, since the branch is about 950 changed lines); whether to retry the native review. `RSVP.astro` restyle stays deferred until the invitation-dashboard work is committed.
