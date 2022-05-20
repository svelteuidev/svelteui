---
title: 'Introduction'
---

<script>
    import { CodeBlock, MinorHeading, MainLink } from 'components'
    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:1rem!important;}<\/style>`;
</script>

<svelte:head>
{@html styles}
</svelte:head>

<MinorHeading />

## What is SvelteUI?

SvelteUI is a Svelte library with a variety of packages to help make development easier! This library not only aims to be more than just a component library, but one that fits all the needs of a project. SvelteUI aims to take care of the boring and complicated stuff for you so that you can start building quickly.

Instead of remaking the same components, recreating custom actions, transitions, utilities, etc. SvelteUI is designed so you can start making projects quickly. It works amazingly well **out-of-the-box, with zero-configuration, and can be customized** to your liking as your application grows.

### Features

- [SvelteKit](https://kit.svelte.dev/) and SSR Compatible
- [TypeScript](https://typescriptlang.org/) and type definitions are supported, but optional.
- All components are accessible according to [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standards.
- Dark theme included, as well as a custom theming api.
- Highly customizable
- Minimal to no third-party dependency usage.
- Easy setup - **Zero Configuration**

### Undocumented Components

> The docs are still under construction. Some of the library's exported components & functions are still undocumented.

<br />

## Packages

**[`@svelteui/core`](core/button)** - core components library

**[`@svelteui/actions`](actions/use-click-outside)** - library of useful actions

**[`@svelteui/motion`](motion/typewriter)** - collection of transitions to utilize on dom elements

**[`@svelteui/utilities`](utilities/os)** - collection of helpful utility functions

**[`@svelteui/prism`](others/prism.md)** - code highlight component built with prism action (coming in v0.6.0 release)

<br />

## Getting help

I want to build a friendly community that is happy to help those who need it. Help build one up by joining the discord:

- [Join Discord community](https://discord.gg/2J2xmzCS79) – it will be the easiest way to get help.
- [Github Discussions](https://github.com/svelteuidev/svelteui/discussions) - you can discuss anything relating to the project here.
