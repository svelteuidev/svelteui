<script lang="ts">
	import { useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { TextareaProps } from './Textarea';

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
		value = $bindable(undefined),
		placeholder = '',
		rightSection,
		...rest
	}: TextareaProps = $props();

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
>
	<Input
		bind:value
		{required}
		{id}
		{placeholder}
		use={[[useActions, use]]}
		invalid={_invalid}
		showRightSection={_showRightSection}
		root="textarea"
		multiline
		{...rest}
	>
		{#snippet rightSection()}
			{@render rightSection?.()}
		{/snippet}
	</Input>
</InputWrapper>
