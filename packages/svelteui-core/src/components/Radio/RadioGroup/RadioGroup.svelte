<script lang="ts">
	import { createEventDispatcher, beforeUpdate, onMount, setContext } from 'svelte';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Radio, { ctx } from '../Radio.svelte';
	import type { RadioGroupProps as $$RadioGroupProps } from './RadioGroup';
	import { randomID } from '$lib/styles';

	import { writable } from 'svelte/store';

	interface $$Props extends $$RadioGroupProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = undefined,
		items: $$Props['items'] = [],
		value: $$Props['value'] = undefined,
		label: $$Props['label'] = null,
		disabled: $$Props['disabled'] = false,
		size: $$Props['size'] = undefined,
		radius: $$Props['radius'] = undefined,
		direction: $$Props['direction'] = 'row',
		labelDirection: $$Props['labelDirection'] = 'right',
		align: $$Props['align'] = 'flex-start',
		position: $$Props['position'] = 'left',
		name: $$Props['name'] = randomID();
	export { className as class };
	const dispatch = createEventDispatcher();

	function onChanged(item: string, el: EventTarget) {
		const checked = (el as HTMLInputElement).checked;
		value = checked ? item : undefined;
		dispatch('change', value);
	}

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const selectedValue = writable(value);
	setContext(ctx, {
		selectedValue,
		add: ({ checked, val }) => {
			if (checked) {
				selectedValue.set(val);
			}
		},
		update: (val) => {
			value = val;
		}
	});
	onMount(() => {
		$selectedValue = value;
	});
	beforeUpdate(() => {
		$selectedValue = value;
	});
	selectedValue.subscribe((val) => {
		value = val;
		dispatch('change', val);
	});
</script>

<!--
@component

A Radio group component is a container for Radios.

@see https://svelteui.org/core/Radio
@example
    ```svelte
    <RadioGroup bind:value items={items} />
    <RadioGroup label={"Choose your favorite framework"} description={"Choose carefuly"} bind:value={value} items={items} />
    <RadioGroup bind:value={value} items={items} direction={'column'} itemDirection={'right'}/>
    <RadioGroup bind:value items={[{label: 'One', value: 1}, {label: 'Two', value: 2}, {label: 'Three', value: 3}]} />
    ```
-->

<InputWrapper bind:element class={className} {label} {override} {size} {...$$restProps}>
	{#if items && items.length > 0}
		<Group {direction} {align} {position}>
			{#each items as item}
				<Radio
					{use}
					label={item.label}
					value={item.value}
					{labelDirection}
					checked={value === item.value}
					{radius}
					{size}
					{color}
					{name}
					{disabled}
					isGrouped={true}
					on:change={(e) => onChanged(item.value, e.target)}
				/>
			{/each}
		</Group>
	{:else}
		<Group {direction} {align} {position}>
			<slot />
		</Group>
	{/if}
</InputWrapper>
