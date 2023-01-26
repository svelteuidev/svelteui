<script lang="ts" context="module">
	export const ctx = 'Timeline';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Box from '../Box/Box.svelte';
	import useStyles from './Timeline.styles';
	import type { TimelineContext, TimelineProps as $$TimelineProps } from './Timeline';

	interface $$Props extends $$TimelineProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		active: $$Props['active'] = -1,
		align: $$Props['align'] = 'left',
		bulletSize: $$Props['bulletSize'] = 20,
		radius: $$Props['radius'] = 'xl',
		color: $$Props['color'] = 'blue',
		lineWidth: $$Props['lineWidth'] = 4,
		reverseActive: $$Props['reverseActive'] = false;
	export { className as class };

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
