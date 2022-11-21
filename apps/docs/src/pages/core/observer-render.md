---
title: ObserverRender
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/observer-render/
category: 'inputs'
description: 'Detect when an element enters or leaves the viewport.'
import: "import { ObserverRender } from '@svelteuidev/core';"
source: 'svelteui-src/components/ObserverRender/ObserverRender.svelte'
docs: 'core/observer-render.md'
---

<script>
    import { Demo, ObserverRenderDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

ObserverRender monitors when an element enters or leaves the viewport/parent element. It uses the [use-io](composables/use-io) action under the hood.

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

ObserverRender and [use-io](composables/use-io) both share the same options. For more details refer to those docs:

```ts
export type Options = {
	root?: HTMLElement | null;
	rootMargin?: string;
	threshold?: number | number[];
	unobserveOnEnter?: boolean;
};
```
