<script lang="ts">
	import type { DemoControlNumber } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { NumberInput } from '@svelteuidev/core';

	export let value: number;
	export let label: DemoControlNumber['label'];
	export let min: DemoControlNumber['min'];
	export let max: DemoControlNumber['max'];
	export let step: DemoControlNumber['step'];

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.detail);
	}
</script>

<NumberInput {label} {min} {max} {value} {step} on:change={onChange} />
