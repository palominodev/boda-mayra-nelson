# UI Component Index & Design System Registry

> **Project:** Boda Nelson Montenegro & Mayra Palomino (`boda-nelson-mayra`)  
> **Target Platform:** Mobile-First Web (Astro 5+ / 7, Tailwind CSS v4)  
> **Purpose:** Central inventory of reusable UI components, layout contracts, design tokens, and interactive patterns to prevent duplication across invitation and day-of live modules.

---

## 1. Design Tokens & Styling Primitives

All tokens are defined in `src/styles/global.css`. The landing tokens live in a Tailwind CSS v4 `@theme static` block and generate utilities (`bg-paper`, `text-ink`, `border-line`, `font-display`, ...). Components must use these tokens instead of hardcoded hex values.

The legacy `:root` variables (`--color-warm-*`, `--color-espresso`, `--color-champagne*`, `--font-serif`, `--font-sans`) are kept for `/en-vivo` and the admin pages, which still use the champagne look. They are not used by the landing.

### Color Palette (landing)

| Token Role | Hex Code | Tailwind Utility / CSS Variable | Intended Usage & Contrast |
| :--- | :--- | :--- | :--- |
| **Paper** | `#F4EFE7` | `bg-paper` / `--color-paper` | Main landing ground (warm ivory). |
| **Paper Alt** | `#EBE3D7` | `bg-paper-alt` / `--color-paper-alt` | Alternate section ground, footer, reserved notes. |
| **Card** | `#FBF8F3` | `bg-card` / `--color-card` | Raised surfaces: letter, venue, hotel, gift and dress code cards. |
| **Ink** | `#2B211C` | `text-ink` / `--color-ink` | Primary text, dark banner and floating CTA ground. 13.7:1 on paper. |
| **Ink Soft** | `#6A5D54` | `text-ink-soft` / `--color-ink-soft` | Secondary text and labels. 5.0:1 on paper-alt, 5.5:1 on paper. |
| **Accent** | `#8A4B3E` | `text-accent`, `bg-accent` / `--color-accent` | Rosewood: numerals, rules, links, primary CTAs. 5.8:1 on paper. |
| **Accent Strong** | `#6E3A2F` | `bg-accent-strong` / `--color-accent-strong` | Hover and pressed state of accent surfaces. |
| **Accent Soft** | `#E3B9AC` | `text-accent-soft` / `--color-accent-soft` | Accent on dark (ink) grounds only: banner link, floating CTA. |
| **Line** | `#D8CEC1` | `border-line` / `--color-line` | 1px hairlines: dividers, card and input borders. |

### Typography Scale (landing)

| Hierarchy Role | Font Family | Tailwind Class | Recommended Specs |
| :--- | :--- | :--- | :--- |
| **Hero Wordmark** | `Cormorant Garamond` | `font-display` | `text-[3.5rem]` to `text-6xl`, `uppercase font-light tracking-[0.08em]`, surnames in `font-body` small caps |
| **Section Headings** | `Cormorant Garamond` | `font-display` | `text-[1.75rem]` to `text-3xl`, `uppercase font-light tracking-[0.12em]` (via `SectionHeading`) |
| **Card Titles, Names, Pull Quotes** | `Cormorant Garamond` | `font-display` | `text-xl` to `text-2xl`, `font-normal`, `italic` for names and quotes |
| **Section Label** | `Jost` | `font-body` | `text-[11px]`, `uppercase`, `tracking-[0.3em]`, `text-accent`, prefixed by a roman numeral |
| **Body & Form Inputs** | `Jost` | `font-body` | `text-sm`, `leading-relaxed`, `text-ink` or `text-ink-soft` |
| **Buttons** | `Jost` | `font-body` | `text-xs font-medium uppercase tracking-[0.2em]`, flat rectangles, min height 44px |
| **Monospace / Codes** | System Monospace | `font-mono` | `text-xs`, used for CBU, Alias, Hashtag, and Ticket Codes |

Jost is loaded next to Cormorant Garamond and Plus Jakarta Sans in `Layout.astro`. Plus Jakarta Sans stays because `font-sans` on `/en-vivo` and admin still resolves to it; inside the `.landing` wrapper `--font-sans` is remapped to Jost, so a stray `font-sans` (for example in `RSVP.astro`) also renders in Jost.

### Utility Classes

* `.landing`: Scoped landing ground (paper background, ink text, Jost body, accent `:focus-visible` ring, rosewood selection). Applied by the wrapper in `index.astro`; never set it on `Layout.astro`.
* `.frame-marks`: Corner registration marks around a photo (gradient-drawn `::before`, no images). The host must not clip overflow; put the image in an inner `overflow-hidden` element. Tune with `--frame-mark-size`, `--frame-mark-offset`, `--frame-mark-color`.
* `.safe-bottom`: Padding respecting iOS Home Bar (`env(safe-area-inset-bottom)`).
* `.paper-texture`, `.glass-card`, `.arch-frame`: Legacy helpers. `Layout.astro` still applies `.paper-texture` to `<body>` (hidden behind the `.landing` ground on the landing); the landing sections no longer use any of the three.

### Layout Rhythm

* One vertical rhythm: sections use `py-20 px-6` (80px block, 24px inline). Grounds alternate `bg-paper` and `bg-paper-alt`.
* Hairlines (`border-line`) replace shadows and glass. Corners are square; buttons are flat rectangles.
* Animations are wrapped in `motion-safe:` and the global reduced-motion override stays in `global.css`.

### Motion Layer (landing)

Restrained editorial motion, defined in `global.css` and driven by one small inline script at the top of the `.landing` wrapper in `index.astro`. Only `opacity` and `transform` are animated (no layout shift); easing is the `--ease-editorial` token (`ease-editorial` utility), durations 800-1400ms.

* `data-hero` (+ `style="--delay:…ms"`): hero entrance on load (CSS keyframe `landing-rise`, fade + 16px rise, staggered by `--delay`). A `.frame-marks` inside a `data-hero` element also draws its corners in.
* `data-reveal`: fade + 14px rise once, when the element scrolls into view. Elements entering the viewport together get a 90ms stagger (capped at 4 steps). Put it on wrappers and cards (section headings, letter, gallery tiles, timeline steps, venue/hotel cards, FAQ rows), never on `fixed` layers or on elements that have their own transitions. `data-reveal="rail"` grows a vertical hairline from the top (used by the timeline).
* Gallery tiles zoom slowly on hover and keyboard focus (`motion-safe:` utilities on the `<img>`); the countdown digits fade/rise when they change (Web Animations API inside the countdown script, ids untouched).
* Progressive enhancement: hidden initial states only exist under `.landing.motion-ready`, which the script adds on load. Without JS the content is simply visible.
* Reduced motion: when `prefers-reduced-motion: reduce` matches, the script does not add `motion-ready`, a CSS override forces every `data-hero`/`data-reveal` element visible with no animation or transition, and the countdown skips its digit animation.

### Image Assets Registry (`public/images/`)

| File Name | Aspect Ratio | Dimensions Role | Target Component & Context |
| :--- | :--- | :--- | :--- |
| `hero.jpg` | **3:4** | Vertical Framed Portrait | [`Hero.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Hero.astro) — Main couple editorial entrance portrait |
| `gallery-proposal.jpg` | **16:9** | Landscape Panorama | [`Gallery.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gallery.astro) — Item 1: La Propuesta (Bariloche lake & mountains) |
| `gallery-cafe.jpg` | **1:1** | Square Candid | [`Gallery.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gallery.astro) — Item 2: Tardes de Café (San Telmo vintage terrace) |
| `gallery-beach.jpg` | **1:1** | Square Candid | [`Gallery.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gallery.astro) — Item 3: Viaje a la Costa (Linen beach sunset) |
| `gallery-botanical.jpg` | **3:4** / **4:3** | Vertical / Balanced | [`Gallery.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gallery.astro) — Item 4: Nuestro Compromiso (Glasshouse botanical garden) |
| `venue-reception.jpg` | **4:3** | Interior Landscape | [`Locations.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Locations.astro) — Estancia Bella Vista evening banquet setup |

---

## 2. Layouts & Pages

### `Layout.astro`
* **File:** [`src/layouts/Layout.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/layouts/Layout.astro)
* **Role:** Global application shell with PWA manifest, viewport, meta tags, and ambient audio player.
* **Constraints:** Mobile-first container (`max-w-md mx-auto min-h-screen bg-[#FDFBF7] border-x border-[#E8E3DC]/60`). Shared with `/en-vivo` and admin, so it only carries the font link and non-breaking additions; the landing sets its own ground in `index.astro`.

### `index.astro` (Main Invitation)
* **File:** [`src/pages/index.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/pages/index.astro)
* **Role:** Main wedding invitation landing page with top Live Mode banner, all event sections, and floating RSVP action. Wraps everything in the `.landing` ground.

### `en-vivo.astro` (Day-of Live Hub)
* **File:** [`src/pages/en-vivo.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/pages/en-vivo.astro)
* **Role:** Dedicated interactive hub during the wedding party with tabbed navigation: Photos, Guestbook, Tables, Trivia, and WiFi.

---

## 3. Visual & Functional Component Catalog

### 0. `SectionHeading.astro`
* **File:** [`src/components/SectionHeading.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/SectionHeading.astro)
* **Purpose:** Shared section header: roman-numeral label (`I · Nuestra Historia`), tracked-caps display title, hairline, optional intro. Props: `numeral`, `label`, `title`, `intro?`. Used by Story through FAQ (I to VIII).

### 1. `Hero.astro`
* **File:** [`src/components/Hero.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Hero.astro)
* **Purpose:** Primary above-the-fold entrance: initials ornament, giant tracked names wordmark, framed portrait (`.frame-marks`), date, countdown, and "Agendar Fecha" / RSVP actions.

### 2. `Countdown.astro`
* **File:** [`src/components/Countdown.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Countdown.astro)
* **Purpose:** Real-time countdown timer to the wedding ceremony (days, hours, minutes, seconds).

### 3. `Story.astro`
* **File:** [`src/components/Story.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Story.astro)
* **Purpose:** Welcome letter card with drop cap, italic pull quote, and signatures.

### 4. `Gallery.astro`
* **File:** [`src/components/Gallery.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Gallery.astro)
* **Purpose:** Editorial couple photo mosaic with interactive full-screen Lightbox modal.

### 5. `Timeline.astro`
* **File:** [`src/components/Timeline.astro`](file:///home/palominodev/Proyectos/boda-nelson-mayra/src/components/Timeline.astro)
* **Purpose:** Chronological itinerary of the wedding day with a hairline rail and diamond markers.

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
* **Purpose:** Sticky flat rectangular button in mobile thumb zone that automatically hides when scrolling into the RSVP section.

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
