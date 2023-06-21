---
title: 'use-focus-trap'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-focus-trap/
description: 'Traps the focus inside the given DOM node'
importCode: "import { focustrap } from '@svelteuidev/composables';"
docs: 'composables/use-focus-trap'
source: 'svelteui-composables/src/actions/use-focus/use-focus-trap.ts'
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

The `use-focus-trap` action traps the focus inside a given DOM node. The node must include at least one focusable element, and it will give priority to a node with the `autofocus` property.

```svelte
<script>
	import { focustrap } from './use-focus-trap';
</script>

<div use:focustrap>
	<h1>Title</h1>
	<input />
	<!-- This will be focused -->
</div>
```

## Definition

```js
export function focustrap(node: HTMLElement): ReturnType<Action>;
```
