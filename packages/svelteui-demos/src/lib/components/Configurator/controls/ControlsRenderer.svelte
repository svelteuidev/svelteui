<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import { controls as controlsComponents } from './index';
	import type { DemoControl } from '$lib/types';
	import { upperFirst, isEnabled } from '../../../utils';

	export let value: Record<string, any> = {};
	export let controls: DemoControl[];
	export let onChange: (data) => void;

	// Contain data for all possible controls even for conditional, we want to keep track of all data
	let data: Record<string, any> = controls.reduce(dataReducer, {});

	function dataReducer(acc, { name, initialValue, type, controls }) {
		acc[name] =
			type !== 'composite'
				? value[name] ?? initialValue
				: value[name] ?? controls.reduce(dataReducer, {});
		return acc;
	}

	// $: triggerChange(value, data);

	$: controlsData = controls.map((control) => {
		const { type, label, name, ...props } = control;

		return {
			component: controlsComponents[type],
			label: upperFirst(label || name),
			value: data[name],
			onChange(e) {
				const value = e.currentTarget ? e.currentTarget.value : e.detail;
				changeData(name, value);
			},
			props,
			hidden: !isEnabled(control, data)
		};
	});
	//
	// function triggerChange(value, data) {
	// 	console.log('triggerChange', value, data);
	// 	if (JSON.stringify(value) !== JSON.stringify(data)) {
	// 		onChange(data);
	// 	}
	// }

	function changeData(name: string, value: any) {
		data = { ...data, [name]: value };
		onChange(data);
	}
</script>

{#each controlsData as { component, label, value, props, onChange, hidden }, i}
	{#if component}
		<div class="control" style={hidden ? 'display: none;' : ''}>
			<svelte:component
				this={component}
				{label}
				{value}
				{...props}
				on:change={onChange}
				onChange=""
			/>
		</div>
	{/if}
{/each}
