<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Chip from '../Chip.svelte';
	import type { ChipGroupProps as $$ChipGroupProps } from './ChipGroup';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		color?: $$Props['color'];
		multiple?: $$Props['multiple'];
		items?: $$Props['items'];
		value?: $$Props['value'];
		label?: $$Props['label'];
		disabled?: $$Props['disabled'];
		variant?: $$Props['variant'];
		size?: $$Props['size'];
		radius?: $$Props['radius'];
		direction?: $$Props['direction'];
		align?: $$Props['align'];
		position?: $$Props['position'];
		spacing?: $$Props['spacing'];
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = undefined,
		multiple = false,
		items = [],
		value = $bindable(multiple ? [] : undefined),
		label = null,
		disabled = false,
		variant = 'outline',
		size = undefined,
		radius = undefined,
		direction = 'row',
		align = 'flex-start',
		position = 'left',
		spacing = 'md',
		...rest
	}: Props = $props();
	

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

@see https://svelteui.dev/core/chip
@example
    ```svelte
    <ChipGroup bind:value items={items} />
    <ChipGroup label={"Choose your favorite framework"} description={"Choose carefuly"} bind:value={value} items={items} />
    <ChipGroup bind:value={value} items={items} direction={'column'}/>
    <ChipGroup bind:value items={[{label: 'One', value: 1}, {label: 'Two', value: 2}, {label: 'Three', value: 3}]} />
    ```
-->

<InputWrapper bind:element class={className} {label} {override} {size} {...rest}>
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
