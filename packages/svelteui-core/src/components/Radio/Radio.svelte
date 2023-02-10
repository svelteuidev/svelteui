<script lang="ts">
	import useStyles from './Radio.styles.js';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import type { RadioProps as $$RadioProps } from './Radio';
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';

	interface $$Props extends $$RadioProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'blue',
		id: $$Props['id'] = randomID(),
		disabled: $$Props['disabled'] = false,
		value: $$Props['value'] = undefined,
		checked: $$Props['checked'] = false,
		label: $$Props['label'] = '',
		labelDirection: $$Props['labelDirection'] = 'right',
		radius: $$Props['radius'] = 'xl',
		size: $$Props['size'] = 'sm',
		variant: $$Props['variant'] = 'outline',
		name: $$Props['name'] = '',
		transitionDuration: $$Props['transitionDuration'] = 100;
	export let isgrouped = false;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes, getStyles } = useStyles(
		{ color, radius, size, transitionDuration, labelDirection },
		{ name: 'Radio' }
	));

	const ctx: any = getContext('RadioButtonGroup');
	const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : undefined);
	if (ctx) {
		ctx.add({ id, checked, disabled, value });
	}
	$: checked = $selectedValue === value;
</script>

<!--
@component

A Radio component.

@see https://svelteui.org/core/Radio
@example
    ```svelte
    <Radio>Radios</Radio>
    <Radio size={'lg'}>Big Radio</Radio>
    <Radio>Another one</Radio>
    <Radio checked disabled>Disabled</Radio>
    ```
-->

<Box bind:element class={cx('Radio', className, getStyles({ css: override }))} {...$$restProps}>
	<div class={classes.inputContainer}>
		{#if isgrouped}
			<input
				use:useActions={use}
				use:forwardEvents
				{checked}
				class={classes.input}
				class:disabled
				type="radio"
				{name}
				{disabled}
				{value}
				{id}
			/>
		{:else}
			<input
				use:useActions={use}
				use:forwardEvents
				{checked}
				class={classes.input}
				class:disabled
				type="radio"
				{name}
				{disabled}
				{value}
				{id}
				on:change
				on:change={(e) => {
					if (ctx) {
						ctx.update(value);
					}
				}}
			/>
		{/if}
	</div>

	<label class={cx(classes.label, variant)} class:checked class:disabled for={id} />

	<label class={cx(classes.labelText, variant)} class:disabled for={id}>
		<slot>{label}</slot>
	</label>
</Box>
