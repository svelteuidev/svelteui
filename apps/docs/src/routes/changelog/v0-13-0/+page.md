---
title: 'Version 0.13.0'
order: 6
release: https://github.com/svelteuidev/svelteui/releases/tag/0.13.0
date: 'June 2th, 2023'
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

### _Docs:_

- Improve documentation regarding `Menu.Label`

## Bug fixes and improvements

- Fix broken navigation in `Tabs` using `Tab` and `Shift + Tab`
- Fix problem with using  `iconProps` in `Menu` and `Alert`
- Fix wrong variant styling in dark mode for `Button`
- Fix `Menu.Item` types
- Fix edit page links in docs
- Bumped package versions and migrated to `@sveltejs/package` 2.0 version
- Migrated to svelte official eslint package `eslint-plugin-svelte`
