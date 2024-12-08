<script lang="ts">
	import { useActions } from '$lib/internal';
	import { Box } from '../Box';
	import { Skeleton } from '../Skeleton';
	import { Text } from '../Text';
	import useStyles from './Image.styles';
	import ImageIcon from './ImageIcon.svelte';
	import type { ImageProps } from './Image';

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
	}: ImageProps = $props();

	let loaded: boolean = $state(false);
	let error: boolean = $state(false);
	let showPlaceholder: boolean = $derived(usePlaceholder && (!loaded || error));

	const onLoad = () => (loaded = true);
	const onError = () => (error = true);

	let { cx, classes, getStyles } = $derived(
		useStyles({ radius, fit, height, width }, { name: 'Image' })
	);
</script>

<Box class={cx(className, classes.root, getStyles({ css: override }))}>
	<figure class={classes.figure}>
		<div class={classes.imageWrapper}>
			<Skeleton visible={loader ? loaded : false}>
				<img
					bind:this={element}
					use:useActions={use}
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
