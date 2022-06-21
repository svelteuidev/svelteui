<script lang="ts">
	import useStyles, { getCumulativeSections } from './Progress.styles';
	import { tweened } from 'svelte/motion';
	import { Box } from '../Box';
	import { Text } from '../Text';
	import { randomID } from '$lib/styles';
	import { cubicOut } from 'svelte/easing';

	import type { ProgressProps as $$ProgressProps } from './Progress.styles';

	export let use: $$ProgressProps['use'] = [],
		element: $$ProgressProps['element'] = undefined,
		className: $$ProgressProps['className'] = '',
		override: $$ProgressProps['override'] = {},
		value: $$ProgressProps['value'] = undefined,
		color: $$ProgressProps['color'] = undefined,
		size: $$ProgressProps['size'] = 'md',
		radius: $$ProgressProps['radius'] = 'sm',
		striped: $$ProgressProps['striped'] = false,
		animate: $$ProgressProps['animate'] = false,
		label: $$ProgressProps['label'] = '',
		sections: $$ProgressProps['sections'] = undefined,
		shade: $$ProgressProps['shade'] = 6,
		ariaLabel: $$ProgressProps['ariaLabel'] = randomID(),
		tween: $$ProgressProps['tween'] = false,
		tweenOptions: $$ProgressProps['tweenOptions'] = {};
	export { className as class };

	const defaultTweenOptions = { delay: 0, duration: 400, easing: cubicOut };
	const segments = Array.isArray(sections);
	const progress = tweened(undefined, { ...defaultTweenOptions, ...tweenOptions });

	$: progress.set(value);
	$: ({ cx, classes, getStyles, theme } = useStyles({
		animate,
		color,
		radius,
		size,
		shade,
		striped: striped || animate
	}));
</script>

<Box bind:element {use} class={cx(className, getStyles({ css: override }))}>
	{#if segments}
		{#each getCumulativeSections(sections) as section}
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
