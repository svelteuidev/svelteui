<script lang="ts">
    import ImageIcon from './ImageIcon.svelte';
	import { css } from '$lib/_styles/index';
    import { radius as radiusSizes } from './Image.styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/_internal';
	import type { Override, SvelteuiNumberSize } from '$lib/_styles';

	// --------------------------------------------
	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** Override prop for custom theming the component's placeholder */
	export let overridePlaceholder: Override['props'] = {};
    /** Predefined switch radius size */
	export let radius: SvelteuiNumberSize = 0;

	// --------------Basic types-------------------
	/** Used for custom classes to be applied to the switch e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };
	/** The image src to be used */
	export let src: string = undefined;
	/** The image alt text, used as placeholder if the image is not loaded */
	export let alt: string = '';
	/** The object-fit option to be used by the image, defaults to 'cover' */
	export let fit: string = 'cover';
	/** The width of the image that defaults to 100% */
	export let width: string | number = undefined;
	/** The height of the image that defaults to the original image height adjusted to the width */
	export let height: string | number = undefined;
	/** The caption of the image, will show below it if defined */
	export let caption: string = undefined;
	/** Defaults to a placeholder if the image has not yet loaded or an error occured */
	export let usePlaceholder: boolean = false;
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

	/** An action that forwards inner dom node events to parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	/** Css function to generate image styles */
	const ImageStyles = css({
		borderRadius: radiusSizes[radius],
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "auto",
        objectFit: fit
	});
	/** Css function to generate image placeholder styles */
	const PlaceholderStyles = css({
        color: 'White',
		backgroundColor: `$gray400`,
		borderRadius: radiusSizes[radius],
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "auto"
	});
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

A user can use this component to show an image.

@see https://svelteui-docs.vercel.app/docs/core/image
@example
    ```tsx
    <Image src="https://images.unsplash.com/photo-1561046259-7d5b6e929ba0"/> // standard image
    <Image src="https://images.unsplash.com/photo-1561046259-7d5b6e929ba0" alt="Doggo" width={100} caption="Very cool doggo" /> // standard image with width and caption
    <Image src="" alt="Doggo" use-placeholder={true} /> // standard image that shows placeholder when it fails to load
    ```
-->
<div class="image-wrapper {className}">
    <figure class="figure">
        <img
            use:forwardEvents
            class="image {ImageStyles({ css: override })}"
            src={src}
            alt={alt}
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
            <figcaption class="caption">
                <slot name="caption">
                    {caption}
                </slot>
            </figcaption>
        {/if}
    </figure>
</div>

<style>
	.image-wrapper {
        position: relative;
    }

    .figure {
        margin: 0px;
    }

    .image {
        display: block;
        width: 100%;
        height: 100%;
    }

    .placeholder {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
    }

    .caption {
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        margin-top: 10px;
    }
</style>
