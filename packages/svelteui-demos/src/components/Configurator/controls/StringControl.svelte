<script lang="ts">
	import type { DemoControlString } from '$lib/types';
	import { TextInput } from '@svelteuidev/core';

	interface Props {
		value: string;
		label: DemoControlString['label'];
		onchange: (value: string) => void;
	}

	let { value, label, onchange }: Props = $props();

	function onInput(e) {
		onchange(e.currentTarget.value);
	}
</script>

<TextInput {label} {value} on:input={onInput} />
