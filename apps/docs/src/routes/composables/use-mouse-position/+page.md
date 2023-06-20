---
title: 'use-mouse-position'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-mouse-position/
description: 'Get mouse position relative to viewport or given element.'
importCode: "import { useMousePosition } from '@svelteuidev/composables';"
docs: 'composables/use-mouse-position'
source: 'svelteui-composables/src/utilities/use-mouse-position/use-mouse-position.ts'
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

<Demo demo={ComposableDemos.useMousePositionDemo.usage} />

If you pass in a truthy value for it's only argument, then the mouse position will be captured relative to document element:

<Demo demo={ComposableDemos.useMousePositionDemo.document} />

## Params

| Param  | Description                                                                              |
| ------ | ---------------------------------------------------------------------------------------- |
| append | A boolean to specify whether or not to reference mouse position from the document or not |

## Definition

```js
export function useMousePosition(append?: boolean): MousePosition;
```
