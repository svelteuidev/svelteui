---
title: ThemeIcon
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/theme-icon/
category: 'data-display'
description: 'Render icon inside element with theme colors'
importCode: "import { ThemeIcon } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/ThemeIcon/ThemeIcon.svelte'
docs: 'core/theme-icon'
---

<script>
	import { Demo, ThemeIconDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={ThemeIconDemos.configurator} />

## Color

ThemeIcon supports all colors from [theme.colors]({base}/theming/extend-theme/#default-colors), default color is [theme.primaryColor]({base}/theming/extend-theme/#primary-color):

<Demo demo={ThemeIconDemos.colors} />

## Gradient variant

To use gradient as ThemeIcon background:

- set `variant` to `gradient`
- set `gradient` prop
- `color-from` and `color-to` options in `gradient` prop are colors from `theme.colors`
- `deg` is linear gradient degree

<Demo demo={ThemeIconDemos.gradient} />
