---
title: 'use-tab-leave'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-tab-leave/
description: 'Call a function when the current tab is switched'
import: "import { tableave } from '@svelteuidev/composables';"
docs: 'composables/use-tab-leave.md'
source: 'svelteui-composables/src/lib/actions/use-tab-leave/use-tab-leave.ts'
---

<script lang='ts'>
	import { tableave } from '@svelteuidev/composables';
    import { Heading, Preview } from 'components'

    const code = `
    <script>
        import { tableave } from '@svelteuidev/composables';

        $: count = 0;
    <\/script>

    <div use:tableave={() => count++}>Switch the tab to see the counter go up: {count}<\/div>
    `;

    $: count = 0;
</script>

<Heading />

## Usage

The `use-tab-leave` action calls given function when the current tab is switched.

<Preview cols={1} {code}>

<div use:tableave={() => count++}>Switch the tab to see the counter go up: {count}</div>
</Preview>

## Params

| Param    | Description                                       |
| -------- | ------------------------------------------------- |
| callback | The callback to be fired when the tab is switched |

## Definition

```tsx
export function tableave(node: HTMLElement, callback: Fn<void>): ReturnType<Action>;
```
