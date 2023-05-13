---
title: 'use-viewport-size'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-viewport-size/
description: 'Get viewport width and height.'
importCode: "import { useViewportSize } from '@svelteuidev/composables';"
docs: 'composables/use-viewport-size.md'
source: 'svelteui-composables/src/utilities/use-viewport-size/use-viewport-size.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

The `use-viewport-size` composable allows you get access to the current with and height of the viewport, and it also subscribes to viewport changes.

<Demo demo={ComposableDemos.useViewportSizeDemo.usage} />

## Definition

```js
export function useViewportSize(): Writable<{
	width: number;
	height: number;
}>;
```
