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

