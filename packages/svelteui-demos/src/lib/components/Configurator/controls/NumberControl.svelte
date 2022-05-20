<script lang="ts">
	import type { DemoControlNumber } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { Input, InputWrapper } from '@svelteuidev/core';

	export let value: number;
	export let label: DemoControlNumber['label'];
	export let min: DemoControlNumber['min'];
	export let max: DemoControlNumber['max'];

	const dispatch = createEventDispatcher();

	function onInput(e) {
		let newValue = e.currentTarget.value * 1;
		let lastNumber = e.currentTarget.value[e.currentTarget.value.length - 1] * 1;

		// all these validations will be done in NumberInput when it will be implemented
		if (min !== undefined && newValue < min) {
			newValue = min;
			value = min;
		}

		if (max !== undefined && newValue > max) {
			newValue = Math.max(Math.min(lastNumber, max), min);
			value = Math.max(Math.min(lastNumber, max), min);
		}

		dispatch('change', newValue);
	}
</script>

<!-- TODO: switch to NumberInput when it will be implemented -->
<InputWrapper {label}>
	<Input type="number" bind:value on:input={onInput} />
</InputWrapper>
