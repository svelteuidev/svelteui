import type { InputBaseProps } from '../Input/Input.styles';

export interface NumberInputProps extends InputBaseProps {
	value?: number | undefined;
	defaultValue?: number | undefined;
	invalid?: boolean;
	decimalSeparator?: string;
	max?: number;
	min?: number;
	step?: number;
	stepHoldInterval?: number;
	hideControls?: boolean;
	precision?: number;
	noClampOnBlur?: boolean;
	formatter?: Formatter;
	parser?: Parser;
}

type Formatter = (value: string | undefined) => string;
type Parser = (value: string | undefined) => string | undefined;

export const defaultFormatter: Formatter = (value) => value || '';
export const defaultParser: Parser = (num) => {
	if (num === '-') return num;

	const parsedNum = parseFloat(num);
	return Number.isNaN(parsedNum) ? undefined : num;
};

export const CONTROL_SIZES = {
	xs: 20,
	sm: 24,
	md: 30,
	lg: 34,
	xl: 36
};
