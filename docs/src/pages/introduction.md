---
id: introduction
title: Introduction
---

import { Alert } from '@mantine/core';
import { InfoCircledIcon } from '@radix-ui/react-icons'

Instead of remaking the same components, recreating custom actions, transitions, utilities, etc. SvelteUI is designed so you can start making projects quickly. It works amazingly well **out-of-the-box, with zero-configuration, and can be customized** to your liking as your application grows.

### Features

- [SvelteKit](https://kit.svelte.dev/) and SSR Compatible
- [TypeScript](https://typescriptlang.org/) and type definitions are supported, but optional.
- All components are accessible according to [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standards.
- Dark theme included, as well as a custom theming api.
- Minimal third-party dependency usage.
- Easy setup - **Zero Configuration**

### Undocumented Components

The docs are still under construction. Some of the library's exported components & functions are still undocumented. [Here](https://github.com/svelteuidev/svelteui/issues/15) is where you can keep track of the progress.

<Alert icon={<InfoCircledIcon />} title="Warning" color="yellow">
Please keep in mind that any undocumented component could potentially receive breaking API changes or be heavily updated before being finalized.
</Alert>

<br />

## Packages

[`@svelteui/core`](./core/button) - core components library

[`@svelteui/actions`](./actions/use-click-outside) - library of useful actions

[`@svelteui/motion`](./motion/typewriter) - collection of transitions to utilize on dom elements

[`@svelteui/utilities`](./utilities/os) - collection of helpful utility functions

`@svelteui/prism` - code highlight component built with prism action (coming in v0.6.0 release)

<br />

## Getting help

I want to build a friendly community that is happy to help those who need it. Help build one up by joining the discord:

- [Join Discord community](https://discord.gg/2J2xmzCS79) – it will be the easiest way to get help.
- [Github Discussions](https://github.com/svelteuidev/svelteui/discussions) - you can discuss anything relating to the project here.
