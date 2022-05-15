<script lang="ts">
	import type { DemoControlProps } from '$lib/types';
	import { Switch } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	export let value: boolean;
	export let label: DemoControlProps['label'];

	const dispatch = createEventDispatcher();

	function onChange(e) {
		dispatch('change', e.currentTarget.checked);
	}
</script>

<Switch size="sm" checked={value} {label} on:change={onChange} />
