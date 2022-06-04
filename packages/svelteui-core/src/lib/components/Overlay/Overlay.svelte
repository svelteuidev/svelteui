<script lang="ts">
	import { Center } from '../Center';
	import { getDefaultZIndex } from './Overlay.styles';
	import type { OverlayProps as $$OverlayProps } from './Overlay.styles';
	import Box from '../Box/Box.svelte';

	export let use: $$OverlayProps['use'] = [],
		element: $$OverlayProps['element'] = undefined,
		className: $$OverlayProps['className'] = '',
		override: $$OverlayProps['override'] = {},
		opacity: $$OverlayProps['opacity'] = 0.6,
		color: $$OverlayProps['color'] = '#fff',
		blur: $$OverlayProps['blur'] = 0,
		gradient: $$OverlayProps['gradient'] = '',
		zIndex: $$OverlayProps['zIndex'] = getDefaultZIndex('modal'),
		radius: $$OverlayProps['radius'] = 0,
		center = false;
	export { className as class };

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
	
@see https://svelteui.org/core/overlay
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
		{use}
		bind:element
		id="outterOverlay"
		css={{ ...baseStyles, backdropFilter: `blur(${blur}px)` }}
		class={className}
		{...$$restProps}
	>
		<Box
			id="innerOverlay"
			css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }}
		/>
	</Box>
{:else}
	<Box
		{use}
		bind:element
		id="innerOverlay"
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
