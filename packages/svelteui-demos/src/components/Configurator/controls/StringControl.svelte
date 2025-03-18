<script lang="ts">
	import { TextInput } from '@svelteuidev/core';
	import type { ControlProps } from './Control';

	let { value, label, onchange }: ControlProps = $props();

	function onInput(e) {
		onchange(e.currentTarget.value);
	}
</script>

<TextInput {label} {value} oninput={onInput} />
