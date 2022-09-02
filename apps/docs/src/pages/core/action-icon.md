---
title: ActionIcon
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/action-icon/
category: 'inputs'
description: 'Icon button to indicate secondary action'
import: "import { ActionIcon } from '@svelteuidev/core';"
source: 'svelteui-src/components/ActionIcon/ActionIcon.svelte'
docs: 'core/action-icon.md'
---

<script lang="ts">
  import { Demo, ActionIconDemos } from '@svelteuidev/demos';
  import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={ActionIconDemos.configurator} />

## Children

ActionIcon accepts any Svelte node or HTML element as a child. It does not control icon size, you will need to specify it manually on the icon component to match the ActionIcon size.

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

ActionIcon supports all colors from [theme.colors](theming/default-theme):

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

CloseButton is a pre-made ActionIcon with close icon, it will be used in all other components: Popover, Modal, Notification, etc. Component accepts the same props as ActionIcon with additional `iconSize` prop to control icon width and height.

<Demo demo={ActionIconDemos.close} />

## Accessibility

ActionIcon renders a regular `button` element. Set `title` or `aria-label` props for screen reader support:

```svelte
<ActionIcon /> // -> not visible to screen reader
<ActionIcon title="Settings" /> // -> ok
<ActionIcon aria-label="Settings" /> // -> ok
```
