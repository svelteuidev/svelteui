---
title: Grid
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/grid/
category: 'layout'
description: 'Flexbox grid with variable amount of columns'
import: "import { Grid } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Grid/Grid.svelte'
docs: 'core/grid.md'
---

<script>
    import { Demo, GridDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={GridDemos.usage} />

## Spacing

Customize spacing between columns with `spacing` prop on the Grid component. Use `xs`, `sm`, `md`, `lg`, `xl` values to set spacing or a number to set spacing in px:

```svelte
<Grid gutter="xl" /> // -> theme.space.xl
<Grid gutter={40} /> // -> 40px
```

## Grow

Set `grow` prop on the Grid component to force the last row take 100% of the container width:

<Demo demo={GridDemos.grow} />

## Column offset

Set the `offset` prop on the `Grid.Col` component to create gaps in the grid. Props `offset` adds a left margin to the target column and has the same units as `span`:

<Demo demo={GridDemos.offset} />

## Multiple rows

Once the sum of the columns `span` and `offset` exceeds the `columns` prop (defaults to 12), excess columns are placed on next row:

<Demo demo={GridDemos.rows} />

## Justify and align

Since grid is a flexbox container, you can control `justify-content` and `align-items` properties:

<Demo demo={GridDemos.justify} />

## Responsive columns

Use breakpoint props (`xs`, `sm`, `md`, `lg`, `xl`) to make columns respond to viewport changes. You can configure breakpoint values in [SvelteUIProvider](theming/svelteui-provider).

In this example up to `md` there will be 1 column, from `md` to `lg` there will be 2 columns and from `lg` and up, there will be 4 columns:

<Demo demo={GridDemos.responsive} />

## Change columns count

By default, grid uses 12 columns layout, you can change it by setting the `cols` prop on the Grid component. Note that in this case, columns `span` and `offset` will be calculated relative to this value.

In this example, tge first column takes 50% with 12 span (12/24), second and third take 25% (6/24):

<Demo demo={GridDemos.columns} />