---
title: Flipboard
group: 'svelteuidev-motion'
packageGroup: '@svelteuidev/motion'
slug: /motion/flipboard/
category: 'transitions'
description: 'Flipboard transition effect for text'
import: "import { flipboard } from '@svelteuidev/motion';"
source: 'svelteui-motion/src/lib/dist/transitions/flipboard/flipboard.ts'
docs: 'motion/flipboard.md'
---

<script lang='ts'>
    import { Box, Button } from '@svelteuidev/core';
	import { flipboard } from '@svelteuidev/motion';
    import { Heading, Preview } from 'components';

    let visible = false;

    const toggleVisible = () => {
        visible = !visible;
    };

    const code = `
    <script>
        import { flipboard } from '@svelteuidev/motion';
        import { Button } from '@svelteuidev/core';

        let visible = false;

        const toggleVisible = () => {
            visible = !visible;
        };
    <\/script>

    <div>
        {#if visible}
            <p in:flipboard={{ duration: 2000 }}>Now the transition is playing<\/p>
        {:else}
            <p>Click the button to play the transition<\/p>
        {\/if}
    <\/div>
    <Button on:click={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}<\/Button>
    `
</script>

<Heading />

## Usage

The flipboard transition displays text with a glitch like effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the flipboard transition on non text nodes, it will result in an error.

<Preview cols={1} {code}>
    <div>
        {#if visible}
            <p in:flipboard={{ duration: 2000 }}>Now the transition is playing</p>
        {:else}
            <p>Click the button to play the transition</p>
        {/if}
    </div>
    <Button on:click={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}</Button>
</Preview>

## Params

| Param    | Description                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| delay    | A number representing the duration before the transition starts (in milliseconds)                         |
| duration | A number representing the duration of the transition (in milliseconds)                                    |
| easing   | An easing function to be applied to the transition. Works with svelte easing and custom easing functions |

## Typescript

You can import `FlipboardParams` interface type from `@svelteuidev/motion`:

```ts
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

```ts
function flipboard(node: HTMLElement, { delay, duration, easing }: FlipboardParams): TransitionConfig;
```
