---
title: rafFn
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
slug: /utilities/raf-fn/
description: 'Call function on every requestAnimationFrame'
import: "import { useRafFn } from '@svelteuidev/utilities';"
source: 'svelteui-composables/src/utilities/use-raf-fn/use-raf-fn.ts'
docs: 'utilities/raf-fn.md'
---

<script lang='ts'>
    import { ComposableDemos, Demo } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

The `useRafFn` composable takes a callback function as its first argument, and calls that function on every [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame). It returns an object with controls of pausing and resuming.

<Demo demo={ComposableDemos.useRafFnDemo.usage} />

## Immediate Option

The `useRafFn` composable also takes a second argument of options, which is an object that has one property. The immediate option is set to true by default. If it is set to false, then the callback function won't be ran unless the `resume` function is called.

<Demo demo={ComposableDemos.useRafFnDemo.options} />

## Typescript

You can import `RafFnOptions` interface type from `@svelteuidev/utilities`:

```ts
export interface RafFnOptions extends ConfigurableWindow {
	/**
	 * Start the requestAnimationFrame loop immediately on creation
	 *
	 * @default true
	 */
	immediate?: boolean;
}
```

## Definition

```ts
function useRafFn(fn: Fn, options: RafFnOptions = {}): Pauseable;
```
