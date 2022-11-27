---
title: Box
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/box/
category: 'misc'
description: 'Add inline styles to any element or component with css prop'
import: "import { Box } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Box/Box.svelte'
docs: 'core/box.md'
---

<script>
    import { Demo, BoxDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Box allows you to use the `css` prop ([like override](/theming/override)) with any element or component. Box itself does not include any styles.

<Demo demo={BoxDemos.usage} />

## Custom component

To use Box with custom component or element set `root` prop to tag name or a svelte component:

<Demo demo={BoxDemos.custom} />
