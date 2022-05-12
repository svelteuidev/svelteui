---
title: rafFn
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
slug: /utilities/raf-fn/
description: 'Call function on every requestAnimationFrame'
import: "import { rafFn } from '@svelteuidev/utilities';"
source: 'svelteui-utilities/src/lib/dist/functions/raf-fn/raf-fn.ts'
docs: 'utilities/raf-fn.md'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { rafFn } from '@svelteuidev/utilities';
    import { Heading, Preview } from 'components'

    let count = 0;
    const { pause, resume } = rafFn(() => {
        count++;
    });

    const code = `
    <script>
        import { rafFn } from '@svelteuidev/utilities';
        import { Button } from '@svelteuidev/core';

        let count = 0;
        const { pause, resume } = rafFn(() => {
            count++;
        });
    <\/script>

    <div>Count: {count}<\/div>
    <Button on:click={() => pause()}>Pause<\/Button>
    <Button on:click={() => resume()}>Resume<\/Button>
    `;
</script>

<Heading />

## Usage

The `rafFn` utility takes a callback function as its first argument, and calls that function on every [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame). It returns an object with controls of pausing and resuming.

<Preview {code}>
    <div>Count: {count}</div>
    <Button on:click={() => pause()}>Pause</Button>
    <Button on:click={() => resume()}>Resume</Button>
</Preview>

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
function rafFn(fn: Fn, options: RafFnOptions = {}): Pauseable;
```