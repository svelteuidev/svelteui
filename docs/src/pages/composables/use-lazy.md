---
title: 'use-lazy'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-lazy/
description: 'Lazily attach properties to any DOM element when it is in the window.'
import: "import { lazy } from '@svelteuidev/actions';"
docs: 'actions/use-lazy.md'
source: 'svelteui-actions/src/lib/dist/use-lazy/use-lazy.ts'
---

<script>
    import { Button } from '@svelteuidev/core';
	import { lazy } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components'

    const code = `
    <script>
        import { lazy } from '@svelteuidev/actions'
    <\/script>
    
    <div style='height: 300px;'>
        {#each [...Array(15).keys()] as _}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ex totam laboriosam, culpa ipsa quis nostrum odio dolore aut eos numquam ratione quam maiores voluptates quas eius labore error?
            <\/p>
        {\/each}
        <img use:lazy={{src: "https://images.unsplash.com/photo-1584441111639-2fe3005b4378"}} alt="" \/>
    <\/div>
    `
</script>

<Heading />

## Usage

With the `use-lazy` action, you can set attributes on an element when it is visible in the viewport.

<Preview override={{height: '300px', overflow: 'scroll', '#code-button': {position: 'sticky', top: '90%', right: 0}}} cols={1} {code}>
    {#each [...Array(15).keys()] as i}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ex totam laboriosam, culpa ipsa quis nostrum odio dolore aut eos numquam ratione quam maiores voluptates quas eius labore error?
        </p>
    {/each}
    <img use:lazy={{src: "https://images.unsplash.com/photo-1584441111639-2fe3005b4378"}} alt="" />
</Preview>

## Params

| Param      | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| attributes | an object whose properties are the attributes to be applied, and the values are the attr values |

## Events

The use-lazy action does not dispatch any custom events.

## Definition

```ts
export function lazy(node: HTMLElement, attributes: Record<string, number | string>): ReturnType<Action>;
```
