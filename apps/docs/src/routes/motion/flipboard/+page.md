---
title: Flipboard
group: 'svelteuidev-motion'
packageGroup: '@svelteuidev/motion'
# slug: /motion/flipboard/
category: 'transitions'
description: 'Flipboard transition effect for text'
importCode: "import { flipboard } from '@svelteuidev/motion';"
source: 'svelteui-motion/src/lib/dist/transitions/flipboard/flipboard.ts'
docs: 'motion/flipboard.md'
---

<script>
    import { Demo, MotionDemos } from "@svelteuidev/demos";
    import { Heading } from '$lib/components';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {category} {description} {importCode} {source} {docs} />

## Usage

The flipboard transition displays text with a glitch like effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the flipboard transition on non text nodes, it will result in an error.

<Demo demo={MotionDemos.flipboardDemo} />

## Params

| Param    | Description                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| delay    | A number representing the duration before the transition starts (in milliseconds)                         |
| duration | A number representing the duration of the transition (in milliseconds)                                    |
| easing   | An easing function to be applied to the transition. Works with svelte easing and custom easing functions |

## Typescript

You can import `FlipboardParams` interface type from `@svelteuidev/motion`:

```js
import type { FlipboardParams } from '@svelteuidev/motion';

export interface FlipboardParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
    css?: (t: number, u: number) => string;
    tick?: (t: number, u: number) => void;
}
```

## Definition

```js
function flipboard(node: HTMLElement, { delay, duration, easing }: FlipboardParams): TransitionConfig;
```
