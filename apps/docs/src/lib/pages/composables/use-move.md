---
title: 'use-move'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-move/
description: 'Handles the movement of an element based on mouse and touch events'
importCode: "import { move } from '@svelteuidev/composables';"
docs: 'composables/use-move.md'
source: 'svelteui-composables/src/actions/use-move/use-move.ts'
---

<script>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

With the `use-move` action, it is possible to move an element in the screen with mouse or touch events.

<Demo demo={ComposableDemos.useMoveDemo.usage} />

## Events

The use-move action dispatches three custom event. The custom event takes a callback function just like other events.

```ts
on:move?: (callback: (event: CustomEvent<{ x: number; y: number }> & { target: EventTarget & T }) => unknown) => void;
on:move:start?: (callback: (event: CustomEvent<{ x: number; y: number }> & { target: EventTarget & T }) => unknown) => void;
on:move:stop?: (callback: (event: CustomEvent<{ x: number; y: number }> & { target: EventTarget & T }) => unknown) => void;
```

## Definition

```ts
export function move(
	node: HTMLElement
): ReturnType<Action>;
```
