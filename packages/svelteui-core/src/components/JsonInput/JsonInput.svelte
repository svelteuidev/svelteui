<script lang="ts">
	import type { JsonInputProps as $$JsonInputProps } from './JsonInput';
	import Textarea from '../Textarea/Textarea.svelte';
	import { validateJson } from './validate-json/validate-json';

	interface $$Props extends $$JsonInputProps {}

	export let formatOnBlur: $$Props['formatOnBlur'] = false,
		error: $$Props['error'] = null,
		validationError: $$Props['validationError'] = null,
		onBlur: $$Props['on:blur'] = undefined,
		readOnly: $$Props['readonly'] = undefined,
		value: $$Props['value'] = undefined,
		rows: $$Props['rows'] = 4,
		serialize: $$Props['serialize'] = JSON.stringify,
		deserialize: $$Props['deserialize'] = JSON.parse;

	let _value = value;
	let valid = validateJson(_value, deserialize);

	const handleBlur = (event) => {
		onBlur?.(event);
		valid = validateJson(event.currentTarget.value, deserialize);
		if (formatOnBlur && !readOnly && valid && event.currentTarget.value.trim() !== '') {
			_value = serialize(deserialize(event.currentTarget.value), null, 2);
		}
	};
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
	{...$$restProps}
>
	<slot slot="rightSection" name="rightSection" />
</Textarea>
