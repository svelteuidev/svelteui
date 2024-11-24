<script lang="ts">
	import useStyles from './Chip.styles.js';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import type { ChipProps as $$ChipProps } from './Chip';

	

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
		radius?: $$Props['radius'];
		size?: $$Props['size'];
		variant?: $$Props['variant'];
		transitionDuration?: $$Props['transitionDuration'];
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
		radius = 'xl',
		size = 'sm',
		variant = 'outline',
		transitionDuration = 100,
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let { cx, classes, getStyles } = $derived(useStyles(
		{ color, radius, size, transitionDuration },
		{ name: 'Chip' }
	));
</script>

<!--
@component

A picker for one or more options.

@see https://svelteui.dev/core/chip
@example
    ```svelte
    <Chip>Chips</Chip>
    <Chip size={'lg'}>Big Chip</Chip>
    <Chip>Another one</Chip>
    <Chip checked disabled>Disabled</Chip>
    ```
-->

<Box
	bind:element
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	<div class={classes.inputContainer}>
		<input
			use:useActions={use}
			use:forwardEvents
			bind:checked
			class={classes.input}
			class:disabled
			type="checkbox"
			{disabled}
			{value}
			{id}
		/>
	</div>

	<label class={cx(classes.label, variant)} class:checked class:disabled for={id}>
		{#if checked}
			<div class={classes.iconWrapper}>
				<svg
					class={classes.checkIcon}
					viewBox="0 0 10 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		{/if}
		{#if children}{@render children()}{:else}{label}{/if}
	</label>
</Box>
