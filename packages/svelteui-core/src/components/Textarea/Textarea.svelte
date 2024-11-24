<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { TextareaProps as $$TextareaProps } from './Textarea';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		label?: $$Props['label'];
		description?: $$Props['description'];
		error?: $$Props['error'];
		required?: $$Props['required'];
		labelProps?: $$Props['labelProps'];
		descriptionProps?: $$Props['descriptionProps'];
		errorProps?: $$Props['errorProps'];
		invalid?: $$Props['invalid'];
		id?: $$Props['id'];
		labelElement?: $$Props['labelElement'];
		showRightSection?: $$Props['showRightSection'];
		value?: $$Props['value'];
		placeholder?: $$Props['placeholder'];
		rightSection?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		label = '',
		description = null,
		error = null,
		required = false,
		labelProps = {},
		descriptionProps = {},
		errorProps = {},
		invalid = false,
		id = randomID('textarea'),
		labelElement = 'label',
		showRightSection = undefined,
		value = $bindable(''),
		placeholder = '',
		rightSection,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	// Flag that enables the override of the right section slot
	// of the Input component only if it was provided
	const _showRightSection =
		showRightSection === undefined ? !!rightSection : showRightSection;
	let _invalid = $derived(invalid || !!error);

	const rightSection_render = $derived(rightSection);
</script>

<!--
@component

Multiline text input.

@see https://svelteui.dev/core/textarea
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
		{...rest}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
		root="textarea"
		multiline
	>
		{#snippet rightSection()}
				{@render rightSection_render?.()}
			{/snippet}
	</Input>
</InputWrapper>
