---
title: Learn the basics
---

<script>
    import { CodeBlock, MinorHeading, BottomNav } from 'components'
    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:1rem!important;}<\/style>`;
</script>

<svelte:head>
{@html styles}
</svelte:head>

<MinorHeading />

This guide will help you get familiar with core SvelteUI concepts. Please read this guide and the **theming** section before starting development to learn about all available theming features and component behaviors.

## SvelteUI packages

- `@svelteuidev/core` – core components library with 40+ components
- `@svelteuidev/composables` – collection of 20+ useful actions and utilities
- `@svelteui/motion` - collection of transitions and animations
- `@svelteuidev/prism` – [code highlight](others/prism) built with [PrismJS](https://prismjs.com/).

## Dark Theme

All SvelteUI components support light and dark color themes out of the box. You can edit the details of each color scheme via [SvelteUIProvider](theming/svelteui-provider):

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider themeObserver="dark">
	<YourApp />
</SvelteUIProvider>
```

To learn how to dynamically change the theme by reading the [dark theme guide](theming/dark-theme).

## Server side rendering

SvelteUI components work in SvelteKit environments without any configuration needed. However, they aren't ssr compatible by default. To setup ssr follow the server side rendering guide below, It's really easy to set up!

- [Server side rendering with SvelteKit](theming/ssr)

## TypeScript

### Exported types

@svelteuidev/core package export all types to help you build components and styles with TypeScript, some notable ones are:

- `ColorScheme` – union of `'light' | 'dark'`.
- `SvelteUIColor` – union of all default colors.
- `SvelteUIGradient` – gradient interface used in [Button](core/button), [ThemeIcon](core/theme-icon) and other components.
- `SvelteUIShadow` – union of all default shadows.
- `SvelteUISize` – union of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`.
- `SvelteUINumberSize` – union of `SvelteUISize | number`.

### Components props

You can import the props type of any component by adding `Props` to the component name:

```ts
import type { ButtonProps } from '@svelteuidev/core';
```

# General concepts

Svelte works really well most of the time, however there are some specific component level and library level concepts you must understand before you can get started developing.

## Event forwarding

This library will forward all events to the underlying elements, so you can add your own event handlers if necessary:

```svelte
<script>
  import { Button } from "@svelteuidev/core";

  let clicked = false;
</script>

<Button
    on:click={() => clicked = true}
>
    {clicked ? "Don't click me anymore" : 'Click me'}
</Button>
```

Event modifiers can also be used. However, instead of using the standard `|` (pipe operator), they must be separated by a `!` due to those limitations mentioned previously.

## Svelte Actions

Under normal circumstances you wouldn't be able to use actions on components because of a Svelte limitation. To support forwarding actions to a Component's top level element, SvelteUI provides a special syntax. If you're familiar with [Svelte Headless UI](https://github.com/rgossiaux/svelte-headlessui), this concept should be familiar to you. Components support the `use` prop syntax for this purpose:

```svelte
<script>
	import { Button } from '@svelteuidev/core';
	import { action1, action2, action3 } from './my-library';
	let action1options = {};
	let action3options = { foo: true };
</script>

<Button
	use={[[action1, action1options], [action2], [action3, action3options]]}
	on:click={() => console.log('clicked')}
>
	Click me!
</Button>
```

`use` takes an array of `[action]` or `[action, options]` array's (so nested arrays). These actions will be applied to the underlying element that the component eventually renders.

## Bindings

All components support binding their top-level element via the element prop instead of `this`. This allows you to get a reference to a DOM node (as a supplement to `bind:this`):

```svelte
<script lang="ts">
	import { Button } from '@svelteuidev/core';

	let element: HTMLButtonElement;

	$: {
		console.log(element);
		console.log({ element }); // interact with DOM nodes programmatically.
	}
</script>

<Button bind:element>Button Reference</Button>
```

## Classes

All components support a class prop which is useful for things like global styling or [Tailwind](https://tailwindcss.com/) classes:

```svelte
<script lang="ts">
    import { Button } from "@svelteuidev/core";
</script>

<Button class='animation-bounce'>I have a tailwind animation<Button>
```

<BottomNav both slug={{ prev: 'installation', next: 'contributing' }} title={{ prev: 'Installation', next: 'Contributing' }} group={{ prev: 'Getting Started', next: 'Getting Started' }} />
