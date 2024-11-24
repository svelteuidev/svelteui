<script lang="ts">
	import useStyles from './UnstyledButton.styles';
	import { Box } from '../../Box';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { UnstyledButtonProps as $$UnstyledButtonProps } from './UnstyledButton';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		root?: $$Props['root'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		root = 'button',
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'UnstyledButton' }));
</script>

<Box
	bind:element
	use={[forwardEvents, [useActions, use]]}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{root}
	{...rest}
>
	{@render children?.()}
</Box>
