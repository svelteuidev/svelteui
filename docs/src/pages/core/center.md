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

    const center = `
    <script>
        import { Center, Box } from '@svelteuidev/core';
    <\/script>
    
    <Center>
        This will only render on the Browser.
    <\/Center>
    `
    const centerInline = `
    <script>
        import { Center, Box } from '@svelteuidev/core';
    <\/script>
    
    <Center>
        This will only render on the Browser.
    <\/Center>
    `
</script>

<Heading />

## Usage

<Preview cols={1} code={center}>
    <Center override={{ width: 400, height: 200, bc: 'AliceBlue' }}>
        <Box css={{bc: 'rgb(208, 235, 255)'}}>All elements inside Center are centered</Box>
    </Center>
</Preview>

## Inline

To use center with inline elements set `inline` prop. For example, you can center link icon and label:

<Preview cols={1} code={centerInline}>
    <Box css={{color: '$blue600'}} root='a' href="/" target="_blank">
        <Center inline>
            <ArrowLeft size={14} />
            <Box ml={5}>Back to the homepage</Box>
        </Center>
    </Box>
</Preview>
