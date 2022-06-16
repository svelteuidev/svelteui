<script lang="ts">
	import useStyles from './CardSection.styles';
	import { Box } from '../../Box';
	import type { CardSectionProps as $$CardSectionProps } from './CardSection.styles';

	export let use: $$CardSectionProps['use'] = [],
		element: $$CardSectionProps['element'] = undefined,
		className: $$CardSectionProps['className'] = '',
		override: $$CardSectionProps['override'] = {},
		padding: $$CardSectionProps['padding'] = 'md';
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ padding }));
</script>

<Box
	id="svelteui_card_section"
	bind:element
	class={cx(className, getStyles({ css: override }))}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
