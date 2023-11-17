<script lang="ts">
	import { useSvelteUIThemeContext, useSvelteUITheme } from '$lib/styles-old';
	import type { CSS } from '$lib/styles-old';
	import { Text } from '../../Text';
	import type { TextProps } from '../../Text/Text';

	interface $$Props extends Omit<TextProps, 'className'> {
		className?: string;
	}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '';
	export { className as class };

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

<Text bind:element class={className} {...$$restProps} override={classes}>
	<slot />
</Text>
