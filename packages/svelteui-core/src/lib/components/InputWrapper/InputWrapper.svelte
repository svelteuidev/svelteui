<script lang="ts">
	import { css, dark } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import LabelElement from './LabelElement.svelte';
	import type { InputWrapperProps as $$InputWrapperProps } from './InputWrapper.styles';

	/** Used for forwarding actions from component */
	export let use: $$InputWrapperProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$InputWrapperProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$InputWrapperProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$InputWrapperProps['override'] = {};
	/** Input label, displayed before input */
	export let label: $$InputWrapperProps['label'] = 'label';
	/** Input description, displayed after label */
	export let description: $$InputWrapperProps['description'] = null;
	/** Displays error message after input */
	export let error: $$InputWrapperProps['error'] = null;
	/** Adds red asterisk on the right side of label */
	export let required: $$InputWrapperProps['required'] = false;
	/** Props spread to label element */
	export let labelProps: $$InputWrapperProps['labelProps'] = {};
	/** Props spread to description element */
	export let descriptionProps: $$InputWrapperProps['descriptionProps'] = {};
	/** Props spread to error element */
	export let errorProps: $$InputWrapperProps['errorProps'] = {};
	/** htmlFor label prop */
	export let id: $$InputWrapperProps['id'] = 'input-id';
	/** Render label as label with htmlFor or as div */
	export let labelElement: $$InputWrapperProps['labelElement'] = 'label';
	/** Controls all elements font-size */
	export let size: $$InputWrapperProps['size'] = 'sm';

	let _labelProps;
	$: {
		_labelProps = labelElement === 'label' ? { htmlFor: id } : {};
	}

	$: InputWrapperStyles = css({
		lineHeight: '$md',
		'& .label': {
			[`${dark.selector} &`]: {
				color: '$dark50'
			},
			display: 'inline-block',
			marginBottom: 4,
			fontSize: `$${size}`,
			fontWeight: 500,
			color: '$gray900',
			wordBreak: 'break-word',
			cursor: 'default',
			WebkitTapHighlightColor: 'transparent'
		},

		'& .error': {
			[`${dark.selector} &`]: {
				color: '$red600'
			},
			marginTop: 5,
			wordBreak: 'break-word',
			color: '$red700'
		},

		'& .description': {
			[`${dark.selector} &`]: {
				color: '$dark200 !important'
			},
			marginTop: -3,
			marginBottom: 7,
			wordBreak: 'break-word',
			color: `$gray600 !important`,
			fontSize: `$${size}`,
			lineHeight: 1.2
		},

		'& .required': {
			[`${dark.selector} &`]: {
				color: '$red500'
			},
			color: '$red700'
		}
	});
</script>

<Box
	bind:element
	{use}
	class="{className} {InputWrapperStyles({ css: override })}"
	{...$$restProps}
>
	{#if label}
		<LabelElement {...labelProps} {label} {id} {labelElement} {required} />
	{/if}
	{#if description}
		<Text {...descriptionProps} color="gray" class="description">
			{description}
		</Text>
	{/if}
	<slot />
	{#if typeof error !== 'boolean' && error}
		<Text {...errorProps} {size} class="error">
			{error}
		</Text>
	{/if}
</Box>
