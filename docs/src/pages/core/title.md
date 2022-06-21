---
title: Title
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/title/
category: 'typography'
description: 'h1-h6 headings'
import: "import { Title } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Title/Title.svelte'
docs: 'core/title.md'
---

<script lang="ts">
   import { Demo, TitleDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Use the Title component to render h1-h6 headings with SvelteUI theme styles. By default, Title has no margins and paddings.

Pass `order` prop to render specific element (h1-h6), default order is 1:

<Demo demo={TitleDemos.usage} />

## Shared Props

The Title component takes all the same props as the Text component.

<Demo demo={TitleDemos.shared} />
