---
title: Center
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/center/
category: 'inputs'
description: 'Centers content vertically and horizontally'
import: "import { Center } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Center/Center.svelte'
docs: 'core/center.md'
---

<script>
    import { Center, Box } from '@svelteuidev/core';
    import { ArrowLeft } from "radix-icons-svelte";
    import { Heading, Preview } from 'components';
    import { Demo, CenterDemos } from '@svelteuidev/demos'

    const center = `
    <script>
        import { Center, Box } from '@svelteuidev/core';
    <\/script>
    
    <Center>
        All elements inside Center are centered
    <\/Center>
    `
    const centerInline = `
    <script>
        import { Center, Box } from '@svelteuidev/core';
    <\/script>
    
    <Box css={{color: '$blue600'}} root='a' href="/" target="_blank">
        <Center inline>
            <ArrowLeft size={14} />
            <Box ml={5}>Back to the homepage<\/Box>
        <\/Center>
    <\/Box>
    `
</script>

<Heading />

## Usage

<Demo demo={CenterDemos.usage} />

## Inline

To use center with inline elements set `inline` prop. For example, you can center link icon and label:

<Demo demo={CenterDemos.inline} />
