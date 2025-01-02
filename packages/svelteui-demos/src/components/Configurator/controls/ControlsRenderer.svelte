<script lang="ts">
	import type { Component } from 'svelte';

	/* eslint-disable @typescript-eslint/no-explicit-any */
	import type { DemoControl } from '$lib/types';
	import { controls as controlsComponents } from './index';
	import { upperFirst, isEnabled } from '../../../utils';
	import type { ControlProps } from './Control';

	interface Props {
		value?: Record<string, any>;
		controls: DemoControl[];
		onchange: (value: any) => void;
	}

	let { value = {}, controls, onchange }: Props = $props();

	// Contain data for all possible controls even for conditional, we want to keep track of all data
	let data: Record<string, any> = $state(controls.reduce(dataReducer, {}));

	function dataReducer(acc, { name, initialValue, type, controls }) {
		acc[name] =
			type !== 'composite'
				? (value[name] ?? initialValue)
				: (value[name] ?? controls.reduce(dataReducer, {}));
		return acc;
	}

	function changeData(name: string, value: any) {
		data = { ...data, [name]: value };
		onchange(data);
	}

	let controlsData = $derived(
		controls.map((control) => {
			const { type, label, name, ...props } = control;

			return {
				component: controlsComponents[type],
				label: upperFirst(label || name),
				value: data[name],
				onChange: (value) => {
					changeData(name, value);
				},
				props,
				hidden: !isEnabled(control, data)
			};
		})
	);
</script>

{#each controlsData as control}
	{#if control.component}
		{@const SvelteComponent = control.component as Component<ControlProps>}
		<div class="control" style={control.hidden ? 'display: none;' : ''}>
			<SvelteComponent
				label={control.label}
				value={control.value}
				{...control.props}
				onchange={control.onChange}
			/>
		</div>
	{/if}
{/each}
