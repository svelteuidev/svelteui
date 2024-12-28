<script lang="ts" module>
	export const ctx = 'Timeline';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

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

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore: TimelineContext = writable({
		active: active,
		reverseActive: reverseActive,
		align: align,
		bulletSize: bulletSize,
		radius: radius,
		color: color,
		lineWidth: lineWidth
	});
	setContext(ctx, contextStore);
	$effect.pre(() => {
		$contextStore = {
			active: active,
			reverseActive: reverseActive,
			align: align,
			bulletSize: bulletSize,
			radius: radius,
			color: color,
			lineWidth: lineWidth
		};
	});

	let { cx, classes } = $derived(
		useStyles({ align, bulletSize, lineWidth }, { override, name: 'Timeline' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	{@render children?.()}
</Box>
