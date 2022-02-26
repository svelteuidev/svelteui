<script lang="ts">
	import { theme } from '$lib/_internal';
	import type { LoaderPropsExtended } from './Loader.styles';
	import { LOADER_SIZES } from './Loader.styles';
	import Circle from '$lib/Loader/loaders/Circle.svelte';
	import Bars from '$lib/Loader/loaders/Bars.svelte';
	import Dots from '$lib/Loader/loaders/Dots.svelte';

	/** Necessary to extract store into functional syntax */
	const obj = { theme: $theme };
	const { theme: _theme } = obj;

	/** Props declaration */
	export let size: LoaderPropsExtended['size'] | number = 'md';
	export let color: LoaderPropsExtended['color'] = 'blue';
	export let variant: LoaderPropsExtended['variant'] = 'circle';

	const LOADERS = {
		bars: Bars,
		circle: Circle,
		dots: Dots
	};

	const defaultLoader = variant in LOADERS ? variant : _theme.loader;
</script>

<!--
@component
The Loader component creates a loading icon. There are three different Loaders with the circle as the default.

@see https://svelteui-docs.vercel.app/core/loader
@example
    ```tsx
    <Loader color='green' size='lg' variant='bars' />
    ```
-->
<svelte:component
	this={LOADERS[defaultLoader]}
	color={color === 'white' ? _theme.white : _theme.colors[color][6]}
	size={LOADER_SIZES[size]}
	{...$$restProps}
/>
