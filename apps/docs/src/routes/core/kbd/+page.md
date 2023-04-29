---
title: Kbd
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/kbd/
category: 'data-display'
description: 'Display keyboard button or keys combination'
importCode: "import { Kbd } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Kbd/Kbd.svelte'
docs: 'core/kbd.md'
---

<script>
  import { Demo, KbdDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={KbdDemos.usage} />

## Example

Usage example with [TextInput]({base}/core/text-input) component – `Kbd` is used to describe a keyboard shortcut:

<Demo demo={KbdDemos.example} />
