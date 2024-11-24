<script lang="ts">
	import { run } from 'svelte/legacy';

	import { createEventDispatcher } from 'svelte';
	import InputWrapper from '../../InputWrapper/InputWrapper.svelte';
	import Group from '../../Group/Group.svelte';
	import Radio from '../Radio.svelte';
	import type { RadioGroupProps as $$RadioGroupProps } from './RadioGroup';
	import { randomID } from '$lib/styles';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		items?: $$Props['items'];
		group?: $$Props['group'];
		color?: $$Props['color'];
		value?: $$Props['value'];
		label?: $$Props['label'];
		disabled?: $$Props['disabled'];
		size?: $$Props['size'];
		radius?: $$Props['radius'];
		position?: $$Props['position'];
		direction?: $$Props['direction'];
		labelDirection?: $$Props['labelDirection'];
		align?: $$Props['align'];
		spacing?: $$Props['spacing'];
		name?: $$Props['name'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
		children,
		...rest
	}: Props = $props();
	

	const dispatch = createEventDispatcher();

	function onChanged(val: string, el: EventTarget) {
		const checked = (el as HTMLInputElement).checked;
		value = checked ? val : undefined;
		dispatch('change', val);
	}

	run(() => {
		group = group || value;
	});
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
