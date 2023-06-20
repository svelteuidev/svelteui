---
title: Flex
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/flex/
category: 'layout'
description: 'CSS flexbox component'
importCode: "import { Flex } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Flex/Flex.svelte'
docs: 'core/flex'
---

<script lang="ts">
  import { Demo, FlexDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={FlexDemos.usage} />
