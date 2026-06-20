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

