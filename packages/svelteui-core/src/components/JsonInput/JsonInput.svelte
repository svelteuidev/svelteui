<script lang="ts">
	import type { FocusEventHandler } from 'svelte/elements';

	import Textarea from '../Textarea/Textarea.svelte';
	import { validateJson } from './validate-json/validate-json';
	import type { JsonInputProps } from './JsonInput';

	let {
		formatOnBlur = false,
		error = null,
		validationError = null,
		onBlur = undefined,
		readOnly = undefined,
		value = undefined,
		rows = 4,
		serialize = JSON.stringify,
		deserialize = JSON.parse,
		rightSection,
		...rest
	}: JsonInputProps = $props();

	let _value = $state(value);
	let valid = $state(validateJson(() => _value, deserialize));

	const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
		onBlur?.(event);
		valid = validateJson(() => event.currentTarget.value, deserialize);
		if (formatOnBlur && !readOnly && valid && event.currentTarget.value.trim() !== '') {
			_value = serialize(deserialize(event.currentTarget.value), null, 2);
		}
	};

	const rightSectioRenderer = $derived(rightSection);
</script>

<Textarea
	bind:value={_value}
	onblur={handleBlur}
	invalid={!valid}
	error={!valid ? validationError : error}
	{rows}
	{...rest}
>
	{#snippet rightSection()}
		{@render rightSectioRenderer?.()}
	{/snippet}
</Textarea>
