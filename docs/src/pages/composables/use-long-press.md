---
title: 'use-long-press'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-long-press/
description: 'Creates a longpress event when mousedown is above a duration in milliseconds'
import: "import { longpress } from '@svelteuidev/composables';"
docs: 'composables/use-long-press.md'
source: 'svelteui-composables/src/lib/actions/use-long-press/use-long-press.ts'
---

<script>
    import { Button } from '@svelteuidev/core';
    import { longpress } from '@svelteuidev/composables';
    import { Heading, Preview } from 'components';

    let pressed = false;
	let duration = 2000;

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { longpress } from '@svelteuidev/composables'

        let pressed = false;
	    let duration = 2000;
    <\/script>
    
    <input type=range bind:value={duration} max={2000} step={100} \/>
    {duration}ms

    <Button 
        use={[[longpress, duration]]}
        on:longpress="{() => pressed = true}"
        on:mouseenter="{() => pressed = false}"
    >
        press and hold
    <\/Button>

    {#if pressed}
        <p>congratulations, you pressed and held for {duration} ms<\/p>
    {\/if}
    `
</script>

<Heading />

## Usage

With the `use-long-press` action, a `long press` event is created when `mousedown` or `touchstart` is above the `duration` passed in, in milliseconds.

<Preview cols={1} {code}>
<input type=range bind:value={duration} max={2000} step={100} />
{duration}ms

<Button
use={[[longpress, duration]]}
on:uselongpress={() => pressed = true}
on:mouseenter={() => pressed = false}
on:touchstart={() => pressed = false}

>

    press and hold

</Button>

{#if pressed}

<p>congratulations, you pressed and held for {duration} ms</p>
{/if}
</Preview>

## Params

| Param    | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| duration | The duration until the longpress event is dispatched in milliseconds |

## Events

The use-longpress action dispatches one custom event. The custom event takes a callback function just like other events.

```ts
on:uselongpress?: (callback: (any) => unknown) => void;
```

## Definition

```ts
export function lazy(
	node: HTMLElement,
	attributes: Record<string, number | string>
): ReturnType<Action>;
```
