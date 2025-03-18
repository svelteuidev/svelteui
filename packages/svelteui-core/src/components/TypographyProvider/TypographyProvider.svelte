<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './TypographyProvider.styles';
	import type { TypographyProviderProps } from './TypographyProvider';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		primaryColor = 'blue',
		underline = true,
		children,
		...rest
	}: TypographyProviderProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ primaryColor, underline }, { name: 'TypographyProvider' })
	);
</script>

<Box bind:element class={cx(className, classes.root, getStyles({ css: override }))} {use} {...rest}>
	{@render children?.()}
</Box>
