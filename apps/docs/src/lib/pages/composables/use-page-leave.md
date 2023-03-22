---
title: 'use-page-leave'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-page-leave/
description: 'Call a function when the mouse leaves the page'
importCode: "import { pageleave } from '@svelteuidev/composables';"
docs: 'composables/use-page-leave.md'
source: 'svelteui-composables/src/actions/use-page-leave/use-page-leave.ts'
---

<script lang='ts'>
	import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

The `use-page-leave` action calls given function when mouse leaves the page.

<Demo demo={ComposableDemos.usePageLeaveDemo.usage} />

## Params

| Param    | Description                                    |
| -------- | ---------------------------------------------- |
| callback | The callback to be fired when the page is left |

## Definition

```js
export function pageleave(node: HTMLElement, callback: Fn<void>): ReturnType<Action>;
```
