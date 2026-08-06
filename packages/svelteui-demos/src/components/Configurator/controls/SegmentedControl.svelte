<script lang="ts">
	import type { DemoControlSegmented } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { upperFirst } from '$lib/utils';
	import type { ControlProps } from './Control';

	interface Props extends ControlProps {
		data: DemoControlSegmented['data'];
		capitalize?: DemoControlSegmented['capitalize'];
	}

	let { value, label, data, capitalize = true, onchange }: Props = $props();

	function onChange(e) {
		onchange(e.currentTarget.value);
	}
</script>

<!-- TODO: change NativeSelect to Segmented when it will be implemented -->
<NativeSelect
	{value}
	{label}
	data={data.map((item) => ({
		value: item.value,
		label: capitalize ? upperFirst(item.label) : item.label
	}))}
	onchange={onChange}
/>
