<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { PasswordInputProps as $$PasswordInputProps } from './PasswordInput';
	import { ActionIcon } from '../ActionIcon';
	import PasswordToggleIcon from './PasswordToggleIcon.svelte';
	import { getButtonSize, getIconSize, getRightSectionWidth } from './PasswordInput.styles';

	interface $$Props extends $$PasswordInputProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		label: $$Props['label'] = '',
		description: $$Props['description'] = null,
		error: $$Props['error'] = null,
		required: $$Props['required'] = false,
		disabled: $$Props['disabled'] = false,
		labelProps: $$Props['labelProps'] = {},
		descriptionProps: $$Props['descriptionProps'] = {},
		errorProps: $$Props['errorProps'] = {},
		invalid: $$Props['invalid'] = false,
		id: $$Props['id'] = randomID('password-input'),
		labelElement: $$Props['labelElement'] = 'label',
		size: $$Props['size'] = 'sm',
		radius: $$Props['radius'] = 'sm',
		value: $$Props['value'] = '',
		placeholder: $$Props['placeholder'] = '',
		toggleTabIndex: $$Props['toggleTabIndex'] = -1,
		visibilityToggleLabel: $$Props['visibilityToggleLabel'] = undefined,
		visible: $$Props['visible'] = undefined,
		onVisibilityChange: $$Props['onVisibilityChange'] = undefined,
		defaultVisible: $$Props['defaultVisible'] = undefined;
	export { className as class };

	let uncontrolledVisible = defaultVisible !== undefined ? defaultVisible : false;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: _invalid = invalid || !!error;
	$: _visible = visible === undefined ? uncontrolledVisible : visible;

	const toggleVisibility = () => {
		if (visible === undefined) {
			uncontrolledVisible = !_visible;
		}
		onVisibilityChange?.(!_visible);
	};
</script>

<!--
@component

Password input with visibility toggle

@see https://svelteui.dev/core/password-input
@example
    ```tsx
    <PasswordInput
      label='Password'
      description="Make sure it's very strong"
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
	{size}
>
	<Input
		bind:value
		{required}
		{size}
		{id}
		{placeholder}
		{radius}
		rightSectionWidth={getRightSectionWidth(size)}
		{disabled}
		{...$$restProps}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection
		type={_visible ? 'text' : 'password'}
	>
		<svelte:fragment slot="rightSection">
			{#if !disabled}
				<ActionIcon
					tabindex={toggleTabIndex}
					{radius}
					size={getButtonSize(size)}
					aria-hidden={!visibilityToggleLabel}
					aria-label={visibilityToggleLabel}
					on:click={toggleVisibility}
				>
					<slot name="visibilityToggleIcon" visible={_visible}>
						<PasswordToggleIcon reveal={_visible} size={getIconSize(size)} />
					</slot>
				</ActionIcon>
			{/if}
		</svelte:fragment>
	</Input>
</InputWrapper>
