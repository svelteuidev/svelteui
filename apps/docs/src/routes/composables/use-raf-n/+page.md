---
title: rafFn
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/composables'
slug: /utilities/raf-fn/
description: 'Call function on every requestAnimationFrame'
importCode: "import { useRafFn } from '@svelteuidev/composables';"
source: 'svelteui-composables/src/utilities/use-raf-fn/use-raf-fn.ts'
docs: 'utilities/raf-fn'
---

<script lang='ts'>
	import { ComposableDemos, Demo } from "@svelteuidev/demos";
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

The `use-raf-fn` composable takes a callback function as its first argument, and calls that function on every [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame). It returns an object with controls of pausing and resuming.

<Demo demo={ComposableDemos.useRafFnDemo.usage} />

## Immediate Option

The `useRafFn` composable also takes a second argument of options, which is an object that has one property. The immediate option is set to true by default. If it is set to false, then the callback function won't be ran unless the `resume` function is called.

<Demo demo={ComposableDemos.useRafFnDemo.options} />

## Typescript

You can import `RafFnOptions` interface type from `@svelteuidev/composables`:

```js
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

```js
function useRafFn(fn: Fn, options: RafFnOptions = {}): Pauseable;
```
