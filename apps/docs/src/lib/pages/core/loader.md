---
title: Loader
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/loader/
category: 'feedback'
description: 'Indicate loading state'
importCode: "import { Loader } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Loader/Loader.svelte'
docs: 'core/loader.md'
---

<script lang="ts">
    import { Demo, LoaderDemos } from '@svelteuidev/demos';
</script>

## Usage

By default, Loader will be rendered with the SvelteUI blue color. You can choose any color defined in the theme or extend your [own theme](theming/create-styles):

<Demo demo={LoaderDemos.usage} />

## Configure default loader

You can configure default Loader to be one of it's three variants, `circle`, `dots` and `bars`:

<Demo demo={LoaderDemos.variants} />

## Color

Loader supports all colors from [theme.colors](theming/default-theme):

<Demo demo={LoaderDemos.colors} />

## Size

The prop `size` controls Loader height or width (depends on Loader variant). Loader has predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set width or height in px:

<Demo demo={LoaderDemos.size} />
