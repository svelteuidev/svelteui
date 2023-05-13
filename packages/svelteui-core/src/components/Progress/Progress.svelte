<script lang="ts">
	import useStyles, { getCumulativeSections } from './Progress.styles';
	import { tweened } from 'svelte/motion';
	import { Box } from '../Box';
	import { Text } from '../Text';
	import { randomID } from '$lib/styles';
	import { cubicOut } from 'svelte/easing';
	import type { ProgressProps as $$ProgressProps } from './Progress';

	interface $$Props extends $$ProgressProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		value: $$Props['value'] = undefined,
		color: $$Props['color'] = undefined,
		size: $$Props['size'] = 'md',
		radius: $$Props['radius'] = 'sm',
		striped: $$Props['striped'] = false,
		animate: $$Props['animate'] = false,
		label: $$Props['label'] = '',
		sections: $$Props['sections'] = undefined,
		shade: $$Props['shade'] = 6,
		ariaLabel: $$Props['ariaLabel'] = randomID(),
		tween: $$Props['tween'] = false,
		tweenOptions: $$Props['tweenOptions'] = {};
	export { className as class };

	const defaultTweenOptions = { delay: 0, duration: 400, easing: cubicOut };
	const progress = tweened(undefined, { ...defaultTweenOptions, ...tweenOptions });

	$: segments = Array.isArray(sections);
	$: progress.set(value);
	$: ({ cx, classes, getStyles, theme } = useStyles(
		{
			animate,
			color,
			radius,
			size,
			shade,
			striped: striped || animate
		},
		{ name: 'Progress' }
	));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))}>
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
			{#if $$slots.label}
				<slot name="label" />
			{:else if label}
				<Text class={classes.label}>{label}</Text>
			{/if}
		</div>
	{/if}
</Box>
