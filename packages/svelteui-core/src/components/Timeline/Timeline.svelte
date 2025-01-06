<script lang="ts" module>
	export const ctx = 'Timeline';
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	import Box from '../Box/Box.svelte';
	import useStyles from './Timeline.styles';
	import type { TimelineContext, TimelineProps } from './Timeline';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		active = -1,
		align = 'left',
		bulletSize = 20,
		radius = 'xl',
		color = 'blue',
		lineWidth = 4,
		reverseActive = false,
		children,
		...rest
	}: TimelineProps = $props();

	const contextStore: TimelineContext = $derived({
		active: active,
		reverseActive: reverseActive,
		align: align,
		bulletSize: bulletSize,
		radius: radius,
		color: color,
		lineWidth: lineWidth
	});
	setContext(ctx, () => contextStore);

	let { cx, classes } = $derived(
		useStyles({ align, bulletSize, lineWidth }, { override, name: 'Timeline' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	{@render children?.()}
</Box>
