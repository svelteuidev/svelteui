<script lang="ts">
	import useStyles from './Chip.styles.js';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import type { ChipProps as $$ChipProps } from './Chip.styles.js';

	interface $$Props extends $$ChipProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'blue',
		id: $$Props['id'] = randomID(),
		disabled: $$Props['disabled'] = false,
		value: $$Props['value'] = null,
		checked: $$Props['checked'] = false,
		label: $$Props['label'] = null,
		radius: $$Props['radius'] = 'sm',
    size: $$Props['size'] = 'md',
    variant: $$Props['variant'] = 'outline',
    // type: $$Props['type'] = 'checkbox',
		transitionDuration: $$Props['transitionDuration'] = 100;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes, getStyles } = useStyles({ color, radius, size, transitionDuration }));
</script>

<!--
@component

A picker for one or more options.

@see https://svelteui.org/core/chip
@example
    ```svelte
    <Chip />
    <Chip size={'lg'} label={'Please accept this'} />
    <Chip />
    <Chip checked disabled />
    ```
-->

<Box bind:element class={cx('chip', className, getStyles({ css: override }))} {...$$restProps}>
	<div class={classes.inner}>
		<input
			use:useActions={use}
			use:forwardEvents
			bind:checked
			class={classes.input}
			class:disabled
			type='checkbox'
			{disabled}
			{value}
			{id}
		/>

	</div>
	{#if label}
		<label class={classes.label} for={id}>
      <slot></slot>
		</label>
	{/if}
</Box>
