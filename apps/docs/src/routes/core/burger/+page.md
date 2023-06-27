---
title: Burger
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/burger/
category: 'navigation'
description: 'Display links with theme styles'
importCode: "import { Burger } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Burger/Burger.svelte'
docs: 'core/burger'
---

<script>
    import { Demo, BurgerDemos } from '@svelteuidev/demos';
    import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

The Burger component renders an open/close menu button. Use `opened` prop to control the Burger state. If the `opened` prop is set, the cross icon will be rendered, otherwise the burger is shown:

<Demo demo={BurgerDemos.usage} />

## Color

Burger default colors are `theme.black` for light color scheme and `theme.white` for dark color scheme. You can change it to any color value by setting `color` prop:

<Demo demo={BurgerDemos.color} />

## Size

Burger has predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set width and height in px:

<Demo demo={BurgerDemos.size} />

## Accessibility

Burger renders a regular button element. Include `aria-label` prop for screen reader support.

```svelte
// Set aria-label to announce control with screen reader
<Burger aria-label="Open navigation" />
```
