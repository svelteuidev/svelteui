<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { TextareaProps as $$TextareaProps } from './Textarea';

	interface $$Props extends $$TextareaProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		label: $$Props['label'] = '',
		description: $$Props['description'] = null,
		error: $$Props['error'] = null,
		required: $$Props['required'] = false,
		labelProps: $$Props['labelProps'] = {},
		descriptionProps: $$Props['descriptionProps'] = {},
		errorProps: $$Props['errorProps'] = {},
		invalid: $$Props['invalid'] = false,
		id: $$Props['id'] = randomID('textarea'),
		labelElement: $$Props['labelElement'] = 'label',
		showRightSection: $$Props['showRightSection'] = undefined,
		value: $$Props['value'] = '',
		placeholder: $$Props['placeholder'] = '';
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

Multiline text input.

@see https://svelteui.org/core/textarea
@example
    ```tsx
    <Textarea
      label='Comment'
      description="Tell us what's on your mind"
      placeholder='Blah blah blah'
      required
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
>
	<Input
		bind:value
		{required}
		{id}
		{placeholder}
		{...$$restProps}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
		root="textarea"
		multiline
	>
		<slot slot="rightSection" name="rightSection" />
	</Input>
</InputWrapper>
