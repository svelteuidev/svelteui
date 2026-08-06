<script lang="ts">
	import { randomID } from '$lib/styles';
	import { useActions } from '$lib/internal';
	import Input from '../Input/Input.svelte';
	import InputWrapper from '../InputWrapper/InputWrapper.svelte';
	import ChevronUpDown from './ChevronUpDown.svelte';
	import type { NativeSelectProps } from './NativeSelect';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		id = 'NativeSelect',
		placeholder = '',
		data = [],
		inputStyle = {},
		wrapperProps = {},
		size = 'sm',
		iconComponent = undefined,
		iconWidth = 36,
		iconProps = { size: 20, color: 'currentColor' },
		rightSectionWidth = 36,
		rightSectionProps = {},
		required = false,
		radius = 'sm',
		variant = 'default',
		disabled = false,
		value = $bindable(''),
		label = '',
		description = '',
		error = '',
		labelProps = {},
		descriptionProps = {},
		errorProps = {},
		icon,
		rightSection: rightSectionSnippet,
		...rest
	}: NativeSelectProps = $props();

	/** Generate random id for label and select elements*/
	const uuid = randomID(id);

	/** Map through the data and format it*/
	let formattedData = $derived(
		data.map((item) => (typeof item === 'string' ? { label: item, value: item } : item))
	);

	/** When no icon is present give the left section 12px of padding*/
	const base = { '& .input': { paddingLeft: 12 } };
</script>

<InputWrapper
	id={uuid}
	class="{className} svelteui-NativeSelect-root"
	{size}
	{label}
	{error}
	{override}
	{required}
	{labelProps}
	{errorProps}
	{description}
	{descriptionProps}
	{...wrapperProps}
>
	<Input
		bind:element
		use={[[useActions, use]]}
		bind:value
		root="select"
		id={uuid}
		autocomplete="off"
		invalid={Boolean(error)}
		override={{ ...base, ...inputStyle }}
		noPointerEventsRightSection
		{size}
		{iconComponent}
		{radius}
		{variant}
		{required}
		{disabled}
		{iconWidth}
		{iconProps}
		{placeholder}
		{rightSectionWidth}
		{rightSectionProps}
		{...rest}
	>
		{#if placeholder}
			<option value="" disabled hidden selected={!value}>
				{placeholder}
			</option>
		{/if}
		{#if icon}
			{@render icon()}
		{/if}
		{#each formattedData as item}
			<option value={item.value} disabled={item.disabled} selected={item.value === value}>
				{item.label ?? item.value}
			</option>
		{:else}
			<option value="" disabled hidden>Add Some Options</option>
		{/each}
		{#snippet rightSection()}
			{#if rightSectionSnippet}
				{@render rightSectionSnippet()}
			{:else}
				<ChevronUpDown size={iconProps.size} color={iconProps.color} />
			{/if}
		{/snippet}
	</Input>
</InputWrapper>
