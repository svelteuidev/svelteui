import type { DemoControl } from '../types';

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface PropToString {
	type: DemoControl['type'];
	name: string;
	value: any;
	defaultValue: any;
	controls: DemoControl[];
	multiline?: boolean | number;
}

export function propToString({
	type,
	name,
	value,
	defaultValue,
	controls,
	multiline = false
}: PropToString) {
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

	if (type === 'composite') {
		const stringVal = compositeToString({ name, value, controls, multiline });

		return stringVal ? `${name}={${stringVal}}` : '';
	}

	return `${name}="${value}"`;
}

interface CompositeToString {
	name: string;
	value: any;
	controls: DemoControl[];
	multiline?: boolean | number;
}

function compositeToString({ value, controls, multiline = false }: CompositeToString): string {
	const multiLineOffset = Number(multiline);
	const stringVal = controls
		.map((control) => {
			const { type, name, defaultValue } = control;

			if (type === 'composite') {
				const stringVal = compositeToString({
					name: name,
					value: value[name],
					controls: control.controls,
					multiline: multiLineOffset ? multiLineOffset + 1 : multiLineOffset
				});

				return stringVal ? `${name}: ${stringVal}` : '';
			} else {
				if (value[name] === defaultValue) {
					return '';
				}

				if (['boolean', 'number'].includes(type)) {
					return `${name}: ${value[name]}`;
				}

				return `${name}: '${value[name]}'`;
			}
		})
		.filter(Boolean)
		.join(multiLineOffset ? `,${getOffset(multiLineOffset + 1)}` : ', ');

	if (multiLineOffset) {
		return stringVal
			? `{${getOffset(multiLineOffset + 1)}${stringVal}${getOffset(multiLineOffset)}}`
			: '';
	}

	return stringVal ? `{ ${stringVal} }` : '';
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
				defaultValue: prop.defaultValue,
				controls: prop.type === 'composite' ? prop.controls : undefined,
				multiline
			})
		)
		.filter(Boolean)
		.join(multiline ? getOffset(multiline) : ' ')
		.trim();
	const pre = multiline ? getOffset(multiline) : '';
	const post = multiline && multilineEndNewLine ? getOffset((multiline as number) - 1) : '';

	return multiline && propsString ? `${pre}${propsString}${post}` : propsString;
}
