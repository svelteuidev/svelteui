import { getEndOfWeek } from './get-end-of-week';
import { describe, test, expect } from 'vitest';

describe('@svelteuidev/dates/get-end-of-week', () => {
	test('returns end of the week', () => {
		const endOfWeek = getEndOfWeek(new Date(2021, 1, 1));
		expect(endOfWeek.getDay()).toBe(0);
	});
	test('returns end of week for first day of week - sunday', () => {
		const endOfWeek = getEndOfWeek(new Date(2021, 1, 1), 'sunday');
		expect(endOfWeek.getDay()).toBe(6);
	});
});
