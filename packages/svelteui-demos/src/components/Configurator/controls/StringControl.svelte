<script lang="ts">
	import type { DemoControlString } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import { TextInput } from '@svelteuidev/core';

	interface Props {
		value: string;
		label: DemoControlString['label'];
	}

	let { value, label }: Props = $props();

	const dispatch = createEventDispatcher();

	function onInput(e) {
		dispatch('change', e.currentTarget.value);
	}
</script>

<TextInput {label} {value} on:input={onInput} />
