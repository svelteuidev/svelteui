<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { TextInputProps as $$TextInputProps } from './TextInput';

	

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
		size?: $$Props['size'];
		showRightSection?: $$Props['showRightSection'];
		value?: $$Props['value'];
		placeholder?: $$Props['placeholder'];
		rightSection?: import('svelte').Snippet;
		icon?: import('svelte').Snippet;
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
		id = randomID('text-input'),
		labelElement = 'label',
		size = 'sm',
		showRightSection = undefined,
		value = $bindable(''),
		placeholder = '',
		rightSection,
		icon,
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
	const icon_render = $derived(icon);
</script>

<!--
@component

Input for text that also uses labels for the input

@see https://svelteui.dev/core/text-input
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
		{required}
		{size}
		{id}
		{placeholder}
		{...rest}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
	>
		{#snippet rightSection()}
				{@render rightSection_render?.()}
			{/snippet}
		{#snippet icon()}
				{@render icon_render?.()}
			{/snippet}
	</Input>
</InputWrapper>
