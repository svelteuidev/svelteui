---
title: 'use-lock-scroll'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-lock-scroll/
description: 'Lock scroll at current position.'
import: "import { lockscroll } from '@svelteuidev/composables';"
docs: 'composables/use-lock-scroll.md'
source: 'svelteui-composables/src/actions/use-lock-scroll/use-lock-scroll.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading} from 'components'
</script>

<Heading />

## Usage

`lockscroll` locks scroll at current position by setting `document.body` overflow to hidden

<Demo demo={ComposableDemos.useLockScrollDemo.usage} />

## Params

| Param | Description                                            |
| ----- | ------------------------------------------------------ |
| lock  | A boolean to specify whether or not to lock the screen |

## Definition

```ts
export function lockscroll(node: HTMLElement, lock?: boolean): ReturnType<Action>;
```
