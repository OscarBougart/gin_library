---
name: The Gin Library
description: A bilingual marketing site for a hidden speakeasy gin bar in Aachen — candlelit near-black, gold-leaf accent.
colors:
  background: "#10140F"
  surface: "#171D16"
  elevated: "#2E3A2C"
  foreground: "#F1F4F0"
  muted: "#ABBDA8"
  border: "#455742"
  accent: "#FAC105"
  accent-strong: "#C89A04"
  accent-warm: "#E98A16"
  cream: "#FEF9E6"
typography:
  display:
    fontFamily: "Catorze 27 Medium, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "normal"
  headline:
    fontFamily: "Catorze 27 Medium, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  title:
    fontFamily: "Catorze 27 Medium, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  body:
    fontFamily: "Resamitz, Georgia, serif"
    fontSize: "clamp(1rem, 2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Catorze 27 Medium, Georgia, serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  sm: "2px"
  md: "3px"
  lg: "4px"
spacing:
  section-x: "24px"
  section-y: "96px"
  card: "32px"
  container: "1140px"
components:
  button-solid:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
    typography: "{typography.label}"
  button-solid-hover:
    backgroundColor: "{colors.accent-strong}"
    textColor: "{colors.background}"
  button-brand:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
    typography: "{typography.label}"
  button-brand-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sm}"
    padding: "32px"
  nav-link:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
---

# Design System: The Gin Library

## 1. Overview

**Creative North Star: "The Candlelit Library"**

Near-black warm-olive surfaces, a single gold light source, rows of bottles standing like spines on a shelf. This is a bar you *read* a drink in, not just order one. The system is built to feel crafted and precise first: every edge is sharp, every label is set in condensed caps, and the gold accent behaves like gilding on a book cover, rare and deliberate, never a wash. The lead note is the considered detail that rewards a close look, with the speakeasy's discretion and candlelit warmth carried underneath it.

The ground is a warm olive-tinted near-black (`#10140F`), never pure black, lit by one saturated gold (`#FAC105`). Two self-hosted serifs do the talking: a condensed display face (Catorze 27) in uppercase for headings and labels, and a quieter reading serif (Resamitz) for body. Photography of the room and the drinks carries the mood; type and color frame it rather than compete with it. Motion is choreography on first load (the wordmark resolves letter by letter, then a single cream sheen sweeps across) and restraint afterward (content is visible by default and reveals gently as you scroll).

This system explicitly rejects four neighbors. It is **not a loud nightclub** (no neon, no high-saturation party energy, no club-flyer layouts). It is **not corporate-SaaS clean** (no Inter, no blue accents, no flat icon-card grids). It is **not the generic Squarespace-restaurant template** (no stock hero over identical cards in a default Google serif). And it is **not rustic-farmhouse warm** (no cream paper, no kraft, no hand-drawn cosiness); warmth here is gold-on-near-black, not linen.

**Key Characteristics:**
- Warm near-black ground (`#10140F`), never `#000`.
- Gold (`#FAC105`) used as rare light, never a flood.
- Two self-hosted serifs: condensed display caps + a sentence-case reading serif.
- Sharp 2px corners everywhere.
- Real photography carries the mood; type frames it.
- Choreographed first load, restrained scroll reveals; fully neutralized under reduced-motion.

## 2. Colors

A monochrome warm near-black field lit by a single saturated gold, with a secondary amber reserved for rare warmth.

### Primary
- **Gilt Gold** (`#FAC105`): The one light source. Headings on dark, every interactive label, button fills, the active language chip, the scroll-spy underline, focus rings, and text selection. Its rarity per view is the point.
- **Pressed Gold** (`#C89A04`): The hover/pressed state of a filled gold action. Used only as a state, never as a resting fill.

### Secondary
- **Apricot Warmth** (`#E98A16`): A secondary warm amber (`accent-warm`) held in reserve for moments that need heat without the full gold. Use sparingly; gold leads.

### Neutral
- **Library Black** (`#10140F`): The page ground (`background` / `ink`), a warm olive near-black. The base of the whole site.
- **Shelf** (`#171D16`): One step up (`surface`), for alternating section bands, cards, and the legal dialog.
- **Raised Oak** (`#2E3A2C`): Hover/raised surfaces (`elevated`), one step up again.
- **Candle White** (`#F1F4F0`): Body and heading text on dark (`foreground`), a soft off-white that never goes pure white.
- **Smoke** (`#ABBDA8`): Secondary text (`muted`), captions, the eyebrow kicker, price notes.
- **Hairline** (`#455742`): Dividers, card outlines, the 16px section rules (`border`). Used at full strength or as a low-alpha hairline.
- **Cream** (`#FEF9E6`): A warm off-white (`cream`, the lightest amber step) reserved for text set over photography (hero, contact, footer), where it reads warmer than the cool Candle White.

### Named Rules
**The Single Candle Rule.** Gold is a highlight, not a surface. One gold light source per view, on labels, a heading accent, or a CTA, never spread as a background wash. If gold covers more than a CTA and a few labels on a screen, you have overlit the room.

**The Warm Near-Black Rule.** The ground is warm olive-tinted near-black (`#10140F`). Pure `#000` and cool greys are forbidden; the warmth in the black is what separates this from every generic dark theme.

**The Cream-Over-Photo Rule.** Text on photography uses Cream (`#FEF9E6`), not Candle White. Cream carries the candlelit warmth; the cool off-white is for solid dark sections only.

## 3. Typography

**Display Font:** Catorze 27 Medium (with Georgia, serif fallback). A weightier Catorze 27 Black is also self-hosted for heavier display moments.
**Body Font:** Resamitz (with Georgia, serif fallback). Note: this reading face is exposed under the `font-sans` token name, but it is a serif, chosen for warmth, not a sans.

**Character:** A condensed, all-caps display serif paired with a softer humanist reading serif. The pairing contrasts on weight and width (tall tight caps vs. open sentence-case), not on serif-vs-sans, which keeps the whole system feeling bound by one editorial hand.

### Hierarchy
- **Display** (Medium 500, `clamp(3rem, 8vw, 6rem)`, line-height 1.0, uppercase): The hero wordmark only. Resolves letter by letter on load; capped at 6rem so the page never shouts.
- **Headline** (Medium 500, `clamp(2.25rem, 5vw, 3rem)`, line-height 1.05, uppercase): Section titles (About, Signature Cocktails, Events, Gallery, Contact). `text-wrap: balance`.
- **Title** (Medium 500, `1.5rem`, line-height 1.05, uppercase): Sub-headings inside cards (Corporate Events, Gin Tastings). The gin-tasting price steps up to `1.875rem`.
- **Body** (Regular 400, `clamp(1rem, 2vw, 1.125rem)`, line-height 1.625): Reading copy in Resamitz, sentence case, held to `max-w-prose` / `max-w-xl` (≈65ch). Set at 75–80% ink (`foreground/80`) for a softer-than-stark read on dark.
- **Label** (Medium 500, `0.875rem`, letter-spacing `0.2em`, uppercase): Nav links, buttons, footer nav, contact sub-labels. Catorze caps, widely tracked. A smaller **kicker** variant (Resamitz, `0.75rem`, letter-spacing `0.35em`, `muted`) is the eyebrow above the About heading.

### Named Rules
**The Caps-for-Headings Rule.** Condensed display caps (Catorze) are for headings and short labels only. Body copy is always sentence-case Resamitz. All-caps body is forbidden, it is unreadable at reading sizes.

**The One Kicker Rule.** The tracked uppercase eyebrow appears exactly once, as the brand's narrative opener above "Between the Lines." It is never repeated above every section. Centered headings with a short hairline rule carry the other sections instead.

**The Light-Type-Breathes Rule.** Light type on the near-black ground reads lighter than it is; body line-height stays generous (1.625) so it never feels cramped.

## 4. Elevation

The system is flat by default and conveys depth through tonal layering, not shadows. The three-step neutral ramp (`background` → `surface` → `elevated`) does the work: sections alternate between Library Black and Shelf, cards sit on Shelf with a hairline border, and hover lifts to Raised Oak. Real drop shadows appear in only two places: soft ambient halos under photographic cards, and the floating legal dialog.

### Shadow Vocabulary
- **Raised** (`box-shadow: 0 0 5px 2px rgba(0,0,0,0.1)`): Photographic cards (Event offerings) and the About photo. A soft, even halo, not a directional drop.
- **Floating** (`box-shadow: 0 0 10px 2px rgba(0,0,0,0.1)`): The legal (Impressum / Datenschutz) dialog, lifted above the page.
- **Text-on-photo** (`text-shadow: 0 1px 3px rgba(0,0,0,0.55)`): Keeps Cream text and the gold navbar legible over photography. The hero wordmark uses a deeper twin-shadow (`0 2px 24px / 0 1px 4px`) for the same reason.

### Named Rules
**The Flat-Until-Photo Rule.** Surfaces are flat at rest; depth is tonal (bg → surface → elevated). A real shadow is permitted only where content sits over a photograph, or for a modal lifted off the page. Decorative shadows on flat panels are forbidden.

## 5. Components

### Buttons
- **Shape:** Sharp, near-square corners (2px radius, `rounded-sm`). Internal padding `12px 28px` (`px-7 py-3`), Catorze caps label tracked at `0.2em`, 200ms color transition.
- **Solid** (`button-solid`): Filled gold (`#FAC105`) with a Library-Black label, the loudest action. Hover deepens to Pressed Gold (`#C89A04`).
- **Brand** (`button-brand`): Gold 1px outline with a gold label over photography; fills solid gold with a dark label on hover. The hero and contact CTAs.
- **Outline** (`button-outline`): A quieter gold outline at 50% (`accent/50`); fills gold on hover. The default secondary action.
- **Focus:** A 2px gold outline at `2px` offset on every variant.

### Cards / Containers
- **Corner Style:** 2px radius (`rounded-sm`), always.
- **Background:** Shelf (`#171D16`) on the Library-Black page.
- **Border:** A single hairline in `border` (`#455742`) at 30–60% alpha. Full borders only, never a thick colored side-stripe.
- **Shadow Strategy:** Flat unless photographic; image-topped cards take the Raised halo (see Elevation).
- **Internal Padding:** `32px` (`p-8`).
- **Image figures** (cocktail grid, gallery masonry): hairline-bordered, overflow-clipped, the photo scales to ~1.04–1.05 on hover over a 500ms reveal ease.

### Navigation
- **Style:** Fixed top bar. Transparent with Cream/gold text over the hero, then resolves to solid Library-Black with a hairline bottom border once the page scrolls past 24px (300ms color transition).
- **Brand lockup:** A stacked left lockup, "Cocktail Bar" / "The Gin Library" / "Aachen," with the wordmark fluid (`clamp(1.5rem, 6vw, 2.5rem)`) so it never overflows on small screens.
- **Links:** Catorze caps, `0.875rem`, tracked `0.2em`, gold, 44px minimum hit height. The active section shows a thin gold underline that slides between links (a shared-layout spring); the active link carries `aria-current="location"`.
- **Mobile:** Below `lg`, links collapse into a hamburger that toggles a height-animated dark panel. Opening moves focus into the panel; Escape closes it and returns focus to the toggle.

### Language Toggle (signature)
A DE / EN segmented switch in a gold 50% outline (2px radius). Idle labels are dimmed gold (`accent/70`); the active language is a solid gold chip with a Library-Black label. Each segment is a 44px target and carries `aria-pressed`.

### Legal Dialog (signature)
Impressum and Datenschutz open in a native `<dialog>` (real focus trap, Escape, backdrop, no stacking-context traps). Shelf surface, hairline border, Floating shadow, `rgba(0,0,0,0.75)` backdrop; gold section headings over body copy; bilingual, driven by the active language.

## 6. Do's and Don'ts

### Do:
- **Do** keep the ground warm near-black (`#10140F`); reach for Shelf (`#171D16`) and Raised Oak (`#2E3A2C`) for layering, never `#000`.
- **Do** treat gold (`#FAC105`) as a single candle: labels, one heading accent, one CTA per view (The Single Candle Rule).
- **Do** set headings and labels in Catorze caps and body in sentence-case Resamitz (The Caps-for-Headings Rule).
- **Do** keep every corner at 2px and every card border a full hairline.
- **Do** let real photography carry the mood; frame it with type and gold rather than competing with it.
- **Do** use Cream (`#FEF9E6`) for text over photos and Candle White (`#F1F4F0`) on solid dark sections (The Cream-Over-Photo Rule).
- **Do** keep all motion enhancement-only: content visible by default, fully neutralized under `prefers-reduced-motion`.

### Don't:
- **Don't** drift toward a **loud nightclub**: no neon, no high-saturation party palette, no club-flyer energy.
- **Don't** drift toward **corporate-SaaS clean**: no Inter or geometric sans, no blue accents, no flat icon-card grids.
- **Don't** ship the **generic restaurant template**: stock hero over identical icon-heading-text cards in a default Google serif.
- **Don't** go **rustic-farmhouse**: no cream paper, kraft, hand-drawn, or cozy-cafe warmth; warmth here is gold-on-near-black.
- **Don't** spread gold as a background wash or push it past a CTA-and-labels share of any screen.
- **Don't** repeat the tracked eyebrow kicker above every section (The One Kicker Rule); it appears once.
- **Don't** set body copy in all-caps, and never use a gradient-filled text effect, the hero highlight is a masked sheen over a single solid color, not `background-clip: text`.
- **Don't** add a colored `border-left`/`border-right` stripe to cards or callouts; full hairline borders only.
- **Don't** add decorative shadows or glassmorphism; surfaces are flat until they sit over a photo (The Flat-Until-Photo Rule).
