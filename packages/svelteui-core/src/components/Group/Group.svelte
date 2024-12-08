<script lang="ts">
	import { onMount } from 'svelte';

	import Box from '../Box/Box.svelte';
	import useStyles from './Group.styles';
	import type { GroupProps } from './Group';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		position = 'left',
		noWrap = false,
		grow = false,
		spacing = 'md',
		direction = 'row',
		align = 'center',
		children,
		...rest
	}: GroupProps = $props();

	let nrOfchildren: number = $state();

	/** can only get access to children at runtime */
	onMount(() => {
		nrOfchildren = element.childElementCount;
	});

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				align,
				children: nrOfchildren,
				direction,
				grow,
				noWrap,
				position,
				spacing
			},
			{ name: 'Group' }
		)
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
