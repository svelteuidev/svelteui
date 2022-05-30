<script lang="ts">
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { InputWrapper } from '../InputWrapper';
	import { Input } from '../Input';
	import type { TextInputProps as $$TextInputProps } from './TextInput.styles';

	/** Used for forwarding actions from component */
	export let use: $$TextInputProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$TextInputProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$TextInputProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$TextInputProps['override'] = {};
	/** Css prop for custom theming the component */
	export let overrideInput: $$TextInputProps['overrideInput'] = {};
	/** Input label, displayed before input */
	export let label: $$TextInputProps['label'] = '';
	/** Input description, displayed after label */
	export let description: $$TextInputProps['description'] = null;
	/** Displays error message after input */
	export let error: $$TextInputProps['error'] = null;
	/** Adds red asterisk on the right side of label */
	export let required: $$TextInputProps['required'] = false;
	/** Props spread to label element */
	export let labelProps: $$TextInputProps['labelProps'] = {};
	/** Props spread to description element */
	export let descriptionProps: $$TextInputProps['descriptionProps'] = {};
	/** Props spread to error element */
	export let errorProps: $$TextInputProps['errorProps'] = {};
	/** Sets border color to red and aria-invalid=true on input element */
	export let invalid: $$TextInputProps['invalid'] = false;
	/** htmlFor label prop */
	export let id: $$TextInputProps['id'] = 'input-id';
	/** Render label as label with htmlFor or as div */
	export let labelElement: $$TextInputProps['labelElement'] = 'label';
	/** Controls all elements font-size */
	export let size: $$TextInputProps['size'] = 'sm';
	/** Determines if the right section is shown, defaults to true if the slot is provided */
	export let showRightSection: $$TextInputProps['showRightSection'] = undefined;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

    // Flag that enables the override of the right section slot
    // of the Input component only if it was provided
	const _showRightSection = showRightSection === undefined ? !!$$slots.rightSection : showRightSection;
	$: _invalid = invalid || !!error;
</script>

<!--
@component

Input for text that also uses labels for the input
	
@see https://svelteui.org/core/text
@example
    ```tsx
    <TextInput 
        placeholder='Your name'
        description="Don't forget to add your full name"
        label='Full name'
        required
    />
    <TextInput 
        placeholder='Your name'
        label='Full name'
        size='lg'
        on:change={onChange}
    />
    ```
-->

<InputWrapper
	class={className}
	{override}
	{label}
	{description}
	{error}
	{required}
	{labelProps}
	{descriptionProps}
	{errorProps}
	{id}
	{labelElement}
	{size}
	bind:element
>
	<Input
		use={[forwardEvents, [useActions, use]]}
		{overrideInput}
		{required}
		{size}
		{id}
		showRightSection={_showRightSection}
		{...$$restProps}
		invalid={_invalid}
	>
        <slot slot='rightSection' name='rightSection'></slot>
	</Input>
</InputWrapper>
