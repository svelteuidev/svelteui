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
    const colorLoaders = `
    <script>
        import { Loader } from '@svelteuidev/core';
    <\/script>

    <Loader color="red" />
    <Loader color="green" />
    <Loader color="teal" />
    <Loader color="gray" />
    <Loader color="blue" />
    <Loader color="yellow" />
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

<Preview cols={1} code={loader}>
    <Loader />
</Preview>

### Configure default loader

You can configure default loader to be one of it's three variants, `circle`, `dots` and `bars`:

<Preview cols={3} code={variantLoaders}>
    <Loader variant="circle" />
    <Loader variant="dots" />
    <Loader variant="bars" />
</Preview>

### Color

Loader supports all colors from [theme.colors](theming/default-theme):

<Preview cols={6} code={colorLoaders}>
    <Loader color="red" />
    <Loader color="green" />
    <Loader color="teal" />
    <Loader color="gray" />
    <Loader color="blue" />
    <Loader color="yellow" />
</Preview>

### Size

Size controls loader height or width (depends on loader variant). Loader has predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set width or height in px:

<Preview cols={2} code={sizeLoaders}>
    <Loader size="lg" />
    <Loader size={50} />
</Preview>
