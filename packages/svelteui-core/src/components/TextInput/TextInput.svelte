<script lang="ts">
	import { useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { TextInputProps } from './TextInput';

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
		icon,
		rightSection,
		...rest
	}: TextInputProps = $props();

	// Flag that enables the override of the right section slot
	// of the Input component only if it was provided
	let _showRightSection = $derived(
		showRightSection === undefined ? !!rightSection : showRightSection
	);
	let _invalid = $derived(invalid || !!error);
</script>

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
		use={[[useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
		{...rest}
	>
		{#if rightSection}
			{#snippet rightSection()}
				{@render rightSection()}
			{/snippet}
		{/if}

		{#if icon}
			{#snippet icon()}
				{@render icon()}
			{/snippet}
		{/if}
	</Input>
</InputWrapper>
