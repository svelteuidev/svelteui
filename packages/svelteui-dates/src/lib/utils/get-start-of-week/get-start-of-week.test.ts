import { getStartOfWeek } from './get-start-of-week';
import { describe, test, expect } from 'vitest';

describe('@svelteuidev/dates/get-start-of-week', () => {
	test('returns start of week', () => {
		const startOfWeek = getStartOfWeek(new Date(2021, 1, 5));
		expect(startOfWeek.getDay()).toBe(1);
	});
	test('returns start of week, first day of the week - sunday', () => {
		const startOfWeek = getStartOfWeek(new Date(2021, 1, 5), 'sunday');
		expect(startOfWeek.getDay()).toBe(0);
	});
});
