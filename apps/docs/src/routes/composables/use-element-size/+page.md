---
title: 'use-element-size'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-element-size/
description: 'Get element width and height and subscribe to changes'
importCode: "import { useElementSize } from '@svelteuidev/composables';"
docs: 'composables/use-element-size'
source: 'svelteui-composables/src/utilities/use-element-size/use-element-size.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from "$lib/components";
    import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

<Demo demo={ComposableDemos.useElementSizeDemo.usage} />

## Definition

```js
export function useElementSize(): ElementSize;
```
