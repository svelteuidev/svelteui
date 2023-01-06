<script lang="ts">
	import useStyles from './Input.styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Box from '../Box/Box.svelte';
	import type { InputProps as $$InputProps } from './Input.styles';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';

	interface $$Props extends $$InputProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'input',
		icon: $$Props['icon'] = null,
		iconWidth: $$Props['iconWidth'] = 36,
		iconProps: $$Props['iconProps'] = { size: 20, color: 'currentColor' },
		showRightSection: $$Props['showRightSection'] = $$slots.rightSection,
		rightSectionWidth: $$Props['rightSectionWidth'] = 36,
		rightSectionProps: $$Props['rightSectionProps'] = {},
		wrapperProps: $$Props['wrapperProps'] = {},
		id: $$Props['id'] = 'input-id',
		required: $$Props['required'] = false,
		radius: $$Props['radius'] = 'sm',
		variant: $$Props['variant'] = 'default',
		disabled: $$Props['disabled'] = false,
		size: $$Props['size'] = 'sm',
		value: $$Props['value'] = '',
		invalid: $$Props['invalid'] = false,
		multiline: $$Props['multiline'] = false,
		autocomplete: $$Props['autocomplete'] = 'on',
		placeholder: $$Props['placeholder'] = '';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** workaround for root type errors, this should be replaced by a better type system */
	const castRoot = () => root as string;
	let isHTMLElement;
	let isComponent;

	function onChange() {
		// the 'this' keyword in this case is the
		// HTML element provided in prop 'root'
		value = this.value;
	}

	$: {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}
	$: ({ cx, classes, getStyles } = useStyles({
		icon,
		iconWidth,
		invalid,
		multiline,
		radius,
		rightSectionWidth,
		showRightSection,
		size,
		variant
	}));
</script>

<!--
@component
**DISCLAIMER: In most cases, you should not use Input component in your application. Input component is a base for other inputs and was not designed to be used directly.**

Base component to create custom inputs

@see https://svelteui.org/core/input
@example
    ```svelte
    <Input
      icon={Twitter}
      placeholder="Your twitter"
      rightSectionWidth={70}
      override={{ '& .rightSection': { pointerEvents: 'none' } }}
    >
		<Badge slot='rightSection' color="blue" variant="filled">
			new
		</Badge>
	<Input />
    ```
-->

<Box {...wrapperProps} class={getStyles({ css: override })} {...$$restProps}>
	{#if icon}
		<IconRenderer {icon} className={classes.icon} {...iconProps} iconSize={16} />
	{/if}
	{#if isHTMLElement && root === 'input'}
		<input
			bind:value
			bind:this={element}
			use:useActions={use}
			use:forwardEvents
			{required}
			{disabled}
			{id}
			{placeholder}
			{autocomplete}
			aria-invalid={invalid}
			class:disabled
			class:invalid
			class:withIcon={icon}
			class={cx(className, classes.input, `${variant}Variant`)}
			{...$$restProps}
		/>
	{:else if isHTMLElement}
		<!-- prettier-ignore -->
		<svelte:element
			bind:this={element}
			this={castRoot()}
			use:useActions={use}
			use:forwardEvents
			on:change={onChange}
			{value}
			{required}
			{disabled}
			{id}
      {autocomplete}
			aria-invalid={invalid}
			class:disabled
			class:invalid
			class:withIcon={icon}
			class={cx(className, classes.input, `${variant}Variant`)}
			{...$$restProps}
			>
			<slot />
		</svelte:element>
	{:else if isComponent && typeof root !== "string"}
		<svelte:component
			this={root}
			bind:element
			bind:value
			use={[forwardEvents, [useActions, use]]}
			aria-invalid={invalid}
			class={cx(
				className,
				{
					[classes.disabled]: disabled,
					[classes.invalid]: invalid,
					[classes.withIcon]: icon
				},
				`${variant}Variant`
			)}
			{disabled}
			{required}
			{id}
			{...$$restProps}
		>
			<slot />
		</svelte:component>
	{/if}
	{#if showRightSection}
		<div {...rightSectionProps} class={classes.rightSection}>
			<slot name="rightSection" />
		</div>
	{/if}
</Box>
