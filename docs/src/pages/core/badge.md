---
title: Badge
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/badge/
category: 'data-display'
description: 'Display badge, pill or tag'
import: "import { Badge } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Badge/Badge.svelte'
docs: 'core/badge.md'
---

<script>
    import { Badge, Box } from '@svelteuidev/core';
    import { ExclamationTriangle, Cross1 } from "radix-icons-svelte";
    import { Heading, Preview } from 'components';

    const badge = `
    <script>
        import { Badge } from '@svelteuidev/core';
    <\/script>

    <Badge>BETA<\/Badge>
    `
    const badgeVariants = `
    <script>
        import { Badge } from '@svelteuidev/core';
    <\/script>

    {#each ['dot', 'filled', 'light', 'outline'] as variant}
        <Badge variant={variant}>BETA<\/Badge>
    {/each}
    `
    const badgeGradient = `
    <script>
        import { Badge } from '@svelteuidev/core';
    <\/script>

    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Indigo cyan<\/Badge>
    <Badge variant="gradient" gradient={{ from: 'cyan', to: 'lime', deg: 105 }}>Lime green<\/Badge>
    <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue<\/Badge>
    <Badge variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 45 }}>Orange red<\/Badge>
    <Badge variant="gradient" gradient={{ from: 'green', to: 'pink', deg: 35 }}>Green Pink<\/Badge>
    `
    const badgeFull = `
    <script>
        import { Badge, Box } from '@svelteuidev/core';
    <\/script>

    <Box css={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
            Full width badge
        <\/Badge>
    <\/Box>

    <Box css={{ width: 120 }}>
        <Badge variant="filled" fullWidth>
            Badge with overflow
        <\/Badge>
    <\/Box>
    `
    const badgeSize = `
    <script>
        import { Badge } from '@svelteuidev/core';
    <\/script>

    <Badge size='xs' radius="lg" variant="filled">BETA<\/Badge>
    <Badge radius={10} variant="filled">BETA<\/Badge>
    <Badge size="xl" radius='xs' variant="filled">BETA<\/Badge>
    <Badge size='lg' variant="filled">BETA<\/Badge>
    `
    const badgeRight = `
    <script>
        import { Badge } from '@svelteuidev/core';
    <\/script>

    <Badge size="lg" radius="xl" color="teal">
        Badge
    <\/Badge>

    <Badge variant="outline" override={{ paddingRight: 3 }}>
        Badge with right section
        <Cross1 name='rightSection' />
    <\/Badge>

    <Badge variant="outline" override={{ paddingLeft: 3 }}>
        <ExclamationTriangle name='leftSection' />
        Badge with left section
    <\/Badge>
    `
</script>

<Heading />

## Usage

<Preview code={badge} cols={1}>
    <Badge>BETA</Badge>
</Preview>

## Variants

Button supports the following variants: `dot`, `gradient`, `filled`, `light` and `outline`. Default Badge color is `theme.blue600`, to change color and variant pass color and variant props:

<Preview code={badgeVariants} cols={4}>
    {#each ['dot', 'filled', 'light', 'outline'] as variant}
        <Badge variant={variant}>BETA</Badge>
    {/each}
</Preview>

## Gradient variant

To use gradient as Badge background:

- set `variant` prop to `gradient`
- set `gradient` prop to
- `color-from` and `color-to` are color from `theme.colors`
- `deg` is linear gradient degree

<Preview code={badgeGradient} cols={5} >
    <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Indigo cyan</Badge>
    <Badge variant="gradient" gradient={{ from: 'cyan', to: 'lime', deg: 105 }}>Lime green</Badge>
    <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Badge>
    <Badge variant="gradient" gradient={{ from: 'orange', to: 'red', deg: 45 }}>Orange red</Badge>
    <Badge variant="gradient" gradient={{ from: 'green', to: 'pink', deg: 35 }}>Green Pink</Badge>
</Preview>

## Full width and overflow

Badge will take full width of container if `fullWidth` prop is `true`.
If badge cannot fit in its container, overflow content will be hidden with ellipsis:

<Preview code={badgeFull} cols={2}>
    <Box css={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
            Full width badge
        </Badge>
    </Box>

    <Box css={{ width: 120 }}>
        <Badge variant="filled" fullWidth>
            Badge with overflow
        </Badge>
    </Box>

</Preview>

## Size and radius

Control button width and height with `size` and border-radius with `radius`. Both props have predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, use a number to set radius or size in px:

<Preview code={badgeSize} cols={4}>
    <Badge size='xs' radius="lg" variant="filled">BETA</Badge>
    <Badge radius={10} variant="filled">BETA</Badge>
    <Badge size="xl" radius='xs' variant="filled">BETA</Badge>
    <Badge size='lg' variant="filled">BETA</Badge>
</Preview>

## Right and left sections

<Preview code={badgeRight}>
    <Badge size="lg" radius="xl" color="teal">
        Badge
    </Badge>

    <Badge variant="outline" override={{ paddingRight: 3 }}>
        Badge with right section
        <Cross1 name='rightSection' />
    </Badge>

    <Badge variant="outline" override={{ paddingLeft: 3 }}>
        <ExclamationTriangle name='leftSection' />
        Badge with left section
    </Badge>

</Preview>
