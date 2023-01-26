<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Circle from './loaders/Circle.svelte';
	import Bars from './loaders/Bars.svelte';
	import Dots from './loaders/Dots.svelte';
	import { LOADER_SIZES, getCorrectShade } from './Loader.styles';
	import type { LoaderProps as $$LoaderProps } from './Loader';

	interface $$Props extends $$LoaderProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		size: $$Props['size'] = 'md',
		color: $$Props['color'] = 'blue',
		variant: $$Props['variant'] = 'circle';
	export { className as class };

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
	class={className}
	{...$$restProps}
/>
