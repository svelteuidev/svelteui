---
title: Mark
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/mark/
category: 'typography'
description: 'Highlight text within a larger body of text'
importCode: "import { Mark } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Mark/Mark.svelte'
docs: 'core/mark'
---

<script lang="ts">
  import { Demo, MarkDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Use Mark to highlight part of a text:

<Demo demo={MarkDemos.usage} />

## Colors

<Demo demo={MarkDemos.color} />
