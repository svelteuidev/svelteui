<script lang="ts">
	import type { DemoControlNumber } from '$lib/types';
	import { NumberInput } from '@svelteuidev/core';

	interface Props {
		value: number;
		label: DemoControlNumber['label'];
		min: DemoControlNumber['min'];
		max: DemoControlNumber['max'];
		step: DemoControlNumber['step'];
		onchange: (value: number) => void;
	}

	let { value, label, min, max, step, onchange }: Props = $props();

	function onChange(e) {
		onchange(e.detail);
	}
</script>

<NumberInput {label} {min} {max} {value} {step} on:change={onChange} />
