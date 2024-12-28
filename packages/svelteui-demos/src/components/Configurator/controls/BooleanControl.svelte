<script lang="ts">
	import type { DemoControlBoolean } from '$lib/types';
	import { Switch } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	interface Props {
		value: boolean;
		label: DemoControlBoolean['label'];
	}

	let { value, label }: Props = $props();

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.currentTarget.checked);
	}
</script>

<Switch size="sm" checked={value} {label} on:change={onChange} />
