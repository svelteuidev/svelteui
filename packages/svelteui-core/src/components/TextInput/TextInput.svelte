<script lang="ts">
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { InputWrapper } from '../InputWrapper';
	import { Input } from '../Input';
  import { randomID } from '$lib/styles';
	import type { TextInputProps as $$TextInputProps } from './TextInput.styles';

	interface $$Props extends $$TextInputProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		overrideInput: $$Props['overrideInput'] = {},
		label: $$Props['label'] = '',
		description: $$Props['description'] = null,
		error: $$Props['error'] = null,
		required: $$Props['required'] = false,
		labelProps: $$Props['labelProps'] = {},
		descriptionProps: $$Props['descriptionProps'] = {},
		errorProps: $$Props['errorProps'] = {},
		invalid: $$Props['invalid'] = false,
		id: $$Props['id'] = 'input-id',
		labelElement: $$Props['labelElement'] = 'label',
		size: $$Props['size'] = 'sm',
		showRightSection: $$Props['showRightSection'] = undefined,
		value: $$Props['value'] = '',
		placeholder: $$Props['placeholder'] = '';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
  const baseId = randomID(id)
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
	id={baseId}
	{labelElement}
	{size}
>
	<Input
		bind:value
		{overrideInput}
		{required}
		{size}
		id={baseId}
		{placeholder}
		{...overrideInput}
		{...$$restProps}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
	>
		<slot slot="rightSection" name="rightSection" />
	</Input>
</InputWrapper>
