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

