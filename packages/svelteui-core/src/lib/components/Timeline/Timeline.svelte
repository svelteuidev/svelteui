<script lang="ts" context="module">
	export const ctx = 'Timeline';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import useStyles from './Timeline.styles';
	import Box from '../Box/Box.svelte';
	import type { TimelineProps as $$TimelineProps } from './Timeline.styles';

	export let use: $$TimelineProps['use'] = [],
		element: $$TimelineProps['element'] = undefined,
		className: $$TimelineProps['className'] = '',
		override: $$TimelineProps['override'] = {},
		active: $$TimelineProps['active'] = -1,
		align: $$TimelineProps['align'] = 'left',
		bulletSize: $$TimelineProps['bulletSize'] = 20,
		radius: $$TimelineProps['radius'] = 'xl',
		color: $$TimelineProps['color'] = 'blue',
		lineWidth: $$TimelineProps['lineWidth'] = 4,
		reverseActive: $$TimelineProps['reverseActive'] = false;
	export { className as class };

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore = writable({
		active: active,
		reverseActive: reverseActive,
		align: align,
		bulletSize: bulletSize,
		radius: radius,
		color: color,
		lineWidth: lineWidth
	});
	setContext(ctx, contextStore);
	$: $contextStore = {
		active: active,
		reverseActive: reverseActive,
		align: align,
		bulletSize: bulletSize,
		radius: radius,
		color: color,
		lineWidth: lineWidth
	};

	$: ({ cx, classes } = useStyles({ align, bulletSize, lineWidth }, { override }));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display list of events in chronological order
	
@see https://svelteui.org/core/timeline
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
<Box bind:element {use} class={cx(className, classes.root)} {...$$restProps}>
	<slot />
</Box>
