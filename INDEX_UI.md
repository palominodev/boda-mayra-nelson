# UI Component Index & Design System Registry

> **Project:** Boda Nelson Montenegro & Mayra Palomino (`boda-nelson-mayra`)  
> **Target Platform:** Mobile-First Web (Astro 5+ / 7, Tailwind CSS v4)  
> **Purpose:** Central inventory of reusable UI components, layout contracts, design tokens, and interactive patterns to prevent duplication across invitation and day-of live modules.

---

## 1. Design Tokens & Styling Primitives

All tokens are defined in `src/styles/global.css` and configured for Tailwind CSS v4.

### Color Palette

| Token Role | Hex Code | Tailwind / CSS Variable | Intended Usage & Contrast Rule |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#FDFBF7` | `--color-warm-bg` / `bg-[#FDFBF7]` | Main page background (Warm Linen). Non-reflective in outdoor sunlight. |
| **Surface / Card** | `#FFFFFF` | `--color-warm-card` / `bg-white` | Elevated content containers, venue cards, forms. |
| **Soft Surface** | `#F9F6F0` | `--color-warm-surface` / `bg-[#F9F6F0]` | Nested cards, info pills, footer background. |
| **Primary Text** | `#1C1917` | `--color-espresso` / `text-[#1C1917]` | Headings, titles, data values. Contrast ratio ≥ 7:1 against canvas. |
| **Secondary Text** | `#6B6560` | `--color-muted-text` / `text-[#6B6560]` | Subtitles, labels, descriptions. Contrast ratio ≥ 4.5:1. |
| **Accent / Champagne** | `#C5A880` | `--color-champagne` / `text-[#C5A880]` | Monograms, primary CTAs, borders, timeline markers. |
| **Dark Champagne** | `#9A7B4F` | `--color-champagne-dark` / `text-[#9A7B4F]` | High-contrast interactive states, links, badge text. |
| **Border Soft** | `#E8E3DC` | `--color-border-warm` / `border-[#E8E3DC]` | 1px dividers, card boundaries, input strokes. |

### Typography Scale

| Hierarchy Role | Font Family | Tailwind Class | Recommended Specs |
| :--- | :--- | :--- | :--- |
| **Hero & Couple Names** | `Cormorant Garamond` | `font-serif` / `font-display` | `text-5xl` to `text-6xl`, `font-normal`, `leading-[1.05]` |
| **Section Headings** | `Cormorant Garamond` | `font-serif` / `font-display` | `text-3xl` to `text-4xl`, `tracking-tight` |
| **Card & Modal Titles** | `Cormorant Garamond` | `font-serif` / `font-display` | `text-xl` to `text-2xl`, `font-semibold` |
| **Metadata & Labels** | `Plus Jakarta Sans` | `font-sans` / `font-body` | `text-[10px]` to `text-xs`, `uppercase`, `tracking-[0.2em]`, `font-semibold` |
| **Body & Form Inputs** | `Plus Jakarta Sans` | `font-sans` / `font-body` | `text-xs` to `text-sm`, `leading-relaxed` |
| **Monospace / Codes** | System Monospace | `font-mono` | `text-xs`, used for CBU, Alias, Hashtag, and Ticket Codes |

### Utility Classes

* `.paper-texture`: Radial dot pattern creating tactile paper depth without layout shifts.
* `.arch-frame`: Architectural top arch (`border-radius: 160px 160px 0 0`) for photo framing.
* `.glass-card`: Semi-opaque white card (`rgba(255, 255, 255, 0.94)`) with backdrop blur.
* `.safe-bottom`: Padding respecting iOS Home Bar (`env(safe-area-inset-bottom)`).

---

## 2. Layouts

### `Layout.astro`
* **File:** [`src/layouts/Layout.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/layouts/Layout.astro)
* **Role:** Global application shell.
* **Constraints:** Mobile-first constrained container (`max-w-md mx-auto min-h-screen bg-[#FDFBF7] border-x border-[#E8E3DC]/60`).
* **Props:**
  * `title?: string` (Page title)
  * `description?: string` (OpenGraph / SEO description)
* **Contract:** Includes font preconnects, viewport optimization (`viewport-fit=cover`), OpenGraph metadata, and global CSS injection.

---

## 3. Visual & Functional Component Catalog

### 1. `Hero.astro`
* **File:** [`src/components/Hero.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Hero.astro)
* **Purpose:** Primary above-the-fold entrance banner.
* **Composed Elements:**
  * Circular Monogram Badge (`w-14 h-14 rounded-full border border-[#C5A880]/60`)
  * Couple Names (`Cormorant Garamond` with italicized amber `&`)
  * Arch Photo Card (`rounded-t-full`, 9:16 ratio)
  * Embedded [`Countdown.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Countdown.astro)
  * "Agendar Fecha" action: Dropdown with Google Calendar deep link and Apple/Outlook `.ics` download
  * "Confirmar Asistencia" smooth scroll trigger
* **Reuse Notice:** Do **not** re-render hero titles or date banners elsewhere; link back to `#top` or reuse the subcomponents.

### 2. `Countdown.astro`
* **File:** [`src/components/Countdown.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Countdown.astro)
* **Purpose:** Real-time countdown timer to the wedding ceremony.
* **Props:** `targetDate: string` (ISO 8601 string, e.g., `'2026-11-21T17:00:00-03:00'`).
* **UI Structure:** 4-column responsive grid (`Días`, `Horas`, `Minutos`, `Segundos`).
* **Behavior:** Pure client-side tick (`setInterval`) with zero external dependencies.

### 3. `Story.astro`
* **File:** [`src/components/Story.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Story.astro)
* **Purpose:** Intimate welcome letter and romantic narrative.
* **Pattern:** Ornamental divider with couple initials (`N & M`), editorial blockquote, and cursive signatures.

### 4. `Timeline.astro`
* **File:** [`src/components/Timeline.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Timeline.astro)
* **Purpose:** Chronological itinerary of the wedding day.
* **Data Source:** `weddingConfig.timeline` (`src/config/wedding.config.ts`).
* **Pattern:** Vertical timeline with continuous gradient rail (`bg-gradient-to-b from-[#C5A880]/20 via-[#C5A880] to-[#C5A880]/20`) and individual cards per milestone.
* **Day-of Extensibility:** Ready to accept an `activeMilestone` index or timestamp highlighter for the live day mode.

### 5. `Locations.astro`
* **File:** [`src/components/Locations.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Locations.astro)
* **Purpose:** Venue details, addresses, and navigation deep links.
* **Data Source:** `weddingConfig.venues.ceremony` & `weddingConfig.venues.reception`.
* **Pattern:** Dual action buttons per venue card:
  * Google Maps: Universal search API link
  * Waze: Deep-link URL intent (`waze.com/ul?navigate=yes`)
* **Anti-Pattern Guard:** **Never embed Google Maps iframes** (they consume 2MB+ and hijack touch scroll gestures).

### 6. `DressCode.astro`
* **File:** [`src/components/DressCode.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/DressCode.astro)
* **Purpose:** Attire guidelines, color palette recommendations, and terrain context.
* **Sub-modules:**
  * Category Pill: `Elegante / Formal` (`bg-[#1C1917] text-white`)
  * Swatches Grid: Circles (`w-8 h-8 rounded-full`) with labels and hover scale
  * Context Alert: Lawn/heel advisory card
  * Reserved Colors Callout: Warm amber container specifying bride-reserved white/ivory shades.

### 7. `Gifts.astro`
* **File:** [`src/components/Gifts.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gifts.astro)
* **Purpose:** Honeymoon registry and bank transfer data (CBU/Alias).
* **Pattern:** 1-tap copy buttons with Clipboard API (`navigator.clipboard.writeText`) and animated Toast notification (`#toast-notification`).
* **Reusable Class:** `.btn-copy` with `data-copy="..."` and `data-label="..."`.

### 8. `RSVP.astro`
* **File:** [`src/components/RSVP.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/RSVP.astro)
* **Purpose:** Interactive attendance confirmation flow.
* **Pattern:** **3-Step Micro-Stepper** (1 screen per decision):
  * **Step 1:** Guest Name + Attendance Binary Choice (Yes / No). Branching: "No" leads directly to polite farewell & wishes form.
  * **Step 2:** Passes Counter (`[-] count [+]`) + Dietary Tags (`.diet-chip`, multi-select) + Companion Name.
  * **Step 3:** Song for the DJ + Personal message to the couple + Confirm button.
  * **Screen 4 (Success):** Boarding pass ticket card + `canvas-confetti` reward (respects `prefers-reduced-motion`) + Edit link.
* **State Persistence:** `localStorage.getItem('nelson_mayra_rsvp')`.
* **Hydration:** Client script runs inline without heavy React runtime overhead.

### 9. `FloatingCTA.astro`
* **File:** [`src/components/FloatingCTA.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/FloatingCTA.astro)
* **Purpose:** Persistent thumb-zone CTA for quick RSVP.
* **Behavior:** Anchored at `bottom-6`, automatically hides via `IntersectionObserver` when the user scrolls into the `#rsvp` section to avoid obscuring inputs.

### 10. `Footer.astro`
* **File:** [`src/components/Footer.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Footer.astro)
* **Purpose:** Closing signatures, official hashtag, and emergency coordinator card.
* **Pattern:** Direct WhatsApp coordinator button with pre-filled inquiry text (prevents guests from contacting the bride and groom during preparations).

---

## 4. Reusability Guide for Future Sections (Day-of Scope)

When extending this project for the **Live Wedding Day Hub**, strictly reuse the existing component contracts:

| Planned Live Feature | Component to Reuse / Extend | Shared Pattern to Follow |
| :--- | :--- | :--- |
| **Live Photo Wall (QR Scan)** | Add to `src/components/live/PhotoWall.astro` | Use `.arch-frame` or masonry cards, reuse `.glass-card` styling and champagne borders. |
| **Digital Guestbook Feed** | Add to `src/components/live/Guestbook.astro` | Follow `Story.astro` card layout and `RSVP` confetti/reaction interactions. |
| **Table Finder (Buscador de Mesas)** | Add to `src/components/live/TableFinder.astro` | Follow `RSVP.astro` input and ticket card pattern (`#F9F6F0` dashed border card). |
| **WiFi Access Card** | Add to `src/components/live/VenueWifi.astro` | Follow `Gifts.astro` `.btn-copy` pattern for single-tap password copying. |
