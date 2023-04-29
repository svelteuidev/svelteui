---
title: ActionIcon
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/action-icon/
category: 'inputs'
description: 'Icon button to indicate secondary action'
importCode: "import { ActionIcon } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/ActionIcon/ActionIcon.svelte'
docs: 'core/action-icon.md'
---

<script lang="ts">
  import { Demo, ActionIconDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={ActionIconDemos.configurator} />

## Children

ActionIcon accepts any Svelte node or HTML element as a child. It does not control icon size, so you will need to specify it manually on the icon component to match the ActionIcon size.

```svelte
<script>
	import { ActionIcon } from '@svelteuidev/core';
	import { Rocket } from 'radix-icons-svelte';
</script>

<ActionIcon>
	<Rocket size={16} />
</ActionIcon>
```

## Variants

ActionIcon has 6 variants: `hover`, `default`, `transparent`, `filled`, `light` and `outline`:

<Demo demo={ActionIconDemos.variants} />

## Color

ActionIcon supports all colors from [theme.colors]({base}/theming/default-theme):

```svelte
<ActionIcon color="red" />
<ActionIcon color="blue" />
```

<Demo demo={ActionIconDemos.colors} />

## Size and radius

Control button width and height with `size` and border-radius with `radius`. Both props have predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, use a number to set radius or size in px:

```svelte
<ActionIcon radius="lg" /> // -> theme predefined large radius
<ActionIcon radius={10} /> // -> { borderRadius: '10px' }

<ActionIcon size="sm" /> // -> predefined small size
<ActionIcon size={50} /> // -> { width: '50px', height: '50px' }
```

## Close button

CloseButton is a pre-made ActionIcon with close icon, it will be used in all other components: Popover (not implemented yet), [Modal]({base}/core/modal), [Notification]({base}/core/notification), etc. Component accepts the same props as ActionIcon with additional `iconSize` prop to control icon width and height.

<Demo demo={ActionIconDemos.close} />

## Accessibility

ActionIcon renders a regular `button` element. Set `title` or `aria-label` props for screen reader support:

```svelte
<ActionIcon /> // -> not visible to screen reader
<ActionIcon title="Settings" /> // -> ok
<ActionIcon aria-label="Settings" /> // -> ok
```
