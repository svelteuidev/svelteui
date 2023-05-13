---
title: 'Version 0.12.0'
order: 6
release: https://github.com/svelteuidev/svelteui/releases/tag/0.12.0
date: 'May 13th, 2023'
---

<script>
    import { MinorHeading } from '$lib/components';
    import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## Improvements

### _Composables:_

- Support for dynamic text in `use-clipboard`

### _Docs:_

- Migration of the documentation to SvelteKit, with a lot of bug fixes and improvements

## Bug fixes and improvements

- Fix `Input` dark mode style
- Fix `Input` and `Button` icon alignment
- Fix `Button` font weight and disabled style
- Fix `Menu.Item` types
- Fix class root assignment for several components
- Fix `Progress` when updating the `sections` prop
- Fix dark theme reactivity inconsistency
- Fix wrong usage of `iconProps` in MenuItem and added missing `iconSize` prop
