/* eslint-disable @typescript-eslint/no-empty-function */
import { describe, expect, test } from 'vitest';

import { dateTimeString, dateString, timeString } from '$lib';

describe('time', () => {
	test('returns a date time string with the default separators', () => {
		let timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		let result = dateTimeString(timestamp);
		expect(result).eq('25/04/1974 23:55:00');

		timestamp = Date.parse('1 Apr 1974 1:00:50 GMT');
		result = dateTimeString(timestamp);
		expect(result).eq('01/04/1974 02:00:50');

		timestamp = Date.parse('25 Nov 1974 22:55:01 GMT');
		result = dateTimeString(timestamp);
		expect(result).eq('25/11/1974 23:55:01');
	});

	test('returns a UTC date time string with the default separators', () => {
		let timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		let result = dateTimeString(timestamp, ' ', '/', ':', true);
		expect(result).eq('25/04/1974 22:55:00');

		timestamp = Date.parse('1 Apr 1974 1:00:50 GMT');
		result = dateTimeString(timestamp, ' ', '/', ':', true);
		expect(result).eq('01/04/1974 01:00:50');

        timestamp = Date.parse('25 Nov 1974 22:55:01 GMT');
		result = dateTimeString(timestamp, ' ', '/', ':', true);
		expect(result).eq('25/11/1974 22:55:01');
	});

	test('returns a date time string with the custom separators', () => {
		const timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		const result = dateTimeString(timestamp, "--", "-", ".");
		expect(result).eq('25-04-1974--23.55.00');
	});

    test('return incomplete date time string', () => {
        const timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		const result = dateTimeString(timestamp, ' ', '/', ':', false, {
            day: true,
            month: false,
            year: false,
            hours: true,
            minutes: true,
            seconds: false
        });
		expect(result).eq('25 23:55');
    });

    test('return only date string ', () => {
        let timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		let result = dateString(timestamp);
		expect(result).eq('25/04/1974');

        timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		result = dateString(timestamp, '/', true);
		expect(result).eq('25/04/1974');
    });

    test('return only time string ', () => {
        let timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		let result = timeString(timestamp);
		expect(result).eq('23:55:00');

        timestamp = Date.parse('25 Apr 1974 22:55:00 GMT');
		result = timeString(timestamp, ':', true);
		expect(result).eq('22:55:00');
    });
});
