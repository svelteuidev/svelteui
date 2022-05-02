<script lang="ts">
	import Circle from '$lib/components/Loader/loaders/Circle.svelte';
	import Bars from '$lib/components/Loader/loaders/Bars.svelte';
	import Dots from '$lib/components/Loader/loaders/Dots.svelte';
	import { LOADER_SIZES, getCorrectShade } from './Loader.styles';
	import type { LoaderProps as $$LoaderProps } from './Loader.styles';

	/** Defines width of loader */
	export let size: $$LoaderProps['size'] | number = 'md';
	/** Loader color from theme */
	export let color: $$LoaderProps['color'] = 'blue';
	/** Loader appearance */
	export let variant: $$LoaderProps['variant'] = 'circle';

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

@see https://svelteui-docs.vercel.app/docs/core/loader
@example
    ```tsx
    <Loader color='green' size='lg' variant='bars' />
    ```
-->
<svelte:component
	this={LOADERS[defaultLoader]}
	color={color === 'white' ? 'white' : getCorrectShade(color)}
	size={LOADER_SIZES[size]}
	{...$$restProps}
/>
