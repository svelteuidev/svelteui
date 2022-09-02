---
title: ThemeIcon
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/theme-icon/
category: 'data-display'
description: 'Render icon inside element with theme colors'
import: "import { ThemeIcon } from '@svelteuidev/core';"
source: 'svelteui-src/components/ThemeIcon/ThemeIcon.svelte'
docs: 'core/theme-icon.md'
---

<script>
	import { Demo, ThemeIconDemos } from '@svelteuidev/demos';
  	import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={ThemeIconDemos.configurator} />

## Color

ThemeIcon supports all colors from [theme.colors](/theming/extend-theme/#default-colors), default color is [theme.primaryColor](/theming/extend-theme/#primary-color):

<Demo demo={ThemeIconDemos.colors} />

## Gradient variant

To use gradient as ThemeIcon background:

- set `variant` to `gradient`
- `color-from` and `color-to` are colors from `theme.colors`
- `deg` is linear gradient deg

<Demo demo={ThemeIconDemos.gradient} />
