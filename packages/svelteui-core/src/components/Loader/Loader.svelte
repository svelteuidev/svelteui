<script lang="ts">
	import { useActions } from '$lib/internal';
	import Circle from './loaders/Circle.svelte';
	import Bars from './loaders/Bars.svelte';
	import Dots from './loaders/Dots.svelte';
	import { LOADER_SIZES, getCorrectShade } from './Loader.styles';
	import type { LoaderProps } from './Loader';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		size = 'md',
		color = 'blue',
		variant = 'circle',
		...rest
	}: LoaderProps = $props();

	/** Loader logic */
	const LOADERS = {
		bars: Bars,
		circle: Circle,
		dots: Dots
	};

	const defaultLoader = variant in LOADERS ? variant : 'circle';

	const Component = $derived(LOADERS[defaultLoader]);
</script>

<Component
	bind:element
	use={[[useActions, use]]}
	color={color === 'white' ? 'white' : getCorrectShade(color)}
	size={LOADER_SIZES[size] || size}
	class={className}
	{...rest}
/>
