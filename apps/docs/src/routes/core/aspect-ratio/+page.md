---
title: AspectRatio
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/aspect-ratio/
category: 'layout'
description: 'Enforce desired width/height ratio'
importCode: "import { AspectRatio } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/AspectRatio/AspectRatio.svelte'
docs: 'core/aspect-ratio'
---

<script lang="ts">
  import { Demo, AspectRatioDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={AspectRatioDemos.usage} />

## Image

AspectRatio works with images and videos too.

<Demo demo={AspectRatioDemos.image} />
