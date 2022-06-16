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
    import { Demo, TextDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
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

<Demo demo={TextDemos.usage} />

## Dimmed

Text supports special `dimmed` value in color prop. It sets color to `theme.colors["dark200"].value` in dark theme and to `theme.colors["gray600"].value` in light:

<Demo demo={TextDemos.dimmed} />

## Gradient variant

To use gradient as Text color:

- set `variant` to `gradient`
- `color-from` and `color-to` are color from `theme.colors`
- `deg` is linear gradient degree

<Demo demo={TextDemos.gradient} />

## Line Clamp

Specify maximum amount of lines with `lineClamp` prop. This option uses [-webkit-line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) CSS property ([caniuse](https://caniuse.com/css-line-clamp)). Note that padding-bottom cannot be set on text element:

<Demo demo={TextDemos.clamp} />

## Inherit Styles

Text always applies font-size, font-family and line-height styles, but in some cases this is not a desired behavior. To force Text to inherit parent styles set `inherit` prop. For example, highlight part of [Title](core/title):

<Demo demo={TextDemos.inherit} />

## Custom component

By default, text is rendered as div element, to change it by set `root` prop:

<Demo demo={TextDemos.custom} />
