<script lang="ts">
	import useStyles from './Center.styles';
	import Box from '../Box/Box.svelte';
	import type { CenterProps } from './Center';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		inline = false,
		children,
		...rest
	}: CenterProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles({ inline }, { name: 'Center' }));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
