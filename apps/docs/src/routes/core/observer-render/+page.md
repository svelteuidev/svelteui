---
title: ObserverRender
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/observer-render/
category: 'inputs'
description: 'Detect when an element enters or leaves the viewport.'
importCode: "import { ObserverRender } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/ObserverRender/ObserverRender.svelte'
docs: 'core/observer-render.md'
---

<script>
    import { Demo, ObserverRenderDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

ObserverRender monitors when an element enters or leaves the viewport/parent element. It uses the [use-io]({base}/composables/use-io) action under the hood.

<Demo demo={ObserverRenderDemos.usage} />

## Slot Props

ObserverRender exposes 5 different slot props that gives its children access to current information

- `visible`
- `entry`
- `node`
- `observer`
- `scrollDirection`

<Demo demo={ObserverRenderDemos.slots} />

## Options

ObserverRender and [use-io]({base}/composables/use-io) both share the same options. For more details refer to those docs:

```ts
export type Options = {
	root?: HTMLElement | null;
	rootMargin?: string;
	threshold?: number | number[];
	unobserveOnEnter?: boolean;
};
```
