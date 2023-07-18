---
title: Blockquote
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/code/
category: 'typography'
description: 'Blockquote with icon and citation'
importCode: "import { Blockquote } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Blockquote/Blockquote.svelte'
docs: 'core/code'
---

<script lang="ts">
  import { Demo, BlockquoteDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={BlockquoteDemos.usage} />

## Custom icon

To render a custom icon, use the `icon` prop:

<Demo demo={BlockquoteDemos.icon} />

Set `icon` to `null` to show no icon:

<Demo demo={BlockquoteDemos.noicon} />
