---
title: 'use-download'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-download/
description: 'Causes a download to occur with a given Blob object'
import: "import { download } from '@svelteuidev/actions';"
docs: 'actions/use-download.md'
source: 'svelteui-actions/src/lib/dist/use-download/use-download.ts'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { download } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components'

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { download } from '@svelteuidev/actions';
    <\/script>

    <div
        use:download={{ blob: new Blob([]), filename: "test.txt" }}
        on:usedownload={() => console.log('File Downloaded')}
    >
        <Button variant='outline'>
            Download File
        <\/Button>
    <\/div>
    `;
</script>

<Heading />

## Usage

With the `use-download` action, a download will occur with a given Blob object as a file with the given filename.

<Preview cols={1} {code}>
    <div
        use:download={{ blob: new Blob([]), filename: "test.txt" }}
        on:usedownload={() => console.log('File Downloaded')}
    >
        <Button variant='outline'>
            Download File
        </Button>
    </div>
</Preview>

## Params

| Param    | Description                                      |
| -------- | ------------------------------------------------ |
| blob     | The Blob object representing immutable, raw data |
| filename | The name of the file to be downloaded            |

## Events

The `use-download` action dispatches custom events. Each custom event takes a callback function just like other events *e.g.* `on:click=`

```ts
on:usedownload?: (callback: (any) => unknown) => void;
on:usedownload-error?: (callback: (any) => unknown) => void;
```

## Definition

```ts
export function download(node: HTMLElement, params: { blob: Blob; filename: string }): ReturnType<Action>;
```