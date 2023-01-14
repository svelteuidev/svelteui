---
title: Stack
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/stack/
category: 'layout'
description: 'Compose elements and components in vertical flex container'
importCode: "import { Stack } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Stack/Stack.svelte'
docs: 'core/stack.md'
---

<script>
    import { Demo, StackDemos } from '@svelteuidev/demos';
</script>

## Usage

<Demo demo={StackDemos.configurator} />

## Browser support

Stack uses [flexbox gap](https://caniuse.com/flexbox-gap) to add spacing between children.
In older browsers Stack children will not have spacing.
