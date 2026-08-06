<script lang="ts">
	import { NativeSelect } from '@svelteuidev/core';
	import type { ControlProps } from './Control';

	// Made this way to use it for slider component in future
	const MARKS = [
		{ value: 0, label: 'xs' },
		{ value: 25, label: 'sm' },
		{ value: 50, label: 'md' },
		{ value: 75, label: 'lg' },
		{ value: 100, label: 'xl' }
	];

	const values = ['xs', 'sm', 'md', 'lg', 'xl'];

	let { value, label, onchange }: ControlProps = $props();

	let _value = $derived(MARKS.find((mark) => mark.label === value).label);

	function onChange(e) {
		onchange(e.currentTarget.value);
	}
</script>

<NativeSelect value={_value} {label} data={values} onchange={onChange} />

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
