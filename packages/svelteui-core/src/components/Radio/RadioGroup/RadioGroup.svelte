<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Radio from '../Radio.svelte';
	import type { RadioGroupProps as $$RadioGroupProps } from './RadioGroup';
	import { randomID } from '$lib/styles';

	interface $$Props extends $$RadioGroupProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		items: $$Props['items'] = [],
		group: $$Props['group'] = undefined,
		color: $$Props['color'] = undefined,
		value: $$Props['value'] = undefined,
		label: $$Props['label'] = null,
		disabled: $$Props['disabled'] = false,
		size: $$Props['size'] = undefined,
		radius: $$Props['radius'] = undefined,
		position: $$Props['position'] = 'left',
		direction: $$Props['direction'] = 'row',
		labelDirection: $$Props['labelDirection'] = 'right',
		align: $$Props['align'] = 'flex-start',
		spacing: $$Props['spacing'] = 'md',
		name: $$Props['name'] = randomID();
	export { className as class };

	const dispatch = createEventDispatcher();

	function onChanged(val: string, el: EventTarget) {
		const checked = (el as HTMLInputElement).checked;
		value = checked ? val : undefined;
		dispatch('change', val);
	}

	$: group = group || value;
</script>

<!--
@component

A Radio group component is a container for Radios.

@see https://svelteui.dev/core/Radio
@example
    ```svelte
    <RadioGroup bind:value items={items} />
    <RadioGroup label={"Choose your favorite framework"} description={"Choose carefuly"} bind:value={value} items={items} />
    <RadioGroup bind:value={value} items={items} direction={'column'} itemDirection={'right'}/>
    <RadioGroup bind:value items={[{label: 'One', value: 1}, {label: 'Two', value: 2}, {label: 'Three', value: 3}]} />
    ```
-->

<InputWrapper bind:element class={className} {label} {override} {size} {...$$restProps}>
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
			<slot />
		{/if}
	</Group>
</InputWrapper>
