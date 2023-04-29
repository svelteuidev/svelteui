---
title: 'Version 0.11.0'
order: 6
release: https://github.com/svelteuidev/svelteui/releases/tag/0.11.0
date: 'April 2nd, 2023'
---

<script>
    import { MinorHeading } from '$lib/components';
    import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## New features and components 🔥

### _Components:_

## FileUpload Component.

Still a work in progress, but let us know what you think of it.

### _Composables:_

## [useFocusReturn]({base}/composables/use-focus-trap)

## Bug fixes and improvements

- `useFocusTrap` correctly working
- Fix for `Menu` keyboard navigation
- Fix typings and warning in `Burger` component
- Fix using `black`/`white` color value for `color` prop in `Text`
- Do not package story and test files
