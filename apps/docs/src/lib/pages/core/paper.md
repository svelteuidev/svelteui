---
title: Paper
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/paper/
category: 'misc'
description: 'Renders white or dark containers depending on color scheme'
importCode: "import { Paper } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Paper/Paper.svelte'
docs: 'core/paper.md'
---

<script>
    import { Demo, PaperDemos } from '@svelteuidev/demos';
</script>

## Usage

Paper component renders white or dark background with shadow, border-radius and border from theme.

<Demo demo={PaperDemos.configurator} />

## Shadow

You can use the predefined shadows from the [theme](theming/default-theme#shadows), or supply your own:

```svelte
<script>
	import { Paper } from '@svelteuidev/core';
</script>

<Paper shadow="xs" />
<Paper shadow="13px 18px 25px #e5e5e5, 1px 3px 3px #e5e5e5, -1px 3px 3px #e5e5e5" />
```

## Radius

You can use the predefined radius value from the [theme](theming/default-theme#radius) or use a number value that will be set to px:

```svelte
<script>
	import { Paper } from '@svelteuidev/core';
</script>

<Paper radius="lg" />
<Paper radius={10} />
```
