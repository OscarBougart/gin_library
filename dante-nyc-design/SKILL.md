---
name: dante-nyc-design
description: Design system skill for dante-nyc. Activate when building UI components, pages, or any visual elements. Provides exact color tokens, typography scale, spacing grid, component patterns, and craft rules. Read references/DESIGN.md before writing any CSS or JSX. Includes ultra-mode visual journey: read references/ANIMATIONS.md, references/LAYOUT.md, references/COMPONENTS.md, and references/INTERACTIONS.md for full motion and layout details.
---

# dante-nyc Design System

You are building UI for **dante-nyc**. Light-themed, neutral palette, sans-serif typography (Catorze 27 Medium), compact density on a 4px grid, expressive motion.

## Visual Reference

**IMPORTANT**: Study ALL screenshots below before writing any UI. Match colors, typography, spacing, layout, and motion exactly as shown.

### Scroll Journey (Cinematic Visual States)

> These screenshots capture the website at different scroll depths. The design changes dramatically as you scroll — each frame shows a different cinematic state. Replicate these exact visual transitions.

#### 0% — Hero / Above the fold

![Scroll 0%](screens/scroll/scroll-000.png)

#### 17% — Mid-page at 17% scroll

![Scroll 17%](screens/scroll/scroll-017.png)

#### 33% — Mid-page at 33% scroll

![Scroll 33%](screens/scroll/scroll-033.png)

#### 50% — Mid-page at 50% scroll

![Scroll 50%](screens/scroll/scroll-050.png)

#### 67% — Mid-page at 67% scroll

![Scroll 67%](screens/scroll/scroll-067.png)

#### 83% — Mid-page at 83% scroll

![Scroll 83%](screens/scroll/scroll-083.png)

#### 100% — Footer / End of page

![Scroll 100%](screens/scroll/scroll-100.png)

> Read `references/DESIGN.md` for full token details. Read `references/ANIMATIONS.md` for motion specs. Read `references/LAYOUT.md` for layout structure. Read `references/COMPONENTS.md` for component patterns.

## Ultra Reference Files

This package includes extended documentation. **Read these files before implementing:**

| File | Contents |
|------|----------|
| `references/DESIGN.md` | Full design system tokens, colors, typography, spacing |
| `references/VISUAL_GUIDE.md` | **START HERE** — Master visual guide with all screenshots embedded |
| `references/ANIMATIONS.md` | CSS keyframes, scroll triggers, motion library stack, video specs |
| `references/LAYOUT.md` | Flex/grid containers, page structure, spacing relationships |
| `references/COMPONENTS.md` | DOM component patterns, HTML structure, class fingerprints |
| `references/INTERACTIONS.md` | Hover/focus states with before/after style diffs |
| `screens/scroll/` | 7 scroll journey screenshots showing cinematic states |

## Design Philosophy

- **Layered depth** — use shadow tokens to create a sense of physical layering. Each elevation level has a specific shadow.
- **Gradient accents** — gradients are used thoughtfully for emphasis, not decoration.
- **Type pairing** — Catorze 27 Medium for body/UI text, Resamitz for headings/display. Never introduce a third typeface.
- **compact density** — 4px base grid. Every dimension is a multiple of 4.
- **neutral palette** — the color temperature runs neutral, matching the sans-serif typography.
- **Expressive motion** — animations are an integral part of the experience. Use spring physics and layout animations.

## Color System

### Core Palette

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Background | `--background` | `#ffffff` | Page/app background |
| Surface | `--surface` | `#f2f2f2` | Cards, panels, modals |
| Text Primary | `--text-primary` | `#000000` | Headings, body text |
| Text Muted | `--text-muted` | `#b0b3b4` | Captions, placeholders |
| Border | `--border` | `#565a5c` | Dividers, card borders |

### Status Colors

| Status | Hex | Use |
|--------|-----|-----|
| Success | `#5cb85c` | Confirmations, positive trends |
| Warning | `#f4eadb` | Caution states, pending items |
| Danger | `#d9534f` | Errors, destructive actions |

### Extended Palette

- `#cacccd`
- `#f0ad4e`
- `#dbdbdb`
- `#5bc0de`
- `#82888a`
- `#404040`
- `#eedfc7`
- `#31b0d5`

## Typography

### Font Stack

- **Catorze 27 Medium** — Heading 1, Heading 2, Heading 3
- **Resamitz** — Body, Caption

### Font Sources

```css
@font-face {
  font-family: "Resamitz";
  src: url("fonts/Resamitz-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Catorze 27 Medium";
  src: url("fonts/Catorze27Medium-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Catorze 27 Black";
  src: url("fonts/Catorze27Black-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "slick";
  src: url("fonts/slick-Regular.woff") format("woff");
  font-weight: 400;
}
```

### Type Scale

| Role | Family | Size | Weight |
|------|--------|------|--------|
| Heading 1 | Catorze 27 Medium | 6rem | 700 |
| Heading 2 | Catorze 27 Medium | 5.5rem | 700 |
| Heading 3 | Catorze 27 Medium | 4.5rem | 700 |
| Body | Resamitz | 1rem | 400 |
| Caption | Resamitz | 1.25rem | 400 |

### Typography Rules

- Body/UI: **Catorze 27 Medium**, Headings: **Resamitz** — these are the only display fonts
- Max 3-4 font sizes per screen
- Headings: weight 600-700, body: weight 400
- Use color and opacity for text hierarchy, not additional font sizes
- Line height: 1.5 for body, 1.2 for headings

## Spacing & Layout

### Base Grid: 4px

Every dimension (margin, padding, gap, width, height) must be a multiple of **4px**.

### Spacing Scale

`2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24` px

### Spacing as Meaning

| Spacing | Use |
|---------|-----|
| 4-8px | Tight: related items (icon + label, avatar + name) |
| 12-16px | Medium: between groups within a section |
| 24-32px | Wide: between distinct sections |
| 48px+ | Vast: major page section breaks |

### Border Radius

Scale: `.1em, .2rem, .3rem, 2px, 3px, 4px`
Default: `2px`

### Container

Max-width: `1000px`, centered with auto margins.

### Breakpoints

| Name | Value |
|------|-------|
| sm | 544px |
| sm | 640px |
| md | 768px |
| lg | 769px |
| lg | 800px |
| lg | 810px |
| lg | 900px |
| lg | 992px |
| xl | 1050px |
| xl | 1200px |
| xl | 1255px |

Mobile-first: design for small screens, layer on responsive overrides.

## Component Patterns

### Card

```css
.card {
  background: #f2f2f2;
  border: 1px solid #565a5c;
  border-radius: 2px;
  padding: 16px;
  box-shadow: 0 0 5px 2px rgba(0,0,0,0.1);
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Button

```css
/* Primary */
.btn-primary {
  background: #cccccc;
  color: #000000;
  border-radius: 2px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover { opacity: 0.9; }

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 1px solid #565a5c;
  color: #000000;
  border-radius: 2px;
  padding: 8px 16px;
}
```

```html
<button class="btn-primary">Get Started</button>
<button class="btn-ghost">Learn More</button>
```

### Input

```css
.input {
  background: #ffffff;
  border: 1px solid #565a5c;
  border-radius: 2px;
  padding: 8px 12px;
  color: #000000;
  font-size: 14px;
}
.input:focus { border-color: var(--accent); outline: none; }
```

```html
<input class="input" type="text" placeholder="Search..." />
```

### Badge / Chip

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  background: #f2f2f2;
  color: #b0b3b4;
}
```

```html
<span class="badge">New</span>
<span class="badge">Beta</span>
```

### Modal / Dialog

```css
.modal-backdrop { background: rgba(0, 0, 0, 0.6); }
.modal {
  background: #f2f2f2;
  border: 1px solid #565a5c;
  border-radius: 4px;
  padding: 24px;
  max-width: 480px;
  width: 90vw;
  box-shadow: 0 0 10px 2px rgba(0,0,0,0.1);
}
```

```html
<div class="modal-backdrop">
  <div class="modal">
    <h2>Dialog Title</h2>
    <p>Dialog content.</p>
    <button class="btn-primary">Confirm</button>
    <button class="btn-ghost">Cancel</button>
  </div>
</div>
```

### Table

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  color: #b0b3b4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #565a5c;
}
.table td {
  padding: 12px;
  border-bottom: 1px solid #565a5c;
}
```

```html
<table class="table">
  <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Item One</td><td>Active</td><td>Jan 1</td></tr>
    <tr><td>Item Two</td><td>Pending</td><td>Jan 2</td></tr>
  </tbody>
</table>
```

### Navigation

```css
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #565a5c;
}
.nav-link {
  color: #b0b3b4;
  padding: 8px 12px;
  border-radius: 2px;
  transition: color 150ms;
}
.nav-link:hover { color: #000000; }
```

```html
<nav class="nav">
  <a href="/" class="nav-link active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/pricing" class="nav-link">Pricing</a>
  <button class="btn-primary" style="margin-left: auto">Get Started</button>
</nav>
```

### Extracted Components

These components were found in the codebase:

**Button** (`html`)
- Variants: `brand`, `brand-alt`, `s`

## Page Structure

The following page sections were detected:

- **Navigation** — Top navigation bar (7 items)
- **Hero** — Hero/banner section with headline and CTAs
- **Footer** — Page footer with links and info (12 items)

When building pages, follow this section order and structure.

## Animation & Motion

This project uses **expressive motion**. Animations are part of the design language.

### CSS Animations

- `rotate`
- `fa-spin`
- `underline`
- `fa-beat`
- `fa-bounce`

### Motion Tokens

- **Duration scale:** `0ms`, `0s`, `1ms`, `100ms`, `200ms`, `250ms`, `300ms`, `350ms`, `500ms`, `750ms`, `800ms`
- **Easing functions:** `ease-in-out`, `linear`, `ease`, `cubic-bezier(0.77,0,0.175,1)`, `ease-in`, `cubic-bezier(0.19,1,0.22,1)`
- **Animated properties:** `height`

### Motion Guidelines

- **Duration:** Use values from the duration scale above. Short (0ms) for micro-interactions, long (800ms) for page transitions
- **Easing:** Use `ease-in-out` as the default easing curve
- **Direction:** Elements enter from bottom/right, exit to top/left
- **Reduced motion:** Always respect `prefers-reduced-motion` — disable animations when set

## Depth & Elevation

### Shadow Tokens

- Raised (cards, buttons): `0 0 5px 2px rgba(0,0,0,0.1)`
- Raised (cards, buttons): `0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07)`
- Raised (cards, buttons): `rgb(128, 128, 128) 0px 0px 5px 0px`
- Floating (dropdowns, popovers): `0 0 10px 2px rgba(0,0,0,0.1)`

### Z-Index Scale

`0, 1, 2, 9, 10, 11, 20, 30, 40, 50, 1000, 1042, 1043, 1044, 1045, 1046`

Use these exact values — never invent z-index values.

## Anti-Patterns (Never Do)

- **No blur effects** — no backdrop-blur, no filter: blur()
- **No zebra striping** — tables and lists use borders for separation
- **No invented colors** — every hex value must come from the palette above
- **No arbitrary spacing** — every dimension is a multiple of 4px
- **No extra fonts** — only Catorze 27 Medium and Resamitz are allowed
- **No arbitrary border-radius** — use the scale: .1em, .2rem, .3rem, 2px, 3px, 4px
- **No opacity for disabled states** — use muted colors instead

## Workflow

1. **Read** `references/DESIGN.md` before writing any UI code
2. **Pick colors** from the Color System section — never invent new ones
3. **Set typography** — Catorze 27 Medium, Resamitz only, using the type scale
4. **Build layout** on the 4px grid — check every margin, padding, gap
5. **Match components** to patterns above before creating new ones
6. **Apply elevation** — use shadow tokens
7. **Validate** — every value traces back to a design token. No magic numbers.

## Brand Spec

- **Favicon:** `https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/images/32041Dante_%C3%82_Black.png`
- **Site URL:** `https://www.dante-nyc.com/`
- **Brand typeface:** Catorze 27 Medium

## Quick Reference

```
Background:     #ffffff
Surface:        #f2f2f2
Text:           #000000 / #b0b3b4
Accent:         (not extracted)
Border:         #565a5c
Font:           Catorze 27 Medium
Spacing:        4px grid
Radius:         2px
Components:     7 detected
```

## When to Trigger

Activate this skill when:
- Creating new components, pages, or visual elements for dante-nyc
- Writing CSS, Tailwind classes, styled-components, or inline styles
- Building page layouts, templates, or responsive designs
- Reviewing UI code for design consistency
- The user mentions "dante-nyc" design, style, UI, or theme
- Generating mockups, wireframes, or visual prototypes

---

# Full Reference Files

> Every output file is embedded below. Claude has full design system context from /skills alone.

## Design System Tokens (DESIGN.md)

# dante-nyc DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 2 · Components: 7
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography pairs **Resamitz** for display/headings with **Catorze 27 Medium** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#ffffff` | background | Page background, darkest surface |
| surface | `#f2f2f2` | surface | Card and panel backgrounds |
| text-primary | `#000000` | text-primary | Headings and body text |
| text-muted | `#b0b3b4` | text-muted | Captions, placeholders, secondary info |
| border | `#565a5c` | border | Dividers, card borders, outlines |
| danger | `#d9534f` | danger | Error states, destructive actions |
| success | `#5cb85c` | success | Success states, positive indicators |
| warning | `#f4eadb` | warning | Warning states, caution indicators |
| info | `#5bc0de` | info | Informational highlights |
| unknown | `#cacccd` | unknown | Palette color |
| unknown | `#f0ad4e` | unknown | Palette color |
| unknown | `#dbdbdb` | unknown | Palette color |
| unknown | `#82888a` | unknown | Palette color |
| unknown | `#404040` | unknown | Palette color |
| unknown | `#eedfc7` | unknown | Palette color |
| unknown | `#31b0d5` | unknown | Palette color |
| unknown | `#449d44` | unknown | Palette color |
| unknown | `#ec971f` | unknown | Palette color |
| unknown | `#c9302c` | unknown | Palette color |
| unknown | `#e4e7e7` | unknown | Palette color |


---

## 3. Typography Rules

**Font Stack:**
- **Catorze 27 Medium** — Heading 1, Heading 2, Heading 3
- **Resamitz** — Body, Caption

**Font Sources:**

```css
@font-face {
  font-family: "Resamitz";
  src: url("fonts/Resamitz-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Catorze 27 Medium";
  src: url("fonts/Catorze27Medium-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Catorze 27 Black";
  src: url("fonts/Catorze27Black-Regular.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "slick";
  src: url("fonts/slick-Regular.woff") format("woff");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Catorze 27 Medium | 6rem | 700 |
| Heading 2 | Catorze 27 Medium | 5.5rem | 700 |
| Heading 3 | Catorze 27 Medium | 4.5rem | 700 |
| Body | Resamitz | 1rem | 400 |
| Caption | Resamitz | 1.25rem | 400 |

**Typographic Rules:**
- Limit to 2 font families max per screen
- Use **Catorze 27 Medium** for body/UI text, **Resamitz** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (1)

**Badge** — `html`

### Data Input (2)

**Button** — `html`
- Variants: `brand`, `brand-alt`, `s`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (1)

**Image** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .1em, .2rem, .3rem, 2px, 3px, 4px
- **Max content width:** 1000px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `0 0 5px 2px rgba(0,0,0,0.1)`
- `0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07)`
- `rgb(128, 128, 128) 0px 0px 5px 0px`

### Floating — dropdowns, popovers, modals

- `0 0 10px 2px rgba(0,0,0,0.1)`

### Z-Index Scale

`0, 1, 2, 9, 10, 11, 20, 30, 40, 50, 1000, 1042, 1043, 1044, 1045, 1046`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes rotate`
- `@keyframes fa-spin`
- `@keyframes underline`
- `@keyframes fa-beat`
- `@keyframes fa-bounce`
- `@keyframes fa-fade`
- `@keyframes fa-beat-fade`
- `@keyframes fa-flip`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ffffff` as the primary page background
- Pair **Catorze 27 Medium** (body) with **Resamitz** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .1em, .2rem, .3rem, 2px, 3px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Catorze 27 Medium and Resamitz
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 544px | css |
| sm | 640px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 800px | css |
| lg | 810px | css |
| lg | 900px | css |
| lg | 992px | css |
| xl | 1050px | css |
| xl | 1200px | css |
| xl | 1255px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #f2f2f2
Border: 1px solid #565a5c
Radius: 2px
Padding: 16px
Font: Catorze 27 Medium
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #565a5c
Padding: 8px 16px
Radius: 2px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1000px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #f2f2f2
Label: #b0b3b4 (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #565a5c
Focus: border-color var(--accent)
Label: #b0b3b4 12px
Spacing: 16px between fields
Radius: 2px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Catorze 27 Medium, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```

## Visual Guide — Screenshots (VISUAL_GUIDE.md)

# dante-nyc — Visual Guide

> Master visual reference. Study every screenshot carefully before implementing any UI.
> Match colors, layout, typography, spacing, and motion states exactly.

## Scroll Journey

The page has cinematic scroll animations. Each screenshot below shows the exact visual state at that scroll depth.
**Replicate these transitions precisely** — the design changes dramatically as you scroll.

### Hero — Above the fold

*Scroll position: 0px of 3404px total*

![Hero — Above the fold](../screens/scroll/scroll-000.png)

### 17% scroll depth

*Scroll position: 426px of 3404px total*

![17% scroll depth](../screens/scroll/scroll-017.png)

### 33% scroll depth

*Scroll position: 826px of 3404px total*

![33% scroll depth](../screens/scroll/scroll-033.png)

### 50% scroll depth

*Scroll position: 1252px of 3404px total*

![50% scroll depth](../screens/scroll/scroll-050.png)

### 67% scroll depth

*Scroll position: 1678px of 3404px total*

![67% scroll depth](../screens/scroll/scroll-067.png)

### 83% scroll depth

*Scroll position: 2078px of 3404px total*

![83% scroll depth](../screens/scroll/scroll-083.png)

### Footer — End of page

*Scroll position: 2504px of 3404px total*

![Footer — End of page](../screens/scroll/scroll-100.png)

## Full Page Screenshots

### Home | Dante NYC

*URL: `https://www.dante-nyc.com/`*

![Home | Dante NYC](../screens/pages/home.png)

### Welcome | Dante NYC

*URL: `https://www.dante-nyc.com/welcome/`*

![Welcome | Dante NYC](../screens/pages/welcome.png)

### Our Story | Dante NYC

*URL: `https://www.dante-nyc.com/our-story/`*

![Our Story | Dante NYC](../screens/pages/our-story.png)

### Menus | Dante NYC

*URL: `https://www.dante-nyc.com/menus/`*

![Menus | Dante NYC](../screens/pages/menus.png)

### West Village Menu | Dante NYC | Italian Small Plates & Cocktails in New York City

*URL: `https://www.dante-nyc.com/wv/`*

![West Village Menu | Dante NYC | Italian Small Plates & Cocktails in New York City](../screens/pages/wv.png)

## Section Screenshots

Clipped sections showing individual components in context.

### Section 1 — `section`

*1440×855px*

![Section 1](../screens/sections/home-section-1.png)

### Section 2 — `section`

*1140×284px*

![Section 2](../screens/sections/home-section-2.png)

### Section 7 — `[class*="hero"]`

*1140×719px*

![Section 7](../screens/sections/home-section-7.png)

### Section 1 — `section`

*1440×855px*

![Section 1](../screens/sections/welcome-section-1.png)

### Section 2 — `section`

*1140×272px*

![Section 2](../screens/sections/welcome-section-2.png)

### Section 1 — `section`

*1440×855px*

![Section 1](../screens/sections/our-story-section-1.png)

### Section 1 — `section`

*1440×855px*

![Section 1](../screens/sections/menus-section-1.png)

### Section 2 — `section`

*1440×475px*

![Section 2](../screens/sections/menus-section-2.png)

### Section 3 — `[class*="hero"]`

*1140×209px*

![Section 3](../screens/sections/menus-section-3.png)

### Section 1 — `section`

*1440×855px*

![Section 1](../screens/sections/wv-section-1.png)

### Section 2 — `section`

*1440×518px*

![Section 2](../screens/sections/wv-section-2.png)

### Section 3 — `[class*="hero"]`

*1140×209px*

![Section 3](../screens/sections/wv-section-3.png)

## Animations & Motion (ANIMATIONS.md)

# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

Pure CSS animations — no external animation libraries detected.

## Scroll Journey

The page is **3,404px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 426px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 826px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 1,252px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 1,678px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 2,078px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 2,504px

![Scroll 100%](../screens/scroll/scroll-100.png)

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: max-height 1.5s 0.5s;
```

## How to Recreate This Motion Design

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1),
              transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Duration scale:** `1.5s` · `0.5s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`426px`) → `screens/scroll/scroll-017.png`
- **33%** (`826px`) → `screens/scroll/scroll-033.png`
- **50%** (`1252px`) → `screens/scroll/scroll-050.png`
- **67%** (`1678px`) → `screens/scroll/scroll-067.png`
- **83%** (`2078px`) → `screens/scroll/scroll-083.png`
- **100%** (`2504px`) → `screens/scroll/scroll-100.png`

## Layout & Grid (LAYOUT.md)

# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.c-split__col-inner` | row | — | center | — | 1 |
| `div.c-split__col-inner` | row | — | center | — | 1 |
| `div.c-split__col-inner` | row | — | center | — | 1 |
| `div.c-split__col-inner` | row | — | center | — | 1 |
| `div.c-split__col-inner` | row | — | center | — | 1 |
| `div.c-split__col-inner` | row | — | center | — | 1 |

## Structural Containers

### `<footer>` 

```
display:          block
children:         2
```

### `<main>` (`main.site-content__main.page-id--635812`)

```
display:          block
children:         8
```

### `<section>` (`section#hero.hero.hero--gallery`)

```
display:          block
padding:          0px 60px
children:         2
```

### `<section>` (`section.c-two-col--text.content`)

```
display:          block
padding:          75px 28.125px 67.5px
max-width:        1140px
children:         1
```

### `<section>` (`section.c-tout-overlay.c-tout-overlay--dimmed`)

```
display:          block
children:         1
```

## Layout Rules

- **Container max-width:** `1140px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

## Component Patterns (COMPONENTS.md)

# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Site Nav Link** | unknown | 15× | `.site-nav-link` |
| **C Split  Col Inner** | unknown | 6× | `.c-split__col-inner` |
| **C Split  Col** | unknown | 3× | `.c-split__col` |
| **C Split  Heading** | unknown | 3× | `.c-split__heading` |
| **C Split  Col** | unknown | 3× | `.c-split__col`, `.c-split__col--empty` |
| **C Split  Image** | unknown | 3× | `.c-split__image` |
| **Btn** | button | 3× | `.btn`, `.btn-brand` |

## Buttons

### Btn

**Instances found:** 3

**CSS classes:** `.btn` `.btn-brand`

**HTML structure:**

```html
<a href="/celebrate" class="btn btn-brand" target="_parent" aria-label="Inquire Within">Inquire Within</a>
```

**Base styles (from design tokens):**

```css
.btn {
  color: #000000;
  border-radius: 2px;
  padding: 4px 8px;
  cursor: pointer;
}```

## Other Components

### Site Nav Link

**Instances found:** 15

**CSS classes:** `.site-nav-link`

**HTML structure:**

```html
<a class="site-nav-link " href="/welcome/" aria-label="Welcome">Welcome</a>
```

**Base styles (from design tokens):**

```css
.site-nav-link {
  background: #f2f2f2;
  padding: 4px;
}```

### C Split  Col Inner

**Instances found:** 6

**CSS classes:** `.c-split__col-inner`

**HTML structure:**

```html
<div class="c-split__col-inner"> <div class="c-split__content content"> <h2 class="h2 c-split__heading">Book a table</h2> <p>Welcome to Caffe Dante. We look forward …</p> <button type="button" class="btn btn-brand" data-popup="inline" data-popup-src="#popup-reservations-form" tabindex="0" aria-label="Reservations - Make a reservation" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Reservations Trigger Button" data-bb-track-action="Click" data-bb-track-label="Multi Button" id="reservations-button">Reservations</button> </div> </div>
```

**Base styles (from design tokens):**

```css
.c-split__col-inner {
  background: #f2f2f2;
  padding: 4px;
}```

### C Split  Col

**Instances found:** 3

**CSS classes:** `.c-split__col`

**HTML structure:**

```html
<div class="c-split__col "> <div class="c-split__col-inner"> <div class="c-split__content content"> <h2 class="h2 c-split__heading">Book a table</h2> <p>Welcome to Caffe Dante. We look forward …</p> <button type="button" class="btn btn-brand" data-popup="inline" data-popup-src="#popup-reservations-form" tabindex="0" aria-label="Reservations - Make a reservation" data-bb-track="button" data-bb-track-on="click" data-bb-track-category="Reservations Trigger Button" data-bb-track-action="Click" data-bb-track-label="Multi Button" id="reservations-button">Reservations</button> </div> </div> </div>
```

**Base styles (from design tokens):**

```css
.c-split__col {
  background: #f2f2f2;
  padding: 4px;
}```

### C Split  Heading

**Instances found:** 3

**CSS classes:** `.c-split__heading`

**HTML structure:**

```html
<h2 class="h2 c-split__heading">Book a table</h2>
```

**Base styles (from design tokens):**

```css
.c-split__heading {
  background: #f2f2f2;
  padding: 4px;
}```

### C Split  Col

**Instances found:** 3

**CSS classes:** `.c-split__col` `.c-split__col--empty`

**HTML structure:**

```html
<div class="c-split__col c-split__col--empty"> <div class="c-split__col-inner"> <div class="c-split__image" role="img" aria-label="Dante Negroni over Menu" style="background-image: url('https://images.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/images/20100NEGRONI_SESSIONS.jpg?w=1200&amp;fit=max&amp;auto=compress,format&amp;cs=origin');background-position: none "></div> </div> </div>
```

**Base styles (from design tokens):**

```css
.c-split__col {
  background: #f2f2f2;
  padding: 4px;
}```

### C Split  Image

**Instances found:** 3

**CSS classes:** `.c-split__image`

**HTML structure:**

```html
<div class="c-split__image" role="img" aria-label="Dante Negroni over Menu" style="background-image: url('https://images.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/images/20100NEGRONI_SESSIONS.jpg?w=1200&amp;fit=max&amp;auto=compress,format&amp;cs=origin');background-position: none "></div>
```

**Base styles (from design tokens):**

```css
.c-split__image {
  background: #f2f2f2;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#565a5c` for all dividers within components

## Interactions & States (INTERACTIONS.md)

# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 2 | default, hover, focus |
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: 0.2s ease-in-out;
transition: all;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `RESERVATIONS`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On hover:**

```css
/* background-color: rgba(0, 0, 0, 0) → */ background-color: rgb(244, 234, 219);
/* color: rgb(244, 234, 219) → */ color: rgb(0, 0, 0);
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(0, 0, 0) none 3px;
/* outline-color: rgb(244, 234, 219) → */ outline-color: rgb(0, 0, 0);
```

**On focus:**

```css
/* background-color: rgba(0, 0, 0, 0) → */ background-color: rgb(244, 234, 219);
/* color: rgb(244, 234, 219) → */ color: rgb(0, 0, 0);
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(16, 16, 16) auto 5px;
/* outline-color: rgb(244, 234, 219) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.2s ease-in-out`

### Button 2 — `Explore your accessibility options`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On focus:**

```css
/* outline: rgb(0, 0, 0) none 3px → */ outline: rgb(113, 25, 225) solid 2px;
/* outline-color: rgb(0, 0, 0) → */ outline-color: rgb(113, 25, 225);
```

**Transition:** `all`

## Link Interactions

### Link 1 — `WELCOME`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(244, 234, 219) none 0px;
```

**On focus:**

```css
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(16, 16, 16) auto 5px;
/* outline-color: rgb(244, 234, 219) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.2s ease-in-out`

### Link 2 — `OUR STORY`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(244, 234, 219) none 0px;
```

**On focus:**

```css
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(16, 16, 16) auto 5px;
/* outline-color: rgb(244, 234, 219) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.2s ease-in-out`

### Link 3 — `CAFFE DANTE MENU`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On hover:**

```css
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(244, 234, 219) none 0px;
```

**On focus:**

```css
/* outline: rgb(244, 234, 219) none 3px → */ outline: rgb(16, 16, 16) auto 5px;
/* outline-color: rgb(244, 234, 219) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.2s ease-in-out`

## Interaction Rules

- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.2s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

## Design Tokens — JSON Files

### tokens/colors.json
```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "core": {
    "background": {
      "value": "#ffffff",
      "role": "background"
    },
    "text-primary": {
      "value": "#000000",
      "role": "text-primary"
    },
    "text-muted": {
      "value": "#b0b3b4",
      "role": "text-muted"
    },
    "surface": {
      "value": "#f2f2f2",
      "role": "surface"
    },
    "border": {
      "value": "#565a5c",
      "role": "border"
    }
  },
  "status": {
    "warning": {
      "value": "#f4eadb",
      "role": "warning"
    },
    "danger": {
      "value": "#d9534f",
      "role": "danger"
    },
    "success": {
      "value": "#5cb85c",
      "role": "success"
    }
  },
  "extended": {
    "color-cacccd": {
      "value": "#cacccd",
      "role": "unknown"
    },
    "color-f0ad4e": {
      "value": "#f0ad4e",
      "role": "unknown"
    },
    "color-dbdbdb": {
      "value": "#dbdbdb",
      "role": "unknown"
    },
    "color-5bc0de": {
      "value": "#5bc0de",
      "role": "info"
    },
    "color-82888a": {
      "value": "#82888a",
      "role": "unknown"
    },
    "color-404040": {
      "value": "#404040",
      "role": "unknown"
    },
    "color-eedfc7": {
      "value": "#eedfc7",
      "role": "unknown"
    },
    "color-31b0d5": {
      "value": "#31b0d5",
      "role": "unknown"
    },
    "color-449d44": {
      "value": "#449d44",
      "role": "unknown"
    },
    "color-ec971f": {
      "value": "#ec971f",
      "role": "unknown"
    },
    "color-c9302c": {
      "value": "#c9302c",
      "role": "unknown"
    },
    "color-e4e7e7": {
      "value": "#e4e7e7",
      "role": "unknown"
    }
  },
  "meta": {
    "theme": "light",
    "extracted": "2026-06-19"
  }
}
```

### tokens/spacing.json
```json
{
  "base": {
    "value": "4px",
    "description": "Grid unit — all spacing must be multiples of this"
  },
  "unit": "px",
  "scale": {
    "xs": {
      "value": "2px",
      "px": 2
    },
    "sm": {
      "value": "4px",
      "px": 4
    },
    "md": {
      "value": "6px",
      "px": 6
    },
    "lg": {
      "value": "8px",
      "px": 8
    },
    "xl": {
      "value": "10px",
      "px": 10
    },
    "2xl": {
      "value": "12px",
      "px": 12
    },
    "3xl": {
      "value": "14px",
      "px": 14
    },
    "4xl": {
      "value": "16px",
      "px": 16
    },
    "5xl": {
      "value": "18px",
      "px": 18
    },
    "6xl": {
      "value": "20px",
      "px": 20
    }
  },
  "multipliers": {
    "1x": {
      "value": "4px",
      "raw": 4
    },
    "2x": {
      "value": "8px",
      "raw": 8
    },
    "3x": {
      "value": "12px",
      "raw": 12
    },
    "4x": {
      "value": "16px",
      "raw": 16
    },
    "5x": {
      "value": "20px",
      "raw": 20
    },
    "6x": {
      "value": "24px",
      "raw": 24
    },
    "7x": {
      "value": "28px",
      "raw": 28
    },
    "8x": {
      "value": "32px",
      "raw": 32
    },
    "9x": {
      "value": "36px",
      "raw": 36
    },
    "10x": {
      "value": "40px",
      "raw": 40
    },
    "11x": {
      "value": "44px",
      "raw": 44
    },
    "12x": {
      "value": "48px",
      "raw": 48
    },
    "13x": {
      "value": "52px",
      "raw": 52
    },
    "14x": {
      "value": "56px",
      "raw": 56
    },
    "15x": {
      "value": "60px",
      "raw": 60
    },
    "16x": {
      "value": "64px",
      "raw": 64
    }
  },
  "meta": {
    "totalValues": 15,
    "min": 2,
    "max": 30
  }
}
```

### tokens/typography.json
```json
{
  "families": [
    "Catorze 27 Medium",
    "Resamitz"
  ],
  "scale": {
    "heading-1": {
      "fontFamily": "Catorze 27 Medium",
      "fontSize": "6rem",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "heading-2": {
      "fontFamily": "Catorze 27 Medium",
      "fontSize": "5.5rem",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "heading-3": {
      "fontFamily": "Catorze 27 Medium",
      "fontSize": "4.5rem",
      "fontWeight": "700",
      "lineHeight": null,
      "source": "css"
    },
    "body": {
      "fontFamily": "Resamitz",
      "fontSize": "1rem",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "css"
    },
    "caption": {
      "fontFamily": "Resamitz",
      "fontSize": "1.25rem",
      "fontWeight": "400",
      "lineHeight": null,
      "source": "css"
    }
  },
  "fontFaces": [
    {
      "family": "Resamitz",
      "src": "https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/CevbM0oT1GMEWKr5ZQvT_Resamitz_0048.otf",
      "format": "opentype",
      "weight": "400"
    },
    {
      "family": "Catorze 27 Medium",
      "src": "https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/qKnUILbfRyesA0bTM2eC_Scannerlicker%20-%20Catorze27Style1-Medium.otf",
      "format": "opentype",
      "weight": "400"
    },
    {
      "family": "Catorze 27 Black",
      "src": "https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/yPj91I9rTu2E47nYD9hx_Scannerlicker%20-%20Catorze27Style1-Black.otf",
      "format": "opentype",
      "weight": "400"
    },
    {
      "family": "slick",
      "src": "https://theme-assets.getbento.com/sensei/9969e7a.sensei/assets/fonts/slick-carousel/slick.eot",
      "format": "embedded-opentype",
      "weight": "400"
    },
    {
      "family": "slick",
      "src": "https://theme-assets.getbento.com/sensei/9969e7a.sensei/assets/fonts/slick-carousel/slick.eot?#iefix",
      "format": "embedded-opentype",
      "weight": "400"
    },
    {
      "family": "slick",
      "src": "https://theme-assets.getbento.com/sensei/9969e7a.sensei/assets/fonts/slick-carousel/slick.woff",
      "format": "woff",
      "weight": "400"
    },
    {
      "family": "slick",
      "src": "https://theme-assets.getbento.com/sensei/9969e7a.sensei/assets/fonts/slick-carousel/slick.ttf",
      "format": "truetype",
      "weight": "400"
    },
    {
      "family": "slick",
      "src": "https://theme-assets.getbento.com/sensei/9969e7a.sensei/assets/fonts/slick-carousel/slick.svg#slick",
      "format": "svg",
      "weight": "400"
    }
  ],
  "rules": {
    "maxSizesPerScreen": 4,
    "headingWeightRange": "600-700",
    "bodyWeight": 400,
    "lineHeightBody": 1.5,
    "lineHeightHeading": 1.2
  }
}
```

## Bundled Fonts (fonts/)

The following font files are bundled in the `fonts/` directory:

- `fonts/Catorze27Black-Regular.otf`
- `fonts/Catorze27Medium-Regular.otf`
- `fonts/Resamitz-Regular.otf`
- `fonts/slick-Regular.ttf`
- `fonts/slick-Regular.woff`

Use these local font files in `@font-face` declarations instead of fetching from Google Fonts.

## Screenshots Inventory (screens/)

> Study all screenshots carefully before implementing any UI. Match every visual detail exactly.

### Scroll Journey (screens/scroll/)

*Cinematic scroll states — page visual at each scroll depth*

![scroll-000.png](screens/scroll/scroll-000.png)

![scroll-017.png](screens/scroll/scroll-017.png)

![scroll-033.png](screens/scroll/scroll-033.png)

![scroll-050.png](screens/scroll/scroll-050.png)

![scroll-067.png](screens/scroll/scroll-067.png)

![scroll-083.png](screens/scroll/scroll-083.png)

![scroll-100.png](screens/scroll/scroll-100.png)

### Full Page Screenshots (screens/pages/)

*Full-page screenshots of each crawled URL*

![home.png](screens/pages/home.png)

![menus.png](screens/pages/menus.png)

![our-story.png](screens/pages/our-story.png)

![welcome.png](screens/pages/welcome.png)

![wv.png](screens/pages/wv.png)

### Section Clips (screens/sections/)

*Clipped individual sections and components*

![home-section-1.png](screens/sections/home-section-1.png)

![home-section-2.png](screens/sections/home-section-2.png)

![home-section-7.png](screens/sections/home-section-7.png)

![menus-section-1.png](screens/sections/menus-section-1.png)

![menus-section-2.png](screens/sections/menus-section-2.png)

![menus-section-3.png](screens/sections/menus-section-3.png)

![our-story-section-1.png](screens/sections/our-story-section-1.png)

![welcome-section-1.png](screens/sections/welcome-section-1.png)

![welcome-section-2.png](screens/sections/welcome-section-2.png)

![wv-section-1.png](screens/sections/wv-section-1.png)

![wv-section-2.png](screens/sections/wv-section-2.png)

![wv-section-3.png](screens/sections/wv-section-3.png)

### Interaction States (screens/states/)

*Hover, focus, and active state captures*

![button-1-default.png](screens/states/button-1-default.png)

![button-1-focus.png](screens/states/button-1-focus.png)

![button-1-hover.png](screens/states/button-1-hover.png)

![button-2-default.png](screens/states/button-2-default.png)

![button-2-focus.png](screens/states/button-2-focus.png)

![button-2-hover.png](screens/states/button-2-hover.png)

![link-1-default.png](screens/states/link-1-default.png)

![link-1-focus.png](screens/states/link-1-focus.png)

![link-1-hover.png](screens/states/link-1-hover.png)

![link-2-default.png](screens/states/link-2-default.png)

![link-2-focus.png](screens/states/link-2-focus.png)

![link-2-hover.png](screens/states/link-2-hover.png)

![link-3-default.png](screens/states/link-3-default.png)

![link-3-focus.png](screens/states/link-3-focus.png)

![link-3-hover.png](screens/states/link-3-hover.png)

### Screenshot Index (screens/INDEX.md)

# Screenshot Index

## Scroll Journey

> Shows the cinematic state at each point of the page

| Scroll | Y Position | File |
|--------|-----------|------|
| 0% | 0px | `screens/scroll/scroll-000.png` |
| 17% | 426px | `screens/scroll/scroll-017.png` |
| 33% | 826px | `screens/scroll/scroll-033.png` |
| 50% | 1252px | `screens/scroll/scroll-050.png` |
| 67% | 1678px | `screens/scroll/scroll-067.png` |
| 83% | 2078px | `screens/scroll/scroll-083.png` |
| 100% | 2504px | `screens/scroll/scroll-100.png` |

## Pages

| Page | URL | File |
|------|-----|------|
| Home | Dante NYC | `https://www.dante-nyc.com/` | `screens/pages/home.png` |
| Welcome | Dante NYC | `https://www.dante-nyc.com/welcome/` | `screens/pages/welcome.png` |
| Our Story | Dante NYC | `https://www.dante-nyc.com/our-story/` | `screens/pages/our-story.png` |
| Menus | Dante NYC | `https://www.dante-nyc.com/menus/` | `screens/pages/menus.png` |
| West Village Menu | Dante NYC | Italian Small Plates & Cocktails in New York City | `https://www.dante-nyc.com/wv/` | `screens/pages/wv.png` |

## Sections

| Page | Section | File |
|------|---------|------|
| home | #1 (section) | `screens/sections/home-section-1.png` |
| home | #2 (section) | `screens/sections/home-section-2.png` |
| home | #7 ([class*="hero"]) | `screens/sections/home-section-7.png` |
| welcome | #1 (section) | `screens/sections/welcome-section-1.png` |
| welcome | #2 (section) | `screens/sections/welcome-section-2.png` |
| our-story | #1 (section) | `screens/sections/our-story-section-1.png` |
| menus | #1 (section) | `screens/sections/menus-section-1.png` |
| menus | #2 (section) | `screens/sections/menus-section-2.png` |
| menus | #3 ([class*="hero"]) | `screens/sections/menus-section-3.png` |
| wv | #1 (section) | `screens/sections/wv-section-1.png` |
| wv | #2 (section) | `screens/sections/wv-section-2.png` |
| wv | #3 ([class*="hero"]) | `screens/sections/wv-section-3.png` |

