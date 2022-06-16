---
title: Loader
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/loader/
category: 'feedback'
description: 'Indicate loading state'
import: "import { Loader } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Loader/Loader.svelte'
docs: 'core/loader.md'
---

<script lang="ts">
    import { Demo, LoaderDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

By default, loader will be rendered with the SvelteUI blue color. You can choose any color defined in the theme or extend your [own theme](theming/create-styles):

<Demo demo={LoaderDemos.usage} />

## Configure default loader

You can configure default loader to be one of it's three variants, `circle`, `dots` and `bars`:

<Demo demo={LoaderDemos.variants} />

## Color

Loader supports all colors from [theme.colors](theming/default-theme):

<Demo demo={LoaderDemos.colors} />

## Size

Size controls loader height or width (depends on loader variant). Loader has predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set width or height in px:

<Demo demo={LoaderDemos.size} />
