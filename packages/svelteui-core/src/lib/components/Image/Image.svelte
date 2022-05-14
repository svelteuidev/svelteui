<script lang="ts">
	import ImageIcon from './ImageIcon.svelte';
	import { css } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/internal';
	import type { ImageProps as $$ImageProps } from './Image.styles';

	/** Override prop for custom theming the component's placeholder */
	export let override: $$ImageProps['override'] = {};
	/** Override prop for custom theming the component's placeholder */
	export let overridePlaceholder: $$ImageProps['overridePlaceholder'] = {};
	/** Predefined switch radius size */
	export let radius: $$ImageProps['radius'] = 0;
	/** Used for custom classes to be applied to the switch e.g. Tailwind classes */
	export let className: $$ImageProps['className'] = '';
	export { className as class };
	/** The image src to be used */
	export let src: $$ImageProps['src'] = undefined;
	/** The image alt text, used as placeholder if the image is not loaded */
	export let alt: $$ImageProps['alt'] = '';
	/** The object-fit option to be used by the image, defaults to 'cover' */
	export let fit: $$ImageProps['fit'] = 'cover';
	/** The width of the image that defaults to 100% */
	export let width: $$ImageProps['width'] = undefined;
	/** The height of the image that defaults to the original image height adjusted to the width */
	export let height: $$ImageProps['height'] = undefined;
	/** The caption of the image, will show below it if defined */
	export let caption: $$ImageProps['caption'] = undefined;
	/** Defaults to a placeholder if the image has not yet loaded or an error occured */
	export let usePlaceholder: $$ImageProps['usePlaceholder'] = false;
	// --------------------------------------------

	/* Image logic */
	let loaded: boolean = false;
	let error: boolean = false;
	let showPlaceholder: boolean = false;

	$: showPlaceholder = usePlaceholder && (!loaded || error);

	function onLoad() {
		loaded = true;
	}

	function onError() {
		error = true;
	}

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Css function to generate image styles */
	$: ImageStyles = css({
		focusRing: 'auto',
		borderRadius: `$${radius}`,
		width: width !== undefined ? width : '100%',
		height: height !== undefined ? height : 'auto',
		objectFit: fit
	});

	/** Css function to generate image placeholder styles */
	$: PlaceholderStyles = css({
		focusRing: 'auto',
		color: 'White',
		backgroundColor: `$gray400`,
		borderRadius: `$${radius}`,
		width: width !== undefined ? width : '100%',
		height: height !== undefined ? height : 'auto',
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		left: 0
	});

	$: FigureStyles = css({
		focusRing: 'auto',
		position: 'relative',
		margin: '0px',
		textAlign: 'center'
	});

	$: CaptionStyles = css({
		focusRing: 'auto',
		fontSize: '14px',
		lineHeight: '14px',
		textAlign: 'center',
		marginTop: '10px'
	});
</script>

<!--
@component

Dynamic Image component with optional placeholder for loading and error state

@see https://svelteui.org/core/image
@example
    ```tsx
    <Image src="https://images.unsplash.com/photo-1561046259-7d5b6e929ba0"/> // standard image
    <Image src="https://images.unsplash.com/photo-1561046259-7d5b6e929ba0" alt="Doggo" width={100} caption="Very cool doggo" /> // standard image with width and caption
    <Image src="" alt="Doggo" usePlaceholder /> // standard image that shows placeholder when it fails to load
    ```
-->
<figure class="{FigureStyles()} {className}">
	<img
		use:forwardEvents
		class="image {ImageStyles({ css: override })}"
		{src}
		{alt}
		on:load={onLoad}
		on:error={onError}
	/>
	{#if showPlaceholder}
		<div class="placeholder {PlaceholderStyles({ css: overridePlaceholder })}">
			<slot name="placeholder">
				<ImageIcon style={{ width: 40, height: 40 }} />
			</slot>
		</div>
	{/if}
	{#if caption}
		<figcaption class={CaptionStyles()}>
			{caption}
		</figcaption>
	{/if}
</figure>

<style>
	.image {
		display: block;
	}
</style>
