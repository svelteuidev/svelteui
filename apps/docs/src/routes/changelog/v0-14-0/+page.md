---
title: 'Version 0.14.0'
order: 6
release: https://github.com/svelteuidev/svelteui/releases/tag/0.14.0
date: 'July 2th, 2023'
---

<script>
    import { Demo, AccordionDemos, AspectRatioDemos, CollapseDemos, FlexDemos, TextareaDemos } from '@svelteuidev/demos';
    import { MinorHeading } from '$lib/components';
    import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## Improvements

### _Components:_

## [Accordion]({base}/core/accordion)

<Demo demo={AccordionDemos.configurator} hideCode />

## [AspectRatio]({base}/core/aspect-ratio)

<Demo demo={AspectRatioDemos.usage} codeVisible={true} />

## [Collapse]({base}/core/collapse)

<Demo demo={CollapseDemos.usage} codeVisible={true} />

## [Flex]({base}/core/flex)

<Demo demo={FlexDemos.configurator} hideCode />

## [Textarea]({base}/core/textarea)

<Demo demo={TextareaDemos.configurator} hideCode />

- Support refs and other theme keywords inside variants for the StyleAPI

### _Docs:_

- Add transitions to Sidebar in docs
- Add documentation for outside control of `Menu`
- Add disabled option in `NativeSelect` documentation examples

## Bug fixes and improvements

- Fix missing `Button` disabled style
- Fix `Button` with `href` disabled and loading style
- Fix dark mode style for `Button` and `ActionIcon`
- Fix wrong example code in `use-move` documentation
- Fix `NaN` value on blur in `NumberInput`
- Add missing forwarded events in `NumberInput`
- Fix incorrect background color for `Paper` in dark mode
- Fix outside control of `Menu`
- Remove duplicate event `change` in `NumberInput`
