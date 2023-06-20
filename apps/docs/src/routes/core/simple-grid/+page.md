---
title: SimpleGrid
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/simple-grid/
category: 'layout'
description: 'Responsive grid where each item takes equal amount of space'
importCode: "import { SimpleGrid } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/SimpleGrid/SimpleGrid.svelte'
docs: 'core/simple-grid'
---

<script>
    import { Demo, SimpleGridDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

SimpleGrid is a simple flexbox container where each child is treated as a column. Each column takes equal amount of space and unlike [Grid]({base}/core/grid/) component, you do not control column span. Instead, you specify number of columns per row:

<Demo demo={SimpleGridDemos.configurator} />

## Breakpoints

Provide an array to `breakpoints` prop to define responsive behavior:

- `maxWidth` or `minWidth` - max-width or min-width at which media query will work
- `cols` - number of columns per row at given max-width
- `spacing` - optional spacing at given max-width, if not provided spacing from component prop will be used instead

Resize browser to see breakpoints behavior:

<Demo demo={SimpleGridDemos.breakpoints} />

In this example:

- If screen width is more than 980px then component `cols` and `spacing` is used - 4 columns, lg spacing
- If screen width is less than 980px, more than 755px and the no of columns is 3, then the spacing will be `sm`
- If screen width is less than 755px, more than 600px and the no of columns is 2, then the spacing will be `sm`
- If screen width is less than 600px and the no of columns is 1, then the spacing will be `sm`

## min-width breakpoints

If you prefer a mobile first approach, you can use `min-width` breakpoints:

```svelte
<SimpleGrid
	breakpoints={[
		{ minWidth: 'sm', cols: 2 },
		{ minWidth: 'md', cols: 3 },
		{ minWidth: 1200, cols: 4 }
	]}
>
	<div>1</div>
	<div>2</div>
	<div>3</div>
</SimpleGrid>
```

## Spacing

You can use either `theme.spacing` value or number value for spacing in px:

```svelte
// xl spacing from theme.spacing
<SimpleGrid spacing="xl" />; // 12px spacing
<SimpleGrid spacing={12} />;
```

Spacing also works in `breakpoints`:

```svelte
// theme.spacing.xl
<SimpleGrid breakpoints={[{ maxWidth: 755, cols: 2, spacing: 'xl' }]} />; // 12px spacing
<SimpleGrid breakpoints={[{ maxWidth: 755, cols: 2, spacing: 12 }]} />;
```

## Browser support

Simple grid uses [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout),
check [caniuse](https://caniuse.com/css-grid) to find out information about browser support.
