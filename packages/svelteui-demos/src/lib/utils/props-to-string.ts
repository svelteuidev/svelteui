import type { DemoControl } from '../types';

interface PropToString {
	type: DemoControl['type'];
	name: string;
	value: any;
	defaultValue: any;
}

export function propToString({ type, name, value, defaultValue }: PropToString) {
	if (value === defaultValue || name === 'children') {
		return '';
	}

	if (type === 'string' && value.trim().length === 0) {
		return '';
	}

	if (type === 'boolean') {
		return value ? name : `${name}={false}`;
	}

	if (type === 'number') {
		return `${name}={${value}}`;
	}

	return `${name}="${value}"`;
}

interface PropsToString {
	props: DemoControl[];
	values: Record<string, any>;
	multiline: boolean | number;
	multilineEndNewLine: boolean;
}

const getOffset = (value: boolean | number) => {
	if (typeof value === 'boolean') {
		return '\n  ';
	}

	return `\n${Array(value).fill('  ').join('')}`;
};

export function propsToString({ props, values, multiline, multilineEndNewLine }: PropsToString) {
	const propsString = props
		.map((prop) =>
			propToString({
				type: prop.type,
				name: prop.name,
				value: values[prop.name],
				defaultValue: prop.defaultValue
			})
		)
		.filter(Boolean)
		.join(multiline ? getOffset(multiline) : ' ')
		.trim();
	const pre = multiline ? getOffset(multiline) : '';
	const post = multiline && multilineEndNewLine ? getOffset((multiline as number) - 1) : '';

	return multiline && propsString ? `${pre}${propsString}${post}` : propsString;
}