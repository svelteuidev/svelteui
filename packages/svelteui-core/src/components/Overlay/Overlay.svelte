<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import Center from '../Center/Center.svelte';
	import { getDefaultZIndex } from './Overlay.styles';
	import type { OverlayProps as $$OverlayProps } from './Overlay';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		opacity?: $$Props['opacity'];
		color?: $$Props['color'];
		blur?: $$Props['blur'];
		gradient?: $$Props['gradient'];
		zIndex?: $$Props['zIndex'];
		radius?: $$Props['radius'];
		center?: boolean;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		opacity = 0.6,
		color = '#fff',
		blur = 0,
		gradient = '',
		zIndex = getDefaultZIndex('modal'),
		radius = 0,
		center = false,
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let background = $derived(gradient ? { backgroundImage: gradient } : { backgroundColor: color });
	let baseStyles = $derived({
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex
	});
</script>

<!--
@component

Overlays given element with div element with any color and opacity

@see https://svelteui.dev/core/overlay
@example
    ```svelte
	<Box sx={{ height: 100, position: 'relative' }}>
       	<Overlay opacity={0.6} color="#000" blur={2} />
        Overlay with a blur
    </Box>
	<Box sx={{ height: 100, position: 'relative' }}>
       	<Overlay gradient={`linear-gradient(105deg, black 20%, #312f2f 50%, $gray400 100%)`} />
        Overlay with a gradient
    </Box>
	<Overlay center>
		This content sits on top of the overlay
	</Overlay>
    ```
-->
{#if blur}
	<Box
		use={[forwardEvents, [useActions, use]]}
		bind:element
		css={{ ...baseStyles, backdropFilter: `blur(${blur}px)` }}
		class={className}
		{...rest}
	>
		<Box css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }} />
	</Box>
{:else}
	<Box
		use={[forwardEvents, [useActions, use]]}
		bind:element
		css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }}
		{...rest}
		class={className}
	>
		{#if center}
			<Center>
				{@render children?.()}
			</Center>
		{:else}
			{@render children?.()}
		{/if}
	</Box>
{/if}
