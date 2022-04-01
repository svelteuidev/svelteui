<script lang="ts">
	import { css } from '$lib/_styles/index';
	import { vFunc } from '$lib/_styles/index';
	import { sizes } from './Button.styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/_internal';
	import Loader from '../Loader/Loader.svelte';
	import type { ButtonVariant, LoaderProps } from './Button.styles';
	import type { Override, SvelteuiColor, SvelteuiNumberSize, SvelteuiGradient } from '$lib/_styles';

	// -----------JsDoc comments for sveld--------------------
	/**
	 * Override prop for custom theming the component
	 * @type {Override["props"]}
	 */
	export let override: Override['props'] = {};
	/**
	 * Controls button appearance
	 * @type {"filled" | "light" | "outline" | "default" | "white" | "gradient" | "subtle"}
	 */
	export let variant: ButtonVariant = 'filled';
	/**
	 * Button color from theme
	 * @type {'dark' | 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange';}
	 */
	export let color: SvelteuiColor = 'blue';
	/**
	 * Predefined button size
	 * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | number}
	 */
	export let size: SvelteuiNumberSize = 'sm';
	/**
	 * Button border-radius from theme or number to set border-radius in px
	 * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl' | number}
	 */
	export let radius: SvelteuiNumberSize | number = 'sm';
	/**
	 * Semantics for html to define the type of button when not an href
	 * @type {'button' | 'reset' | 'submit' | 'menu'}
	 */
	export let type: 'button' | 'reset' | 'submit' | 'menu' = 'button';
	/**
	 * Controls gradient settings in gradient variant only
	 * @type {from: SvelteuiColor; to: SvelteuiColor; deg?: number;}
	 */
	export let gradient: SvelteuiGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	/**
	 * Loader position relative to button label
	 * @type {'left' | 'right'}
	 */
	export let loaderPosition: 'left' | 'right' = 'left';
	/**
	 * Props passed to Loader component
	 * @type {LoaderProps}
	 */
	export let loaderProps: LoaderProps = { size: 'xs', color: 'white', variant: 'circle' };
	// --------------------------------------------

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
		color: 'White',
		backgroundColor: `$${color}600`,
		background: null,
		borderRadius: typeof radius === 'number' ? radius : `$${radius}`,
		border: `1px solid $${color}600`,
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
		variants: {
			variation: vFunc(color, gradient)
		}
	});
</script>

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
		class="button {className} {ButtonStyles({ css: override, variation: variant })}"
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
		class="button {className} {ButtonStyles({ css: override, variation: variant })}"
		class:disabled
		class:compact
		class:uppercase
		class:loading
		{disabled}
		{type}
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
	.button {
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
		text-decoration: none;
		outline: none;
		user-select: none;
		appearance: none;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.disabled {
		pointer-events: none;
		border-color: transparent;
		background-color: rgb(233, 236, 239);
		background: rgb(233, 236, 239);
		color: rgb(173, 181, 189);
		cursor: not-allowed;
	}
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
