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
    import { Button } from '@svelteuidev/core'
    import { hash } from '@svelteuidev/utilities';
    import { Heading, Preview } from 'components';

    const id = hash('sveleteui')
    const id2 = hash('my-library', true)

    const code = `
    <script>
        import { hash } from '@svelteuidev/utilities'

        const id = hash('sveleteui')
    <\/script>

    <p>Generated hash: {id}<\/p>
    `

    const code2 = `
    <script>
        import { hash } from '@svelteuidev/utilities'
        
        const id2 = hash('my-library', true)
    <\/script>

    <p>Generated hash that won't change: {id2}<\/p>
    `
</script>

<Heading />

## Usage

The `hash` utility function generates a random hash with a specified prefix. The first argument determines the prefix used. If no prefix is specified it defaults to 'svelteui'. If you are looking to generate a random ID, then you should use the [uuid (not yet implemented)](utilities/uuid) utility.

<Preview cols={1} {code}>
    <p>Generated hash: {id}</p>
</Preview>

## Persistent hash

The `hash` utility also takes a second argument which is a boolean value. If set to true the hash value will be saved in local storage, and therefore persist through the browser.

<Preview cols={1} code={code2}>
    <Button on:click={() => window.location.reload()}>Click to refresh the page</Button>
    <p>Generated hash that won't change: {id2}</p>
</Preview>


## Typescript

```ts
    // no specific exported types
```

## Definition

```ts
export function hash(prefix: string = 'svelteui', persist: boolean = false): string
```