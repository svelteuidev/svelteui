---
title: 'use-portal'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-portal/
description: 'Render an element or component anywhere in the DOM'
import: "import { portal } from '@svelteuidev/actions';"
docs: 'actions/use-portal.md'
source: 'svelteui-actions/src/lib/dist/use-portal/use-portal.ts'
---

<script>
    import { portal } from '@svelteuidev/actions';
    import { Box, Button } from '@svelteuidev/core'
    import { Heading, Preview } from 'components';

    let magic = false

    const code = `
    <script>
        import { portal } from '@svelteuidev/actions';
        import { Box, Button } from '@svelteuidev/core'
    <\/script>
    
    {#if magic}
        <div>
            Look at the top of the page
        <\/div>
    {\/if}
    <div>
        <Box 
            use={[[portal, magic ? 'h1' : null]]}
            css={{bc: 'white', border: '1px solid black', br: '$md', padding: '$md'}} 
        >
            I'm being rendered {magic ? 'outside' : 'inside'} of the preview
        <\/Box>
    <\/div>
    <Button on:click={() => magic = !magic}>Click me to see the magic<\/Button>
    `
</script>

<Heading />

## Usage

Render any component or element at the end of document.body or at given element. Modal and Drawer components use portal by default. Use the `portal` action to render a component or element outside of it's parent. The portal action takes one argument (target):

<Preview cols={1} {code}>
    {#if magic}
        <div>
            Look at the top of the page
        </div>
    {/if}
    <div>
        <Box 
            use={[[portal, magic ? 'h1' : null]]}
            css={{bc: 'white', border: '1px solid black', br: '$md', padding: '$md'}} 
        >
            I'm being rendered {magic ? 'outside' : 'inside'} of the preview
        </Box>
    </div>
    <Button on:click={() => magic = true}>{magic ? 'Refresh the page to see again' : 'Click me to see the magic'}</Button>
</Preview>

You can specify a dom node where portal will be rendered by passing target argument. If you don't specify the target, it will be appended to the document.body for each action instance. Target can be a HTMLElement <code>{'use:portal={document.body}'}</code> or a css selector <code>{'use:portal={"#svelteui"}'}</code> that points to an already existing element. 

## Params

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| target | DOM element or CSS selector to be appended to. |

## Events

The use-portal action does not dispatch any custom events.

## Definition

```ts
export function portal(node: HTMLElement, target: Target): ReturnType<Action>;
```
