---
title: Center
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/center/
category: 'layout'
description: 'Centers content vertically and horizontally'
importCode: "import { Center } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Center/Center.svelte'
docs: 'core/center'
---

<script>
  import { ArrowLeft } from "radix-icons-svelte";
  import { Demo, CenterDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={CenterDemos.usage} />

## Inline

To use Center with inline elements, set `inline` prop. For example, you can center link icon and label:

<Demo demo={CenterDemos.inline} />
