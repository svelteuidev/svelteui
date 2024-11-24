<script lang="ts">
	import type { JsonInputProps as $$JsonInputProps } from './JsonInput';
	import Textarea from '../Textarea/Textarea.svelte';
	import { validateJson } from './validate-json/validate-json';

	

	interface Props {
		formatOnBlur?: $$Props['formatOnBlur'];
		error?: $$Props['error'];
		validationError?: $$Props['validationError'];
		onBlur?: $$Props['on:blur'];
		readOnly?: $$Props['readonly'];
		value?: $$Props['value'];
		rows?: $$Props['rows'];
		serialize?: $$Props['serialize'];
		deserialize?: $$Props['deserialize'];
		rightSection?: import('svelte').Snippet;
		[key: string]: any
	}

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
	}: Props = $props();

	let _value = $state(value);
	let valid = $state(validateJson(_value, deserialize));

	const handleBlur = (event) => {
		onBlur?.(event);
		valid = validateJson(event.currentTarget.value, deserialize);
		if (formatOnBlur && !readOnly && valid && event.currentTarget.value.trim() !== '') {
			_value = serialize(deserialize(event.currentTarget.value), null, 2);
		}
	};

	const rightSection_render = $derived(rightSection);
</script>

<!--
@component

Textarea specially made for JSON input.

@see https://svelteui.dev/core/json-input
@example
    ```tsx
    <JsonInput
      label='Data'
      placeholder='Enter JSON data'
      required
    />
    ```
-->

<Textarea
	bind:value={_value}
	on:blur={handleBlur}
	invalid={!valid}
	error={!valid ? validationError : error}
	{rows}
	{...rest}
>
	{#snippet rightSection()}
		{@render rightSection_render?.()}
	{/snippet}
</Textarea>
