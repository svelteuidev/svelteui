<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Checkbox from '../Checkbox.svelte';
	import type {
		CheckboxGroupProps as $$CheckboxGroupProps,
		CheckboxGroupEvents as $$CheckboxGroupEvents
	} from './CheckboxGroup';

	interface $$Props extends $$CheckboxGroupProps {}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events extends $$CheckboxGroupEvents {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'gray',
		items: $$Props['items'] = [],
		value: $$Props['value'] = [],
		label: $$Props['label'] = null,
		size: $$Props['size'] = 'md',
		radius: $$Props['radius'] = 'sm',
		direction: $$Props['direction'] = 'row',
		align: $$Props['align'] = 'flex-start',
		spacing: $$Props['spacing'] = 'md';
	export { className as class };

	const dispatch = createEventDispatcher();

	function onChanged(item, el) {
		if (el.checked) value = [...value, item];
		else value = value.filter((val) => val !== item);
		dispatch('change', value);
	}
</script>

<!--
@component

A checkbox group component using the theme styles and builds a set of checkboxes according to
the items passed.

@see https://svelteui.dev/core/checkbox
@example
    ```svelte
    <CheckboxGroup bind:value items={items} />
    <CheckboxGroup label={"Choose your favorite framework"} description={"Choose carefuly"} bind:value={value} items={items} />
    <CheckboxGroup bind:value={value} items={items} direction={'column'}/>
    ```
-->

<InputWrapper bind:element class={className} {label} {override} {size} {...$$restProps}>
	<Group {direction} {spacing} {align}>
		{#each items as item}
			<Checkbox
				{use}
				label={item.label}
				value={item.value}
				checked={value.includes(item.value)}
				{radius}
				{size}
				{color}
				on:change={(e) => onChanged(item.value, e.target)}
			/>
		{/each}
	</Group>
</InputWrapper>
