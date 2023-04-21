---
title: Server side rendering
description: How to use SvelteUI in a ssr environment.
docs: 'theming/ssr.md'
---

<script>
    import { SvelteUIProvider } from "@svelteuidev/core";
    import { Prism } from "@svelteuidev/prism";
</script>

## Getting Started

You don't need to install any additional tooling to get access to server side rendering. SvelteUI works out of the box without server side rendering capabilities, adding SSR on top of that just makes things that much better! This is something that separates SvelteUI from other libraries, as they require configuration just to start working with SvelteKit.

## 1.

In your top level `+layout.svelte` file, wrap your app in the SvelteUIProvider component:

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<slot />
</SvelteUIProvider>
```

## 2.

In the file `hooks.server.(js|ts)` in your SvelteKit app (see [SK docs](https://kit.svelte.dev/docs/hooks)), add the code below. With this, the CSS will be injected to the page before sending it to the client.

```typescript
import { prepareStylesSSR } from '@svelteuidev/core';

export const handle = prepareStylesSSR;
```
