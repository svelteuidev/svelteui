<script lang="ts">
	import { randomID } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Input from '../Input/Input.svelte';
	import InputWrapper from '../InputWrapper/InputWrapper.svelte';
	import ChevronUpDown from './ChevronUpDown.svelte';
	import type { NativeSelectProps as $$NativeSelectProps } from './NativeSelect.styles';

	export let use: $$NativeSelectProps['use'] = [],
		element: $$NativeSelectProps['element'] = undefined,
		className: $$NativeSelectProps['className'] = '',
		override: $$NativeSelectProps['override'] = {},
		id: $$NativeSelectProps['id'] = 'NativeSelect',
		placeholder: $$NativeSelectProps['placeholder'] = '',
		data: $$NativeSelectProps['data'] = [],
		inputStyle: $$NativeSelectProps['inputStyle'] = {},
		wrapperProps: $$NativeSelectProps['wrapperProps'] = {},
		size: $$NativeSelectProps['size'] = 'sm',
		icon: $$NativeSelectProps['icon'] = null,
		iconWidth: $$NativeSelectProps['iconWidth'] = 36,
		iconProps: $$NativeSelectProps['iconProps'] = { size: 20, color: 'currentColor' },
		rightSection: $$NativeSelectProps['rightSection'] = null,
		rightSectionWidth: $$NativeSelectProps['rightSectionWidth'] = 36,
		rightSectionProps: $$NativeSelectProps['rightSectionProps'] = {},
		required: $$NativeSelectProps['required'] = false,
		radius: $$NativeSelectProps['radius'] = 'sm',
		variant: $$NativeSelectProps['variant'] = 'default',
		disabled: $$NativeSelectProps['disabled'] = false,
		value: $$NativeSelectProps['value'] = '',
		label: $$NativeSelectProps['label'] = '',
		description: $$NativeSelectProps['description'] = '',
		error: $$NativeSelectProps['error'] = '',
		labelProps: $$NativeSelectProps['labelProps'] = {},
		descriptionProps: $$NativeSelectProps['descriptionProps'] = {},
		errorProps: $$NativeSelectProps['errorProps'] = {};
	export { className as class };

	/** Generate random id for label and select elements*/
	const uuid = randomID(id);

	/** Map through the data and format it*/
	let formattedData = []
	$: data && (formattedData = data.map((item) =>
		typeof item === 'string' ? { label: item, value: item } : item
	))

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** When no icon is present give the left section 12px of padding*/
	const base = { '& .input': { paddingLeft: 12 } };
</script>

<!--
@component

Capture user feedback limited to large set of options
	
@see https://svelteui.org/core/native-select
@example
    ```svelte
    <NativeSelect
      data={['React', 'Vue', 'Angular', 'Svelte']}
      placeholder="Pick one"
      label="Select your favorite framework/library"
      description="This is anonymous"
      required
    />
    ```
-->
<InputWrapper
	id={uuid}
	class={className}
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
		use={[forwardEvents, [useActions, use]]}
		bind:value
		root="select"
		id={uuid}
		invalid={Boolean(error)}
		override={{ ...base, ...inputStyle }}
		aria-required={required}
		{size}
		{icon}
		{radius}
		{variant}
		{required}
		{disabled}
		{iconWidth}
		{iconProps}
		{rightSection}
		{rightSectionWidth}
		{rightSectionProps}
		{...$$restProps}
	>
		{#if placeholder}
			<option value="" disabled hidden>
				{placeholder}
			</option>
		{/if}
		{#each formattedData as item}
			<option value={item.value} disabled={item.disabled}>
				{item.label}
			</option>
		{:else}
			<option value="" disabled hidden> Add Some Options </option>
		{/each}
		<svelte:component
			this={rightSection ? rightSection : ChevronUpDown}
			slot="rightSection"
			size={iconProps.size}
			color={iconProps.color}
		/>
	</Input>
</InputWrapper>
