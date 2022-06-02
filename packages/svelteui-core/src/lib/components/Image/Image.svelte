<script lang="ts">
	import useStyles from './Image.styles';
	import ImageIcon from './ImageIcon.svelte';
	import { Text } from '../Text';
	import { Box } from '../Box';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { ImageProps as $$ImageProps } from './Image.styles';

	export let use: $$ImageProps['use'] = [],
		element: $$ImageProps['element'] = undefined,
		override: $$ImageProps['override'] = {},
		radius: $$ImageProps['radius'] = 0,
		className: $$ImageProps['className'] = '',
		src: $$ImageProps['src'] = undefined,
		alt: $$ImageProps['alt'] = '',
		fit: $$ImageProps['fit'] = 'cover',
		width: $$ImageProps['width'] = '100%',
		height: $$ImageProps['height'] = 'auto',
		caption: $$ImageProps['caption'] = undefined,
		usePlaceholder: $$ImageProps['usePlaceholder'] = false;
	export { className as class };

	let loaded: boolean = false;
	let error: boolean = false;
	let showPlaceholder: boolean = false;
	const onLoad = () => (loaded = true);
	const onError = () => (error = true);
	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: showPlaceholder = usePlaceholder && (!loaded || error);
	$: ({ cx, classes, getStyles } = useStyles({ radius, fit, height, width }));
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

<Box class={cx(className, getStyles({ css: override }))}>
	<figure class={classes.figure}>
		<div class={classes.imageWrapper}>
			<img
				bind:this={element}
				use:useActions={use}
				use:forwardEvents
				class={classes.image}
				{src}
				{alt}
				on:load={onLoad}
				on:error={onError}
			/>
			{#if showPlaceholder}
				<div class={classes.placeholder} title={alt}>
					<slot name="placeholder">
						<ImageIcon style={{ width: 40, height: 40 }} />
					</slot>
				</div>
			{/if}
		</div>
		{#if caption}
			<Text class={classes.caption} root="figcaption" size="sm" align="center">
				{caption}
			</Text>
		{/if}
	</figure>
</Box>
