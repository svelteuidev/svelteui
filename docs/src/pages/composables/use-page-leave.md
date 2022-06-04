---
title: 'use-page-leave'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-page-leave/
description: 'Call a function when the mouse leaves the page'
import: "import { pageleave } from '@svelteuidev/actions';"
docs: 'actions/use-page-leave.md'
source: 'svelteui-actions/src/lib/dist/use-page-leave/use-page-leave.ts'
---

<script lang='ts'>
	import { pageleave } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components'

    const code = `
    <script>
        import { pageleave } from '@svelteuidev/actions';

        $: count = 0;
    <\/script>

    <div use:pageleave={() => count++}>Move the mouse off the page to see the counter go up: {count}<\/div>
    `;

    $: count = 0;
</script>

<Heading />

## Usage

The `use-page-leave` action calls given function when mouse leaves the page.

<Preview cols={1} {code}>
    <div use:pageleave={() => count++}>Move the mouse off the page to see the counter go up: {count}</div>
</Preview>

## Params

| Param    | Description                                    |
| -------- | ---------------------------------------------- |
| callback | The callback to be fired when the page is left |

## Definition

```ts
export function pageleave(node: HTMLElement, callback: Fn<void>): ReturnType<Action>;
```
