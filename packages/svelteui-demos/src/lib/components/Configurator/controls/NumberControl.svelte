<script lang="ts">
	import type { DemoControlNumber } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { NumberInput } from '@svelteuidev/core';

	export let value: number;
	export let label: DemoControlNumber['label'];
	export let min: DemoControlNumber['min'];
	export let max: DemoControlNumber['max'];

	const dispatch = createEventDispatcher();

	function onInput(e) {
		dispatch('change', e.currentTarget.value);
	}
</script>

<!-- TODO: switch to NumberInput when it will be implemented -->
<NumberInput
	{label}
	{min}
	{max}
	bind:value
	on:input={onInput}
/>
