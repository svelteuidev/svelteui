<script lang="ts">
	import { useSvelteUIThemeContext, useSvelteUITheme } from '$lib/styles';
	import type { CSS } from '$lib/styles';
	import { Text } from '../../Text';
	import type { TextProps } from '../../Text/Text';

	

	interface Props {
		className?: string;
		element?: $$Props['element'];
		class?: $$Props['className'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		element = $bindable(undefined),
		class: className = '',
		children,
		...rest
	}: Props = $props();
	

	const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
	const classes: CSS = {
		[`${theme.dark} &`]: {
			color: theme.fn.themeColor('dark', 2)
		},
		color: theme.fn.themeColor('gray', 6),
		fontWeight: 500,
		fontSize: theme.fontSizes.xs,
		padding: `${+theme.space.xs.value / 2}px ${+theme.space.sm.value}px`,
		cursor: 'default'
	};
</script>

<Text bind:element class={className} {...rest} override={classes}>
	{@render children?.()}
</Text>
