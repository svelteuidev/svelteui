<script lang="ts">
	import Box from '../Box/Box.svelte';
	import type { ContainerProps as $$ContainerProps } from './Container.styles';

	/** Used for forwarding actions from component */
	export let use: $$ContainerProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$ContainerProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$ContainerProps['override'] = {};
	/** Predefined container max-width or number for max-width in px */
	export let size: $$ContainerProps['size'] = 'md';
	/** If fluid is set to true, size prop is ignored and Container always take 100% of width */
	export let fluid: $$ContainerProps['fluid'] = false;
	/** Container sizes */
	export let sizes: $$ContainerProps['sizes'] = {
		xs: 540,
		sm: 720,
		md: 960,
		lg: 1140,
		xl: 1320
	};

	$: ContainerStyles = {
		paddingLeft: `$${size}`,
		paddingRight: `$${size}`,
		maxWidth: fluid ? '100%' : typeof size === 'number' ? `${size}px` : sizes[size] ?? sizes.md,
		marginLeft: 'auto',
		marginRight: 'auto'
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Center content horizontally with predefined max-width
	
@see https://svelteuidev.github.io/svelteui/docs/core/container
@example
    ```svelte
    <Container>
        Default container
    </Container>

    <Container size="xs" px="xs">
        xs container with xs horizontal padding
    </Container>

    <Container size={200} px={0}>
        200px container with 0px horizontal padding
    </Container>
    ```
-->
<Box {use} css={{ ...ContainerStyles, ...override }} class={className} {...$$restProps}>
	<slot />
</Box>
