---
title: hash
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
slug: /utilities/hash/
description: 'Util generates a random hash with a specified prefix.'
import: "import { hash } from '@svelteuidev/utilities';"
source: 'svelteui-utilities/src/lib/dist/functions/hash/hash.ts'
docs: 'utilities/hash.md'
---

<script>
    import { UtilityDemos, Demo } from "@svelteuidev/demos";
    import { Heading } from 'components';
</script>

<Heading />

## Usage

The `hash` utility function generates a random hash with a specified prefix. The first argument determines the prefix used. If no prefix is specified it defaults to 'svelteui'. If you are looking to generate a random ID, then you should use the [uuid (not yet implemented)](utilities/uuid) utility.

<Demo demo={UtilityDemos.hashDemo} />

## Persistent hash

The `hash` utility also takes a second argument which is a boolean value. If set to true the hash value will be saved in local storage, and therefore persist through the browser.

<Demo demo={UtilityDemos.hashDemoPersist} />

## Typescript

```ts
// no specific exported types
```

## Definition

```ts
export function hash(prefix: string = 'svelteui', persist: boolean = false): string;
```
