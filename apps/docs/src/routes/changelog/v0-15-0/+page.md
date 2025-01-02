---
title: 'Version 0.15.0'
order: 6
release: https://github.com/svelteuidev/svelteui/releases/tag/0.15.0
date: 'August 20th, 2023'
---

<script>
    import { Demo, BlockquoteDemos, JsonInputDemos, MarkDemos, PasswordInputDemos } from '@svelteuidev/demos';
    import { MinorHeading } from '$lib/components';
    import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## Improvements

### _Components:_

## [JsonInput]({base}/core/json-input)

<Demo demo={JsonInputDemos.configurator} hideCode />

## [Blockquote]({base}/core/blockquote)

<Demo demo={BlockquoteDemos.usage} codeVisible={true} />

## [PasswordInput]({base}/core/password-input)

<Demo demo={PasswordInputDemos.configurator} hideCode />

## [Mark]({base}/core/mark)

<Demo demo={MarkDemos.usage} codeVisible={true} />

- Contributing and Code of conduct now available in Korean
- Add slots for icons in all components that have them
- Add slot to override `Modal` title
- New props to change `Modal` transitions (`transition`, `transitionOptions`, `overlayTransition`, `overlayTransitionOptions`)
- Set `fixed` to true as the default value in `AppShell`
- Add new prop `insideLabelSize` to `Switch`

### _Docs:_

- Improve documentation regarding the controlled behaviour of `Tooltip`

## Bug fixes and improvements

- Fix `Installation` guide style in docs
- Fix `createStyles` check for variants
- Fix resize issue in `Modal` for smaller viewports
- Fix `Menu` type export to allow typing `this` prop
- Fix dependency cycle happening in `@svelteuidev/core`
- Add missing `fontFamily` to some components
- Add missing reactivity in `Box` when `css` prop changes
- Fix broken `Collapse` animations when using Svelte 4
- Fix missing interaction when clicking right section of `NativeSelect`
- Fix `Menu` being cut when used inside a container
- Fix `TextArea` bind:value propagation
- Fix type errors for `Menu.Item` prop icon
