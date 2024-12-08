<script lang="ts">
	import { useActions } from '$lib/internal';
	import { Box } from '../../Box';
	import useStyles from './UnstyledButton.styles';
	import type { UnstyledButtonProps } from './UnstyledButton';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		root = 'button',
		children,
		...rest
	}: UnstyledButtonProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'UnstyledButton' }));
</script>

<Box
	bind:element
	use={[[useActions, use]]}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{root}
	{...rest}
>
	{@render children?.()}
</Box>
