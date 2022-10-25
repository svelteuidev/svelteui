---
title: Menu
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/menu/
category: 'overlay'
description: 'Combine a list of secondary actions into single interactive area'
import: "import { Menu } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Menu/Menu.svelte'
docs: 'core/menu.md'
---

<script>
	import { Demo, MenuDemos } from '@svelteuidev/demos';
  	import { Heading } from 'components';
</script>

<Heading />

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

<Menu {opened} on:open={onOpen} onClose={onClose}>
    <!-- ... -->
</Menu>
```

## Show menu on hover

To show meny on hover set the following props:
- `trigger` to `hover`
- `delay` to number in ms (defaults to 0)

In this case, menu will use `mouseenter` and `focus` events instead of `click`:

<Demo demo={MenuDemos.hover} />

## Menu.Item component

`Menu.Item` renders a  button and accepts following props:

- `icon` – icon on the left
- `disabled` – disables item
- `...others` – Menu.Item produces a button element, all other props will be spread to it

The right section of `Menu.Item` can be customized with the slot `rightSection`.

```svelte
<script lang="ts">
	import { Menu, Text } from '@svelteuidev/core';
    import { Gear } from 'radix-icons-svelte';
</script>

<Menu>
    <Menu.Item icon={Gear} on:click={() => console.log('Hi!')}>
        <svelte:fragment slot='rightSection'>
            <Text size="xs" color="dimmed">⌘K</Text>
        </svelte:fragment>
        Settings
    </Menu.Item>
</Menu>
```

## Disabled item

<Demo demo={MenuDemos.disabled} />

## Custom control

It is possible to configure the control component by using the `control` slot.

<Demo demo={MenuDemos.control} />

## Change menu position

Menu is rendered inside [Portal](core/portal) and its position is controlled with the following props:

- `position` – left, right, bottom, top
- `placement` – start, center, end
- `gutter` – spacing between menu body and target element in px
- `withArrow` – displays arrow, arrow position is calculated by `position` and `placement` props

<Demo demo={MenuDemos.position} />

## Change transition

Menu supports the same transition as [Popper](core/popper). You can customize transition, its parameters or even provide a custom transition.

<Demo demo={MenuDemos.transition} />

## Size and shadow

You can use predefined shadows defined in [theme shadows](theming/default-theme#shadows) or your own:

<Demo demo={MenuDemos.size} />

## Custom component as Menu.Item

By default, menu items render as button, to change that set `root` prop on `Menu.Item` component:

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

It is possible to control the state of the menu outside the component.

```svelte
<script>
    let element;
</script>

<Button on:click={() => element.toggle()}>Click to toggle the menu</Button>
<Menu bind:element>
    ...
</Menu>
```

## Accessibility and usability

To make Menu more accessible for users with screen readers it is require to set the prop `menuButtonLabel`, specially when using a control that does not include text, for example, the default one.

Menu behavior and properties:

- When menu is opened, focus is trapped inside
- When menu is closed, focus is moved back to menu control
- Focus inside menu is controlled with up and down arrows, tab key has no effect
- By default, when menu item is clicked, menu closes, change it with closeOnItemClick prop
- Menu is closed when user clicks outside or presses escape
- Menu control has `aria-haspopup`, `aria-expanded`, `aria-controls` and `aria-label` attributes. `aria-label` is defined by the `menuButtonLabel` prop
- Menu body has `menu` role, aria`-orientation` is always set to vertical
- Menu item has `menuitem` role
