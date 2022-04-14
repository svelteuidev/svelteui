import { describe, expect, test } from 'vitest';

import { dateTimeString } from '$lib';

describe('time', () => {
	test('returns a date time string based on locale', () => {
		let timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		let result = dateTimeString(timestamp, "en-US");
		expect(result).eq('4/25/74, 11:55 PM');

		result = dateTimeString(timestamp, "en-US", { dateStyle: "full", timeStyle: "medium" });
		expect(result).eq('Thursday, April 25, 1974 at 11:55:00 PM');

		result = dateTimeString(timestamp, "en-US", { dateStyle: "medium", timeStyle: "medium" });
		expect(result).eq('Apr 25, 1974, 11:55:00 PM');

		result = dateTimeString(timestamp, "pt", { dateStyle: "full", timeStyle: "medium" });
		expect(result).eq('quinta-feira, 25 de abril de 1974 23:55:00');

		result = dateTimeString(timestamp, "pt", { dateStyle: "full", timeStyle: "medium", timeZone: "utc" });
		expect(result).eq('quinta-feira, 25 de abril de 1974 22:55:00');
	});
});
