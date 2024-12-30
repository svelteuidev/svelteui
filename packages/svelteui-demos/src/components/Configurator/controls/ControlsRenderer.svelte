<script lang="ts">
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	import type { DemoControl } from '$lib/types';
	import { controls as controlsComponents } from './index';
	import { upperFirst, isEnabled } from '../../../utils';

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
				onChange: (e) => {
					const value = e.currentTarget ? e.currentTarget.value : e.detail;
					changeData(name, value);
				},
				props,
				hidden: !isEnabled(control, data)
			};
		})
	);
</script>

{#each controlsData as { component, label, value, props, onChange, hidden }, i}
	{#if component}
		{@const SvelteComponent = component}
		<div class="control" style={hidden ? 'display: none;' : ''}>
			<SvelteComponent {label} {value} {...props} on:change={onChange} />
		</div>
	{/if}
{/each}
