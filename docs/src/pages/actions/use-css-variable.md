---
title: 'use-css-variable'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-css-variable/
description: 'Whenever some of their values change, update css properties on the fly'
import: "import { cssvariable } from '@svelteuidev/actions';"
docs: 'actions/use-css-variable.md'
source: 'svelteui-actions/src/lib/dist/use-css-variable/use-css-variable.ts'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { cssvariable } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components'

	let isRed = true;

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { cssvariable } from '@svelteuidev/actions';

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

<Preview {code}>
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

## Events

The `use-css-variable` action does not dispatch any custom events.

## Definition

```ts
export function cssvariable(node: HTMLElement, props: UnknownKeyString<string>): ReturnType<Action>;
```