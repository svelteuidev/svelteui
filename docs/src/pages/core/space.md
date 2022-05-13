---
title: Space
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/space/
category: 'layout'
description: 'Add horizontal or vertical spacing from theme'
import: "import { Space } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Space/Space.svelte'
docs: 'core/space.md'
---

<script>
    import { Space, Text } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const spaceHorizontal = `
    <script>
        import { Space } from '@svelteuidev/core'
    <\/script>

    <Text>First line<\/Text>
    <Space h="md" \/>
    <Text>Second line<\/Text>
    `
    const spaceVertical = `
    <script>
        import { Space } from '@svelteuidev/core'
    <\/script>

    <div style='display: flex;'>
        <Text>First line<\/Text>
        <Space w="md" \/>
        <Text>Second line<\/Text>
    <\/div>
    `
</script>

<Heading />

## Usage

Use Space component to add horizontal or vertical spacing between elements:

<Preview cols={1} code={spaceHorizontal}>
    <Text>First line</Text>
    <Space h="md" />
    <Text>Second line</Text>
</Preview>

<br />

<Preview cols={1} code={spaceVertical}>
    <div style='display: flex;'>
        <Text>First line</Text>
        <Space w="md" />
        <Text>Second line</Text>
    </div>
</Preview>

## Where to use

When you work with regular HTML elements you do not have access to `theme.spacing` and you may want to use
Space component to skip having to use something like a [Box](core/box):

```svelte
<div>First line</div>
<Space h="md" />
// Margin props are not available on div, use Space to add spacing from theme
<div>Second line</div>
```

## h and w props

`h` and `w` are shortcuts for height and width, you can use values from [theme.spacing](/theming/extend-theme/#spacing-radius-and-shadows)
(xs, sm, md, lg, xl) or number to set width or height in px:

```svelte
// Height will be set from theme.spacing.md
<Space h="md" />

// Width will be set to 30px
<Space w={30} />
```
