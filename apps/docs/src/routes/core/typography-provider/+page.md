---
title: TypographyProvider
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/typography-provider/
category: 'typography'
description: 'Renders HTML content with SvelteUI typography styles'
importCode: "import { TypographyProvider } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/TypographyProvider/TypographyProvider.svelte'
docs: 'core/typography-provider.md'
---

<script>
  import { Demo, TypographyProviderDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

To add SvelteUI typography styles to your HTML content, wrap it in the provider:

<Demo demo={TypographyProviderDemos.usage} />

## All styles

The TypographyProvider includes styles for:

- paragraphs
- headings
- lists
- blockquotes
- tables
- links
- images
- hr
- code and pre

<Demo demo={TypographyProviderDemos.all} />
