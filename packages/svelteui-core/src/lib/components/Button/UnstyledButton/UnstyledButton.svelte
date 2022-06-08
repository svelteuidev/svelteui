<script lang="ts">
	import useStyles from './UnstyledButton.styles';
	import { Box } from '../../Box';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { UnstyledButtonProps as $$UnstyledButtonProps } from './UnstyledButton.styles';

	export let use: $$UnstyledButtonProps['use'] = [],
		element: $$UnstyledButtonProps['element'] = undefined,
		className: $$UnstyledButtonProps['className'] = '',
		override: $$UnstyledButtonProps['override'] = {},
		root: $$UnstyledButtonProps['root'] = 'button';
	export { className as class };

    console.log("class", className);

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, getStyles } = useStyles());
</script>

<Box
	bind:element
	use={[forwardEvents, [useActions, use]]}
	class={cx(className, getStyles({ css: override }))}
	{root}
	{...$$restProps}
>
	<slot />
</Box>
