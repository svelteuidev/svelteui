<script lang="ts">
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Chip from '../Chip.svelte';
	import type { ChipGroupProps } from './ChipGroup';

	let {
		use = [],
		element = $bindable(null),
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
		onchange = () => {},
		...rest
	}: ChipGroupProps = $props();

	$effect.pre(() => {
		if (multiple && value && !Array.isArray(value)) {
			value = [value];
		}
	});

	function onChanged(item: string, el: EventTarget) {
		const checked = (el as HTMLInputElement).checked;
		if (Array.isArray(value) && multiple) {
			value = checked ? [...value, item] : value.filter((val) => val !== item);
		} else {
			value = checked ? item : undefined;
		}
		onchange(value);
	}
</script>

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
				onchange={(e) => onChanged(item.value, e.target)}
			/>
		{/each}
	</Group>
</InputWrapper>
