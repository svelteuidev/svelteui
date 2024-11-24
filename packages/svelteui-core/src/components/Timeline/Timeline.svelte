<script lang="ts" module>
	export const ctx = 'Timeline';
</script>

<script lang="ts">
	import { run } from 'svelte/legacy';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Box from '../Box/Box.svelte';
	import useStyles from './Timeline.styles';
	import type { TimelineContext, TimelineProps as $$TimelineProps } from './Timeline';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		active?: $$Props['active'];
		align?: $$Props['align'];
		bulletSize?: $$Props['bulletSize'];
		radius?: $$Props['radius'];
		color?: $$Props['color'];
		lineWidth?: $$Props['lineWidth'];
		reverseActive?: $$Props['reverseActive'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
	}: Props = $props();
	

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
	run(() => {
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

	let { cx, classes } = $derived(useStyles(
		{ align, bulletSize, lineWidth },
		{ override, name: 'Timeline' }
	));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display list of events in chronological order

@see https://svelteui.dev/core/timeline
@example
    ```svelte
    <Timeline>
      <Timeline.Item>
		...
	  </Timeline.Item>
      <Timeline.Item>
		...
	  </Timeline.Item>
	  ...
    </Timeline>

	<Timeline active={1} bulletSize={30} align='right' reverseActive>
        ...
    </Timeline>
    ```
-->
<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	{@render children?.()}
</Box>
