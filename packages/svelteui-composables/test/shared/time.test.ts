import { describe, expect, test } from 'vitest';

import { dateTimeString } from '$clib';

describe('time', () => {
	test('returns a date time string based on locale', () => {
		const timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		let result = dateTimeString(timestamp, 'en-US', {
			dateStyle: 'short',
			timeStyle: 'short',
			timeZone: 'utc'
		});
		expect(result).eq('4/25/74, 10:55 PM');

		result = dateTimeString(timestamp, 'en-US', {
			dateStyle: 'full',
			timeStyle: 'medium',
			timeZone: 'utc'
		});
		expect(result).eq('Thursday, April 25, 1974 at 10:55:00 PM');

		result = dateTimeString(timestamp, 'en-US', {
			dateStyle: 'medium',
			timeStyle: 'medium',
			timeZone: 'utc'
		});
		expect(result).eq('Apr 25, 1974, 10:55:00 PM');

		result = dateTimeString(timestamp, 'pt', {
			dateStyle: 'full',
			timeStyle: 'medium',
			timeZone: 'utc'
		});
		expect(result).eq('quinta-feira, 25 de abril de 1974 às 22:55:00');

		result = dateTimeString(timestamp, 'pt', {
			dateStyle: 'full',
			timeStyle: 'medium',
			timeZone: 'utc'
		});
		expect(result).eq('quinta-feira, 25 de abril de 1974 às 22:55:00');
	});
});
