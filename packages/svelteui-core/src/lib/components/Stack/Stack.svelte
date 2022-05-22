<script lang="ts">
	import Box from '../Box/Box.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { StackProps as $$StackProps } from './Stack.styles';

	/** Used for forwarding actions from component */
	export let use: $$StackProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$StackProps['element'] = undefined;
	export let className: $$StackProps['className'] = '';
	export { className as class };
	export let override: $$StackProps['override'] = {};
	export let spacing: $$StackProps['spacing'] = 'md';
	export let align: $$StackProps['align'] = 'stretch';
	export let justify: $$StackProps['justify'] = 'center';

	$: StackStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: `${align}`,
		justifyContent: `${justify}`,
		gap: typeof spacing === 'number' ? `${spacing}px` : `$${spacing}`
	};

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	// if () {
	// 	observable = true;
	// 	err = {};
	// }

	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="Stack" code={err} />

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Compose elements and components in a vertical flex container.
	
@see https://svelteui.org/core/stack
@example
    ```svelte
    <Stack align="flex-end" justify="space-between" override={{ height: 300 }}>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Stack>
    ```
-->

<Box bind:element {use} css={{ ...StackStyles, ...override }} class={className} {...$$restProps}>
	<slot />
</Box>
