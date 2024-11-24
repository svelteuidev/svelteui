<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './Space.styles';
	import type { SpaceProps as $$SpaceProps } from './Space';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		w?: $$Props['w'];
		h?: $$Props['h'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		w = 0,
		h = 0,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles({ h, w }, { name: 'Space' }));
</script>

<!--
@component

Add horizontal or vertical spacing from theme.

@see https://svelteui.dev/core/space
@example
    ```svelte
		<Space h="md" />
		<Space w="lg" />
		<Space w={30} /> // Width will be set to 30px
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
