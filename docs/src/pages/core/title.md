---
title: Title
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/title/
category: 'typography'
description: 'h1-h6 headings'
import: "import { Title } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Title/Title.svelte'
docs: 'core/title.md'
---

<script lang="ts">
    import { Title } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const title = `
    <script>
        import { Title } from '@svelteuidev/core';
    <\/script>

    <Title order={1}>This is h1 title<\/Title>
    <Title order={2}>This is h2 title<\/Title>
    <Title order={3}>This is h3 title<\/Title>
    <Title order={4}>This is h4 title<\/Title>
    <Title order={5}>This is h5 title<\/Title>
    <Title order={6}>This is h6 title<\/Title>
    `;
    const sharedTitle = `
    <script>
        import { Title } from '@svelteuidev/core';
    <\/script>

    <Title order={1}>This is h1 title<\/Title>
    <Title order={1} variant='gradient'>This is h1 title with a twist<\/Title>
    `;
</script>

<Heading />

## Usage

Use the Title component to render h1-h6 headings with SvelteUI theme styles. By default, Title has no margins and paddings.

Pass `order` prop to render specific element (h1-h6), default order is 1:

<Preview code={title}>
    <Title order={1}>This is h1 title</Title>
    <Title order={2}>This is h2 title</Title>
    <Title order={3}>This is h3 title</Title>
    <Title order={4}>This is h4 title</Title>
    <Title order={5}>This is h5 title</Title>
    <Title order={6}>This is h6 title</Title>
</Preview>

## Shared Props

The Title component takes all the same props as the Text component

<Preview cols={2} code={sharedTitle}>
    <Title order={1}>This is h1 title</Title>
    <Title order={1} variant='gradient'>This is h1 title with a twist</Title>
</Preview>