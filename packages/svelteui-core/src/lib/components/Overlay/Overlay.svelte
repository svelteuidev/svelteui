<script lang="ts">
	import { getDefaultZIndex } from './Overlay.styles';
	import type { OverlayProps as $$OverlayProps } from './Overlay.styles';
	import Box from '../Box/Box.svelte';

	/** Used for forwarding actions from component */
	export let use: $$OverlayProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$OverlayProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$OverlayProps['override'] = {};
	/** Overlay opacity */
	export let opacity: $$OverlayProps['opacity'] = 0.6;
	/** Overlay background-color */
	export let color: $$OverlayProps['color'] = '#fff';
	/** Overlay background blur in px */
	export let blur: $$OverlayProps['blur'] = 0;
	/** Use gradient instead of background-color */
	export let gradient: $$OverlayProps['gradient'] = '';
	/** Overlay z-index */
	export let zIndex: $$OverlayProps['zIndex'] = getDefaultZIndex('modal');
	/** Value from theme.radius or number to set border-radius in px */
	export let radius: $$OverlayProps['radius'] = 0;

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
**UNSTABLE**: new API, yet to be vetted.

Overlays given element with div element with any color and opacity
	
@see https://svelteui-docs.vercel.app/docs/core/overlay
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
    ```
-->
{#if blur}
	<Box
		{use}
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
		id="innerOverlay"
		css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }}
		{...$$restProps}
		class={className}
	/>
{/if}
