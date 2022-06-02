<script lang="ts">
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { InputWrapper } from '../InputWrapper';
	import { Input } from '../Input';
	import type { TextInputProps as $$TextInputProps } from './TextInput.styles';

	export let use: $$TextInputProps['use'] = [],
		element: $$TextInputProps['element'] = undefined,
		className: $$TextInputProps['className'] = '',
		override: $$TextInputProps['override'] = {},
		overrideInput: $$TextInputProps['overrideInput'] = {},
		label: $$TextInputProps['label'] = '',
		description: $$TextInputProps['description'] = null,
		error: $$TextInputProps['error'] = null,
		required: $$TextInputProps['required'] = false,
		labelProps: $$TextInputProps['labelProps'] = {},
		descriptionProps: $$TextInputProps['descriptionProps'] = {},
		errorProps: $$TextInputProps['errorProps'] = {},
		invalid: $$TextInputProps['invalid'] = false,
		id: $$TextInputProps['id'] = 'input-id',
		labelElement: $$TextInputProps['labelElement'] = 'label',
		size: $$TextInputProps['size'] = 'sm',
		showRightSection: $$TextInputProps['showRightSection'] = undefined,
		value: $$TextInputProps['value'] = '';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	// Flag that enables the override of the right section slot
	// of the Input component only if it was provided
	const _showRightSection =
		showRightSection === undefined ? !!$$slots.rightSection : showRightSection;
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
	bind:element
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
>
	<Input
		bind:value
		{overrideInput}
		{required}
		{size}
		{id}
		{...$$restProps}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
	>
		<slot slot="rightSection" name="rightSection" />
	</Input>
</InputWrapper>
