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
    import { Stack, Button, NativeSelect } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const alignList = ['stretch', 'center', 'flex-start', 'flex-end']
    let align = 'stretch'
    const justifyList = ['center', 'flex-start', 'flex-end', 'space-between', 'space-around']
    let justify = 'center'
    const spacingList = ['xs', 'sm', 'md', 'lg', 'xl']
    let spacing = 'md'

    $: stack = `
    <script>
        import { Stack } from '@svelteuidev/core'
    <\/script>

    <Stack align='${align}' spacing='${spacing}' justify='${justify}' override={{ height: 300 }} position>
        <Button variant="outline">1<\/Button>
        <Button variant="outline">2<\/Button>
        <Button variant="outline">3<\/Button>
    <\/Stack>
    `
</script>

<Heading />

## Usage

<Preview cols={1} width={75} code={stack}>
    <Stack align={align} spacing={spacing} justify={justify} override={{ height: 300 }} position>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
    </Stack>
    <NativeSelect data={alignList} bind:value={align} label='Align' />
    <NativeSelect data={justifyList} bind:value={justify} label='Justify' />
    <NativeSelect data={spacingList} bind:value={spacing} label='Spacing' />
</Preview>

## Browser support

Stack uses [flexbox gap](https://caniuse.com/flexbox-gap) to add spacing between children.
In older browsers Stack children will not have spacing.
