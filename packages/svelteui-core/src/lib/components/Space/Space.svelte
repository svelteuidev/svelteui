<script lang="ts">
	import { Box } from '../Box';
	import type { SpaceProps as $$SpaceProps } from './Space.styles';

	/** Used for forwarding actions from component */
	export let use: $$SpaceProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$SpaceProps['element'] = undefined;
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$SpaceProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$SpaceProps['override'] = {};
	/** Width, set to add horizontal spacing */
	export let w: $$SpaceProps['w'] = 0;
	/** Height, set to add vertical spacing */
	export let h: $$SpaceProps['h'] = 0;

	$: SpaceStyles = {
		width: typeof w === 'number' ? `${w}px` : `$${w}`,
		minWidth: typeof w === 'number' ? `${w}px` : `$${w}`,
		height: typeof h === 'number' ? `${h}px` : `$${h}`,
		minHeight: typeof h === 'number' ? `${h}px` : `$${h}`
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Add horizontal or vertical spacing from theme.
	
@see https://svelteui.org/core/space
@example
    ```svelte
		<Space h="md" />
		<Space w="lg" />
		<Space w={30} /> // Width will be set to 30px
    ```
-->
<Box bind:element {use} css={{ ...SpaceStyles, ...override }} class={className} {...$$restProps}>
	<slot />
</Box>
