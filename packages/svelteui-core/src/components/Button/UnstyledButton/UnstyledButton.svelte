<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { Box } from '../../Box';
	import type { UnstyledButtonProps as $$UnstyledButtonProps } from './UnstyledButton';
	import { buildClass } from '$lib/styles';

	interface $$Props extends $$UnstyledButtonProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		style: $$Props['style'] = '',
		root: $$Props['root'] = 'button';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
</script>

<!-- TODO(migration): how to use box features and apply the class styles? -->
<Box
	bind:element
	use={[forwardEvents, [useActions, use]]}
	class={`${buildClass('UnstyledButton')} root ${className}`}
	{root}
	{...$$restProps}
	{style}
>
	<slot />
</Box>

<style>
	@import '$lib/styles/css/index.css';

	:is(.root) {
		cursor: pointer;
		border: 0;
		padding: 0;
		appearance: none;
		font-family: var(--fontFamily-standard);
		font-size: var(--fontSize-md);
		background-color: transparent;
		text-align: left;
		color: var(--black);
		text-decoration: none;
	}
</style>
