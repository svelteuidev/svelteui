<script lang="ts">
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Checkbox from '../Checkbox.svelte';
	import type { CheckboxGroupProps } from './CheckboxGroup';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		color = 'gray',
		items = [],
		value = $bindable([]),
		label = null,
		size = 'md',
		radius = 'sm',
		direction = 'row',
		align = 'flex-start',
		spacing = 'md',
		onchange = () => {},
		...rest
	}: CheckboxGroupProps = $props();

	function onChanged(item, el) {
		if (el.checked) value = [...value, item];
		else value = value.filter((val) => val !== item);

		onchange(value);
	}
</script>

<InputWrapper bind:element class={className} {label} {override} {size} {...rest}>
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
