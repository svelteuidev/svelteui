---
title: 'use-lazy'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-lazy/
description: 'Lazily attach properties to any DOM element when it is in the window.'
importCode: "import { lazy } from '@svelteuidev/composables';"
docs: 'composables/use-lazy.md'
source: 'svelteui-composables/src/actions/use-lazy/use-lazy.ts'
---

<script>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

With the `use-lazy` action, you can set attributes on an element when it is visible in the viewport.

<Demo demo={ComposableDemos.useLazyDemo.usage} />

## Params

| Param      | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| attributes | an object whose properties are the attributes to be applied, and the values are the attr values |

## Definition

```js
export function lazy(
	node: HTMLElement,
	attributes: Record<string, number | string>
): ReturnType<Action>;
```
