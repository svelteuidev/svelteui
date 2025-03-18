import dayjs from 'dayjs';
import { isSameDate } from './is-same-date';
import { describe, test, expect } from 'vitest';

describe('@svelteuidev/dates/is-same-date', () => {
	test('correctly detects same dates', () => {
		expect(isSameDate(new Date(2021, 10, 12), new Date(2021, 10, 12))).toBe(true);
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.set('hour', 1)
					.toDate()
			)
		).toBe(true);
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.set('minute', 1)
					.toDate()
			)
		).toBe(true);
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.set('second', 1)
					.toDate()
			)
		).toBe(true);
	});

	test('correctly detects dates that are not same', () => {
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.add(1, 'day')
					.toDate()
			)
		).toBe(false);
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.subtract(1, 'day')
					.toDate()
			)
		).toBe(false);
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.subtract(1, 'month')
					.toDate()
			)
		).toBe(false);
		expect(
			isSameDate(
				new Date(2021, 10, 12),
				dayjs(new Date(2021, 10, 12))
					.subtract(1, 'year')
					.toDate()
			)
		).toBe(false);
	});
});
