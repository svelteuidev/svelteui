---
title: 'raf-fn'
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
description: 'Call function on every requestAnimationFrame'
---

<script>
	import { rafFn } from '@svelteuidev/utilities';
	import { Button, Text } from '@svelteuidev/core';
    import Preview from '$lib/components/DocsHelpers/Preview.svelte'

	let count = 0;
	const { pause, resume } = rafFn(() => {
		count++;
	});
</script>

# {$frontmatter.title}

{$frontmatter.description}

```ts
import { rafFn } from '@svelteuidev/utilities';
```

<hr>
<!-- Top Section -->

## Usage

<Preview style="display: flex; gap: 1rem; align-items: center;">
    <Text size='xl'>Count: {count}</Text>
    <Button on:click={() => pause()}>Pause</Button>
    <Button on:click={() => resume()}>Resume</Button> 
</Preview>

The {$frontmatter.title} utility takes a callback function as its first argument, and calls that function on every [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame). It returns an object with controls of pausing and resuming.

```svelte|copy|lineNumbers
<script>
	import { rafFn } from '@svelteuidev/utilities';
	import { Button } from '@svelteuidev/core';

	let count = 0;
	const { pause, resume } = rafFn(() => {
		count++;
	});
</script>

<div>Count: {count}</div>
<Button on:click={() => pause()}>Pause</Button>
<Button on:click={() => resume()}>Resume</Button>
```

## TypeScript

You can import `RafFnOptions` interface type from `@svelteuidev/utilities`:

```ts
export interface RafFnOptions extends ConfigurableWindow {
	/**
	 * Start the requestAnimationFrame loop immediately on creation
	 *
	 * @default true
	 */
	immediate?: boolean;
}
```

## Definition

```ts
function rafFn(fn: Fn, options: RafFnOptions = {}): Pauseable;
```
