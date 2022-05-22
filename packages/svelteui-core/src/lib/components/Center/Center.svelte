<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { CenterProps as $$CenterProps } from './Center.styles';

	/** Used for forwarding actions from component */
	export let use: $$CenterProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$CenterProps['element'] = undefined;
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$CenterProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$CenterProps['override'] = {};
	export let inline: $$CenterProps['inline'] = false;

	$: CenterStyles = {
		display: inline ? 'inline-flex' : 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Centers content vertically and horizontally.
	
@see https://svelteui.org/core/center
@example
    ```svelte
	<Center override={{ width: 400, height: 200, bg: '$blue100' }}>
		<Box css={{ bg: '$blue300' }}>All elements inside Center are centered</Box>
	</Center>
    ```
-->
<Box bind:element {use} class={className} {...$$restProps} css={{ ...CenterStyles, ...override }}>
	<slot>This is centered</slot>
</Box>
