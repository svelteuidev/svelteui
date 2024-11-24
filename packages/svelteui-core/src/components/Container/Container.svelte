<script lang="ts">
	import useStyles from './Container.styles';
	import Box from '../Box/Box.svelte';
	import type { ContainerProps as $$ContainerProps } from './Container';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		size?: $$Props['size'];
		fluid?: $$Props['fluid'];
		sizes?: $$Props['sizes'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		size = 'md',
		fluid = false,
		sizes = {
			xs: 540,
			sm: 720,
			md: 960,
			lg: 1140,
			xl: 1320
		},
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles({ fluid, size, sizes }, { name: 'Container' }));
</script>

<!--
@component

Center content horizontally with predefined max-width

@see https://svelteui.dev/core/container
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
<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	{@render children?.()}
</Box>
