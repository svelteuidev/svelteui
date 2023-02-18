<script lang="ts">
	import useStyles from './ResultView.styles';
	import { Box } from '../Box';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import type { ResultViewProps as $$ResultViewProps } from './ResultView';

	interface $$Props extends $$ResultViewProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = 'blue',
		override: $$Props['override'] = {},
		title: $$Props['title'] = undefined,
		subtitle: $$Props['subtitle'] = undefined,
		color: $$Props['color'] = 'green',
		size: $$Props['size'] = 'sm',
		icon: $$Props['icon'] = undefined,
		iconSize: $$Props['iconSize'] = 80,
		iconProps: $$Props['iconProps'] = {};
	export { className as class };

	$: ({ cx, classes } = useStyles({ color, size }, { name: 'ResultView', override }));
</script>

<Box {use} bind:element role="ResultView" class={cx(className, classes.root)} {...$$restProps}>
	<div class={classes.wrapper}>
		<IconRenderer {icon} className={classes.icon} {iconSize} {...iconProps} />

		<div class={classes.content}>
			{#if title}
				<div class={classes.title}>
					{title}
				</div>
			{/if}
			{#if subtitle}
				<div class={classes.subtitle}>
					{subtitle}
				</div>
			{/if}
		</div>
		{#if $$slots.default}
			<div class={classes.innerContent}>
				<slot />
			</div>
		{/if}
		{#if $$slots.extra}
			<div class={classes.extra}>
				<slot name="extra" />
			</div>
		{/if}
	</div>
</Box>
