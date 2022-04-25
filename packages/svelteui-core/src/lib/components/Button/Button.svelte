<script lang="ts">
	import { css, vFunc } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/internal';
	import { ButtonErrors } from './Button.errors';
	import { sizes } from './Button.styles';
	import Error from '$lib/internal/errors/Error.svelte';
	import Loader from '../Loader/Loader.svelte';
	import type { ButtonVariant, LoaderProps } from './Button.styles';
	import type { Override, SvelteuiColor, SvelteuiNumberSize, SvelteuiGradient } from '$lib/styles';

	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** Controls button appearance */
	export let variant: ButtonVariant = 'filled';
	/** Button color from theme */
	export let color: SvelteuiColor = 'blue';
	/** Predefined button size */
	export let size: SvelteuiNumberSize = 'sm';
	/** Button border-radius from theme or number to set border-radius in px */
	export let radius: SvelteuiNumberSize | number = 'sm';
	/** Controls gradient settings in gradient variant only */
	export let gradient: SvelteuiGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	/** Loader position relative to button label */
	export let loaderPosition: 'left' | 'right' = 'left';
	/** Props passed to Loader component */
	export let loaderProps: LoaderProps = { size: 'xs', color: 'white', variant: 'circle' };

	// --------------Basic types-------------------
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };
	/** Applies an href to the button component and converts it to an anchor tag */
	export let href: string = '';
	/** If external is set to true, target = _blank */
	export let external: boolean = false;
	/** disabled will set button to disabled state */
	export let disabled: boolean = false;
	/** compact will set button to compact state */
	export let compact: boolean = false;
	/** loading will set button to loading state */
	export let loading: boolean = false;
	/** uppercase will set button text to uppercase */
	export let uppercase: boolean = false;
	/** fullSize will set button width to 100% */
	export let fullSize: boolean = false;
	// --------------------------------------------

	/** An action that forwards inner dom node events to parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Css function to generate button styles */
	const ButtonStyles = css({
		focusRing: 'auto',
		cursor: 'pointer',
		position: 'relative',
		boxSizing: 'border-box',
		textDecoration: 'none',
		outline: 'none',
		userSelect: 'none',
		appearance: 'none',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: null,
		borderRadius: typeof radius === 'number' ? radius : `$${radius}`,
		height: sizes[compact ? `compact-${size}` : size].height,
		padding: sizes[compact ? `compact-${size}` : size].padding,
		fontFamily: '$standard',
		fontWeight: '$SemiBold',
		fontSize: '$sm',
		lineHeight: 1,
		flexGrow: 0,
		width: fullSize ? '100%' : 'auto',
		'&:hover': {
			backgroundColor: variant === 'gradient' ? null : `$${color}700`,
			backgroundSize: variant === 'gradient' ? '200%' : null
		},
		'&:active': {
			transform: 'translateY(1px)'
		},
		[`&.loading`]: {
			pointerEvents: 'none',
			'&::before': {
				content: '""',
				position: 'absolute',
				inset: -1,
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
			variation: vFunc(color, gradient)
		}
	});

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (disabled && loading) {
		observable = true;
		err = ButtonErrors[0];
	}
	if (external && !loading) {
		observable = true;
		err = ButtonErrors[1];
	}

	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="Button" code={err} />

<!--
@component
A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.

@see https://svelteui-docs.vercel.app/docs/core/button
@example
    ```tsx
    <Button>Click</Button> // standard button
    <Button variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>Click Me</Button> // gradient button
    ```
-->

{#if href && !disabled}
	<a
		{href}
		use:forwardEvents
		class:disabled
		class:compact
		class:uppercase
		class:loading
		class="{className} {ButtonStyles({ css: override, variation: variant })}"
		role="button"
		rel="noreferrer noopener"
		target={external ? '_blank' : '_self'}
		{...$$restProps}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="loader-left">
				<Loader size={'xs'} color={'white'} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader size={'xs'} color={'white'} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</a>
{:else}
	<button
		use:forwardEvents
		class="{className} {ButtonStyles({ css: override, variation: variant })}"
		class:disabled
		class:compact
		class:uppercase
		class:loading
		{disabled}
		{...$$restProps}
		tabindex="0"
	>
		{#if loading && loaderPosition === 'left'}
			<span class="loader-left">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.leftIcon}
			<span class="loader-left">
				<slot name="leftIcon">X</slot>
			</span>
		{/if}
		<slot>Button</slot>
		{#if loading && loaderPosition === 'right'}
			<span class="loader-right">
				<Loader variant={loaderProps.variant} size={loaderProps.size} color={loaderProps.color} />
			</span>
		{:else if $$slots.rightIcon}
			<span class="loader-right">
				<slot name="rightIcon">X</slot>
			</span>
		{/if}
	</button>
{/if}

<style>
	.uppercase {
		text-transform: uppercase;
	}
	.loader-left {
		margin-right: 10px;
	}
	.loader-right {
		margin-left: 10px;
	}
</style>
