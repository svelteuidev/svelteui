import type { UseFormReturnType } from './src';

export interface FormProps {
	onSubmit?(values: TransformedValues<Form>): void;
	onReset?(values: TransformedValues<Form>): void;
	initialValues?: any;
	initialErrors?: any;
	initialDirty?: any;
	initialTouched?: any;
	clearInputErrorOnChange?: boolean;
	validateInputOnChange?: boolean;
	validateInputOnBlur?: boolean;
	transformValues?: (values: any) => any;
	validation?: any;
}

export interface FieldProps {
	form: UseFormReturnType<any, (values: any) => any>;
	name: string;
}
