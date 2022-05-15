<script lang="ts">
	import type { DemoControlProps } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { Input, InputWrapper } from '@svelteuidev/core';

	export let value: string;
	export let label: DemoControlProps['label'];

	const dispatch = createEventDispatcher();

	function onInput(e) {
		dispatch('change', e.currentTarget.value);
	}
</script>

<InputWrapper {label}>
	<Input {value} on:input={onInput} />
</InputWrapper>
