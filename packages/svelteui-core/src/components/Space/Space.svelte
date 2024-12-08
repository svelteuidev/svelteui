<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './Space.styles';
	import type { SpaceProps } from './Space';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		w = 0,
		h = 0,
		children,
		...rest
	}: SpaceProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles({ h, w }, { name: 'Space' }));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
