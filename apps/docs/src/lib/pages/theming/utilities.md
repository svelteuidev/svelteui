---
title: Utilities
description: SvelteUI provides out of the box Stitches utilities.
docs: 'theming/utilities.md'
---

<script>
    import { Preview } from '$lib/components'
    import { Box } from "@svelteuidev/core";
    import { Prism } from "@svelteuidev/prism";
    import { theme, utils } from '../../data/theming'

    const override = {'& .token.literal-property.property': {color: '$violet400'}}
    const code = `
    <script>
        import { Box } from "@svelteuidev/core";

        const demoStyles = {
            size: '200px',
            linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
            br: '$squared',
        };
    <\/script>

    // Box component doesn't use the css function but instead a css prop
    <Box css={demoStyles} />
    `

    const demoStyles = {
        size: '200px',
        linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
        br: '$squared',
    };
</script>

## Getting Started

SvelteUI provides a set of amazing out of the box [Stitches](https://stitches.dev/docs/utils) utilities. Once
you get used to them, you can save a lot of time writing CSS-in-JS code.

[Stitches](https://stitches.dev/docs/utils) allows you to create a set of utilities that can be used for styling components so
we create a custom set that can be used for styling SvelteUI components or elements.

> SvelteUI doesn't support custom utilities yet, we hope to add this feature in the future.

## Usage

You can use any of the utilities through the `override` prop, the `css` function, or the `createStyles` function.

<Demo demo={ThemeDemos.utilities} />

## Utilities

Here is a complete list of all available utilities and their values:

<Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
  <Prism {override} code={utils} />
</Box>

> Note: If you would like for us to add more utilities, please let us know on [SvelteUI Discussions](https://github.com/svelteuidev/svelteui/discussions), or on [Discord](https://discord.gg/2J2xmzCS79).

## Theme Map

SvelteUI tokens types are automatically mapped to CSS Properties for an improved developer experience.

Here is the detailed list of all the mapped tokens:

<Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
  <Prism {override} code={theme} />
</Box>

> You can read [this](https://stitches.dev/docs/tokens#property-mapping) for more information about `defaultStitchesThemeMap`.

<style>
  :global(article>*:nth-child(3)) {
    margin-top: 13rem !important;
  }
</style>
