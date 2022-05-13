---
title: ThemeIcon
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/theme-icon/
category: 'data-display'
description: 'Render icon inside element with theme colors'
import: "import { ThemeIcon } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/ThemeIcon/ThemeIcon.svelte'
docs: 'core/theme-icon.md'
---

<script>
	import { ThemeIcon } from '@svelteuidev/core';
	import { Gear } from 'radix-icons-svelte';
	import { Heading, Preview, colors } from 'components';

	const variants = ['filled', 'light', 'outline'];

	const themeIcon = `
    <script>
        import { ThemeIcon } from '@svelteuidev/core'
    <\/script>
    `;
</script>

<Heading />

## Usage

<Preview>
	<ThemeIcon variant="light" radius="xl" size="xl" color="cyan">
		<Gear />
	</ThemeIcon>
	<ThemeIcon variant="outline" radius="xs" color="red">
		<Gear />
	</ThemeIcon>
	<ThemeIcon radius="md" size="lg" color="yellow">
		<Gear />
	</ThemeIcon>
</Preview>

## Color ThemeIcon supports all colors from [theme.colors](/theming/extend-theme/#default-colors),
default color is [theme.primaryColor](/theming/extend-theme/#primary-color):

<Preview cols={14}>
	{#each colors as color}
        <ThemeIcon color={color}>
            <Gear />
        </ThemeIcon>
	{/each}
</Preview>

## Gradient variant To use gradient as ThemeIcon background: - set `variant` to `gradient` -
`color-from` and `color-to` are color from `theme.colors` - `deg` is linear gradient deg

<Preview cols={5}>
	<ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
		<Gear size={20} />
	</ThemeIcon>
	<ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
		<Gear size={20} />
	</ThemeIcon>
	<ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
		<Gear size={20} />
	</ThemeIcon>
	<ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 45 }}>
		<Gear size={20} />
	</ThemeIcon>
	<ThemeIcon size="lg" variant="gradient" gradient={{ from: 'green', to: 'pink', deg: 35 }}>
		<Gear size={20} />
	</ThemeIcon>
</Preview>
