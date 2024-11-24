<script lang="ts">
	import useStyles from './Paper.styles';
	import { Box } from '../Box';
	import type { PaperProps as $$PaperProps } from './Paper';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		shadow?: $$Props['shadow'];
		radius?: $$Props['radius'];
		withBorder?: $$Props['withBorder'];
		padding?: $$Props['padding'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		shadow = 'xs',
		radius = 'sm',
		withBorder = false,
		padding = 'md',
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
		{ radius, shadow, withBorder, padding },
		{ name: 'Paper' }
	));
</script>

<Box
	bind:element
	class={cx(
		classes.root,
		className,
		withBorder && classes.withBorder,
		getStyles({ css: override })
	)}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
