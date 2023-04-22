<script lang="ts">
	import useStyles from './Paper.styles';
	import { Box } from '../Box';
	import type { PaperProps as $$PaperProps } from './Paper';

	interface $$Props extends $$PaperProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		shadow: $$Props['shadow'] = 'xs',
		radius: $$Props['radius'] = 'sm',
		withBorder: $$Props['withBorder'] = false,
		padding: $$Props['padding'] = 'md';
	export { className as class };

	$: ({ cx, classes, getStyles } = useStyles(
		{ radius, shadow, withBorder, padding },
		{ name: 'Paper' }
	));
</script>

<Box
	bind:element
	class={cx(className, classes.root, getStyles({ css: override }))}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
