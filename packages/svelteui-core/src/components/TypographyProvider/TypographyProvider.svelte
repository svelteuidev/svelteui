<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './TypographyProvider.styles';
	import type { TypographyProviderProps as $$TypographyProviderProps } from './TypographyProvider';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		primaryColor?: $$Props['primaryColor'];
		underline?: $$Props['underline'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		primaryColor = 'blue',
		underline = true,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
		{ primaryColor, underline },
		{ name: 'TypographyProvider' }
	));
</script>

<Box
	bind:element
	class={cx(className, classes.root, getStyles({ css: override }))}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
