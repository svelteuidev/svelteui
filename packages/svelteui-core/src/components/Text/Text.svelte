<script lang="ts">
	import { useActions } from '$lib/internal';
	import { Box } from '../Box';
	import useStyles from './Text.styles';
	import type { TextProps } from './Text';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		align = 'left',
		color = 'dark',
		root = undefined,
		transform = 'none',
		variant = 'text',
		size = 'md',
		weight = 'normal',
		gradient = { from: 'indigo', to: 'cyan', deg: 45 },
		inline = true,
		lineClamp = undefined,
		underline = false,
		inherit = false,
		href = '',
		tracking = 'normal',
		children,
		...rest
	}: TextProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				lineClamp,
				underline,
				inline,
				inherit,
				gradient,
				variant,
				align,
				color,
				transform,
				size,
				weight,
				tracking
			},
			{ name: 'Text' }
		)
	);
</script>

<Box
	{root}
	bind:element
	use={[[useActions, use]]}
	class={cx(className, classes.root, getStyles({ css: override }))}
	href={href ?? undefined}
	{...rest}
>
	{@render children?.()}
</Box>
