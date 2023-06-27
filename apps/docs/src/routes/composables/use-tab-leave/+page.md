---
title: 'use-tab-leave'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-tab-leave/
description: 'Call a function when the current tab is switched'
importCode: "import { tableave } from '@svelteuidev/composables';"
docs: 'composables/use-tab-leave'
source: 'svelteui-composables/src/actions/use-tab-leave/use-tab-leave.ts'
---

<script lang='ts'>
	import { Demo, ComposableDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

The `use-tab-leave` action calls given function when the current tab is switched.

<Demo demo={ComposableDemos.useTabLeaveDemo.usage} />

## Params

| Param    | Description                                       |
| -------- | ------------------------------------------------- |
| callback | The callback to be fired when the tab is switched |

## Definition

```js
export function tableave(node: HTMLElement, callback: Fn<void>): ReturnType<Action>;
```
