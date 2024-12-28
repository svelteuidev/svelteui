<script lang="ts">
	import type { DemoControlNumber } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { NumberInput } from '@svelteuidev/core';

	interface Props {
		value: number;
		label: DemoControlNumber['label'];
		min: DemoControlNumber['min'];
		max: DemoControlNumber['max'];
		step: DemoControlNumber['step'];
	}

	let {
		value,
		label,
		min,
		max,
		step
	}: Props = $props();

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.detail);
	}
</script>

<NumberInput {label} {min} {max} {value} {step} on:change={onChange} />
