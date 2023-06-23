---
title: 'Prism code highlight'
group: 'svelteuidev-prism'
packageGroup: '@svelteuidev/prism'
description: 'Code highlight with SvelteUI theme colors and styles'
importCode: "import { Prism } from '@svelteuidev/prism';"
source: 'svelteui-src/dist/Prism/Prism.svelte'
docs: 'others/prism'
license: MIT
---

<script>
    import { Demo, PrismDemos } from '@svelteuidev/demos'
    import { CodeBlock, Heading } from '$lib/components';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {description} {importCode} {source} {docs} />

## Installation

Package depends on [Prism](https://prismjs.com/), [prism-svelte](https://github.com/pngwn/prism-svelte) and [@svelteuidev/core](https://www.npmjs.com/package/@svelteuidev/core).

Install with npm:

<CodeBlock copy>
    npm install @svelteuidev/prism @svelteuidev/core
</CodeBlock>

Install with yarn:

<CodeBlock copy>
    yarn add @svelteuidev/prism @svelteuidev/core
</CodeBlock>

## Usage

Use Prism component to highlight code with SvelteUI theme styles. Component uses PrismJS under the hood and supports light and dark theme. It is used in SvelteUI docs to display all code examples.

<Demo demo={PrismDemos.usage} />

## Line numbers

Set `lineNumbers` prop to display line numbers:

> Due to a bug with the docs, line numbers aren't displayed correctly. When you download the package it will work as intended.

<Demo demo={PrismDemos.lineNumbers} />

## Lines highlight

To highlight individual lines use `highlightLines` prop with the string containing
line numbers.

- e.g. `highlightLines='1-2,4'`

<Demo demo={PrismDemos.lineHighlight} />

## Copy button

To remove copy button set `copy` prop to false.

<Demo demo={PrismDemos.copy} />

> This is only Prism v1. More updates will roll out overtime.
