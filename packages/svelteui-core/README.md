<center>
  <h1 align="center">SvelteUI</h1>

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

</center>

SvelteUI is a Svelte library (heavily inspired by but not affiliated with Mantine) with a variety of packages to help make development easier! This library not only aims to be more than just a component library, but one that fits all the needs of a project. SvelteUI aims to take care of the boring and complicated stuff for you so that you can start building quickly.

Instead of remaking the same components, recreating custom actions, transitions, utilities, etc. SvelteUI is designed so you can start making projects quickly. It works amazingly well out-of-the-box, with zero-configuration, and can be customized to your liking as your application grows.

# Features

- SvelteKit and SSR Compatible
- TypeScript and type definitions are supported, but optional.
- All components are accessible according to WAI-ARIA standards.
- Dark theme included, as well as a custom theming api.
- Highly customizable
- Minimal to no third-party dependency usage.
- Easy setup - Zero Configuration

# Installation

See https://www.svelteui.dev/installation for complete guide.

```
npm i @svelteuidev/core @svelteuidev/composables
```

# Project Configuration

Wrap your app in the `SvelteUIProvider` component for more theming options, such as dark theme.

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<YourApp />
</SvelteUIProvider>
```

# License

[MIT](https://choosealicense.com/licenses/mit/)
