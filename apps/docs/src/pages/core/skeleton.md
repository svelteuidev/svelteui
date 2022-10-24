---
title: Skeleton
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/skeleton/
category: 'feedback'
description: 'Indicate content loading state'
import: "import { Skeleton } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Skeleton/Skeleton.svelte'
docs: 'core/skeleton.md'
---

<script>
    import { Demo, SkeletonDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Use Skeleton to create a placeholder for loading content. The component supports the following props:

- `height` – height in px (number) or string for other CSS values
- `width` – width in px (number) or string for other CSS values
- `radius` – value from the theme or number to set `border-radius` in px
- `circle` – if true `width`, `height` and `border-radius` will equal to value specified in height prop
- `animate` – true by default, controls animation

<Demo demo={SkeletonDemos.configurator} />

## With content

If you want to indicate loading state of content that is already on the page, you can wrap it with Skeleton and control the loading overlay visibility with the `visible` prop:

<Demo demo={SkeletonDemos.content} />
