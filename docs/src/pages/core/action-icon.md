---
title: ActionIcon
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/action-icon/
category: 'inputs'
description: 'Icon button to indicate secondary action'
import: "import { ActionIcon } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/ActionIcon/ActionIcon.svelte'
docs: 'core/action-icon.md'
---

<script lang="ts">
    import { ActionIcon, CloseButton, SimpleGrid } from '@svelteuidev/core';
    import { GithubLogo } from "radix-icons-svelte";
    import { Heading, Preview } from 'components';

    const action = `
    <script>
        import { ActionIcon } from '@svelteuidev/core';
        import { GithubLogo } from "radix-icons-svelte";
    <\/script>

    <ActionIcon><GithubLogo size={16} \/><\/ActionIcon>
    `;
    const variantActions = `
    <script>
        import { ActionIcon } from '@svelteuidev/core';
        import { GithubLogo } from "radix-icons-svelte";
    <\/script>

    <ActionIcon color="blue" variant="hover"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="blue" variant="default"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="blue" variant="transparent"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="blue" variant="filled"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="blue" variant="light"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="blue" variant="outline"><GithubLogo size={16} \/><\/ActionIcon>
    `;
    const colorActions = `
    <script>
        import { ActionIcon } from '@svelteuidev/core';
        import { GithubLogo } from "radix-icons-svelte";
    <\/script>

    <ActionIcon color="red"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="green"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="teal"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="gray"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="blue"><GithubLogo size={16} \/><\/ActionIcon>
    <ActionIcon color="yellow"><GithubLogo size={16} \/><\/ActionIcon>
    `;
    const sizeActions = `
    <script>
        import { ActionIcon } from '@svelteuidev/core';
        import { GithubLogo } from "radix-icons-svelte";
    <\/script>

    <ActionIcon radius="lg" color="blue" variant="filled"><GithubLogo size={16} \/><\/ActionIcon> // -> theme predefined large radius
    <ActionIcon radius={10} color="blue" variant="filled"><GithubLogo size={16} \/><\/ActionIcon> // -> { borderRadius: '10px' }
    <ActionIcon size="sm" color="blue" variant="filled"><GithubLogo size={16} \/><\/ActionIcon> // -> predefined small size
    <ActionIcon size={50} color="blue" variant="filled"><GithubLogo size={16} \/><\/ActionIcon> // -> { width: '50px', height: '50px' }
    `;
    const closeButton = `
    <script>
        import { closeButton } from '@svelteuidev/core';
    <\/script>

    <CloseButton variant="filled" \/>
    <CloseButton size="xl" iconSize={20} variant="filled" \/>
    `;
    const accessibility = `
    <script>
        import { ActionIcon } from '@svelteuidev/core';
        import { GithubLogo } from "radix-icons-svelte";
    <\/script>

    <ActionIcon><GithubLogo size={16} \/><\/ActionIcon> // -> not visible to screen reader
    <ActionIcon title="Settings"><GithubLogo size={16} \/><\/ActionIcon> // -> ok
    <ActionIcon aria-label="Settings"><GithubLogo size={16} \/><\/ActionIcon> // -> ok
    `;
</script>

<Heading />

## Usage

ActionIcon accepts anything as child. It **does not control icon size**, the user must specify it manually on the icon component to match ActionIcon size. For example, in radix-icons-svelte you can use size prop:

<Preview code={action}>
    <ActionIcon><GithubLogo size={16} /></ActionIcon>
</Preview>

### Variants

ActionIcon has 6 variants: `hover`, `default`, `transparent`, `filled`, `light` and `outline`:

<Preview code={variantActions}>
    <SimpleGrid cols={6}>
        <ActionIcon color="blue" variant="hover"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" variant="default"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" variant="transparent"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" variant="filled"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" variant="light"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" variant="outline"><GithubLogo size={16} /></ActionIcon>
    </SimpleGrid>
</Preview>

### Color

ActionIcon supports all colors from [theme.colors](theming/default-theme):

<Preview code={colorActions}>
    <SimpleGrid cols={6}>
        <ActionIcon color="red"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="green"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="teal"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="gray"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="yellow"><GithubLogo size={16} /></ActionIcon>
    </SimpleGrid>
</Preview>

### Size and radius

Control button width and height with `size` and border-radius with `radius`. Both props have predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, use a number to set radius or size in px:

<Preview code={sizeActions}>
    <SimpleGrid cols={4}>
        <ActionIcon color="blue" radius="lg" variant="filled"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" radius={10} variant="filled"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" size="sm" variant="filled"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon color="blue" size={50} variant="filled"><GithubLogo size={16} /></ActionIcon>
    </SimpleGrid>
</Preview>

## Close button

CloseButton is a pre-made ActionIcon with close icon, it will be used in all other components: Popover, Modal, Notification, etc. Component accepts the same props as ActionIcon with additional `iconSize` prop to control icon width and height:

<Preview code={closeButton}>
    <SimpleGrid cols={2}>
        <CloseButton variant="filled" />
        <CloseButton size="xl" iconSize={20} variant="filled" />
    </SimpleGrid>
</Preview>

## Accessibility

ActionIcon renders a regular `button` element. Set `title` or `aria-label` props for screen reader support:

<Preview code={accessibility}>
    <SimpleGrid cols={3}>
        <ActionIcon><GithubLogo size={16} /></ActionIcon>
        <ActionIcon title="Settings"><GithubLogo size={16} /></ActionIcon>
        <ActionIcon aria-label="Settings"><GithubLogo size={16} /></ActionIcon>
    </SimpleGrid>
</Preview>