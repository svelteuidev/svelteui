---
title: Stack
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/stack/
category: 'layout'
description: 'Compose elements and components in vertical flex container'
import: "import { Stack } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Stack/Stack.svelte'
docs: 'core/stack.md'
---

<script>
    import { Demo, StackDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={StackDemos.configurator} />

## Browser support

Stack uses [flexbox gap](https://caniuse.com/flexbox-gap) to add spacing between children.
In older browsers Stack children will not have spacing.
