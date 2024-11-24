<script lang="ts">
	import { run } from 'svelte/legacy';

	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { Box } from '../Box';
	import { Skeleton } from '../Skeleton';
	import { Text } from '../Text';
	import useStyles from './Image.styles';
	import ImageIcon from './ImageIcon.svelte';
	import type { ImageProps as $$ImageProps } from './Image';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		override?: $$Props['override'];
		radius?: $$Props['radius'];
		class?: $$Props['className'];
		src?: $$Props['src'];
		alt?: $$Props['alt'];
		fit?: $$Props['fit'];
		width?: $$Props['width'];
		height?: $$Props['height'];
		caption?: $$Props['caption'];
		usePlaceholder?: $$Props['usePlaceholder'];
		loader?: $$Props['loader'];
		placeholder?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		override = {},
		radius = 0,
		class: className = '',
		src = undefined,
		alt = '',
		fit = 'cover',
		width = '100%',
		height = 'auto',
		caption = undefined,
		usePlaceholder = false,
		loader = false,
		placeholder,
		...rest
	}: Props = $props();
	

	const forwardEvents = createEventForwarder(get_current_component());

	let loaded: boolean = $state(false);
	let error: boolean = $state(false);
	let showPlaceholder: boolean = $state(false);
	const onLoad = () => (loaded = true);
	const onError = () => (error = true);

	run(() => {
		showPlaceholder = usePlaceholder && (!loaded || error);
	});
	let { cx, classes, getStyles } = $derived(useStyles({ radius, fit, height, width }, { name: 'Image' }));
</script>

<!--
@component

Dynamic Image component with optional placeholder for loading and error state

@see https://svelteui.dev/core/image
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
					onload={onLoad}
					onerror={onError}
					{...rest}
				/>
			</Skeleton>
			{#if showPlaceholder}
				<div class={classes.placeholder} title={alt}>
					{#if placeholder}{@render placeholder()}{:else}
						<ImageIcon style={{ width: 40, height: 40 }} />
					{/if}
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
