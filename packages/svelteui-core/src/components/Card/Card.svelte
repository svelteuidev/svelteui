<script lang="ts">
	import useStyles from './Card.styles';
	import { Paper } from '../Paper';
	import { onMount } from 'svelte';
	import type { CardProps } from './Card';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		padding = 'md',
		children,
		...rest
	}: CardProps = $props();

	/** can only get access to children at runtime */
	onMount(() => {
		const nodeLength = element.children.length;
		const firstChild = element.children[0] as HTMLDivElement;
		const lastChild = element.children[nodeLength - 1] as HTMLDivElement;

		if (firstChild?.id === 'svelteui_card_section') {
			firstChild.style.marginTop = `${-1 * theme.fn.size({ size: padding, sizes: theme.space })}px`;
		}
		if (lastChild?.id === 'svelteui_card_section') {
			// prettier-ignore
			lastChild.style.marginBottom = `${-1 * theme.fn.size({ size: padding, sizes: theme.space })}px`;
		}
	});

	let { cx, classes, theme } = $derived(useStyles(null, { name: 'Card' }));
</script>

<Paper
	bind:element
	class={cx(className, classes.root)}
	override={{
		[`${theme.dark} &`]: {
			backgroundColor: theme.fn.themeColor('dark', 6)
		},
		...override
	}}
	{padding}
	{use}
	{...rest}
>
	{@render children?.()}
</Paper>
