<script lang="ts">
	import type { FieldProps as $$FieldProps, GetInputPropsReturnType } from './Form';

	interface $$Props extends $$FieldProps {}

	export let form: $$Props['form'] = undefined,
		name: $$Props['name'] = undefined,
		isCheckbox: $$Props['isCheckbox'] = false;

	let fieldProps: GetInputPropsReturnType;

	$: fieldProps = form.getInputProps(name, { type: isCheckbox ? 'checkbox' : 'input' });
	$: field = {
		...fieldProps,
		onValueChange: fieldProps.onChange,
		onChange: (e) => fieldProps.onChange(isCheckbox ? e.target.checked : e.target.value)
	};
	$: inputProps = {
		error: field.error,
		value: !isCheckbox ? field.value : undefined,
		checked: isCheckbox ? field.checked : undefined
	};
	$: htmlInputProps = {
		value: !isCheckbox ? field.value : undefined,
		checked: isCheckbox ? field.checked : undefined,
		'aria-invalid': !!field.error || undefined
	};
</script>

<slot {field} {inputProps} {htmlInputProps} />
