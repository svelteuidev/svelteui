---
title: 'use-lock-scroll'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-lock-scroll/
description: 'Lock scroll at current position.'
importCode: "import { lockscroll } from '@svelteuidev/composables';"
docs: 'composables/use-lock-scroll.md'
source: 'svelteui-composables/src/actions/use-lock-scroll/use-lock-scroll.ts'
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

`lockscroll` locks scroll at current position by setting `document.body` overflow to hidden

<Demo demo={ComposableDemos.useLockScrollDemo.usage} />

## Params

| Param | Description                                            |
| ----- | ------------------------------------------------------ |
| lock  | A boolean to specify whether or not to lock the screen |

## Definition

```js
export function lockscroll(node: HTMLElement, lock?: boolean): ReturnType<Action>;
```
