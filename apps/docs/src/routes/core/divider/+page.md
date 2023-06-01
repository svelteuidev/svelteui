---
title: Divider
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/divider/
category: 'misc'
description: 'Horizontal line with optional label or vertical divider'
importCode: "import { Divider } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Divider/Divider.svelte'
docs: 'core/divider'
---

<script>
  import { Demo, DividerDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Divider component renders an horizontal or vertical line. The border style can be customized with the `variant` and `color` prop.

<Demo demo={DividerDemos.usage} />

## With label

It is possible to add a label at the `left`, `right` or `center` of the Divider, by setting the prop `label` and the prop `labelPosition` with the previously mentioned values. It is also possible to override the label props with `labelProps`. This label behaviour is **only available for the horizontal orientation**.

<Demo demo={DividerDemos.label} />

## Sizes

The Divider component has predefined sizes: `xs`, `sm`, `md`, `lg` and `xl`. You can also pass size as a number and it will be set as height in `px`.

<Demo demo={DividerDemos.size} />

## Vertical orientation

Divider can also be used in vertical position. Notice that the wrapper component must have a defined height.

<Demo demo={DividerDemos.vertical} />
