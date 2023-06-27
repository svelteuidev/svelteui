---
title: Menu
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/menu/
category: 'overlay'
description: 'Combine a list of secondary actions into single interactive area'
importCode: "import { Menu } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Menu/Menu.svelte'
docs: 'core/menu'
---

<script>
	import { Demo, MenuDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
    import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={MenuDemos.usage} />

## Controlled

```svelte
<script lang="ts">
	import { Menu } from '@svelteuidev/core';

	let opened = false;

	function onOpen() {}
	function onClose() {}
</script>

<Menu {opened} on:open={onOpen} {onClose}>
	<!-- ... -->
</Menu>
```

## Show menu on hover

To show menu on hover set the following props:

- `trigger` to `hover`
- `delay` to number in ms (defaults to 0)

In this case, menu will use `mouseenter` and `focus` events instead of `click`:

<Demo demo={MenuDemos.hover} />

## Menu.Item component

`Menu.Item` renders a button and accepts following props:

- `icon` – icon on the left
- `disabled` – disables item
- `...others` – `Menu.Item` produces a button element, all other props will be spread to it

The right section of `Menu.Item` can be customized with the slot `rightSection`.

```svelte
<script lang="ts">
	import { Menu, Text } from '@svelteuidev/core';
	import { Gear } from 'radix-icons-svelte';
</script>

<Menu>
	<Menu.Item icon={Gear} on:click={() => console.log('Hi!')}>
		<svelte:fragment slot="rightSection">
			<Text size="xs" color="dimmed">⌘K</Text>
		</svelte:fragment>
		Settings
	</Menu.Item>
</Menu>
```

## Menu.Label component

`Menu.Label` renders a text element. This element does not cause the menu to close on click, so it can be useful to wrap elements that should keep focus, like inputs.

```svelte
<script lang="ts">
	import { Menu, Text } from '@svelteuidev/core';
	import { Gear } from 'radix-icons-svelte';
</script>

<Menu>
	<Menu.Item icon={Gear}>Settings</Menu.Item>
	<Menu.Item icon={ChatBubble}>Messages</Menu.Item>
	<Menu.Item icon={Camera}>Gallery</Menu.Item>
	<Menu.Label><TextInput placeholder="Search" /></Menu.Label>
</Menu>
```

## Disabled item

<Demo demo={MenuDemos.disabled} />

## Custom control

It is possible to configure the control component by using the `control` slot.

<Demo demo={MenuDemos.control} />

## Change menu position

Menu is rendered inside [Portal]({base}/core/portal) and its position is controlled with the following props:

- `position` – left, right, bottom, top
- `placement` – start, center, end
- `gutter` – spacing between menu body and target element in px
- `withArrow` – displays arrow, arrow position is calculated by `position` and `placement` props

<Demo demo={MenuDemos.position} />

## Change transition

Menu supports the same transition as [Popper]({base}/core/popper). You can customize transition, its parameters or even provide a custom transition.

<Demo demo={MenuDemos.transition} />

## Size and shadow

You can use predefined shadows defined in [theme.shadows]({base}/theming/default-theme#shadows) or your own:

<Demo demo={MenuDemos.size} />

## Custom component as Menu.Item

By default,`Menu.Item` renders as buttons. To change that, set `root` prop on `Menu.Item` component:

```svelte
// Regular anchor as Menu.Item root element
<Menu.Item root="a" href="https://svelteui.org" target="_blank" />

// Svelte component as Menu.Item root element
<Menu.Item root={CustomComponent} />
```

<Demo demo={MenuDemos.custom} />

## Add your styles

You can change styles of any element in the button component with the `override` prop or by setting a class name. For example, you can change the hovered item color:

<Demo demo={MenuDemos.styles} />

## Control menu state externally

It is possible to control the state of the Menu outside the component by binding `bind:this` of `Menu` and then accessing exported methods. There are 3 exported methods:

- `open()`, opens the menu
- `close()`, closes the menu
- `toggles()`, toggle the menu state

<Demo demo={MenuDemos.outside} />

## Accessibility and usability

To make Menu more accessible for users with screen readers it is require to set the prop `menuButtonLabel`, specially when using a control that does not include text, for example, the default one.

Menu behavior and properties:

- When Menu is opened, focus is trapped inside
- When Menu is closed, focus is moved back to Menu control
- Focus inside Menu is controlled with up and down arrows, tab key has no effect
- By default, when Menu.Item is clicked, Menu closes, change it with `closeOnItemClick` prop
- Menu is closed when user clicks outside or presses escape
- Menu control has `aria-haspopup`, `aria-expanded`, `aria-controls` and `aria-label` attributes. `aria-label` is defined by the `menuButtonLabel` prop
- Menu body has `menu` role, aria `-orientation` is always set to vertical
- Menu item has `menuitem` role
