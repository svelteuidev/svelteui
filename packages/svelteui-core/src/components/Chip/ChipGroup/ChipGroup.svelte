<script lang="ts">
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import type { ChipGroupProps as $$ChipGroupProps } from './ChipGroup.styles.js';
  import Chip from "$lib/components/Chip/Chip.svelte";

	interface $$Props extends $$ChipGroupProps {}

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

	function onChanged(item, el) {
		if (el.checked) value = [...value, item];
		else value = value.filter((val) => val !== item);
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
    ```
-->

<InputWrapper bind:element class={className} {label} {override} {size} {...$$restProps}>
	<Group {direction} {spacing} {align}>
		{#each items as item}
			<Chip
        type="radio"
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
