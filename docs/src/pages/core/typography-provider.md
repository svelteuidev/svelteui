---
title: TypographyProvider
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/typography-provider/
category: 'typography'
description: 'Renders HTML content with SvelteUI typography styles'
import: "import { TypographyProvider } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/TypographyProvider/TypographyProvider.svelte'
docs: 'core/typography-provider.md'
---

<script>
    import { Demo, TypographyProviderDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

To add SvelteUI typography styles to your html content, wrap it in the provider:

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
