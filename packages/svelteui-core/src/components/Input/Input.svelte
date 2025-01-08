<script lang="ts" generics="T">
	import { useActions } from '$lib/internal';
	import { Box } from '../Box';
	import { IconRenderer } from '../IconRenderer';
	import useStyles from './Input.styles';
	import type { InputProps } from './Input';

	let {
		use = [],
		element = $bindable(undefined),
		className = '',
		override = {},
		root = 'input',
		iconComponent = null,
		iconWidth = 36,
		iconProps = { size: 20, color: 'currentColor' },
		rightSectionWidth = 36,
		rightSectionProps = {},
		wrapperProps = {},
		id = 'input-id',
		required = false,
		radius = 'sm',
		variant = 'default',
		disabled = false,
		size = 'sm',
		value = $bindable(undefined),
		invalid = false,
		multiline = false,
		autocomplete = 'on',
		type = 'text',
		placeholder = undefined,
		autofocus = undefined,
		resize = 'none',
		noPointerEventsRightSection = false,
		icon,
		rightSection,
		children,
		showRightSection = !!rightSection,
		oninput,
		...rest
	}: InputProps<T> = $props();

	/** workaround for root type errors, this should be replaced by a better type system */
	type Input = 'input' | 'select' | 'textarea' | 'datalist';
	function castRoot() {
		return root as string as Input;
	}
	function isInput(root: string): root is Input {
		return ['input', 'select', 'textarea', 'datalist'].includes(root);
	}

	// @TODO
	// Slot forwarding and conditional slots will be reworked for Svelte 5. This is waiting
	// for that fix, since currently setting a slot and then checking for $$slot.icon
	// for the `withIcon` class won't work.
	// Discussion here: https://github.com/sveltejs/svelte/pull/8304 and
	// https://github.com/sveltejs/svelte/issues/8765
	let iconElement: HTMLElement;
	let isIconSlotUsed = Boolean(iconElement?.innerHTML);

	function onChange() {
		// the 'this' keyword in this case is the
		// HTML element provided in prop 'root'
		value = this.value;
	}

	function onInput(event) {
		if (event.target.type === 'checkbox') {
			value = event.target.checked;
		} else if (event.target.type === 'number' || event.target.type === 'range') {
			value = +event.target.value;
		} else {
			value = event.target.value;
		}
		oninput(event);
	}

	let isHTMLElement = $derived(root && typeof root === 'string');
	let isComponent = $derived(root && typeof root === 'function');

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				icon: iconComponent,
				iconWidth,
				invalid,
				multiline,
				radius,
				rightSectionWidth,
				showRightSection,
				size,
				resize,
				variant
			},
			{ name: 'Input' }
		)
	);
</script>

<Box {...wrapperProps} class={cx(classes.root, getStyles({ css: override }))}>
	{#if isHTMLElement && root === 'input'}
		<!-- svelte-ignore a11y_autofocus -->
		<input
			{value}
			{type}
			bind:this={element}
			use:useActions={use}
			{required}
			{disabled}
			{id}
			{placeholder}
			{autocomplete}
			{autofocus}
			aria-invalid={invalid}
			class={cx(
				className,
				classes.input,
				{
					[classes.disabled]: disabled,
					[classes.invalid]: invalid,
					[classes.withIcon]: icon || iconComponent || isIconSlotUsed
				},
				classes[`${variant}Variant`] ?? {}
			)}
			{...rest}
			oninput={onInput}
		/>
	{:else if isHTMLElement && isInput(String(root))}
		<!-- on:change needs to appear before use:forwardEvents so that the
   		ordering of the events is correct and the value is updated before propagation -->
		<!-- prettier-ignore -->
		<!-- svelte-ignore a11y_autofocus -->
		<svelte:element
			this={castRoot()}
			bind:this={element}
			{value}
			{required}
			{disabled}
			{id}
			{placeholder}
			{autocomplete}
			{type}
			{autofocus}
			aria-invalid={invalid}
			class:disabled
			class:invalid
			class={cx(
				className,
				classes.input,
				{
					[classes.disabled]: disabled,
					[classes.invalid]: invalid,
					[classes.withIcon]: icon || isIconSlotUsed
				},
				classes[`${variant}Variant`] ?? {}
			)}
			onchange={onChange}
			use:useActions={use}
			{...rest}
			oninput={onInput}
		>
			{@render children?.()}
		</svelte:element>
	{:else if isComponent && typeof root !== 'string'}
		<!-- svelte-ignore svelte_component_deprecated -->
		<svelte:component
			this={root}
			bind:element
			bind:value
			use={[[useActions, use]]}
			aria-invalid={invalid}
			class={cx(
				className,
				{
					[classes.disabled]: disabled,
					[classes.invalid]: invalid,
					[classes.withIcon]: icon || iconComponent || isIconSlotUsed
				},
				classes[`${variant}Variant`] ?? {}
			)}
			{disabled}
			{required}
			{id}
			{type}
			{autofocus}
			{...rest}
		>
			{@render children?.()}
		</svelte:component>
	{/if}
	{#if icon}
		<div class={cx(classes.iconWrapper)}>
			{@render icon()}
		</div>
	{/if}
	{#if iconComponent}
		<div class={cx(classes.icon, classes.iconWrapper)}>
			<IconRenderer icon={iconComponent} {iconProps} iconSize={16} />
		</div>
	{/if}
	{#if showRightSection}
		<div
			{...rightSectionProps}
			class={cx(classes.rightSection, { [classes.noPointerEvents]: noPointerEventsRightSection })}
		>
			{@render rightSection?.()}
		</div>
	{/if}
</Box>
