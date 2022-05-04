<script lang="ts">
	import { css } from '$lib/styles';
	import { getVariantStyles, sizes } from './ActionIcon.styles';
	import { ActionIconErrors } from './ActionIcon.errors';
	import { createEventForwarder } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Loader from '../Loader/Loader.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { ActionIconProps as $$ActionIconProps } from './ActionIcon.styles';

	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$ActionIconProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$ActionIconProps['override'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$ActionIconProps['root'] = 'button';
	/** Button color from theme'yellow' | 'orange';} */
	export let color: $$ActionIconProps['color'] = 'gray';
	/** Controls button appearance */
	export let variant: $$ActionIconProps['variant'] = 'hover';
	/** Predefined button size */
	export let size: $$ActionIconProps['size'] = 'md';
	/** Button border-radius from theme or number to set border-radius in px */
	export let radius: $$ActionIconProps['radius'] = 'sm';
	/** Props passed to Loader component */
	export let loaderProps: $$ActionIconProps['loaderProps'] = {
		size: 'xs',
		color: 'gray',
		variant: 'circle'
	};
	/** loading will set button to loading state */
	export let loading: $$ActionIconProps['loading'] = false;
	/** disabled will set button to disabled state */
	export let disabled: $$ActionIconProps['disabled'] = false;
	/** Applies an href to the button component and converts it to an anchor tag */
	export let href: $$ActionIconProps['href'] = '';
	/** If external is set to true, target = _blank */
	export let external: $$ActionIconProps['external'] = false;

	/** An action that forwards inner dom node events to parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ActionIconStyles = css({
		focusRing: 'auto',
		position: 'relative',
		appearance: 'none',
		WebkitAppearance: 'none',
		WebkitTapHighlightColor: 'transparent',
		boxSizing: 'border-box',
		height: typeof size === 'string' ? sizes[size] : `${size}px`,
		minHeight: typeof size === 'string' ? sizes[size] : `${size}px`,
		width: typeof size === 'string' ? sizes[size] : `${size}px`,
		minWidth: typeof size === 'string' ? sizes[size] : `${size}px`,
		borderRadius: `$${radius}`,
		padding: 0,
		lineHeight: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		textDecoration: 'none',
		'&:not(:disabled):active': {
			transform: 'translateY(1px)'
		},
		[`&.loading`]: {
			'&::before': {
				content: '""',
				position: 'absolute',
				top: -1,
				left: -1,
				right: -1,
				bottom: -1,
				backgroundColor: 'rgba(255, 255, 255, .5)',
				borderRadius: `$${radius}`,
				cursor: 'not-allowed'
			}
		},
		[`&.disabled`]: {
			pointerEvents: 'none',
			borderColor: 'transparent',
			backgroundColor: 'rgb(233, 236, 239)',
			background: 'rgb(233, 236, 239)',
			color: 'rgb(173, 181, 189)',
			cursor: 'not-allowed'
		},
		variants: {
			variation: getVariantStyles(color, variant)
		}
	});

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (root !== 'a' && $$props.href) {
		observable = true;
		err = ActionIconErrors[0];
	}
	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="ActionIcon" code={err} />

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Icon button to indicate secondary action.

@see https://svelteui-docs.vercel.app/docs/core/action-icon
@example
    ```tsx
    <ActionIcon>Click</ActionIcon> // standard ActionIcon
    <ActionIcon color="red" /> // red ActionIcon
    <ActionIcon variant="default"><Discord></ActionIcon> // default variant with an icon
    ```
-->

<svelte:element
	this={root}
	class:loading
	class:disabled
	use:forwardEvents
	class="{className} {ActionIconStyles({ css: override, variation: variant })}"
	disabled={disabled || loading}
	{...$$restProps}
	tabindex="0"
	{href}
	rel={external ? 'noreferrer noopener' : null}
	target={external ? '_blank' : null}
>
	{#if loading}
		<Loader size={loaderProps.size} color={loaderProps.color} variant={loaderProps.variant} />
	{:else}
		<slot>+</slot>
	{/if}
</svelte:element>
