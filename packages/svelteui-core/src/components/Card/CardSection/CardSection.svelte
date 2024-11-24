<script lang="ts">
	import useStyles from './CardSection.styles';
	import { Box } from '../../Box';
	import type { CardSectionProps as $$CardSectionProps } from './CardSection';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		padding?: $$Props['padding'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		padding = 'md',
		children,
		...rest
	}: Props = $props();
	

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
