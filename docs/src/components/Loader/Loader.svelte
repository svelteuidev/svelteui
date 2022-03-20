<script >import { theme } from '../_internal';
import { LOADER_SIZES } from './Loader.styles';
import Circle from './loaders/Circle.svelte';
import Bars from './loaders/Bars.svelte';
import Dots from './loaders/Dots.svelte';
/** Necessary to extract store into functional syntax */
const obj = { theme: $theme };
const { theme: _theme } = obj;
/** Props declaration */
export let size = 'md';
export let color = 'blue';
export let variant = 'circle';
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
