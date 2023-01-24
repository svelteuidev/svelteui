<script lang="ts">
	import useStyles from './Container.styles';
	import Box from '../Box/Box.svelte';
	import type { ContainerProps as $$ContainerProps } from './Container';

	interface $$Props extends $$ContainerProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		size: $$Props['size'] = 'md',
		fluid: $$Props['fluid'] = false,
		sizes: $$Props['sizes'] = {
			xs: 540,
			sm: 720,
			md: 960,
			lg: 1140,
			xl: 1320
		};
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ fluid, size, sizes }));
</script>

<!--
@component

Center content horizontally with predefined max-width

@see https://svelteui.org/core/container
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
<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<slot />
</Box>
