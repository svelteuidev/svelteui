<script lang="ts" module>
	export const ctx = 'Radio';
</script>

<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { randomID } from '$lib/styles';
	import Box from '../Box/Box.svelte';
	import type { RadioProps as $$RadioProps } from './Radio';
	import useStyles from './Radio.styles';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		color?: $$Props['color'];
		id?: $$Props['id'];
		disabled?: $$Props['disabled'];
		value?: $$Props['value'];
		checked?: $$Props['checked'];
		label?: $$Props['label'];
		error?: $$Props['error'];
		labelDirection?: $$Props['labelDirection'];
		size?: $$Props['size'];
		name?: $$Props['name'];
		group?: $$Props['group'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = 'blue',
		id = randomID(),
		disabled = false,
		value = undefined,
		checked = $bindable(false),
		label = '',
		error = false,
		labelDirection = 'left',
		size = 'sm',
		name = '',
		group = $bindable(undefined),
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let { cx, classes, getStyles } = $derived(useStyles(
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

@see https://svelteui.dev/core/Radio
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
					{...rest}
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
					{...rest}
					onchange={onChange}
					use:useActions={use}
					use:forwardEvents
				/>
			{/if}
			<div class={classes.inner} aria-hidden></div>
		</div>
		<label class={classes.label} class:disabled for={id}>
			{#if children}{@render children()}{:else}{label}{/if}
		</label>
	</div>
</Box>
