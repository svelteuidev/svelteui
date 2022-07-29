<script lang="ts">
	import useStyles from './Card.styles';
	import { Paper } from '../Paper';
	import { onMount } from 'svelte';
	import type { CardProps as $$CardProps } from './Card.styles';

  interface $$Props extends $$CardProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		padding: $$Props['p'] = 'md';
	export { className as class };
	export { padding as p };

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

	$: ({ cx, getStyles, theme } = useStyles());
</script>

<Paper
	bind:element
	class={cx(className, getStyles({ css: override }))}
	p={padding}
	{use}
	{...$$restProps}
>
	<slot />
</Paper>
