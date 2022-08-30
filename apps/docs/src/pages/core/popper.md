---
title: Popper
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/popper/
category: 'misc'
description: 'Render dropdown related to a reference component or in portal'
import: "import { Popper } from '@svelteuidev/core';"
source: 'svelteui-src/components/Popper/Popper.svelte'
docs: 'core/popper.md'
---

<script>
    import { Demo, PopperDemos } from '@svelteuidev/demos';
    import { Heading, Preview } from 'components';
</script>

<Heading />

## Usage

Popper is a utility component used under the hood in `Menu`(not implement yet), `Popover` (not implement yet) and [Tooltip](core/tooltip). You can use it to create your own dropdowns and popovers.

To use Popper, add the following required props:

- `reference` - element (HTML element) based on which popper will be positioned
- `mounted` - current popper opened state: `true` to display, `false` to hide

```svelte
<script>
	import { Popper } from '@svelteuidev/core';

	let mounted = false;
</script>

<Button bind:element={reference} on:click={() => (mounted = !mounted)}>Click here</Button>
<Popper {reference} {mounted}>
	<div>Popper content</div>
</Popper>
```

## Position

Popper position is controlled by these props:

- `position` - left, right, bottom or top
- `placement` - start, right or center
- `gutter` - spacing between the reference element and the popper dropdown, in px
- `withArrow` - displays an arrow between the reference element and the popper dropdown, takes into consideration the `position` and `placement`
- `arrowSize` - the arrow size in px

<Demo demo={PopperDemos.configurator} />

# z-index

By default, Popper has `z-index: 1`, but it can be changed with the `zIndex` prop:

```svelte
<Popper zIndex={10} {...$$restProps} />
```
