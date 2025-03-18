<script lang="ts">
	import type { DemoControlNumber } from '$lib/types';
	import { NumberInput } from '@svelteuidev/core';
	import type { ControlProps } from './Control';

	interface Props extends ControlProps<number> {
		min: DemoControlNumber['min'];
		max: DemoControlNumber['max'];
		step: DemoControlNumber['step'];
	}

	let { value, label, min, max, step, onchange }: Props = $props();
</script>

<NumberInput {label} {min} {max} {value} {step} {onchange} />
