<script lang="ts">
	import { css, theme, fns, dark } from '$lib/styles';
	import { Paper } from '../Paper';
	import type { CardProps as $$CardProps } from './Card.styles';

	export let use: $$CardProps['use'] = [],
		element: $$CardProps['element'] = undefined,
		className: $$CardProps['className'] = '',
		override: $$CardProps['override'] = {},
		p: $$CardProps['p'] = 'md';
	export { className as class };

	const { themeColor, size } = fns;

	$: CardStyles = css({
		[`${dark.selector} &`]: {
			backgroundColor: themeColor('dark', 6)
		},
		padding: typeof p === 'number' ? `${p}px` : size({ size: p, sizes: theme.space }),
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: 'white'
	});
</script>

<Paper bind:element class="{className} {CardStyles({ css: override })}" {use} {...$$restProps}>
	<slot />
</Paper>
