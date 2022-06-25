---
title: 'use-css-variable'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-css-variable/
description: 'Whenever some of their values change, update css properties on the fly'
import: "import { cssvariable } from '@svelteuidev/composables';"
docs: 'composables/use-css-variable.md'
source: 'svelteui-composables/src/lib/actions/use-css-variable/use-css-variable.ts'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { cssvariable } from '@svelteuidev/composables';
    import { Heading, Preview } from 'components'

	let isRed = true;

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { cssvariable } from '@svelteuidev/composables';

        let isRed = true;

        $: styleVars = {
            titleColor: isRed ? 'red' : 'blue'
        };
    <\/script>

    <div use:cssvariable={styleVars}>
        <!-- anything here will have access to var(--titleColor) -->
        <p>This text is normal<\/p>
        <p class="example">This text is using the variable<\/p>
    <\/div>
    <Button on:click={() => (isRed = !isRed)}>Click to switch colors<\/Button>

    <style>
        .example-text {
            color: var(--titleColor);
        }
    <\/style>
    `;

    $: styleVars = { titleColor: isRed ? 'red' : 'blue' };
</script>

<Heading />

## Usage

With the `use-css-variable` action, an object of properties will be treated as css custom variables. By defining this object inside of a `$: ` reactive block, `use-css-variable` can update those css properties on the fly whenever some of its values change.

<Preview cols={1} {code}>

<div use:cssvariable={styleVars}>
<p>This text is normal</p>
<p class="example-text">This text is using the variable</p>
</div>
<Button on:click={() => (isRed = !isRed)}>Click to switch colors</Button>
</Preview>

<style>
    .example-text {
        color: var(--titleColor);
    }
</style>

## Params

| Param | Description                                                          |
| ----- | -------------------------------------------------------------------- |
| props | The object that possesses the variables, and their associated values |

## Definition

```ts
export function cssvariable(node: HTMLElement, props: UnknownKeyString<string>): ReturnType<Action>;
```
