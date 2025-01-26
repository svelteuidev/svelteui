<script lang="ts">
	import { useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import { Input } from '../Input';
	import { InputWrapper } from '../InputWrapper';
	import { ActionIcon } from '../ActionIcon';
	import PasswordToggleIcon from './PasswordToggleIcon.svelte';
	import { getButtonSize, getIconSize, getRightSectionWidth } from './PasswordInput.styles';
	import type { PasswordInputProps } from './PasswordInput';

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
		visible = $bindable(undefined),
		onVisibilityChange = undefined,
		defaultVisible = undefined,
		visibilityToggleIcon,
		...rest
	}: PasswordInputProps = $props();

	let _visible = $derived(visible === undefined ? defaultVisible : visible);

	let _invalid = $derived(invalid || !!error);

	const toggleVisibility = () => {
		visible = !visible;
		onVisibilityChange?.(visible);
	};
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
		{radius}
		rightSectionWidth={getRightSectionWidth(size)}
		{disabled}
		{...rest}
		use={[[useActions, use]]}
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
					onclick={toggleVisibility}
				>
					{#if visibilityToggleIcon}
						{@render visibilityToggleIcon(_visible)}
					{:else}
						<PasswordToggleIcon reveal={_visible} size={getIconSize(size)} />
					{/if}
				</ActionIcon>
			{/if}
		{/snippet}
	</Input>
</InputWrapper>
