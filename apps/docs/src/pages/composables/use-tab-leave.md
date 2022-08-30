---
title: 'use-tab-leave'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-tab-leave/
description: 'Call a function when the current tab is switched'
import: "import { tableave } from '@svelteuidev/composables';"
docs: 'composables/use-tab-leave.md'
source: 'svelteui-src/actions/use-tab-leave/use-tab-leave.ts'
---

<script lang='ts'>
	import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

The `use-tab-leave` action calls given function when the current tab is switched.

<Demo demo={ComposableDemos.useTabLeaveDemo.usage} />

## Params

| Param    | Description                                       |
| -------- | ------------------------------------------------- |
| callback | The callback to be fired when the tab is switched |

## Definition

```tsx
export function tableave(node: HTMLElement, callback: Fn<void>): ReturnType<Action>;
```
