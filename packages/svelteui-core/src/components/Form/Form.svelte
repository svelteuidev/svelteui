<script lang="ts">
	import { setContext } from 'svelte';
	import type { FormProps as $$FormProps } from './Form';
	import { key } from './formContext';
	import isEqual from 'fast-deep-equal';
	import { getInputOnChange } from './src/get-input-on-change';
	import { getPath, insertPath, removePath, reorderPath, setPath } from './src/paths';
	import { filterErrors } from './src/filter-errors';
	import { shouldValidateOnChange, validateFieldValue, validateValues } from './src/validate';
	import { getStatus } from './src/get-status';
	import { changeErrorIndices, clearListState, reorderErrors } from './src/lists';
	import type {
		_TransformValues,
		ClearErrors,
		ClearFieldDirty,
		ClearFieldError,
		FormStatus,
		GetFieldStatus,
		GetInputProps,
		GetTransformedValues,
		InsertListItem,
		IsValid,
		OnReset,
		OnSubmit,
		RemoveListItem,
		ReorderListItem,
		Reset,
		ResetDirty,
		SetErrors,
		SetFieldError,
		SetFieldValue,
		SetValues,
		Validate,
		ValidateField
	} from './src/types';

	type Values = Record<string, unknown>;
	interface TransformValues extends _TransformValues<Values> {}

	interface $$Props extends $$FormProps {}

	export let initialValues: $$Props['initialValues'] = {},
		validation: $$Props['validation'] = {},
		initialErrors: $$Props['initialErrors'] = {},
		initialDirty: $$Props['initialDirty'] = {},
		initialTouched: $$Props['initialTouched'] = {},
		clearInputErrorOnChange: $$Props['clearInputErrorOnChange'] = true,
		validateInputOnChange: $$Props['validateInputOnChange'] = false,
		validateInputOnBlur: $$Props['validateInputOnBlur'] = false,
		transformValues: $$Props['transformValues'] = (values) => values;

	let touched = initialTouched;
	let dirty = initialDirty;
	let values = initialValues;
	let errors = filterErrors(initialErrors);
	let rules = validation;

	const setTouched = (newTouched: FormStatus) => {
		touched = newTouched;
	};
	const setDirty = (newDirty: FormStatus) => {
		dirty = newDirty;
	};

	let valuesSnapshot = initialValues;
	const setValuesSnapshot = (_values: any) => {
		valuesSnapshot = _values;
	};

	const resetTouched = () => {
		touched = {};
	};
	const resetDirty: ResetDirty<any> = (_values) => {
		const newSnapshot = _values ? { ...values, ..._values } : values;
		setValuesSnapshot(newSnapshot);
		dirty = {};
	};

	const setErrors: SetErrors = (errs) => {
		errors = filterErrors(typeof errs === 'function' ? errs(errors) : errs);
	};

	const clearErrors: ClearErrors = () => {
		errors = {};
	};
	const reset: Reset = () => {
		values = initialValues;
		clearErrors();
		setValuesSnapshot(initialValues);
		dirty = {};
		resetTouched();
	};

	const setFieldError: SetFieldError<any> = (path, error) =>
		setErrors((current) => ({ ...current, [path]: error }));

	const clearFieldError: ClearFieldError = (path) =>
		setErrors((current) => {
			if (typeof path !== 'string') {
				return current;
			}

			const clone = { ...current };
			delete clone[path];
			return clone;
		});

	const clearFieldDirty: ClearFieldDirty = (path) =>
		(dirty = ((current) => {
			if (typeof path !== 'string') {
				return current;
			}

			const result = clearListState(path, current);
			delete result[path];
			return result;
		})(dirty));

	const setFieldValue: SetFieldValue<any> = (path, value) => {
		const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
		clearFieldDirty(path);
		touched = { ...touched, [path]: true };
		values = ((current) => {
			const result = setPath(path, value, current);

			if (shouldValidate) {
				const validationResults = validateFieldValue(path, rules, result);
				validationResults.hasError
					? setFieldError(path, validationResults.error)
					: clearFieldError(path);
			}

			return result;
		})(values);

		!shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
	};

	const setValues: SetValues<any> = (payload) => {
		values = ((currentValues) => {
			const valuesPartial = typeof payload === 'function' ? payload(currentValues) : payload;
			return { ...currentValues, ...valuesPartial };
		})(values);
		clearInputErrorOnChange && clearErrors();
	};

	const reorderListItem: ReorderListItem<any> = (path, payload) => {
		clearFieldDirty(path);
		values = reorderPath(path, payload, values);
		errors = reorderErrors(path, payload, errors);
	};

	const removeListItem: RemoveListItem<any> = (path, index) => {
		clearFieldDirty(path);
		values = removePath(path, index, values);
		errors = changeErrorIndices(path, index, errors, -1);
	};

	const insertListItem: InsertListItem<any> = (path, item, index) => {
		clearFieldDirty(path);
		values = insertPath(path, item, index, values);
		errors = changeErrorIndices(path, index, errors, 1);
	};

	const validate: Validate = () => {
		const results = validateValues(rules, values);
		errors = results.errors;
		return results;
	};

	const validateField: ValidateField<any> = (path) => {
		const results = validateFieldValue(path, rules, values);
		results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
		return results;
	};

	const getInputProps: GetInputProps<any> = (
		path,
		{ type = 'input', withError = true, withFocus = true } = {}
	) => {
		const onChange = getInputOnChange((value) => setFieldValue(path, value as any));
		const payload: any = { onChange };

		if (withError) {
			payload.error = errors[path];
		}

		if (type === 'checkbox') {
			payload.checked = getPath(path, values);
		} else {
			payload.value = getPath(path, values);
		}

		if (withFocus) {
			payload.onFocus = () => (touched = { ...touched, [path]: true });
			payload.onBlur = () => {
				if (shouldValidateOnChange(path, validateInputOnBlur)) {
					const validationResults = validateFieldValue(path, rules, values);

					validationResults.hasError
						? setFieldError(path, validationResults.error)
						: clearFieldError(path);
				}
			};
		}

		return payload;
	};

	const onSubmit: OnSubmit<any, TransformValues> =
		(handleSubmit, handleValidationFailure) => (event) => {
			event?.preventDefault();
			const results = validate();

			if (results.hasErrors) {
				handleValidationFailure?.(results.errors, values, event);
			} else {
				handleSubmit?.(transformValues(values) as any, event);
			}
		};

	const getTransformedValues: GetTransformedValues<any, TransformValues> = (input) =>
		(transformValues as any)(input || values);

	const onReset: OnReset = (event) => {
		event.preventDefault();
		reset();
	};

	const isDirty: GetFieldStatus<any> = (path) => {
		if (path) {
			const overriddenValue = getPath(path, dirty);
			if (typeof overriddenValue === 'boolean') {
				return overriddenValue;
			}

			const sliceOfValues = getPath(path, values);
			const sliceOfInitialValues = getPath(path, valuesSnapshot);
			return !isEqual(sliceOfValues, sliceOfInitialValues);
		}

		const isOverridden = Object.keys(dirty).length > 0;
		if (isOverridden) {
			return getStatus(dirty);
		}

		return !isEqual(values, valuesSnapshot);
	};

	const isTouched: GetFieldStatus<any> = (path) => getStatus(touched, path);

	const isValid: IsValid<any> = (path) =>
		path
			? !validateFieldValue(path, rules, values).hasError
			: !validateValues(rules, values).hasErrors;

	let form;

	$: form = {
		values,
		errors,
		setValues,
		setErrors,
		setFieldValue,
		setFieldError,
		clearFieldError,
		clearErrors,
		reset,
		validate,
		validateField,
		reorderListItem,
		removeListItem,
		insertListItem,
		getInputProps,
		onSubmit,
		onReset,
		isDirty,
		isTouched,
		setTouched,
		setDirty,
		resetTouched,
		resetDirty,
		isValid,
		getTransformedValues
	};

	$: setContext(key, { form });
</script>

<slot {form} />
