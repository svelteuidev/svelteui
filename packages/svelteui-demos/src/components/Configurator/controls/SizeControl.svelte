<script lang="ts">
	import type { DemoControlSize } from '$lib/types';
	import { NativeSelect } from '@svelteuidev/core';
	import { createEventDispatcher } from 'svelte';

	// Made this way to use it for slider component in future
	const MARKS = [
		{ value: 0, label: 'xs' },
		{ value: 25, label: 'sm' },
		{ value: 50, label: 'md' },
		{ value: 75, label: 'lg' },
		{ value: 100, label: 'xl' }
	];

	const values = ['xs', 'sm', 'md', 'lg', 'xl'];

	const dispatch = createEventDispatcher();

	export let value: string;
	export let label: DemoControlSize['label'];

	$: _value = MARKS.find((mark) => mark.label === value).label;

	function onChange(e) {
		dispatch('change', e.currentTarget.value);
	}
</script>

<NativeSelect value={_value} {label} data={values} on:change={onChange} />

<!--
  TODO: this is how we probably will use Slider component here when it will be implemented
  <Slider
      value={_value}
      onChange={onChange}
      label={(val) => MARKS.find((mark) => mark.value === val).label}
      step={25}
      marks={MARKS}
      styles={{ markLabel: { display: 'none' } }}
  />
-->
