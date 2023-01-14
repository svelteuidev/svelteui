---
title: Badge
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/badge/
category: 'data-display'
description: 'Display badge, pill or tag'
importCode: "import { Badge } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Badge/Badge.svelte'
docs: 'core/badge.md'
---

<script>
    import { Demo, BadgeDemos } from '@svelteuidev/demos';
</script>

## Usage

<Demo demo={BadgeDemos.configurator} />

## Gradient variant

To use gradient as Badge background:

- set `variant` prop to `gradient`
- set `gradient` prop
- `color-from` and `color-to` options in `gradient` prop are colors from `theme.colors`
- `deg` is linear gradient degree

<Demo demo={BadgeDemos.gradient} />

## Full width and overflow

Badge will take full width of container if `fullWidth` prop is `true`.
If Badge cannot fit in its container, overflow content will be hidden with ellipsis:

<Demo demo={BadgeDemos.width} />

## Right and left sections

<Demo demo={BadgeDemos.sections} />
