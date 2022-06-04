---
title: 'use-viewport-size'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-viewport-size/
description: 'Get viewport width and height.'
import: "import { useViewportSize } from '@svelteuidev/composables';"
docs: 'composables/use-viewport-size.md'
source: 'svelteui-composables/src/lib/dist/use-viewport-size/use-viewport-size.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

<Demo demo={ComposableDemos.useViewportSizeDemo.usage} />

## Definition

```ts
export function useViewportSize(): Writable<{
	width: number;
	height: number;
}>;
```
