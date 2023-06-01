---
title: 'use-long-press'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-long-press/
description: 'Creates a longpress event when mousedown is above a duration in milliseconds'
importCode: "import { longpress } from '@svelteuidev/composables';"
docs: 'composables/use-long-press'
source: 'svelteui-composables/src/actions/use-long-press/use-long-press.ts'
---

<script>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

With the `use-long-press` action, a `long press` event is created when `mousedown` or `touchstart` is above the `duration` passed in, in milliseconds.

<Demo demo={ComposableDemos.useLongPressDemo.usage} />

## Params

| Param    | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| duration | The duration until the longpress event is dispatched in milliseconds |

## Events

The `use-longpress` action dispatches one custom event. The custom event takes a callback function just like other events.

```js
on:uselongpress?: (callback: (any) => unknown) => void;
```

## Definition

```js
export function longpress(
	node: HTMLElement,
	duration: number
): ReturnType<Action>;
```
