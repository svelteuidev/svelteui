<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Circle from './loaders/Circle.svelte';
	import Bars from './loaders/Bars.svelte';
	import Dots from './loaders/Dots.svelte';
	import { LOADER_SIZES, getCorrectShade } from './Loader.styles';
	import type { LoaderProps as $$LoaderProps } from './Loader';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		size?: $$Props['size'];
		color?: $$Props['color'];
		variant?: $$Props['variant'];
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		size = 'md',
		color = 'blue',
		variant = 'circle',
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Loader logic */
	const LOADERS = {
		bars: Bars,
		circle: Circle,
		dots: Dots
	};

	const defaultLoader = variant in LOADERS ? variant : 'circle';

	const SvelteComponent = $derived(LOADERS[defaultLoader]);
</script>

<!--
@component
The Loader component creates a loading icon. There are three different Loaders with the circle as the default.

@see https://svelteui.dev/core/loader
@example
    ```tsx
    <Loader color='green' size='lg' variant='bars' />
    ```
-->
<SvelteComponent
	bind:this={element}
	use={[forwardEvents, [useActions, use]]}
	color={color === 'white' ? 'white' : getCorrectShade(color)}
	size={LOADER_SIZES[size] || size}
	class={className}
	{...rest}
/>
