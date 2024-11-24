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

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		label?: $$Props['label'];
		description?: $$Props['description'];
		error?: $$Props['error'];
		required?: $$Props['required'];
		disabled?: $$Props['disabled'];
		labelProps?: $$Props['labelProps'];
		descriptionProps?: $$Props['descriptionProps'];
		errorProps?: $$Props['errorProps'];
		invalid?: $$Props['invalid'];
		id?: $$Props['id'];
		labelElement?: $$Props['labelElement'];
		size?: $$Props['size'];
		radius?: $$Props['radius'];
		value?: $$Props['value'];
		placeholder?: $$Props['placeholder'];
		toggleTabIndex?: $$Props['toggleTabIndex'];
		visibilityToggleLabel?: $$Props['visibilityToggleLabel'];
		visible?: $$Props['visible'];
		onVisibilityChange?: $$Props['onVisibilityChange'];
		defaultVisible?: $$Props['defaultVisible'];
		visibilityToggleIcon?: import('svelte').Snippet<[any]>;
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
		disabled = false,
		labelProps = {},
		descriptionProps = {},
		errorProps = {},
		invalid = false,
		id = randomID('password-input'),
		labelElement = 'label',
		size = 'sm',
		radius = 'sm',
		value = $bindable(''),
		placeholder = '',
		toggleTabIndex = -1,
		visibilityToggleLabel = undefined,
		visible = undefined,
		onVisibilityChange = undefined,
		defaultVisible = undefined,
		visibilityToggleIcon,
		...rest
	}: Props = $props();
	

	let uncontrolledVisible = $state(defaultVisible !== undefined ? defaultVisible : false);

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let _invalid = $derived(invalid || !!error);
	let _visible = $derived(visible === undefined ? uncontrolledVisible : visible);

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
		{...rest}
		use={[forwardEvents, [useActions, use]]}
		invalid={_invalid}
		showRightSection
		type={_visible ? 'text' : 'password'}
	>
		{#snippet rightSection()}
			
				{#if !disabled}
					<ActionIcon
						tabindex={toggleTabIndex}
						{radius}
						size={getButtonSize(size)}
						aria-hidden={!visibilityToggleLabel}
						aria-label={visibilityToggleLabel}
						on:click={toggleVisibility}
					>
						{#if visibilityToggleIcon}{@render visibilityToggleIcon({ visible: _visible, })}{:else}
							<PasswordToggleIcon reveal={_visible} size={getIconSize(size)} />
						{/if}
					</ActionIcon>
				{/if}
			
			{/snippet}
	</Input>
</InputWrapper>
