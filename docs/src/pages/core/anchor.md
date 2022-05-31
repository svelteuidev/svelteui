---
title: Anchor
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/anchor/
category: 'navigation'
description: 'Display links with theme styles'
import: "import { Anchor } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Anchor/Anchor.svelte'
docs: 'core/anchor.md'
---

<script>
    import { Demo, AnchorDemos } from '@svelteuidev/demos';
    import { Prism } from '@svelteuidev/prism';
    import { Box } from '@svelteuidev/core';
    import { Heading } from 'components';

    const routing = `
<script>
    import { Link } from "svelte-routing";
    import { Anchor } from '@svelteuidev/core';
<\/script>

<Anchor component={Link} to="/">
    Svelte router link
<\/Anchor>
    `;
</script>

<Heading />

## Usage

Anchor is a wrapper around the [Text](core/text.md) component that uses `a` as the root of the element. It supports the same props as the `Text` component.

<Demo demo={AnchorDemos.usage} />

## Usage with svelte-routing and other libraries

<Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
    <Prism language='svelte' code={routing} />
</Box>