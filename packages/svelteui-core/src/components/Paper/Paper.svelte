<script lang="ts">
	import useStyles from './Paper.styles';
	import { Box } from '../Box';
	import type { PaperProps as $$PaperProps } from './Paper.styles';

	export let use: $$PaperProps['use'] = [],
		element: $$PaperProps['element'] = undefined,
		className: $$PaperProps['className'] = '',
		override: $$PaperProps['override'] = {},
		shadow: $$PaperProps['shadow'] = 'xs',
		radius: $$PaperProps['radius'] = 'sm',
		withBorder: $$PaperProps['withBorder'] = false,
		padding: $$PaperProps['padding'] = 'md';
	export { className as class };
	export { padding as p };

	$: ({ cx, getStyles } = useStyles({ radius, shadow, withBorder, padding }));
</script>

<Box bind:element class={cx(className, getStyles({ css: override }))} {use} {...$$restProps}>
	<slot />
</Box>
