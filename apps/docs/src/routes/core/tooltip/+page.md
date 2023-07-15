---
title: Tooltip
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/tooltip/
category: 'overlay'
description: 'Renders tooltip at given element on mouse over or any other event'
importCode: "import { Tooltip } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Tooltip/Tooltip.svelte'
docs: 'core/tooltip'
---

<script>
  import { Demo, TooltipDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={TooltipDemos.configurator} />

## Position and placement

The Tooltip position relative to target element is defined by:

- `position` – tooltip side – `top`, `bottom`, `right` or `left`, defaults to top
- `placement` – tooltip placement relative to the position – `start`, `center` or `end`, defaults to center
- `gutter` – space between tooltip and target element in px, defaults to 5px

```svelte
<Tooltip position="bottom" placement="end" gutter={10} />
```

All available positions and placements:

<Demo demo={TooltipDemos.positions} />

## Arrow

Tooltip arrow is controlled by:

- `withArrow` – set to true if arrow should be rendered
- `arrowSize` – arrow size in px, defaults to 4px
- `position` and `placement` – define arrow position (see previous example)

<Demo demo={TooltipDemos.arrow} />

## Controlled

By default, Tooltip is displayed when the mouse is over the target element. You can get this default behavior by omitting the `opened` prop or setting it to `undefined`.
To control the open state of the tooltip, you can provide the `opened` prop:

<Demo demo={TooltipDemos.controlled} />

## Multiline

By default, tooltip `white-space` property is set to `nowrap`. To change that use:

- `wrapLines` – to enable line breaks
- `width` – to define tooltip width in px

Note that multiline tooltips may require different transitions for better UX.

<Demo demo={TooltipDemos.multiline} />

## Close and open delay

You can delay the tooltip open and close events by setting the props `openDelay` and `closeDelay`, in miliseconds. Both props default to 0 and reset if the user moves the mouse over or out of the target element before the delay is expired.

<Demo demo={TooltipDemos.delay} />

## Allow pointer events

By default, pointer events on tooltip are disabled to prevent animations collisions. To use interactive elements inside tooltip set `allowPointerEvents` prop.

In this example tooltip acts more like a popover – it is controlled and can be closed with control inside tooltip:

<Demo demo={TooltipDemos.pointer} />

## Accessibility

Do not place any important information in tooltip. The component is unmounted from the DOM and is not visible to screen readers in its default configuration.

Provide `tooltipId` and `aria-describedby` props to make tooltip accessible:

```svelte
<Tooltip {opened} label="Hidden knowledge" tooltipId="tooltip-id">
	<Button aria-describedby="tooltip-id">I have tooltip</Button>
</Tooltip>
```
