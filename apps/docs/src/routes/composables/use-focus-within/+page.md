---
title: 'use-focus-within'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-focus-within/
description: 'Detect if any element within has focus.'
importCode: "import { useFocusWithin } from '@svelteuidev/composables';"
docs: 'composables/use-focus-within'
source: 'svelteui-composables/src/utilities/use-focus-within/use-focus-within.ts'
---

<script lang='ts'>
  import { Demo, ComposableDemos } from "@svelteuidev/demos";
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

The `use-focus-within` composable determines whether any element within has focus. It works in the same way that the CSS selector for focus-within works.

<Demo demo={ComposableDemos.useFocusWithinDemo.usage} />

## Params

| Param   | Description            |
| ------- | ---------------------- |
| onBlur  | calls function onBlur  |
| onFocus | calls function onFocus |

## Definition

```js
export function useFocusWithin({ onBlur, onFocus }?: UseFocusWithinOptions): FocusWithin;
```
