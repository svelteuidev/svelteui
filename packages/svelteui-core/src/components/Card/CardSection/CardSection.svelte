<script lang="ts">
	import useStyles from './CardSection.styles';
	import { Box } from '../../Box';
	import type { CardSectionProps } from './CardSection';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		padding = 'md',
		children,
		...rest
	}: CardSectionProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles({ padding }));
</script>

<Box
	id="svelteui_card_section"
	bind:element
	class={cx(className, classes.root, getStyles({ css: override }))}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
