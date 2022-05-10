---
title: Button
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/button/
category: 'inputs'
description: 'Render button or link with button styles from SvelteUI theme'
import: "import { Button } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Button/Button.svelte'
docs: 'core/button.md'
---

<script lang="ts">
    import { ActionIcon, Button, SimpleGrid } from '@svelteuidev/core';
    import { GithubLogo } from "radix-icons-svelte";
    import { Heading, Preview } from 'components'

    const simpleButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button \/>
        <Button>Click me!<\/Button>
    `;
    const variantButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button color="red" \/>
        <Button variant="outline"\/>
        <Button variant="filled"\/>
    `;
    const gradientButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button variant='gradient'>Default<\/Button>
        <Button variant='gradient' gradient={{from: 'teal', to: 'green', deg: 105}}>Lime Green<\/Button>
        <Button variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>Teal Blue<\/Button>
        <Button variant='gradient' gradient={{from: 'orange', to: 'red', deg: 45}}>Orange red<\/Button>
        <Button variant='gradient' gradient={{from: 'grape', to: 'pink', deg: 35}}>Grape Pink<\/Button>
    `;
    const whiteButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button variant="white">Click Me<\/Button>
        <Button variant="white" color="red">I am red<\/Button>
    `;
    const loadingButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button loading={true}>I am loading<\/Button>
        <Button loading={true} loaderPosition={"right"}>I am loading on the right<\/Button>
    `;
    const customizeButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
            import { GithubLogo } from "radix-icons-svelte";
        <\/script>

        <Button override={{ backgroundColor: 'red' }} variant='outline'>Click Me<\/Button>
        <Button>
            <GithubLogo size={16} \/> I love open source!
        <\/Button>
    `;
    const sizeButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button radius="lg" \/> // -> theme predefined large radius
        <Button radius={10} \/> // -> ( borderRadius: '10px' )
        <Button size="sm" \/> // -> predefined small size
        <Button size="lg" \/> // -> predefined large size
    `;
    const compactButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button compact>Click Me<\/Button>
        <Button variant='outline' compact>Click Me<\/Button>
        <Button variant='default' compact>Click Me<\/Button>
    `;
    const fullsizeButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button fullSize>Click Me<\/Button>
    `;
    const rootButtons = `
        <script>
            import { Button } from '@svelteuidev/core';
        <\/script>

        <Button href="https://github.com/svelteuidev/svelteui">I go to svelteuidev/svelteui<\/Button>
    `;
</script>

<Heading />

## Usage

<Preview code={simpleButtons}>
    <SimpleGrid cols={2}>
        <Button />
        <Button>Click me!</Button>
    </SimpleGrid>
</Preview>

### Variants

Button supports the following variants: `default`, `subtle`, `white`, `gradient`, `filled`, `light` and `outline`. Default Button color is `theme.blue600`, to change color and variant pass color and variant props:

<Preview code={variantButtons}>
    <SimpleGrid cols={3}>
        <Button color="red" />
        <Button variant="outline"/>
        <Button variant="filled"/>
    </SimpleGrid>
</Preview>

#### Gradient variant

To use gradient as Button background:

* set `variant` prop to `gradient`
* set `gradient` prop to `(from: 'color-from', to: 'color-to', deg: 135)`, where
    * `color-from` and `color-to` are color from `theme.colors`
    * `deg` is linear gradient degree

<Preview code={gradientButtons}>
    <SimpleGrid cols={5}>
        <Button variant='gradient'>Default</Button>
        <Button variant='gradient' gradient={{from: 'teal', to: 'green', deg: 105}}>Lime Green</Button>
        <Button variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>Teal Blue</Button>
        <Button variant='gradient' gradient={{from: 'orange', to: 'red', deg: 45}}>Orange red</Button>
        <Button variant='gradient' gradient={{from: 'grape', to: 'pink', deg: 35}}>Grape Pink</Button>
    </SimpleGrid>
</Preview>

#### White variant

White is a variant in which button background color is always white (both in light and dark theme) and `color` is controlled with color prop:

<Preview code={whiteButtons}>
    <SimpleGrid cols={2}>
        <Button variant="white">Click Me</Button>
        <Button variant="white" color="red">I am red</Button>
    </SimpleGrid>
</Preview>

### Loading state

Button supports loading state. In this state [Loader](core/loader) component replaces left or right icon, button becomes disabled and white or dark overlay is added.

You can control loading state and [Loader](core/loader) component with following props:

* `loading` - enable loading state
* `loaderPosition` - Loader position relative to button label, either `right` or `left`
* `loaderProps` - props spread to Loader component, you can choose loader type, size and any other [supported](core/loader) prop

<Preview code={loadingButtons}>
    <SimpleGrid cols={2}>
        <Button loading={true}>I am loading</Button>
        <Button loading={true} loaderPosition={"right"}>I am loading on the right</Button>
    </SimpleGrid>
</Preview>

### Customize

You can change styles of any element in button component with `override` prop to match your design requirements. See [Theming](theming/utilities) for more information about how to customize the styles of the component.

<Preview code={loadingButtons}>
    <SimpleGrid cols={2}>
        <Button override={{ backgroundColor: 'red' }} variant='outline'>Click Me</Button>
        <Button>
            <GithubLogo size={16} /> I love open source!
        </Button>
    </SimpleGrid>
</Preview>

### Size and radius

Control button font-size, height and padding with `size` and border-radius with `radius` props. Both props have predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set radius in px:

<Preview code={sizeButtons}>
    <SimpleGrid cols={4}>
        <Button radius="lg" />
        <Button radius={10} />
        <Button size="sm" />
        <Button size="lg" />
    </SimpleGrid>
</Preview>

### Compact

<Preview code={compactButtons}>
    <SimpleGrid cols={3}>
        <Button compact>Click Me</Button>
        <Button variant='outline' compact>Click Me</Button>
        <Button variant='default' compact>Click Me</Button>
    </SimpleGrid>
</Preview>

### Full width and overflow

Button can take full width of container if you set `fullSize` prop. If button is too large for its container, overflow content will be hidden:

<Preview code={fullsizeButtons}>
     <Button fullSize>Click Me</Button>
</Preview>

### Change root element

You can use `Button` component both as `button` or `a` elements. The component's root element can be changed by adding the `href` prop. Adding the `external` prop will set the target attribute to blank:

<Preview code={rootButtons}>
    <Button href="https://github.com/svelteuidev/svelteui">I go to svelteuidev/svelteui</Button>
</Preview>
