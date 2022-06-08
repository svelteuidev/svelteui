---
title: hash
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
slug: /utilities/hash/
description: 'Util generates a random hash with a specified prefix.'
import: "import { useHash } from '@svelteuidev/utilities';"
source: 'svelteui-composables/src/lib/utilities/use-hash/use-hash.ts'
docs: 'utilities/hash.md'
---

<script>
    import { ComposableDemos, Demo } from "@svelteuidev/demos";
    import { Heading } from 'components';
</script>

<Heading />

## Usage

The `use-hash` composable function generates a random hash with a specified prefix. The first argument determines the prefix used. If no prefix is specified it defaults to 'svelteui'.

<Demo demo={ComposableDemos.useHashDemo.usage} />

## Persistent hash

The `use-hash` composable also takes a second argument which is a boolean value. If set to true the hash value will be saved in local storage, and therefore persist through the browser.

<Demo demo={ComposableDemos.useHashDemo.persist} />

## Typescript

```ts
// no specific exported types
```

## Definition

```ts
export function useHash(prefix: string = 'svelteui', persist: boolean = false): string;
```
