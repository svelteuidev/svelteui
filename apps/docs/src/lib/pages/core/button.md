---
title: Button
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/button/
category: 'inputs'
description: 'Render button or link with button styles from SvelteUI theme'
importCode: "import { Button } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Button/Button.svelte'
docs: 'core/button.md'
---

<script lang="ts">
    import { Demo, ButtonDemos } from '@svelteuidev/demos'
</script>

## Usage

<Demo demo={ButtonDemos.configurator} />

## Variants

Button supports the following variants: `default`, `subtle`, `white`, `gradient`, `filled`, `light` and `outline`. Default Button color is `theme.blue600`. To change the color and variant, pass `color` and `variant` props:

<Demo demo={ButtonDemos.variants} />

## Gradient variant

To use gradient as Button background:

- set `variant` prop to `gradient`
- set `gradient` prop
- `color-from` and `color-to` options in `gradient` are colors from `theme.colors`
- `deg` is linear gradient degree

<Demo demo={ButtonDemos.gradient} />

## White variant

White is a variant in which the button background color is always white (both in light and dark theme) and `color` is controlled with color prop:

<Demo demo={ButtonDemos.whiteConfigurator} />

## Ripple effect

Button supports a ripple prop that gives the button a Material UI ripple effect. It expands outward from the point it was clicked.

<Demo demo={ButtonDemos.ripple} />

## Loading state

Button supports loading state. In this state [Loader](core/loader) component replaces left or right icon, button becomes disabled and white or dark overlay is added.

You can control loading state and [Loader](core/loader) component with following props:

- `loading` - enable loading state
- `loaderPosition` - Loader position relative to button label, either `right` or `left`
- `loaderProps` - props spread to Loader component, you can choose loader type, size and any other [supported](core/loader) prop

<Demo demo={ButtonDemos.loadingConfigurator} />

## Icons

The Button component has two slots to render an Icon, either on the left side or the right side. Wrap your Icon with the Button component, then add the `slot='leftIcon'` or `slot='rightIcon'` prop to your Icon.

<Demo demo={ButtonDemos.icons} />

## Customize

You can change styles of any element in button component with `override` prop to match your design requirements. See [Theming](theming/override) for more information about how to customize the styles of the component.

<Demo demo={ButtonDemos.customize} />

## Size and radius

Control button font-size, height and padding with `size` and border-radius with `radius` props. Both props have predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set radius in px:

```tsx
<Button radius="lg" /> // -> theme predefined large radius
<Button radius={10} /> // -> { borderRadius: '10px' }
<Button size="sm" /> // -> predefined small size
<Button size={70} /> // -> { height: '70px', padding: '0px 70px' }
```

## Compact

<Demo demo={ButtonDemos.compact} />

## Full width and overflow

Button can take full width of container if you set `fullSize` prop. If the button is too large for its container, overflow content will be hidden:

<Demo demo={ButtonDemos.overflow} />

## Change root element

You can use `Button` component both as `button` or `a` elements. The component's root element can be changed by adding the `href` prop. Adding the `external` prop will set the target attribute to blank:

<Demo demo={ButtonDemos.root} />
