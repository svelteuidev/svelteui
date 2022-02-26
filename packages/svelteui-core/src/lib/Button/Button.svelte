<script lang="ts">
	import { css } from '@stitches/core';
	import { theme } from '$lib/_internal';
	import { sizes } from './Button.styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder } from '$lib/_internal';
	import { getSharedColorScheme } from '../_styles/utils/index';
	import Loader from '../Loader/Loader.svelte';
	import type { ButtonVariant, GetVariantStyles } from './Button.styles';
	import type { Override, SvelteuiColor, SvelteuiNumberSize } from '$lib/_styles';

	/** Button Component Props*/
	export let override: Override['props'] = {};
	export let variant: ButtonVariant = 'filled';
	export let color: SvelteuiColor = 'blue';
	export let size: SvelteuiNumberSize = 'sm';
	export let radius: SvelteuiNumberSize | number = 'sm';
	export let type: 'button' | 'reset' | 'submit' | 'menu' = 'button';
	export let loaderPosition: 'left' | 'right' = 'left';
	export let gradientFrom: SvelteuiColor = 'indigo';
	export let gradientTo: SvelteuiColor = 'cyan';
	export let gradientDeg: number = 45;

	/** Custom classes to be applied to the button e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };

	/**
	 * - Applies an href to the button component and converts it to an anchor tag
	 * - If external is set to true, target = _blank
	 */
	export let href: string = '';
	export let external: boolean = false;

	/** Conditional class props that are either true or false
	 * - disabled: will set button to disabled state
	 * - compact: will set button to compact state
	 * - loading: will set button to loading state
	 * - uppercase: will set button text to uppercase
	 * - fullSize: will set button width to 100%
	 */
	export let disabled: boolean = false;
	export let compact: boolean = false;
	export let loading: boolean = false;
	export let uppercase: boolean = false;
	export let fullSize: boolean = false;

	/** An action that forwards inner dom node events to parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Varient theme functions
	 * - Need the objects to pass theme store as function parameters
	 */
	const sharedColorSchemeValues: GetVariantStyles = { color, theme: $theme, variant };
	const gradColorSchemeValues: GetVariantStyles = {
		color,
		theme: $theme,
		variant: 'gradient',
		gradient: { from: gradientFrom, to: gradientTo, deg: gradientDeg }
	};
	const variantStyles = getSharedColorScheme(sharedColorSchemeValues);
	const gradient = getSharedColorScheme(gradColorSchemeValues);

	/** Button theme only gets applied on page render
	 * @todo ssr for Button component
	 */
	const ButtonStyles = css({
		color: variant === 'gradient' ? gradient.color : variantStyles.color,
		backgroundColor: variantStyles.background,
		background: variant === 'gradient' ? gradient.background : null,
		borderRadius: typeof radius === 'number' ? radius : `${$theme.radius[radius]}px`,
		border: variant === 'gradient' ? '0px' : `1px solid ${variantStyles.border}`,
		height: sizes[compact ? `compact-${size}` : size].height,
		padding: sizes[compact ? `compact-${size}` : size].padding,
		fontFamily: $theme.fontFamily,
		fontWeight: 600,
		fontSize: $theme.fontSizes.sm,
		lineHeight: 1,
		flexGrow: 0,
		width: fullSize ? '100%' : 'auto',
		'&:hover': {
			backgroundColor: variant === 'gradient' ? null : variantStyles.hover,
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
				borderRadius: $theme.radius[radius],
				cursor: 'not-allowed'
			}
		}
	});
</script>

<!--
@component
A user can perform an immediate action by pressing a button. It's frequently used to start an action, but it can also be used to link to other pages.

@see https://svelteui-docs.vercel.app/core/button
@example
    ```tsx
    <Button>Click</Button> // standard button
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
		class="button {className} {ButtonStyles({ css: override })}"
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
		class="button {className} {ButtonStyles({ css: override })}"
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
	/* .button:focus {
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px #339af0;
	} */
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
