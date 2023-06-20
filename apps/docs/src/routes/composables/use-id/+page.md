---
title: 'use-id'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-id/
description: 'Get element width and height and subscribe to changes'
importCode: "import { useId } from '@svelteuidev/composables';"
docs: 'composables/use-id'
source: 'svelteui-composables/src/utilities/use-id/use-id.ts'
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

`use-id` generates a random id. It differs from [use-hash]({base}/use-hash), in that it is completely random (or as random as it can be). And due to its nature, it's commonly used in places where you would use a uuid.

<Demo demo={ComposableDemos.useIdDemo.usage} />

## Definition

```js
export function useId(): string;
```
