<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { getSize, randomID, rem } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import type { PasswordInputProps as $$PasswordInputProps } from './PasswordInput';
	import { ActionIcon } from '../ActionIcon';
	import PasswordToggleIcon from './PasswordToggleIcon.svelte';

	const buttonSizes = {
		xs: rem(22),
		sm: rem(26),
		md: rem(28),
		lg: rem(32),
		xl: rem(40)
	};

	const iconSizes = {
		xs: rem(12),
		sm: rem(15),
		md: rem(17),
		lg: rem(19),
		xl: rem(21)
	};

	const rightSectionSizes = {
		xs: rem(28),
		sm: rem(32),
		md: rem(34),
		lg: rem(44),
		xl: rem(54)
	};

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
		id: $$Props['id'] = 'input-id',
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

	const rightSectionWidth = getSize({ size, sizes: rightSectionSizes });

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	const baseId = randomID(id);
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

@see https://svelteui.org/core/password-input
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
	id={baseId}
	{labelElement}
	{size}
>
	<Input
		bind:value
		{required}
		{size}
		id={baseId}
		{placeholder}
		{radius}
		{rightSectionWidth}
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
					size={getSize({ size, sizes: buttonSizes })}
					aria-hidden={!visibilityToggleLabel}
					aria-label={visibilityToggleLabel}
					on:click={toggleVisibility}
				>
					<slot name="visibilityToggleIcon" visible={_visible}>
						<PasswordToggleIcon reveal={_visible} size={getSize({ size, sizes: iconSizes })} />
					</slot>
				</ActionIcon>
			{/if}
		</svelte:fragment>
	</Input>
</InputWrapper>
