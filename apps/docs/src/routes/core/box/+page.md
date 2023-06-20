---
title: Box
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/box/
category: 'misc'
description: 'Add inline styles to any element or component with css prop'
importCode: "import { Box } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Box/Box.svelte'
docs: 'core/box'
---

<script>
  import { Demo, BoxDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Box allows you to use the `css` prop ([like override]({base}/theming/override)) with any element or component. Box itself does not include any styles.

<Demo demo={BoxDemos.usage} />

## Custom component

To use Box with custom component or element set `root` prop to tag name or a svelte component:

<Demo demo={BoxDemos.custom} />
