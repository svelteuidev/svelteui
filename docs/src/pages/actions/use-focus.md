---
title: 'use-focus'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-focus/
description: 'Calls focus on a node once mounted into the DOM'
import: "import { focus } from '@svelteuidev/actions';"
docs: 'actions/use-focus.md'
source: 'svelteui-actions/src/lib/dist/use-focus/use-focus.ts'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { focus } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components'

	let name = 'world';
    let editing = false;
    function toggleEdit() {
        editing = !editing;
    }

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { focus } from '@svelteuidev/actions';

        let name = 'world';
        let editing = false;
        function toggleEdit() {
            editing = !editing;
        }
    <\/script>

    <p>Name: {name}<\/p>
    {#if editing}
        <label>
            Name
            <input use:focus type="text" bind:value={name} \/>
        <\/label>
    {\/if}
    <Button on:click={toggleEdit}>{editing ? 'Confirm' : 'Edit'}<\/Button>
    `
</script>

<Heading />

## Usage

With the `use-focus` action, the affected DOM node gets focused when it is mounted into the DOM. Only "focusable" elements should use this action. Type errors will appear if this is not the case.

<Preview cols={1} {code}>
    <p>Name: {name}</p>
    {#if editing}
        <label>
            Name
            <input use:focus type="text" bind:value={name} />
        </label>
    {/if}
    <Button on:click={toggleEdit}>{editing ? 'Confirm' : 'Edit'}</Button>
</Preview>


## Params

This `use-focus` action does not take any params.

## Events

The use-focus action does not dispatch any custom events.

## Definition

```ts
export function focus(node: FocusableElement): ReturnType<Action>;
```
