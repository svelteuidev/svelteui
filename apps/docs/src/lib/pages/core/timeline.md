---
title: Timeline
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/timeline/
category: 'data-display'
description: 'Display list of events in chronological order'
importCode: "import { Timeline } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Timeline/Timeline.svelte'
docs: 'core/timeline.md'
---

<script>
	import { Demo, TimelineDemos } from '@svelteuidev/demos';
</script>

## Usage

<Demo demo={TimelineDemos.usage} />

## Line and bullet props

Control the timeline appearance with the following props:

- `active` – index of current active element (starts with 0), all elements before this index will be highlighted with `color`
- `color` – color from theme that should be used to highlight active items
- `lineWidth` – controls line width and bullet border, value is in px
- `bulletSize` – bullet width, height and border-radius in px
- `align` – defines line and bullets position relative to content, also sets text-align

<Demo demo={TimelineDemos.bullet} />

## Bullet as Svelte component

<Demo demo={TimelineDemos.component} />
