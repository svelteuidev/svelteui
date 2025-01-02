<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { randomID } from '$lib/styles';

	import { Box } from '../Box';
	import { Text } from '../Text';
	import type { ProgressProps } from './Progress';
	import useStyles, { getCumulativeSections } from './Progress.styles';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		value = $bindable(undefined),
		color = undefined,
		size = 'md',
		radius = 'sm',
		striped = false,
		animate = false,
		labelText = '',
		sections = undefined,
		shade = 6,
		ariaLabel = randomID(),
		tween = false,
		tweenOptions = {},
		label,
		...rest
	}: ProgressProps = $props();

	const defaultTweenOptions = { delay: 0, duration: 400, easing: cubicOut };
	const progress = tweened(undefined, { ...defaultTweenOptions, ...tweenOptions });

	let segments = $derived(Array.isArray(sections));
	$effect.pre(() => {
		progress.set(value);
	});

	let { cx, classes, getStyles, theme } = $derived(
		useStyles(
			{
				animate,
				color,
				radius,
				size,
				shade,
				striped: striped || animate
			},
			{ name: 'Progress' }
		)
	);
</script>

0<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	{#if segments}
		{#each getCumulativeSections(sections) as section (section)}
			<Box
				class={classes.bar}
				css={{
					width: `${tween ? $progress : section.value}% !important`,
					left: `${section.accumulated}% !important`,
					backgroundColor: `${theme.fn.themeColor(section.color, shade)} !important`
				}}
			>
				{#if section.label}
					<Text class={classes.label}>{section.label}</Text>
				{/if}
			</Box>
		{/each}
	{:else}
		<div
			class={classes.bar}
			role="progressbar"
			aria-valuemax={100}
			aria-valuemin={0}
			aria-valuenow={value}
			aria-label={ariaLabel}
			style={`width:${tween ? $progress : value}%`}
		>
			{#if label}
				{@render label()}
			{:else if labelText}
				<Text class={classes.label}>{labelText}</Text>
			{/if}
		</div>
	{/if}
</Box>
