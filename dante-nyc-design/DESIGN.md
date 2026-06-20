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
  src: url("https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/CevbM0oT1GMEWKr5ZQvT_Resamitz_0048.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Catorze 27 Medium";
  src: url("https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/qKnUILbfRyesA0bTM2eC_Scannerlicker%20-%20Catorze27Style1-Medium.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "Catorze 27 Black";
  src: url("https://media-cdn.getbento.com/accounts/e8eee6aef7c2e8242e267a82a199ac35/media/yPj91I9rTu2E47nYD9hx_Scannerlicker%20-%20Catorze27Style1-Black.otf") format("opentype");
  font-weight: 400;
}
@font-face {
  font-family: "slick";
  src: url("https://theme-assets.getbento.com/sensei/9969e7a.sensei/assets/fonts/slick-carousel/slick.eot") format("embedded-opentype");
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
