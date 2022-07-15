---
title: Tabs
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/tabs/
category: 'navigation'
description: 'Display links with theme styles'
import: "import { Tabs } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Tabs/Tabs.svelte'
docs: 'core/tabs.md'
---

<script>
    import { Demo, TabsDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={TabsDemos.usage} />

## Controlled Tabs

`Tabs.Tab` accepts an optional `tabKey` prop, which can be retrieved on the `change` callback if given:

```svelte
<script>
    import { Tabs } from '@svelteuidev/core';

    let active = 0;

    function onActiveChange(event) {
        const { index, key } = event.detail;
        console.log("Tab active", index, key);
    }
</script>

<Tabs bind:active={active} on:change={onActiveChange}>
    <Tabs.Tab label="First" tabKey='first'>First tab content</Tabs.Tab>
    <Tabs.Tab label="Second" tabKey='second'>Second tab content</Tabs.Tab>
    <Tabs.Tab label="Third" tabKey='third'>Third tab content</Tabs.Tab>
</Tabs>
```

## Tabs with icons

Add any Svelte component as icon by setting the `icon` prop on the `Tabs.Tab` component. If `icon` prop is set, it is not necessary to pass `label`:

<Demo demo={TabsDemos.icons} />

## Change colors

Change the color of each individual tab by setting the `color` prop on the `Tabs.Tab` component, or change the color of all the tabs by setting the `color` prop on the `Tabs` component. The color that you pass to these components should be defined in [theme.colors](theming/default-theme).

<Demo demo={TabsDemos.colors} />

## Tabs position

Tabs positioning is controlled with the `grow` and `position` props. If the `grow` property is set to 'true', tabs will take 100% of the available space and `position` property is ignored.

<Demo demo={TabsDemos.position} />

## Tab component props

In addition to the `icon` and `label` props shown before, the `Tabs.Tab` component accepts `color`, `disabled` and any other props from a regular button (e.g. `style`, `title`, `aria-`, `data-`). The `color` prop will override the `color` defined in the `Tabs` component.

<Demo demo={TabsDemos.component} />

## Add your styles

You can change styles of any element in the button component with the `override` prop, to match your design requirements. To remove all default styles set `variant` prop to `unstyled`. To learn more about overriding styles, see the [theming override section](theming/override):

<Demo demo={TabsDemos.override} />

## Accessibility and usability

Tabs component follows [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html) recommendations on accessibility:

- Use right and left arrow keys to change tabs when orientation is horizontal
- Use down and up arrow keys to change tabs when orientation is vertical
- Only selected tab control can be focused
- All elements have correct roles: tab, tablist and tabpanel
- aria-orientation is set based off orientation prop (default is horizontal)
