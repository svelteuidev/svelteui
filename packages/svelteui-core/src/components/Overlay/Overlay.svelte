<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import Center from '../Center/Center.svelte';
	import { getDefaultZIndex } from './Overlay.styles';
	import type { OverlayProps as $$OverlayProps } from './Overlay';

	interface $$Props extends $$OverlayProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		opacity: $$Props['opacity'] = 0.6,
		color: $$Props['color'] = '#fff',
		blur: $$Props['blur'] = 0,
		gradient: $$Props['gradient'] = '',
		zIndex: $$Props['zIndex'] = getDefaultZIndex('modal'),
		radius: $$Props['radius'] = 0,
		center = false;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };
	$: baseStyles = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex
	};
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
		{...$$restProps}
	>
		<Box css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }} />
	</Box>
{:else}
	<Box
		use={[forwardEvents, [useActions, use]]}
		bind:element
		css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }}
		{...$$restProps}
		class={className}
	>
		{#if center}
			<Center>
				<slot />
			</Center>
		{:else}
			<slot />
		{/if}
	</Box>
{/if}
