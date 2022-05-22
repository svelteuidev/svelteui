<script lang="ts">
	import { randomID } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Input from '../Input/Input.svelte';
	import InputWrapper from '../InputWrapper/InputWrapper.svelte';
	import ChevronUpDown from './ChevronUpDown.svelte';
	import type { NativeSelectProps as $$NativeSelectProps } from './NativeSelect.styles';

	/** Used for forwarding actions from component */
	export let use: $$NativeSelectProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$NativeSelectProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$NativeSelectProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$NativeSelectProps['override'] = {};
	/** id is used to bind input and label, if not passed unique id will be generated for each input */
	export let id: $$NativeSelectProps['id'] = 'NativeSelect';
	/** Adds hidden option to select and sets it as selected if value is not present */
	export let placeholder: $$NativeSelectProps['placeholder'] = '';
	/** Data used to render options */
	export let data: $$NativeSelectProps['data'] = [];
	/** Style properties added to select element */
	export let inputStyle: $$NativeSelectProps['inputStyle'] = {};
	/** Props passed to root element (InputWrapper component) */
	export let wrapperProps: $$NativeSelectProps['wrapperProps'] = {};
	/** Input size */
	export let size: $$NativeSelectProps['size'] = 'sm';

	/** --------InputBaseProps--------------------------------------- */
	/** Adds icon on the left side of input */
	export let icon: $$NativeSelectProps['icon'] = null;
	/** Width of icon section in px */
	export let iconWidth: $$NativeSelectProps['iconWidth'] = 36;
	/** Props spread to icon component */
	export let iconProps: $$NativeSelectProps['iconProps'] = { size: 20, color: 'currentColor' };
	/** Right section of input, similar to icon but on the right */
	export let rightSection: $$NativeSelectProps['rightSection'] = null;
	/** Width of right section, is used to calculate input padding-right */
	export let rightSectionWidth: $$NativeSelectProps['rightSectionWidth'] = 36;
	/** Props spread to rightSection div element */
	export let rightSectionProps: $$NativeSelectProps['rightSectionProps'] = {};
	/** Sets required on input element */
	export let required: $$NativeSelectProps['required'] = false;
	/** Input border-radius from theme or number to set border-radius in px */
	export let radius: $$NativeSelectProps['radius'] = 'sm';
	/** Defines input appearance, defaults to default in light color scheme and filled in dark */
	export let variant: $$NativeSelectProps['variant'] = 'default';
	/** Disabled input state */
	export let disabled: $$NativeSelectProps['disabled'] = false;
	/** Input value */
	export let value: $$NativeSelectProps['value'] = '';
	/** --------InputBaseProps--------------------------------------- */

	/** --------InputWrapperBaseProps--------------------------------------- */
	/** Input label, displayed before input */
	export let label: $$NativeSelectProps['label'] = '';
	/** Input description, displayed after label */
	export let description: $$NativeSelectProps['description'] = '';
	/** Displays error message after input */
	export let error: $$NativeSelectProps['error'] = '';
	/** Props spread to label element */
	export let labelProps: $$NativeSelectProps['labelProps'] = {};
	/** Props spread to description element */
	export let descriptionProps: $$NativeSelectProps['descriptionProps'] = {};
	/** Props spread to error element */
	export let errorProps: $$NativeSelectProps['errorProps'] = {};
	/** --------InputWrapperBaseProps--------------------------------------- */

	/** Generate random id for label and select elements*/
	const uuid = randomID(id);

	/** Map through the data and format it*/
	const formattedData = data.map((item) =>
		typeof item === 'string' ? { label: item, value: item } : item
	);

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** When no icon is present give the left section 12px of padding*/
	const base = {
		'& .input': {
			paddingLeft: 12
		}
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

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
