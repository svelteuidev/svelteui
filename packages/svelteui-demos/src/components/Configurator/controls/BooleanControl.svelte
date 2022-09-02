<script lang="ts">
	import type { DemoControlBoolean } from '$lib/types';
	import { Switch } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	export let value: boolean;
	export let label: DemoControlBoolean['label'];

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.currentTarget.checked);
	}
</script>

<Switch size="sm" checked={value} {label} on:change={onChange} />
