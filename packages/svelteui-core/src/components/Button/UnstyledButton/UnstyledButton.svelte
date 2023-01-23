<script lang="ts">
	import useStyles from './UnstyledButton.styles';
	import { Box } from '../../Box';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { UnstyledButtonProps as $$UnstyledButtonProps } from './UnstyledButton';

	interface $$Props extends $$UnstyledButtonProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'button';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, getStyles } = useStyles(null, { name: "UnstyledButton" }));
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
