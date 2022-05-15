<script lang="ts">
	import type { DemoControlProps } from '../../../types';
	import { createEventDispatcher } from 'svelte';
	import { Input, InputWrapper } from '@svelteuidev/core';

	export let value: number;
	export let label: DemoControlProps['label'];
	export let min: number | undefined;
	export let max: number | undefined;

	const dispatch = createEventDispatcher();

	function onInput(e) {
		let newValue = e.currentTarget.value * 1;

		// all these validations will be done in NumberInput when it will be implemented
		if (min !== undefined && newValue < min) {
			newValue = min;
			value = min;
		}

		if (max !== undefined && newValue > max) {
			newValue = max;
			value = max;
		}

		dispatch('change', newValue);
	}
</script>

<!-- TODO: switch to NumberInput when it will be implemented -->
<InputWrapper {label}>
	<Input type="number" bind:value on:input={onInput} />
</InputWrapper>
