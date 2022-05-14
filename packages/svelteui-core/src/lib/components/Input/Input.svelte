<script lang="ts">
	import { css, dark } from '$lib/styles';
	import { sizes } from './Input.styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Box from '../Box/Box.svelte';
	import Error from '$lib/internal/errors/Error.svelte';
	import type { InputProps as $$InputProps } from './Input.styles';

	/** Used for forwarding actions from component */
	export let use: $$InputProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$InputProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$InputProps['override'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$InputProps['root'] = 'input';
	/** Adds icon on the left side of input */
	export let icon: $$InputProps['icon'] = null;
	/** Width of icon section in px */
	export let iconWidth: $$InputProps['iconWidth'] = 36;
	/** Props spread to icon component */
	export let iconProps: $$InputProps['iconProps'] = { size: 20, color: 'currentColor' };
	/** Right section of input, similar to icon but on the right */
	export let rightSection: $$InputProps['rightSection'] = null;
	/** Width of right section, is used to calculate input padding-right */
	export let rightSectionWidth: $$InputProps['rightSectionWidth'] = 36;
	/** Props spread to rightSection div element */
	export let rightSectionProps: $$InputProps['rightSectionProps'] = {};
	/** Properties spread to root element */
	export let wrapperProps: $$InputProps['wrapperProps'] = {};
	/** Sets required on input element */
	export let required: $$InputProps['required'] = false;
	/** Input border-radius from theme or number to set border-radius in px */
	export let radius: $$InputProps['radius'] = 'sm';
	/** Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: $$InputProps['variant'] = 'default';
	/** Disabled input state */
	export let disabled: $$InputProps['disabled'] = false;
	/** Input size */
	export let size: $$InputProps['size'] = 'sm';
	/** Input value */
	export let value: $$InputProps['value'] = '';
	/** Sets border color to red and aria-invalid=true on input element */
	export let invalid: boolean = false;
	/** Will input have multiple lines? */
	export let multiline: boolean = false;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let isHTMLElement;
	let isComponent;
	const withRightSection = !!rightSection;
	$: {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}

	$: InputStyles = css({
		[`${dark.selector} &`]: {
			input:
				variant === 'headless'
					? {}
					: {
							color: '$dark50'
					  },
			'&:disabled': {
				backgroundColor: '$dark600'
			},
			'&::placeholder': {
				color: '$dark300'
			}
		},
		position: 'relative',
		'& .input':
			variant === 'headless'
				? {}
				: {
						height: multiline
							? variant === 'unstyled'
								? undefined
								: 'auto'
							: typeof size === 'number'
							? `${size}px`
							: sizes[size] ?? sizes.md,
						WebkitTapHighlightColor: 'transparent',
						lineHeight: multiline ? '$md' : `${sizes[size] - 2}px`,
						appearance: 'none',
						resize: 'none',
						boxSizing: 'border-box',
						fontSize: typeof size === 'number' ? `${size}px` : `${size}`,
						width: '100%',
						color: 'Black',
						display: 'block',
						textAlign: 'left',
						minHeight:
							variant === 'default' || variant === 'filled' ? sizes[size] ?? sizes.md : null,
						paddingLeft:
							(variant === 'default' && icon) || (variant === 'filled' && icon)
								? sizes[size] ?? sizes.md / 3
								: 12,
						paddingRight:
							variant === 'default' || variant === 'filled'
								? withRightSection
									? rightSectionWidth
									: null
								: null,
						borderRadius: variant === 'default' || variant === 'filled' ? `$${radius}` : null,

						'&:disabled': {
							backgroundColor: '$gray100',
							color: '$dark200',
							opacity: 0.6,
							cursor: 'not-allowed',

							'&::placeholder': {
								color: '$dark200'
							}
						},

						'&::placeholder': {
							opacity: 1,
							userSelect: 'none',
							color: '$gray500'
						},

						'&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
							{
								appearance: 'none'
							},

						'&[type=number]': {
							MozAppearance: 'textfield'
						},
						'&.defaultVariant': {
							[`${dark.selector} &`]: {
								border: `1px solid $dark500`,
								backgroundColor: '$dark800',
								'&:focus, &:focus-within': {
									borderColor: '$blue800'
								}
							},
							border: `1px solid $gray400`,
							backgroundColor: 'White',
							transition: 'border-color 100ms ease',

							'&:focus, &:focus-within': {
								outline: 'none',
								borderColor: '$blue500'
							}
						},

						'&.filledVariant': {
							[`${dark.selector} &`]: {
								backgroundColor: '$dark500',
								'&:focus, &:focus-within': {
									borderColor: '$blue800 !important'
								}
							},
							border: '1px solid transparent',
							backgroundColor: '$gray100',

							'&:focus, &:focus-within': {
								outline: 'none',
								borderColor: `$blue500 !important`
							}
						},

						'&.unstyledVariant': {
							[`${dark.selector} &`]: {
								color: '$dark50'
							},
							borderWidth: 0,
							color: 'Black',
							backgroundColor: 'transparent',
							minHeight: 28,
							outline: 0,

							'&:focus, &:focus-within': {
								outline: 'none',
								borderColor: 'transparent'
							},

							'&:disabled': {
								backgroundColor: 'transparent',

								'&:focus, &:focus-within': {
									outline: 'none',
									borderColor: 'transparent'
								}
							}
						}
				  },

		'& .withIcon': {
			paddingLeft: typeof iconWidth === 'number' ? iconWidth : sizes[size] ?? sizes.md
		},
		'& .invalid': {
			[`${dark.selector} &`]: {
				color: '$red600 !important',
				borderColor: '$red600 !important',
				'&::placeholder': {
					color: '$red600 !important'
				}
			},
			color: '$red700 !important',
			borderColor: '$red700 !important',

			'&::placeholder': {
				opacity: 1,
				color: '$red700 !important'
			}
		},
		'& .disabled': {
			[`${dark.selector} &`]: {
				backgroundColor: '$dark600 !important'
			},
			backgroundColor: '$gray100 !important',
			color: '$dark200 !important',
			opacity: 0.6,
			cursor: 'not-allowed',

			'&::placeholder': {
				color: '$dark200 !important'
			}
		},
		'& .icon': {
			[`${dark.selector} &`]: {
				color: invalid ? 'red600' : '$dark200'
			},
			pointerEvents: 'none',
			position: 'absolute',
			zIndex: 1,
			left: 0,
			top: 8,
			bottom: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: sizes[size] ?? sizes.md,
			color: invalid ? '$red700' : '$gray500'
		},
		'& .rightSection': {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: rightSectionWidth
		}
	});

	function onChange() {
		// the 'this' keyword in this case is the
		// HTML element provided in prop 'root'
		value = this.value;
	}

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (root !== 'a' && $$props.href) {
		observable = true;
		err = '';
	}
	$: if (observable) override = { display: 'none' };
</script>

<Error {observable} component="ActionIcon" code={err} />

<!--
@component
**DISCLAIMER**: In most cases, you should not use Input component in your application. Input component is a base for other inputs and was not designed to be used directly.

Base component to create custom inputs
	
@see https://svelteui.org/core/input
@example
    ```svelte
    <Input
      icon={Twitter}
      placeholder="Your twitter"
      rightSectionWidth={70}
      override={{ '& .rightSection': { pointerEvents: 'none' } }}
    >
		<Badge slot='rightSection' color="blue" variant="filled">
			new
		</Badge>
	<Input />
    ```
-->
<Box {...wrapperProps} class="{className} {InputStyles({ css: override })}" {...$$restProps}>
	{#if icon}
		<svelte:component this={icon} size={iconProps.size} color={iconProps.color} class="icon" />
	{/if}
	{#if isHTMLElement && root === 'input'}
		<input
			bind:value
			use:useActions={use}
			use:forwardEvents
			{required}
			{disabled}
			aria-invalid={invalid}
			class:disabled
			class:invalid
			class:withIcon={icon}
			class="input {className} {`${variant}Variant`}"
			{...$$restProps}
		/>
	{:else if isHTMLElement}
		<!-- prettier-ignore -->
		<svelte:element
			this={root}
			value={value}
			use:useActions={use}
			use:forwardEvents
			on:change={onChange}
			{required}
			{disabled}
			aria-invalid={invalid}
			class:disabled
			class:invalid
			class:withIcon={icon}
			class="input {className} {`${variant}Variant`}"
			{...$$restProps}
		>
			<slot />
		</svelte:element>
	{:else if isComponent}
		<svelte:component
			this={root}
			bind:value
			class="input {className} {`${variant}Variant`} {invalid ? 'invalid' : null} {disabled
				? 'disabled'
				: null} {icon ? 'withIcon' : null}"
			{disabled}
			{required}
			aria-invalid={invalid}
			{...$$restProps}
		>
			<slot />
		</svelte:component>
	{/if}
	{#if $$slots.rightSection}
		<div {...rightSectionProps} class="rightSection">
			<slot name="rightSection" />
		</div>
	{/if}
</Box>
