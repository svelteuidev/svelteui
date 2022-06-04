---
title: 'use-io'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-io/
description: 'Detect when an element enters or leaves the viewport.'
import: "import { io } from '@svelteuidev/composables';"
docs: 'composables/use-io.md'
source: 'svelteui-composables/src/lib/dist/use-io/use-io.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading} from 'components'
</script>

<Heading />

## Usage

With the Intersection Observer API, use-intersection gets information about the intersection of a given element with its scroll container or body element:

<Demo demo={ComposableDemos.useIoDemo.usage} />

## Params

| Param | Description                                            |
| ----- | ------------------------------------------------------ |
| lock  | A boolean to specify whether or not to lock the screen |

## Definition

```ts
export function io(node: HTMLElement, options?: Options): ReturnType<Action>;
```
