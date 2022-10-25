---
title: Overlay
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/overlay/
category: 'overlay'
description: 'Overlays given element with div element with any color and opacity'
import: "import { Overlay } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Overlay/Overlay.svelte'
docs: 'core/overlay.md'
---

<script>
    import { Demo, OverlayDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Overlay had absolute position and will take 100% of width and height of parent container.
It is used to build components like [Modal (not yet implemented)](/core/modal/) and [LoadingOverlay (not yet implemented)](/core/loading-overlay/).

You can change overlay opacity (from 0 to 1), color (CSS color value, not connected to SvelteUI theme) and z-index (number).

<Demo demo={OverlayDemos.usage} />

## Display Content

Overlay has a default slot that allows you to display any content over the overlay. A `center` prop can be used to center the content horizontally.

<Demo demo={OverlayDemos.content} />

## With gradient

<Demo demo={OverlayDemos.gradient} />

## With blur

To blur the overlay backdrop, set the `blur` prop with a number. This will set the backdrop blur in px.
Note that blur [is not supported in Firefox](https://caniuse.com/css-backdrop-filter).

<Demo demo={OverlayDemos.blur} />

## Custom component

You can pass custom tag or component that will be used as root element:

```svelte
<script>
    import { Overlay, Anchor } from '@svelteuidev/core';
</script>

<Overlay root='a'> href="#" />
<Overlay root={Anchor} to="/hello" />
```
