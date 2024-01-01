<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
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

	// @TODO(migration):figure out how to implement system styles
	// $: systemStyles = getSystemStyles(
	// 	{
	// 		m,
	// 		my,
	// 		mx,
	// 		mt,
	// 		mb,
	// 		ml,
	// 		mr,
	// 		p,
	// 		py,
	// 		px,
	// 		pt,
	// 		pb,
	// 		pl,
	// 		pr
	// 	},
	// 	theme
	// );
</script>

<!-- TODO(migration): how to use box features and apply the class styles? -->

<svelte:element
	this={root}
	bind:this={element}
	class:root
	class={`${buildClass('UnstyledButton')} ${className}`}
	{style}
	use:forwardEvents
	use:useActions={use}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style>
	@import '$lib/styles/css/index.css';

	.root {
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

	:global(:root[data-theme='dark']) .root {
		color: var(--dark50);
	}
</style>
