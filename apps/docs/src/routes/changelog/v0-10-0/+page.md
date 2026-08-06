---
title: 'Version 0.10.0'
order: 6
release: https://github.com/svelteuidev/svelteui/releases/tag/0.10.0
date: 'February 16th, 2023'
---

<script>
	import { Demo, BreadcrumbsDemos, RadioDemos, } from '@svelteuidev/demos';
	import { MinorHeading } from '$lib/components';
	import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## New features and components 🔥

### _Components:_

## [Breadcrumbs]({base}/core/breadcrumbs) Component:

<Demo demo={BreadcrumbsDemos.usage} canShowCode={true} />

## [Radio]({base}/core/radio) Component:

<Demo demo={RadioDemos.configurator} canShowCode={true} />

## Bug fixes and improvements

- Fix incorrect disabled style in button
- Fix bad layout for Tabs in vertical orientation
- Support for using nested Tabs inside Tabs component
