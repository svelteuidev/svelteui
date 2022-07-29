<script lang="ts">
	import useStyles from './CardSection.styles';
	import { Box } from '../../Box';
	import type { CardSectionProps as $$CardSectionProps } from './CardSection.styles';

  interface $$Props extends $$CardSectionProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		padding: $$Props['padding'] = 'md';
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
