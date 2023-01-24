<script lang="ts">
	import useStyles from './Checkbox.styles';
	import { randomID } from '$lib/styles';
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import ThemeIcon from '../ThemeIcon/ThemeIcon.svelte';
	import CheckboxIcon from './CheckboxIcon.svelte';
	import type { CheckboxProps as $$CheckboxProps } from './Checkbox';

	interface $$Props extends $$CheckboxProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'blue',
		id: $$Props['id'] = randomID(),
		disabled: $$Props['disabled'] = false,
		value: $$Props['value'] = null,
		checked: $$Props['checked'] = false,
		indeterminate: $$Props['indeterminate'] = false,
		label: $$Props['label'] = null,
		radius: $$Props['radius'] = 'sm',
		size: $$Props['size'] = 'md',
    name: $$Props['name'] = '',
		transitionDuration: $$Props['transitionDuration'] = 100;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: checked = indeterminate || checked;
	$: ({ cx, classes, getStyles } = useStyles({ color, radius, size, transitionDuration }, { name: "Checkbox" }));
</script>

<!--
@component

A checkbox input component using the theme styles with support for a label and indeterminate state.

@see https://svelteui.org/core/checkbox
@example
    ```svelte
    <Checkbox />
    <Checkbox size={'lg'} label={'Please accept this'} />
    <Checkbox undetermined />
    <Checkbox checked disabled />
    ```
-->

<Box bind:element class={cx('checkbox', className, getStyles({ css: override }))} {...$$restProps}>
	<div class={classes.inner}>
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
      {name}
		/>
		<ThemeIcon class={classes.iconWrapper} variant={null} {size}>
			<slot>
				<CheckboxIcon class={classes.icon} {indeterminate} />
			</slot>
		</ThemeIcon>
	</div>
	{#if label}
		<label class={classes.label} for={id}>
			{label}
		</label>
	{/if}
</Box>
