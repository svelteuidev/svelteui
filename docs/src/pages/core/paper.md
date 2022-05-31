---
title: Paper
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/paper/
category: 'misc'
description: 'Renders white or dark containers depending on color scheme'
import: "import { Paper } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Paper/Paper.svelte'
docs: 'core/paper.md'
---

<script>
    import { Demo, PaperDemos } from '@svelteuidev/demos';
    import { Prism } from '@svelteuidev/prism';
    import { Box } from '@svelteuidev/core';
    import { Heading } from 'components';

    const shadows = `
<script>
    import { Paper } from '@svelteuidev/core';
<\/script>

<Paper shadow="xs" \/>
<Paper shadow="13px 18px 25px #e5e5e5, 1px 3px 3px #e5e5e5, -1px 3px 3px #e5e5e5" \/>
    `;

    const radius = `
<script>
    import { Paper } from '@svelteuidev/core';
<\/script>

<Paper radius="lg" \/>
<Paper radius={10} \/>
    `;
</script>

<Heading />

## Usage

Paper component renders white or dark background with shadow, border-radius and border from theme.

<Demo demo={PaperDemos.configurator} />

## Shadow

You can use the predefined shadows from the [theme](theming/default-theme#shadows) or you own:

<Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
    <Prism language='svelte' code={shadows} />
</Box>

## Radius

You can use the predefined radius value from the [theme](theming/default-theme#radius) or use a number value that will be set to px:

<Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
    <Prism language='svelte' code={radius} />
</Box>
