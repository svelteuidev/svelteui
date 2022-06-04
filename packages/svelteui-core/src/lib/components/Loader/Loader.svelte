<script lang="ts">
	import Circle from '$lib/components/Loader/loaders/Circle.svelte';
	import Bars from '$lib/components/Loader/loaders/Bars.svelte';
	import Dots from '$lib/components/Loader/loaders/Dots.svelte';
	import { LOADER_SIZES, getCorrectShade } from './Loader.styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { LoaderProps as $$LoaderProps } from './Loader.styles';

	/** Used for forwarding actions from component */
	export let use: $$LoaderProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$LoaderProps['element'] = undefined;
	/** Defines width of loader */
	export let size: $$LoaderProps['size'] | number = 'md';
	/** Loader color from theme */
	export let color: $$LoaderProps['color'] = 'blue';
	/** Loader appearance */
	export let variant: $$LoaderProps['variant'] = 'circle';

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Loader logic */
	const LOADERS = {
		bars: Bars,
		circle: Circle,
		dots: Dots
	};

	const defaultLoader = variant in LOADERS ? variant : 'circle';
</script>

<!--
@component
The Loader component creates a loading icon. There are three different Loaders with the circle as the default.

@see https://svelteui.org/core/loader
@example
    ```tsx
    <Loader color='green' size='lg' variant='bars' />
    ```
-->
<svelte:component
	this={LOADERS[defaultLoader]}
	bind:this={element}
	use={[forwardEvents, [useActions, use]]}
	color={color === 'white' ? 'white' : getCorrectShade(color)}
	size={LOADER_SIZES[size]}
	{...$$restProps}
/>
