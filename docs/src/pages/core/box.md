---
title: Box
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/box/
category: 'misc'
description: 'Add inline styles to any element or component with css prop'
import: "import { Box } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Box/Box.svelte'
docs: 'core/box.md'
---

<script>
    import { Box, Code } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const styles = `
     <script>
        import { Box } from '@svelteuidev/core';
    <\/script>
    
    <Box
        css={{
            backgroundColor: '$gray50',
            textAlign: 'center',
            padding: '$20',
            borderRadius: '$md',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '$gray100',
            },
        }}
    >
        Box lets you add inline styles with the css prop
    <\/Box>
    `;

    const custom = `
    <script>
        import { Box, Code } from '@svelteuidev/core';
    <\/script>

    <Box root={Code}>I am a code component now<\/Box>
    <Box root='span'>I am a span tag<\/Box>
    `
</script>

<Heading />

## Usage

Box allows you to use the css prop ([like override](/theming/override)) with any element or component. Box itself does not include any styles.

<Preview cols={1} code={styles}>
    <Box
        css={{
            backgroundColor: '$gray50',
            textAlign: 'center',
            padding: '$20',
            borderRadius: '$md',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '$gray100',
            },
        }}
    >
        Box lets you add inline styles with the css prop
    </Box>

</Preview>

## Custom component

To use Box with custom component or element set `root` prop to tag name or a svelte component:

<Preview cols={2} code={custom}>
    <Box root={Code}>I am a code component now</Box>
    <Box root='span'>I am a span tag</Box>
</Preview>
