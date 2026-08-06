<script lang="ts">
	import { Switch } from '@svelteuidev/core';
	import type { ControlProps } from './Control';

	let { value = $bindable(), label, onchange }: ControlProps<boolean> = $props();

	function onChange(e) {
		value = e.currentTarget.checked;
		onchange(value);
	}
</script>

<Switch size="sm" checked={value} {label} onchange={onChange} />
