---
title: Chip
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/chip/
category: 'inputs'
description: 'Pick one or multiple values'
importCode: "import { Chip } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Chip/Chip.svelte'
docs: 'core/chip.md'
---

<script>
    import { Demo, ChipDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={ChipDemos.configurator} />

## Controlled

```svelte
<script>
  import { Chip } from '@svelteuidev/core';

  let checked = false;
</script>

<Chip checked={checked} onChange={() => { checked = !checked }}>I'm a chip</Chip>
```

## States

<Demo demo={ChipDemos.states} />

# ChipGroup

The `ChipGroup` component allows the selection of only one chip in a selection of multiple, similar to the behavior of a radio group.

<Demo demo={ChipDemos.group} />

## Accessibility

The components `Chip` and `ChipGroup` are built with native checkbox inputs, so all keyboard events work the same as with the native controls.
