---
title: Text
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/text/
category: 'typography'
description: 'Display text and links with theme styles or gradient'
import: "import { Text } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Text/Text.svelte'
docs: 'core/text.md'
---

<script lang="ts">
    import { Code, Text, Title, Input, InputWrapper } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    let value = 4

    const text = `
    <script>
        import { Text } from '@svelteuidev/core';
    <\/script>

    <Text size="xs">Extra small text<\/Text>
    <Text size="sm">Small text<\/Text>
    <Text size="md">Default text<\/Text>
    <Text size="lg">Large text<\/Text>
    <Text size="xl">Extra large text<\/Text>
    <Text weight={'semibold'}>Semibold<\/Text>
    <Text weight={'bold'}>Bold<\/Text>
    <Text underline>Underlined<\/Text>
    <Text variant="link" root="a" href="https://svelteui.org">Link variant<\/Text>
    <Text color="red">Red text<\/Text>
    <Text color="blue">Blue text<\/Text>
    <Text color="gray">Gray text<\/Text>
    <Text transform="uppercase">Uppercase<\/Text>
    <Text transform="capitalize">capitalized text<\/Text>
    <Text align="center">Aligned to center<\/Text>
    <Text align="right">Aligned to right<\/Text>
    `;
    const dimmedText = `
    <script>
        import { Text } from '@svelteuidev/core';
    <\/script>

    <Text color="dimmed">Dimmed text<\/Text>
    `;
    const gradientText = `
    <script>
        import { Text } from '@svelteuidev/core';
    <\/script>

    <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={'bold'}
    >
        Indigo cyan gradient
    <\/Text>
    `;
    const lineclampText = `
    <script>
        import { Text } from '@svelteuidev/core';
    <\/script>

    <Text lineClamp={4}>
        From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines.
    <\/Text>
    `;
    const inheritText = `
    <script>
        import { Text, Title } from '@svelteuidev/core';
    <\/script>

    <Title order={3}>
        Highlight{' '}
        <Text color="blue" inherit component="span">
            something
        <\/Text>
        in title
    <\/Title>
    `;
    const customText = `
    <script>
        import { Code, Text } from '@svelteuidev/core';
    <\/script>

    <Text root="a">This is a anchor now<\/Text>
    <Text root="p">This is a paragraph<\/Text>
    <Text root={Code}>This is a Code Component<\/Text>
    `;
</script>

<Heading />

## Usage

Use Text component to display text and links with theme styles. Control Text styles with props:

- **size** - font-size from `theme.fontSizes` - `xs`, `sm`, `md`, `lg`, `xl`
- **color** - color from `theme.colors` - red, green, blue, etc.
- **weight** - font-weight property - `thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold` or a number.
- **underline** - underline text
- **transform** - text-transform property - uppercase, lowercase, capitalize
- **align** - text-align property
- **variant** - text or link predefined styles
- **inline** - sets the line-height to 1

<Preview cols={1} code={text}>
    <Text size="xs">Extra small text</Text>
    <Text size="sm">Small text</Text>
    <Text size="md">Default text</Text>
    <Text size="lg">Large text</Text>
    <Text size="xl">Extra large text</Text>
    <Text weight={'semibold'}>Semibold</Text>
    <Text weight={'bold'}>Bold</Text>
    <Text underline>Underlined</Text>
    <Text variant="link" root="a" href="https://svelteui.org">Link variant</Text>
    <Text color="red">Red text</Text>
    <Text color="blue">Blue text</Text>
    <Text color="gray">Gray text</Text>
    <Text transform="uppercase">Uppercase</Text>
    <Text transform="capitalize">capitalized text</Text>
    <Text align="center">Aligned to center</Text>
    <Text align="right">Aligned to right</Text>
</Preview>

## Dimmed

Text supports special `dimmed` value in color prop. It sets color to `theme.colors["dark200"].value` in dark theme and to `theme.colors["gray600"].value` in light:

<Preview cols={1} code={dimmedText}>
    <Text color="dimmed">Dimmed text</Text>
</Preview>

## Gradient variant

To use gradient as Text color:

- set `variant` to `gradient`
- `color-from` and `color-to` are color from `theme.colors`
- `deg` is linear gradient degree

<Preview cols={1} code={gradientText}>
    <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={'bold'}
    >
        Indigo cyan gradient
    </Text>
</Preview>

## Line Clamp

Specify maximum amount of lines with `lineClamp` prop. This option uses [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) CSS property ([caniuse](https://caniuse.com/css-line-clamp)). Note that padding-bottom cannot be set on text element:

<Preview cols={1} code={lineclampText}>
    <div style="width: 400px; margin: 10px 0px 10px 0px;">
        <Text lineClamp={value}>
            From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines.
        </Text>
    </div>
    <InputWrapper error={value.length < 1 || value < 0 ? 'Value must be 1 or more' : null} label='Line Clamp'>
        <Input bind:value />
    </InputWrapper>
</Preview>

## Inherit Styles

Text always applies font-size, font-family and line-height styles, but in some cases this is not a desired behavior. To force Text to inherit parent styles set `inherit` prop. For example, highlight part of [Title](core/title):

<Preview cols={1} code={inheritText}>
    <Title order={3}>
        Highlight{' '}
        <Text color="blue" inherit component="span">
            something
        </Text>
        in title
    </Title>
</Preview>

## Custom component

By default, text is rendered as div element, to change it by set `root` prop:

<Preview cols={3} code={customText}>
    <Text root="a">This is a anchor now</Text>
    <Text root="p">This is a paragraph</Text>
    <Text root={Code}>This is a Code Component</Text>
</Preview>
