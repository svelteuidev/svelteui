<script lang="ts">
	import useStyles from './CardSection.styles';
	import { Box } from '../../Box';
	import type { CardSectionProps as $$CardSectionProps } from './CardSection.styles';

	export let use: $$CardSectionProps['use'] = [],
		element: $$CardSectionProps['element'] = undefined,
		className: $$CardSectionProps['className'] = '',
		override: $$CardSectionProps['override'] = {},
		padding: $$CardSectionProps['padding'] = 'md',
		first: $$CardSectionProps['first'] = false,
		last: $$CardSectionProps['last'] = false;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ first, last, padding }));
</script>

<Box
	id="card_section"
	bind:element
	class={cx(className, getStyles({ css: override }))}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
