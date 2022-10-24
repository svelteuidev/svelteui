---
title: Center
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/center/
category: 'layout'
description: 'Centers content vertically and horizontally'
import: "import { Center } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Center/Center.svelte'
docs: 'core/center.md'
---

<script>
    import { ArrowLeft } from "radix-icons-svelte";
    import { Heading } from 'components';
    import { Demo, CenterDemos } from '@svelteuidev/demos';
</script>

<Heading />

## Usage

<Demo demo={CenterDemos.usage} />

## Inline

To use center with inline elements set `inline` prop. For example, you can center link icon and label:

<Demo demo={CenterDemos.inline} />
