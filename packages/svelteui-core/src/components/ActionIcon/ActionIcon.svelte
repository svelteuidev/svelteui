<script lang="ts">
	import useStyles from './ActionIcon.styles';
	import { ActionIconErrors } from './ActionIcon.errors';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { Box } from '../Box';
	import Loader from '../Loader/Loader.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { ActionIconProps as $$ActionIconProps } from './ActionIcon';

	interface $$Props extends $$ActionIconProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'button',
		color: $$Props['color'] = 'gray',
		variant: $$Props['variant'] = 'hover',
		size: $$Props['size'] = 'md',
		radius: $$Props['radius'] = 'sm',
		loaderProps: $$Props['loaderProps'] = {
			size: 'xs',
			color: 'gray',
			variant: 'circle'
		},
		loading: $$Props['loading'] = false,
		disabled: $$Props['disabled'] = false,
		href: $$Props['href'] = '',
		external: $$Props['external'] = false;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (root !== 'a' && $$props.href) {
		observable = true;
		err = ActionIconErrors[0];
	}
	$: if (observable) override = { display: 'none' };
	// --------------End Error Handling-------------------
	$: ({ cx, classes, getStyles } = useStyles({ color, radius, size }, { name: 'ActionIcon' }));
</script>

<Error {observable} component="ActionIcon" code={err} />

<!--
@component

Icon button to indicate secondary action.

@see https://svelteui.dev/core/action-icon
@example
    ```tsx
    <ActionIcon>Click</ActionIcon> // standard ActionIcon
    <ActionIcon color="red" /> // red ActionIcon
    <ActionIcon variant="default"><Discord></ActionIcon> // default variant with an icon
    ```
-->

<Box
	bind:element
	use={[forwardEvents, [useActions, use]]}
	tabindex={0}
	disabled={disabled || loading}
	class={cx(
		className,
		classes.root,
		{ [classes.loading]: loading },
		getStyles({ css: override, variation: variant })
	)}
	target={external ? '_blank' : null}
	rel={external ? 'noreferrer noopener' : null}
	{root}
	{href}
	on:click
	{...$$restProps}
>
	{#if loading}
		<Loader size={loaderProps.size} color={loaderProps.color} variant={loaderProps.variant} />
	{:else}
		<slot>+</slot>
	{/if}
</Box>
