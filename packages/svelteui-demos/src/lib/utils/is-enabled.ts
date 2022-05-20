import type { DemoControl } from '$lib/types';

export function isEnabled(control: DemoControl, data: Record<string, any>): boolean {
	const { when } = control;

	if (when) {
		const { control: controlName, comparator, value } = when;
		switch (comparator) {
			case '===':
				return data[controlName] === value;
			case '!==':
				return data[controlName] !== value;
		}
	}

	return true;
}
