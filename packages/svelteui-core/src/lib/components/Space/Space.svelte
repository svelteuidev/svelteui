<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { SpaceProps as $$SpaceProps } from './Space.styles';
	import type { CSS } from '$lib/styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$SpaceProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$SpaceProps['override'] = {};
	/** Width, set to add horizontal spacing */
	export let w: $$SpaceProps['w'] = 'md';
	/** Height, set to add vertical spacing */
	export let h: $$SpaceProps['h'] = 'md';

	const SpaceStyles: CSS = {
		width: typeof w === 'number' ? `${w}px` : `$${w}`,
		minW: typeof w === 'number' ? `${w}px` : `$${w}`,
		height: typeof h === 'number' ? `${h}px` : `$${h}`,
		minH: typeof h === 'number' ? `${h}px` : `$${h}`
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Add horizontal or vertical spacing from theme.
	
@see https://svelteui-docs.vercel.app/docs/core/space
@example
    ```svelte
    <Group children={3} grow>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Group>
    ```
-->
<Box css={{ ...override, ...SpaceStyles }} class={className}>
	<slot />
</Box>
