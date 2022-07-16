<script lang="ts">
	import useStyles from './Container.styles';
	import Box from '../Box/Box.svelte';
	import type { ContainerProps as $$ContainerProps } from './Container.styles';

	export let use: $$ContainerProps['use'] = [],
		element: $$ContainerProps['element'] = undefined,
		className: $$ContainerProps['className'] = '',
		override: $$ContainerProps['override'] = {},
		size: $$ContainerProps['size'] = 'md',
		fluid: $$ContainerProps['fluid'] = false,
		sizes: $$ContainerProps['sizes'] = {
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
