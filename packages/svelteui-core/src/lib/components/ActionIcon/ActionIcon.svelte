<script lang="ts">
	import useStyles from './ActionIcon.styles';
	import { ActionIconErrors } from './ActionIcon.errors';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Loader from '../Loader/Loader.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { ActionIconProps as $$ActionIconProps } from './ActionIcon.styles';

	export let use: $$ActionIconProps['use'] = [],
		element: $$ActionIconProps['element'] = undefined,
		className: $$ActionIconProps['className'] = '',
		override: $$ActionIconProps['override'] = {},
		root: $$ActionIconProps['root'] = 'button',
		color: $$ActionIconProps['color'] = 'gray',
		variant: $$ActionIconProps['variant'] = 'hover',
		size: $$ActionIconProps['size'] = 'md',
		radius: $$ActionIconProps['radius'] = 'sm',
		loaderProps: $$ActionIconProps['loaderProps'] = {
			size: 'xs',
			color: 'gray',
			variant: 'circle'
		},
		loading: $$ActionIconProps['loading'] = false,
		disabled: $$ActionIconProps['disabled'] = false,
		href: $$ActionIconProps['href'] = '',
		external: $$ActionIconProps['external'] = false;
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
	$: ({ cx, getStyles } = useStyles({ color, radius, size, variant }));
</script>

<Error {observable} component="ActionIcon" code={err} />

<!--
@component

Icon button to indicate secondary action.

@see https://svelteui.org/core/action-icon
@example
    ```tsx
    <ActionIcon>Click</ActionIcon> // standard ActionIcon
    <ActionIcon color="red" /> // red ActionIcon
    <ActionIcon variant="default"><Discord></ActionIcon> // default variant with an icon
    ```
-->
<!-- prettier-ignore -->
<svelte:element
	this={root}
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	class:loading
	class:disabled
	tabindex="0"
	disabled={disabled || loading}
	class={cx(className, getStyles({ css: override, variation: variant }))}
	target={external ? '_blank' : null}
	rel={external ? 'noreferrer noopener' : null}
	{href}
	{...$$restProps}
>
	{#if loading}
		<Loader size={loaderProps.size} color={loaderProps.color} variant={loaderProps.variant} />
	{:else}
		<slot>+</slot>
	{/if}
</svelte:element>
