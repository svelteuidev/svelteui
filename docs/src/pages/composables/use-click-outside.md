---
title: 'use-click-outside'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-click-outside/
description: 'Detect click and touch events outside of specified element'
import: "import { clickoutside } from '@svelteuidev/composables';"
docs: 'composables/use-click-outside.md'
source: 'svelteui-composables/src/lib/actions/use-click-outside/use-click-outside.ts'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { clickoutside } from '@svelteuidev/composables';
    import { Heading, Preview } from 'components'

	let open = true;

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { clickoutside } from '@svelteuidev/composables';

        let open = true;
    <\/script>

    <div use:clickoutside={{ enabled: open, callback: () => open = false }}>
        <Button on:click={() => open = true}>Open Modal<\/Button>
        {#if open}
            <div style="border: 2px solid gray; padding: 2rem;">
                This is a modal, click anywhere to close
            <\/div>
        {:else if !open}
            <div>
                There is no modal
            <\/div>
        {\/if}
    <\/div>
    `
</script>

<Heading />

## Usage

With the `use-click-outside` action, a callback function will be fired whenever the user clicks outside of the dom node the action is applied to.

<Preview cols={1} {code}>

<div use:clickoutside={{ enabled: open, callback: () => open = false }}>
<Button on:click={() => open = true}>Open Modal</Button>
{#if open}
<div style="border: 2px solid gray; padding: 2rem;">
This is a modal, click anywhere to close
</div>
{:else if !open}
<div>
There is no modal
</div>
{/if}
</div>
</Preview>

## Params

| Param    | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| enabled  | Sets the action to an enabled state if true, if false, action will not trigger |
| callback | The callback to be fired once the user clicks outside of the DOM node          |

## Definition

```ts
export function clickOutside(
	node: HTMLElement,
	params: { enabled: boolean; callback?: (node?: HTMLElement) => void }
): ReturnType<Action>;
```
