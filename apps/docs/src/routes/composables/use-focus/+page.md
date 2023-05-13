---
title: 'use-focus'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-focus/
description: 'Calls focus on a node once mounted into the DOM'
importCode: "import { focus } from '@svelteuidev/composables';"
docs: 'composables/use-focus.md'
source: 'svelteui-composables/src/actions/use-focus/use-focus.ts'
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

The `use-focus` action is the simplest action out of all. It has a single purpose, and that is to give immediate focus to an element once it is mounted into the DOM. Only "focusable" elements should use this action. Type errors will appear if this is not the case.

<Demo demo={ComposableDemos.useFocusDemo.usage} />

## Definition

```js
export function focus(node: FocusableElement): ReturnType<Action>;
```
