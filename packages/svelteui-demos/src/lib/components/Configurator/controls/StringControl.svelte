<script lang="ts">
	import type { DemoControlString } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { TextInput } from '@svelteuidev/core';

	export let value: string;
	export let label: DemoControlString['label'];

	const dispatch = createEventDispatcher();

	function onInput(e) {
		dispatch('change', e.currentTarget.value);
	}
</script>

<TextInput {label} {value} on:input={onInput} />
