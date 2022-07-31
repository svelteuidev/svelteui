---
title: Portal
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/portal/
category: 'misc'
description: 'Render component outside of current context'
import: "import { Portal } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Portal/Portal.svelte'
docs: 'core/portal.md'
---

<script>
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Portal is a wrapper component that renders any component or element at the end of the `document.body` or of a given `target` element.

Use Portal to render a component or element at a different place (defaults to the end of `document.body`). Portal is useful when you want to prevent parent styles from interfering which the child, usually all these styles are related to `position` and `z-index` properties (which can be provided as props) and portals are used for components with fixed position, for example, modals or drawers.

```svelte
<script>
	import { Portal } from '@svelteuidev/core';

	let opened = false;
</script>

<main style="position: relative; z-index: 1">
	{#if opened}
		<Portal zIndex={5}>
			<div>Your modal content</div>
		</Portal>
	{/if}

	<button on:click={() => (opened = !opened)} type="button"> Open modal </button>
</main>
```

In the example above, the `div` element is rendered outside of parent `main` (before closing body tag), but still is controlled in this element. The div will not be affected by the parent `z-index`.

## Specify target DOM node

You can specify the DOM node where portal will be rendered by passing the `target` prop:

```svelte
<script>
	import { Portal } from '@svelteuidev/core';

	const container = document.createElement('div');
	document.body.appendChild(container);
</script>

<Portal target={container}>My portal</Portal>
```

Alternatively, you can specify a selector to render portal in existing element:

```svelte
<Portal target="#my-portal-container">My portal</Portal>
```

## Server side rendering

Portal is not supported during server side rendering. All components inside Portal are rendered only after the application gets mounted to the DOM.

## OptionalPortal

OptionalPortal component lets you configure whether children should be rendered in a `Portal`. It accepts the same props as the `Portal` component:

```svelte
<script>
	import { OptionalPortal } from '@svelteuidev/core';
</script>

<OptionalPortal withinPortal>This text is rendered in Portal</OptionalPortal>
<OptionalPortal withinPortal={false}>This text is rendered as regular child</OptionalPortal>
```
