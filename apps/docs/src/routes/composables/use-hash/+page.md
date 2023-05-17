---
title: hash
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/composables'
slug: /utilities/hash/
description: 'Util generates a random hash with a specified prefix.'
importCode: "import { useHash } from '@svelteuidev/composables';"
source: 'svelteui-composables/src/utilities/use-hash/use-hash.ts'
docs: 'utilities/hash.md'
---

<script>
  import { ComposableDemos, Demo } from "@svelteuidev/demos";
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

The `use-hash` composable function generates a random hash with a specified prefix. The first argument determines the prefix used. If no prefix is specified it defaults to 'svelteui'.

<Demo demo={ComposableDemos.useHashDemo.usage} />

## Persistent hash

The `use-hash` composable also takes a second argument which is a boolean value. If set to true the hash value will be saved in local storage, and therefore persist through the browser.

<Demo demo={ComposableDemos.useHashDemo.persist} />

## Typescript

```js
// no specific exported types
```

## Definition

```js
export function useHash(prefix: string = 'svelteui', persist: boolean = false): string;
```
