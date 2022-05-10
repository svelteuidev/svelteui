---
title: Loader
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/loader/
category: 'feedback'
description: 'Indicate loading state'
import: "import { Loader } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Loader/Loader.svelte'
docs: 'core/loader.md'
---

<script lang="ts">
    import { Loader, SimpleGrid } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const loader = `
        <script>
            import { Loader } from '@svelteuidev/core';
        <\/script>

        <Loader \/>
    `;
    const variantLoaders = `
        <script>
            import { Loader } from '@svelteuidev/core';
        <\/script>

        <Loader variant="circle" \/>
        <Loader variant="dots" \/>
        <Loader variant="bars" \/>
    `;
    const sizeLoaders = `
        <script>
            import { Loader } from '@svelteuidev/core';
        <\/script>

        <Loader size="lg" \/>
        <Loader size={50} \/>
    `;
</script>

<Heading />

## Usage

By default, loader will be rendered with the SvelteUI blue color. You can choose any color defined in the theme or extend your [own theme](theming/create-styles):

<Preview code={loader}>
    <Loader />
</Preview>

### Configure default loader

You can configure default loader to be one of it's three variants, `circle`, `dots` and `bars`:

<Preview code={variantLoaders}>
    <SimpleGrid cols={3}>
        <Loader variant="circle" />
        <Loader variant="dots" />
        <Loader variant="bars" />
    </SimpleGrid>
</Preview>

### Size

Size controls loader height or width (depends on loader variant). Loader has predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set width or height in px:

<Preview code={sizeLoaders}>
    <Loader size="lg" />
    <Loader size={50} />
</Preview>