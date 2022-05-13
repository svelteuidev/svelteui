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
</script>

<Heading />

## Usage

With the `use-lazy` action, the affected DOM node gets focused when it is mounted into the DOM. Only "focusable" elements should use this action. Type errors will appear if this is not the case.

<Preview cols={1} {code}>
    {#each [...Array(15).keys()] as _}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ex totam laboriosam, culpa ipsa quis nostrum odio dolore aut eos numquam ratione quam maiores voluptates quas eius labore error?
        </p>
    {/each}
    <img use:lazy={{src: "https://images.unsplash.com/photo-1584441111639-2fe3005b4378"}} alt="" />
</Preview>


## Params

This `use-lazy` action does not take any params.

## Events

The use-lazy action does not dispatch any custom events.

## Definition

```ts
export function focus(node: FocusableElement): ReturnType<Action>;
```
