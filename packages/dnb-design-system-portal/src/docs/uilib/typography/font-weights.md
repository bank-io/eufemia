---
title: 'Font Weights'
order: 1
---

import TypographyExamples from 'Pages/uilib/typography/TypographyExamples'

# Font Weights

## Eufemia has three (3) font-weights

- <span class="dnb-typo-regular">Regular</span> (normal)
- <span class="dnb-typo-medium">Medium</span> (500)
- <span class="dnb-typo-bold">Bold</span> (600)

## `font-weight` table

| Type        | Custom Property         | Info      |
| ----------- | ----------------------- | --------- |
| **Regular** | `--font-weight-regular` | Body text |
| **Medium**  | `--font-weight-medium`  | Headings  |
| **Bold**    | `--font-weight-bold`    |           |

### How to use the weights (CSS)

```css
/* I am Regular */
p {
  font-weight: normal;
}

/* I am Medium */
p {
  font-weight: var(--font-weight-medium); /* 500 */
}

/* I am Bold */
p {
  font-weight: var(--font-weight-bold); /* 600 */
}

/* This will result in loading the Bold Font */
.my-new-class {
  font-weight: var(--font-weight-bold);
}
```

### Usage in HTML (Helper Classes)

```html
<!-- Example usage of Weights in Markup -->
<h3 class="dnb-typo-regular">Heading</h3>
<p class="dnb-typo-medium">Paragraph</p>
<span class="dnb-typo-bold">Third Tag</span>
```

## Examples

<TypographyExamples />
