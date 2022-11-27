---
title: 'use-mouse-position'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-mouse-position/
description: 'Get mouse position relative to viewport or given element.'
import: "import { useMousePosition } from '@svelteuidev/composables';"
docs: 'composables/use-mouse-position.md'
source: 'svelteui-composables/src/utilities/use-mouse-position/use-mouse-position.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

<Demo demo={ComposableDemos.useMousePositionDemo.usage} />

If you pass in a truthy value for it's only argument, then the mouse position will be captured relative to document element:

<Demo demo={ComposableDemos.useMousePositionDemo.document} />

## Params

| Param  | Description                                                                              |
| ------ | ---------------------------------------------------------------------------------------- |
| append | A boolean to specify whether or not to reference mouse position from the document or not |

## Definition

```ts
export function useMousePosition(append?: boolean): MousePosition;
```
