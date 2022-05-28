<script lang="ts">
	import { theme, fns } from '$lib/styles';
	import { Box } from '../../Box';
	import type { CSS } from '$lib/styles';
	import type { CardSectionProps as $$CardSectionProps } from './CardSection.styles';

	export let use: $$CardSectionProps['use'] = [],
		element: $$CardSectionProps['element'] = undefined,
		className: $$CardSectionProps['className'] = '',
		override: $$CardSectionProps['override'] = {},
		padding: $$CardSectionProps['padding'] = 'md',
		first: $$CardSectionProps['first'] = false,
		last: $$CardSectionProps['last'] = false;
	export { className as class };

	const { size } = fns;

	let CardSectionStyles: CSS;
	$: CardSectionStyles = {
		display: 'block',
		marginLeft: -1 * size({ size: padding, sizes: theme.space }),
		marginRight: -1 * size({ size: padding, sizes: theme.space }),
		marginTop: first ? -1 * size({ size: padding, sizes: theme.space }) : undefined,
		marginBottom: last ? -1 * size({ size: padding, sizes: theme.space }) : undefined
	};
</script>

<Box
	id="card_section"
	bind:element
	class={className}
	css={{ ...CardSectionStyles, ...override }}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
