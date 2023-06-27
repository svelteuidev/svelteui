---
title: Space
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/space/
category: 'layout'
description: 'Add horizontal or vertical spacing from theme'
importCode: "import { Space } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Space/Space.svelte'
docs: 'core/space'
---

<script>
  import { Demo, SpaceDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Use Space component to add horizontal or vertical spacing between elements:

<Demo demo={SpaceDemos.configurator} />

<br />

<Demo demo={SpaceDemos.configuratorW} />

## Where to use

When you work with regular HTML elements, you do not have access to `theme.spacing` and you may want to use
Space component to skip having to use something like a [Box]({base}/core/box):

```svelte
<div>First line</div>
<Space h="md" />
// Margin props are not available on div, use Space to add spacing from theme
<div>Second line</div>
```

## h and w props

`h` and `w` are shortcuts for height and width, you can use values from [theme.spacing]({base}/theming/extend-theme/#spacing-radius-and-shadows)
(`xs`, `sm`, `md`, `lg`, `xl`) or number to set width or height in px:

```svelte
// Height will be set from theme.spacing.md
<Space h="md" />

// Width will be set to 30px
<Space w={30} />
```
