---
title: 'use-browser-context'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-browser-context/
description: 'Get access to the reactive browser location API.'
importCode: "import { useBrowserContext } from '@svelteuidev/composables';"
docs: 'composables/use-browser-context'
source: 'svelteui-composables/src/utilities/use-browser-context/use-browser-context.ts'
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

If you are using SvelteKit, then you'll want to use the page store rather than this in most cases.

<Demo demo={ComposableDemos.useBrowserContextDemo.usage} />

## Definition

```js
export function useBrowserContext(): Writable<BrowserContextState>;
```
