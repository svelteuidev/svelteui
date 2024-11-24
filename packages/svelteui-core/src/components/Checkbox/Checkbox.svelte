<script lang="ts">
	import { run } from 'svelte/legacy';

	import useStyles from './Checkbox.styles';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import ThemeIcon from '../ThemeIcon/ThemeIcon.svelte';
	import CheckboxIcon from './CheckboxIcon.svelte';
	import type { CheckboxProps as $$CheckboxProps } from './Checkbox';

	

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
		indeterminate?: $$Props['indeterminate'];
		label?: $$Props['label'];
		radius?: $$Props['radius'];
		size?: $$Props['size'];
		name?: $$Props['name'];
		required?: $$Props['required'];
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
		value = null,
		checked = $bindable(false),
		indeterminate = false,
		label = null,
		radius = 'sm',
		size = 'md',
		name = '',
		required = false,
		transitionDuration = 100,
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	run(() => {
		checked = indeterminate || checked;
	});
	let { cx, classes, getStyles } = $derived(useStyles(
		{ color, radius, size, transitionDuration },
		{ name: 'Checkbox' }
	));
</script>

<!--
@component

A checkbox input component using the theme styles with support for a label and indeterminate state.

@see https://svelteui.dev/core/checkbox
@example
    ```svelte
    <Checkbox />
    <Checkbox size={'lg'} label={'Please accept this'} />
    <Checkbox undetermined />
    <Checkbox checked disabled />
    ```
-->

<Box
	bind:element
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	<div class={classes.inner}>
		<input
			use:useActions={use}
			use:forwardEvents
			bind:checked
			class={classes.input}
			class:disabled
			type="checkbox"
			{disabled}
			{required}
			{value}
			{id}
			{name}
		/>
		<ThemeIcon class={classes.iconWrapper} variant={null} {size}>
			{#if children}{@render children()}{:else}
				<CheckboxIcon class={classes.icon} {indeterminate} />
			{/if}
		</ThemeIcon>
	</div>
	{#if label}
		<label class={classes.label} for={id}>
			{label}
		</label>
	{/if}
</Box>
