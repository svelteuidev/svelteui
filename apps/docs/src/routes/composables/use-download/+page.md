---
title: 'use-download'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-download/
description: 'Causes a download to occur with a given Blob object'
importCode: "import { download } from '@svelteuidev/composables';"
docs: 'composables/use-download'
source: 'svelteui-composables/src/actions/use-download/use-download.ts'
---

<script>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
    import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

With the `use-download` action, a download will occur with a given Blob object as a file with the given filename. It takes an argument of options, which is an object that has two properties. The blob option is a file-like object of immutable, raw data. The filename option is the filename that will be given to the Blob.

<Demo demo={ComposableDemos.useDownloadDemo.usage} />

## Params

| Param    | Description                                      |
| -------- | ------------------------------------------------ |
| blob     | The Blob object representing immutable, raw data |
| filename | The name of the file to be downloaded            |

## Events

The `use-download` action dispatches custom events. Each custom event takes a callback function just like other events _e.g._ `on:click=`

```js
on:usedownload?: (callback: (any) => unknown) => void;
on:usedownload-error?: (callback: (any) => unknown) => void;
```

## Definition

```js
export function download(
	node: HTMLElement,
	params: { blob: Blob; filename: string }
): ReturnType<Action>;
```
