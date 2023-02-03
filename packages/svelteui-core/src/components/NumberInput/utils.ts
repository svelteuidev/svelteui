import type { Formatter, Parser } from '../NumberInput';

export const defaultFormatter: Formatter = (value) => value || '';
export const defaultParser: Parser = (num) => {
	if (num === '-') return num;

	const parsedNum = parseFloat(num);
	return Number.isNaN(parsedNum) ? undefined : num;
};
