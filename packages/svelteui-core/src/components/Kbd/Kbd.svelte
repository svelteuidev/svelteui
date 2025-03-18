<script lang="ts">
	import useStyles from './Kbd.styles';
	import { Box } from '../Box';
	import type { KbdProps } from './Kbd';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		children,
		...rest
	}: KbdProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'Kbd' }));
</script>

<Box
	bind:element
	root="kbd"
	class={cx(className, classes.root, getStyles({ css: override }))}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
