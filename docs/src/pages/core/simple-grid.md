---
title: SimpleGrid
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/simple-grid/
category: 'layout'
description: 'Responsive grid where each item takes equal amount of space'
import: "import { SimpleGrid } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/SimpleGrid/SimpleGrid.svelte'
docs: 'core/simple-grid.md'
---

<script>
    import { SimpleGrid, Center, InputWrapper, NumberInput } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    let cols = 3

    const simpleGrid = `
    <script>
        import { SimpleGrid } from '@svelteuidev/core'
    <\/script>


    <SimpleGrid cols={cols}>
        {#each [...Array(5).keys()] as _, i}
            <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}<\/Center>
        {/each}
    <\/SimpleGrid>
    `
    const simpleGridBreakpoints = `
    <script>
        import { SimpleGrid } from '@svelteuidev/core'
    <\/script>

    <SimpleGrid
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' }
        ]}
        cols={3}
    >
        {#each [...Array(5).keys()] as _, i}
            <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}<\/Center>
        {/each}
    <\/SimpleGrid>
    `
</script>

<Heading />

## Usage

SimpleGrid is a simple flexbox container where each child is treated as a column.
Each column takes equal amount of space and unlike [Grid](/core/grid/) component you do not control column span,
instead you specify number of columns per row:

<Preview cols={1} width={100} code={simpleGrid}>
    <SimpleGrid cols={cols}>
        {#each [...Array(5).keys()] as _, i}
            <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}</Center>
        {/each}
    </SimpleGrid>
    <NumberInput label='Cols' bind:value={cols} min={1} max={5} />
</Preview>

## Breakpoints

Provide an array to `breakpoints` prop to define responsive behavior:

- `maxWidth` or `minWidth` - max-width or min-width at which media query will work
- `cols` - number of columns per row at given max-width
- `spacing` - optional spacing at given max-width, if not provided spacing from component prop will be used instead

Resize browser to see breakpoints behavior:

<Preview cols={1} width={100} code={simpleGridBreakpoints}>
    <SimpleGrid
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' }
        ]}
        cols={3}
    >
        {#each [...Array(5).keys()] as _, i}
            <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}</Center>
        {/each}
    </SimpleGrid>
</Preview>

In this example:

- If screen width is more than 980px then component `cols` and `spacing` is used - 4 columns, lg spacing
- screen width < 980px and > 755px - cols = 3, spacing = sm
- screen width < 755px and > 600px - cols = 2, spacing = sm
- screen width < 600px - cols = 1, spacing = sm

## min-width breakpoints

If you prefer a mobile first approach, you can use min-width breakpoints:

```svelte
<SimpleGrid
  breakpoints={[
    { minWidth: 'sm', cols: 2 },
    { minWidth: 'md', cols: 3 },
    { minWidth: 1200, cols: 4 },
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
<SimpleGrid spacing="xl" />;

// 12px spacing
<SimpleGrid spacing={12} />;
```

Spacing also works in `breakpoints`:

```svelte
// theme.spacing.xl
<SimpleGrid breakpoints={[{ maxWidth: 755, cols: 2, spacing: 'xl' }]} />;

// 12px spacing
<SimpleGrid breakpoints={[{ maxWidth: 755, cols: 2, spacing: 12 }]} />;
```

## Browser support

Simple grid uses [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout),
check [caniuse](https://caniuse.com/css-grid) to find out information about browser support.