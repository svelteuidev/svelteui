<script lang="ts">
	import { css, dark, randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { sizes, iconSizes } from './Checkbox.styles';
	import Box from '../Box/Box.svelte';
	import ThemeIcon from '../ThemeIcon/ThemeIcon.svelte';
	import CheckboxIcon from './CheckboxIcon.svelte';
	import type { CheckboxProps as $$CheckboxProps } from './Checkbox.styles';

	/** Used for forwarding actions from component */
	export let use: $$CheckboxProps['use'] = [];
	/** Used for custom classes to be applied to the checkbox e.g. Tailwind classes */
	export let className: $$CheckboxProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$CheckboxProps['override'] = {};
	/** Checkbox color from theme */
	export let color: $$CheckboxProps['color'] = 'gray';
	/** The id used to bind input to label, if none is provided an unique ID will be generated */
	export let id: $$CheckboxProps['id'] = randomID();
	/** Will set the checkbox to disabled state */
	export let disabled: $$CheckboxProps['disabled'] = false;
	/** The value of the checkbox */
	export let value: $$CheckboxProps['value'] = null;
	/** The value used to set the value of checkbox as checked or unchecked */
	export let checked: $$CheckboxProps['checked'] = false;
	/** Sets the checkbox to indetermined state, overrides the checked state */
	export let indeterminate: $$CheckboxProps['indeterminate'] = false;
	/** The label of the checkbox */
	export let label: $$CheckboxProps['label'] = null;
	/** Predefined checkbox radius size */
	export let radius: $$CheckboxProps['radius'] = 'sm';
	/** Predefined checkbox size */
	export let size: $$CheckboxProps['size'] = 'md';
	/** The transtion of the check/unchecked duration, set to 0 to disable transtion */
	export let transitionDuration: $$CheckboxProps['transitionDuration'] = 100;
	/** The props to pass to the wrapper component */
	export let wrapperProps: $$CheckboxProps['wrapperProps'] = {};

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: CheckboxStyles = css({
		display: 'flex',
		alignItems: 'center',

		'& .inner': {
			position: 'relative',
			width: sizes[size],
			height: sizes[size]
		},

		'& .label': {
			WebkitTapHighlightColor: 'transparent',
			paddingLeft: '$sm',
			fontSize: `$${size}`,
			lineHeight: `$${size}`,
			color: '#000000',
			[`${dark.selector} &`]: {
				color: '$dark000'
			}
		},
		'& .input': {
			appearance: 'none',
			backgroundColor: '#ffffff',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: '$gray400',
			width: sizes[size],
			height: sizes[size],
			borderRadius: `$${radius}`,
			padding: 0,
			display: 'block',
			margin: 0,
			transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,

			[`${dark.selector} &`]: {
				backgroundColor: '$dark400',
				borderColor: '$dark400'
			},
			'&:checked': {
				border: 'transparent',
				backgroundColor: `$${color}600`,
				color: '#ffffff',
				borderRadius: `$${radius}`,

				[`& + .icon-wrapper`]: {
					opacity: 1,
					transform: 'translateY(0) scale(1)'
				}
			},

			'&.disabled': {
				backgroundColor: '$gray200',
				borderColor: '$gray300',
				cursor: 'not-allowed',

				[`& + .icon-wrapper`]: {
					color: '$gray500',
					backgroundColor: '$gray200',
					borderColor: '$gray300'
				},

				[`${dark.selector} &`]: {
					backgroundColor: '$dark400',
					borderColor: '$dark600',
					[`& + .icon`]: {
						color: '$dark600'
					}
				}
			}
		},

		'& .icon-wrapper': {
			color: '#ffffff',
			transform: 'translateY(5px) scale(0.5)',
			opacity: 0,
			transitionProperty: 'opacity, transform',
			transitionTimingFunction: 'ease',
			transitionDuration: `${transitionDuration}ms`,
			pointerEvents: 'none',
			width: sizes[size],
			height: sizes[size],
			minWidth: sizes[size],
			minHeight: sizes[size],
			borderRadius: `$${radius}`,
			position: 'absolute',
			zIndex: 1,
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			margin: 'auto',
			'@media (prefers-reduced-motion)': {
				transitionDuration: '0ms'
			}
		},

		'& .icon': {
			color: '#ffffff',
			width: iconSizes[size],
			height: iconSizes[size],
			minWidth: iconSizes[size],
			minHeight: iconSizes[size],

			'@media (prefers-reduced-motion)': {
				transitionDuration: '0ms'
			}
		}
	});

	$: checked = indeterminate || checked;
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

A checkbox input component using the theme styles with support for a label and indeterminate state.
	
@see https://svelteui-docs.vercel.app/docs/core/checkbox
@example
    ```svelte
    <Checkbox />
    <Checkbox size={'lg'} label={'Please accept this'} />
    <Checkbox undetermined />
    <Checkbox checked disabled />
    ```
-->

<Box class="checkbox {className} {CheckboxStyles({ css: override })}" {...wrapperProps}>
	<div class="inner">
		<input
			use:useActions={use}
			use:forwardEvents
			bind:checked
			class="input"
			class:disabled
			type="checkbox"
			{disabled}
			{value}
			{id}
		/>
		<ThemeIcon class="icon-wrapper" {size}>
			<slot>
				<CheckboxIcon class="icon" {indeterminate} />
			</slot>
		</ThemeIcon>
	</div>
	{#if label}
		<label class="label" for={id}>
			{label}
		</label>
	{/if}
</Box>
