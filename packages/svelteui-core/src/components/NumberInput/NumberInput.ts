import type { Override } from '$lib/styles';
import type { TextInputProps } from '../TextInput/TextInput';

export type Formatter = (value: string | undefined) => string;
export type Parser = (value: string | undefined) => string | undefined;

export interface NumberInputProps extends Omit<TextInputProps, 'value'> {
	value?: number;
	defaultValue?: number;
	invalid?: boolean;
	decimalSeparator?: string;
	max?: number;
	min?: number;
	step?: number;
	stepHoldDelay?: number;
	stepHoldInterval?: number | ((step: number) => number);
	hideControls?: boolean;
	overrideControls?: Override['props'];
	precision?: number;
	noClampOnBlur?: boolean;
	onchange?: (value: number) => void;
	formatter?: Formatter;
	parser?: Parser;
}
