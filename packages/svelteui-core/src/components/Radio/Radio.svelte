<script lang="ts" context="module">
	export const ctx = 'Radio';
</script>

<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import type { RadioProps as $$RadioProps } from './Radio';
	import useStyles from './Radio.styles';

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
		error: $$Props['error'] = false,
		labelDirection: $$Props['labelDirection'] = 'left',
		size: $$Props['size'] = 'sm',
		name: $$Props['name'] = '',
		group: $$Props['group'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes, getStyles } = useStyles(
		{ color, size, labelDirection, error },
		{ name: 'Radio' }
	));

	function onChange(e: InputEvent) {
		checked = (e.target as HTMLInputElement).checked;
	}
</script>

<!--
@component

Radio component.

@see https://svelteui.org/core/Radio
@example
    ```svelte
    <Radio>Radio</Radio>
    <Radio size={'lg'}>Big Radio</Radio>
    <Radio checked disabled>Disabled</Radio>
    ```
-->

<Box bind:element class={cx(className, classes.root, getStyles({ css: override }))}>
	<div class={classes.container}>
		<div class={classes.inputContainer}>
			{#if group}
				<input
					bind:group
					class={classes.input}
					class:disabled
					type="radio"
					{name}
					{disabled}
					{value}
					{id}
					{...$$restProps}
					use:useActions={use}
					use:forwardEvents
				/>
			{:else}
				<input
					class={classes.input}
					class:disabled
					type="radio"
					{checked}
					{name}
					{disabled}
					{value}
					{id}
					{...$$restProps}
					on:change={onChange}
					use:useActions={use}
					use:forwardEvents
				/>
			{/if}
			<div class={classes.inner} aria-hidden />
		</div>
		<label class={classes.label} class:disabled for={id}>
			<slot>{label}</slot>
		</label>
	</div>
</Box>
