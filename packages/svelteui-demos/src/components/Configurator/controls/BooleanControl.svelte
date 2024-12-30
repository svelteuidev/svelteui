<script lang="ts">
	import type { DemoControlBoolean } from '$lib/types';
	import { Switch } from '@svelteuidev/core';

	interface Props {
		value: boolean;
		label: DemoControlBoolean['label'];
		onchange: (value: boolean) => void;
	}

	let { value = $bindable(), label, onchange }: Props = $props();

	function onChange(e) {
		value = e.currentTarget.checked;
		onchange(value);
	}
</script>

<Switch size="sm" checked={value} {label} on:change={onChange} />
