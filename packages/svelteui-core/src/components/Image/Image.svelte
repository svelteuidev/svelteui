<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { Box } from '../Box';
	import { Skeleton } from '../Skeleton';
	import { Text } from '../Text';
	import useStyles from './Image.styles';
	import ImageIcon from './ImageIcon.svelte';
	import type { ImageProps as $$ImageProps } from './Image';

	interface $$Props extends $$ImageProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		override: $$Props['override'] = {},
		radius: $$Props['radius'] = 0,
		className: $$Props['className'] = '',
		src: $$Props['src'] = undefined,
		alt: $$Props['alt'] = '',
		fit: $$Props['fit'] = 'cover',
		width: $$Props['width'] = '100%',
		height: $$Props['height'] = 'auto',
		caption: $$Props['caption'] = undefined,
		usePlaceholder: $$Props['usePlaceholder'] = false,
		loader: $$Props['loader'] = false;
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());

	let loaded: boolean = false;
	let error: boolean = false;
	let showPlaceholder: boolean = false;
	const onLoad = () => (loaded = true);
	const onError = () => (error = true);

	$: showPlaceholder = usePlaceholder && (!loaded || error);
	$: ({ cx, classes, getStyles } = useStyles({ radius, fit, height, width }, { name: 'Image' }));
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

<Box class={cx(className, classes.root, getStyles({ css: override }))}>
	<figure class={classes.figure}>
		<div class={classes.imageWrapper}>
			<Skeleton visible={loader ? loaded : false}>
				<img
					bind:this={element}
					use:useActions={use}
					use:forwardEvents
					class={classes.image}
					{src}
					{alt}
					on:load={onLoad}
					on:error={onError}
					{...$$restProps}
				/>
			</Skeleton>
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
