---
title: Utilities
description: SvelteUI provides out of the box Stitches utilities.
docs: 'theming/utilities.md'
---

<script>
    import { CodeBlock, Heading, Preview } from 'components'
    import { SimpleGrid, Center } from "@svelteuidev/core";
    import { Prism } from "@svelteuidev/prism";
    import { theme, utils } from '../../data/theming'

    const override = {'& .token.literal-property.property': {color: '$violet400'}}
    const code = `
    <SimpleGrid
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' }
        ]}
        cols={3}
    >
        {#each [...Array(5).keys()] as _, i}
            <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}<\/Center>
        {/each}
    <\/SimpleGrid>
    `
</script>

<Heading />

SvelteUI provides a set of amazing out of the box [Stitches](https://stitches.dev/docs/utils) utilities. Once
you get used to them, you can save a lot of time writing css-in-js code.

[Stitches](https://stitches.dev/docs/utils) allows you to create a set of utilities that can be used for styling components so
we create a custom set that can be used for styling SvelteUI components or elements.

> SvelteUI doesn't support custom utilities yet, we hope to add this feature in the future.

### Usage

You can use any of the utilities through the `override` prop or using the `css` function.

<Preview {code}>
    <SimpleGrid
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' }
        ]}
        cols={3}
    >
        {#each [...Array(5).keys()] as _, i}
            <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}</Center>
        {/each}
    </SimpleGrid>
</Preview>

### Utilities

<Prism {override} code={utils} />

> Note: If you would like for us to add more utilities, please let us know on [SvelteUI Discussions](https://github.com/svelteuidev/svelteui/discussions), or on [Discord](https://discord.gg/2J2xmzCS79).

### Theme Map

SvelteUI tokens types are automatically mapped to CSS Properties for an improved developer experience.

Here is the detailed list of all the mapped tokens:

<Prism {override} code={theme} />

> You can read [this](https://stitches.dev/docs/tokens#property-mapping) for more information about `defaultStitchesThemeMap`.
