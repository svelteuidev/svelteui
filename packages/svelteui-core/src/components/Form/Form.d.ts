import type { UseFormReturnType } from './src';
import type { UseFormInput } from './utils/types';

export type Values = Record<string, unknown>;

export interface FormProps extends Omit<UseFormInput<Values>, 'validate'> {
	onSubmit?(values: TransformedValues<Form>): void;
	onReset?(values: TransformedValues<Form>): void;
	validation?: Record<string, unknown>;
}

export interface FieldProps {
	form: UseFormReturnType<Values>;
	name: string;
	isCheckbox?: boolean;
}

export interface GetInputPropsReturnType {
	value: any;
	onChange: any;
	checked?: any;
	error?: any;
	onFocus?: any;
	onBlur?: any;
}
