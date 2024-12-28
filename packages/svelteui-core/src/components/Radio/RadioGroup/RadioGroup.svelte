<script lang="ts">
	import { randomID } from '$lib/styles';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Radio from '../Radio.svelte';
	import type { RadioGroupProps } from './RadioGroup';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		items = [],
		group = $bindable(undefined),
		color = undefined,
		value = $bindable(undefined),
		label = undefined,
		disabled = false,
		size = undefined,
		radius = undefined,
		position = 'left',
		direction = 'row',
		labelDirection = 'right',
		align = 'flex-start',
		spacing = 'md',
		name = randomID(),
		onChange = () => {},
		children,
		...rest
	}: RadioGroupProps = $props();

	function onChanged(val: string, el: EventTarget) {
		const checked = (el as HTMLInputElement).checked;
		value = checked ? val : undefined;
		onChange(val);
	}

	$effect.pre(() => {
		group = group || value;
	});
</script>

<InputWrapper bind:element class={className} {label} {override} {size} {...rest}>
	<Group {direction} {align} {position} {spacing}>
		{#if items && items.length > 0}
			{#each items as item}
				<Radio
					{use}
					bind:group
					label={item.label}
					value={item.value}
					{labelDirection}
					{radius}
					{size}
					{color}
					{name}
					{disabled}
					on:change={(e) => onChanged(item.value, e.target)}
				/>
			{/each}
		{:else}
			{@render children?.()}
		{/if}
	</Group>
</InputWrapper>
