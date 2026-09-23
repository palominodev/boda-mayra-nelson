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

## 2. Layouts & Pages

### `Layout.astro`
* **File:** [`src/layouts/Layout.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/layouts/Layout.astro)
* **Role:** Global application shell with PWA manifest, viewport, meta tags, and ambient audio player.
* **Constraints:** Mobile-first container (`max-w-md mx-auto min-h-screen bg-[#FDFBF7] border-x border-[#E8E3DC]/60`).

### `index.astro` (Main Invitation)
* **File:** [`src/pages/index.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/pages/index.astro)
* **Role:** Main wedding invitation landing page with top Live Mode banner, all event sections, and floating RSVP action.

### `en-vivo.astro` (Day-of Live Hub)
* **File:** [`src/pages/en-vivo.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/pages/en-vivo.astro)
* **Role:** Dedicated interactive hub during the wedding party with tabbed navigation: Photos, Guestbook, Tables, Trivia, and WiFi.

---

## 3. Visual & Functional Component Catalog

### 1. `Hero.astro`
* **File:** [`src/components/Hero.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Hero.astro)
* **Purpose:** Primary above-the-fold entrance banner with initials, names, date, and "Agendar Fecha" action.

### 2. `Countdown.astro`
* **File:** [`src/components/Countdown.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Countdown.astro)
* **Purpose:** Real-time countdown timer to the wedding ceremony (days, hours, minutes, seconds).

### 3. `Story.astro`
* **File:** [`src/components/Story.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Story.astro)
* **Purpose:** Intimate welcome letter and romantic narrative with ornamental divider and signatures.

### 4. `Gallery.astro`
* **File:** [`src/components/Gallery.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gallery.astro)
* **Purpose:** Editorial couple photo mosaic with interactive full-screen Lightbox modal.

### 5. `Timeline.astro`
* **File:** [`src/components/Timeline.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Timeline.astro)
* **Purpose:** Chronological itinerary of the wedding day with vertical gradient rail and milestone cards.

### 6. `Locations.astro`
* **File:** [`src/components/Locations.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Locations.astro)
* **Purpose:** Venue cards with direct deep links to Google Maps & Waze (anti-iframe pattern).

### 7. `Lodging.astro`
* **File:** [`src/components/Lodging.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Lodging.astro)
* **Purpose:** Hotel recommendations near the venue with wedding rate promo codes and booking links.

### 8. `DressCode.astro`
* **File:** [`src/components/DressCode.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/DressCode.astro)
* **Purpose:** Attire guidelines, color swatches palette, lawn shoe tip, and bride-reserved shades note.

### 9. `Gifts.astro`
* **File:** [`src/components/Gifts.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gifts.astro)
* **Purpose:** Honeymoon registry and bank transfer data (CBU/Alias) with 1-tap copy buttons and Toast feedback.

### 10. `FAQ.astro`
* **File:** [`src/components/FAQ.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/FAQ.astro)
* **Purpose:** Accordion of frequently asked questions (parking, plus-ones, dietary requirements, RSVP deadlines).

### 11. `RSVP.astro`
* **File:** [`src/components/RSVP.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/RSVP.astro)
* **Purpose:** Interactive 3-step micro-stepper attendance confirmation flow with confetti celebration, boarding-pass receipt, and local storage persistence.

### 12. `FloatingCTA.astro`
* **File:** [`src/components/FloatingCTA.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/FloatingCTA.astro)
* **Purpose:** Sticky pill button in mobile thumb zone that automatically hides when scrolling into the RSVP section.

### 13. `AudioPlayer.astro`
* **File:** [`src/components/AudioPlayer.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/AudioPlayer.astro)
* **Purpose:** Discreet ambient background music player with 3-bar animated soundwave and Web Audio API synthesizer fallback.

### 14. `Footer.astro`
* **File:** [`src/components/Footer.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Footer.astro)
* **Purpose:** Closing signatures, official hashtag, and emergency WhatsApp coordinator contact card.

---

## 4. Live Day-of Component Suite (`src/components/live/`)

All day-of modules are tabbed under [`src/pages/en-vivo.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/pages/en-vivo.astro):

### 1. `PhotoWall.astro`
* **File:** [`src/components/live/PhotoWall.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/live/PhotoWall.astro)
* **Purpose:** Collaborative live photo stream with camera/gallery input (`capture="environment"`) without installing apps.

### 2. `Guestbook.astro`
* **File:** [`src/components/live/Guestbook.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/live/Guestbook.astro)
* **Purpose:** Digital guestbook where guests publish live wishes with emoji reactions (❤️, 🥂, 🎉, ✨).

### 3. `TableFinder.astro`
* **File:** [`src/components/live/TableFinder.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/live/TableFinder.astro)
* **Purpose:** Offline-capable instant seating chart search engine highlighting assigned table and companions.

### 4. `VenueWifi.astro`
* **File:** [`src/components/live/VenueWifi.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/live/VenueWifi.astro)
* **Purpose:** 1-tap copy of venue WiFi network credentials.

### 5. `CoupleTrivia.astro`
* **File:** [`src/components/live/CoupleTrivia.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/live/CoupleTrivia.astro)
* **Purpose:** Interactive 4-question game with real-time feedback, fun facts, score tracking, and confetti reward.
