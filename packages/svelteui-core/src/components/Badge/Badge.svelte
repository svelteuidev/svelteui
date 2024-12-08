<script lang="ts">
	import useStyles from './Badge.styles';
	import { useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import type { BadgeProps } from './Badge';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = 'blue',
		variant = 'light',
		gradient = { from: 'blue', to: 'cyan', deg: 45 },
		size = 'md',
		radius = 'xl',
		fullWidth = false,
		leftSection,
		children,
		rightSection,
		...rest
	}: BadgeProps = $props();

	let { cx, classes } = $derived(
		useStyles(
			{
				color,
				fullWidth,
				size,
				radius,
				gradientDeg: gradient.deg,
				gradientFrom: gradient.from,
				gradientTo: gradient.to
			},
			{ override, name: 'Badge' }
		)
	);
</script>

<Box use={[[useActions, use]]} bind:element class={cx(className, variant, classes.root)} {...rest}>
	{#if leftSection}
		<span class={classes.leftSection}>
			{@render leftSection?.()}
		</span>
	{/if}
	<span class={classes.inner}>{@render children?.()}</span>
	{#if rightSection}
		<span class={classes.rightSection}>
			{@render rightSection?.()}
		</span>
	{/if}
</Box>
