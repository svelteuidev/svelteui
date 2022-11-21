---
title: 'use-click-outside'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-click-outside/
description: 'Detect click and touch events outside of specified element'
import: "import { clickoutside } from '@svelteuidev/composables';"
docs: 'composables/use-click-outside.md'
source: 'svelteui-src/actions/use-click-outside/use-click-outside.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

With the `use-click-outside` action, a callback function will be fired whenever the user clicks outside of the DOM node the action is applied to.

<Demo demo={ComposableDemos.useClickOutsideDemo.usage} />

## Params

| Param    | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| enabled  | Sets the action to an enabled state if true, if false, action will not trigger |
| callback | The callback to be fired once the user clicks outside of the DOM node          |

## Definition

```ts
export function clickOutside(
	node: HTMLElement,
	params: { enabled: boolean; callback?: (node?: HTMLElement) => void }
): ReturnType<Action>;
```
