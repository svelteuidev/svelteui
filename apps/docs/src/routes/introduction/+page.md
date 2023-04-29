---
title: 'Introduction'
---

<svelte:head>

  <title>Introduction - SvelteUI</title>
</svelte:head>

<script>
  // @ts-nocheck
  import { BottomNav } from '$lib/components';
  import { base } from '$app/paths';
</script>

## What is SvelteUI?

SvelteUI is a Svelte library (heavily inspired by but not affiliated with [Mantine](https://mantine.dev/)) with a variety of packages to help make development easier! This library not only aims to be more than just a component library, but one that fits all the needs of a project. SvelteUI aims to take care of the boring and complicated stuff for you so that you can start building quickly.

Instead of remaking the same components, recreating custom actions, transitions, utilities, etc. SvelteUI is designed so you can start making projects quickly. It works amazingly well **out-of-the-box, with zero-configuration, and can be customized** to your liking as your application grows.

## Features

- [SvelteKit](https://kit.svelte.dev/) and SSR compatible.
- [TypeScript](https://typescriptlang.org/) and type definitions are supported, but optional.
- All components are accessible according to [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standards.
- Dark theme included, as well as a custom theming API.
- Highly customizable.
- Minimal to no third-party dependency usage.
- Easy setup - **Zero Configuration**.

  <br />

## Packages

**[`@svelteui/core`]({base}/core/button)** - core components library with 40+ components

**[`@svelteui/composables`]({base}/composables/use-click-outside)** - collection of 20+ useful actions and utilities

**[`@svelteui/motion`]({base}/motion/typewriter)** - collection of transitions to utilize on DOM elements

**[`@svelteui/prism`]({base}/others/prism)** - code highlight component built with Prism action

**[`@svelteui/dates`]({base}/dates/getting-started)** - calendars, date and time pickers based on SvelteUI components

**[`@svelteui/preprocessors`]({base}/preprocessors/view-source)** - Svelte preprocessor library to assist in many areas of development

  <br />

## Getting help

We want to build a friendly community that is happy to help those who need it. Help build one up by joining the Discord:

- [Join Discord community](https://discord.gg/2J2xmzCS79) - it will be the easiest way to get help.
- [Github Discussions](https://github.com/svelteuidev/svelteui/discussions) - you can discuss anything relating to the project here.

  <BottomNav slug='/installation' title='Installation' group='Getting Started' />
