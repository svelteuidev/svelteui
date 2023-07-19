<script lang="ts">
	// import { getContext } from 'svelte';
	import type { FieldProps as $$FieldProps } from './Form';
	// import { key } from './formContext';

	interface $$Props extends $$FieldProps {}

	export let form: $$Props['form'] = undefined,
		name: $$Props['name'] = undefined;

	// const { update } = getContext(key);

	$: field = form.getInputProps(name);
	$: inputProps = {
		value: field.value,
		error: field.error,
		checked: field.checked
	};
	$: htmlInputProps = {
		value: field.value,
		checked: field.checked,
		'aria-invalid': !!field.error || undefined
	};
</script>

<slot {field} {inputProps} {htmlInputProps} />
