<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Chip from '../Chip.svelte';
	import type { ChipGroupProps as $$ChipGroupProps } from './ChipGroup';

	interface $$Props extends $$ChipGroupProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = undefined,
		multiple: $$Props['multiple'] = false,
		items: $$Props['items'] = [],
		value: $$Props['value'] = multiple ? [] : undefined,
		label: $$Props['label'] = null,
		disabled: $$Props['disabled'] = false,
		variant: $$Props['variant'] = 'outline',
		size: $$Props['size'] = undefined,
		radius: $$Props['radius'] = undefined,
		direction: $$Props['direction'] = 'row',
		align: $$Props['align'] = 'flex-start',
		position: $$Props['position'] = 'left',
		spacing: $$Props['spacing'] = 'md';
	export { className as class };

	const dispatch = createEventDispatcher();

	function onChanged(item: string, el: EventTarget) {
		const checked = (el as HTMLInputElement).checked;
		if (Array.isArray(value)) {
			value = checked ? [...value, item] : value.filter((val) => val !== item);
		} else {
			value = checked ? item : undefined;
		}
		dispatch('change', value);
	}
</script>

<!--
@component

A chip group component is a container for Chips.

@see https://svelteui.org/core/chip
@example
    ```svelte
    <ChipGroup bind:value items={items} />
    <ChipGroup label={"Choose your favorite framework"} description={"Choose carefuly"} bind:value={value} items={items} />
    <ChipGroup bind:value={value} items={items} direction={'column'}/>
    <ChipGroup bind:value items={[{label: 'One', value: 1}, {label: 'Two', value: 2}, {label: 'Three', value: 3}]} />
    ```
-->

<InputWrapper bind:element class={className} {label} {override} {size} {...$$restProps}>
	<Group {direction} {spacing} {align} {position}>
		{#each items as item}
			<Chip
				{use}
				label={item.label}
				value={item.value}
				checked={Array.isArray(value) ? value.includes(item.value) : value === item.value}
				{radius}
				{size}
				{color}
				{variant}
				{disabled}
				on:change={(e) => onChanged(item.value, e.target)}
			/>
		{/each}
	</Group>
</InputWrapper>
