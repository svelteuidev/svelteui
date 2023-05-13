---
title: Affix
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/affix/
category: 'overlay'
description: 'Render Svelte component inside portal at fixed position'
importCode: "import { Affix } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Affix/Affix.svelte'
docs: 'core/affix.md'
---

<script>
  import { Demo, AffixDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Affix renders an element inside the `target` prop given, with fixed position inside a [Portal]({base}/core/portal) component.

<Demo demo={AffixDemos.usage} />
