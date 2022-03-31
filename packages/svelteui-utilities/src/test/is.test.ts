import { describe, expect, test } from 'vitest';

import {
	isBoolean,
	isClient,
	isFunction,
	isNumber,
	isObject,
	isString,
	isWindow,
	now,
	rand,
	sleep,
	timestamp
} from '$lib';

describe('is', () => {
	describe('isClient', () => {
		test('returns true when window is defined', () => {
			expect(isClient).eq(true);
		});
	});

	describe('isBoolean', () => {
		test('returns true when the value is a boolean', () => {
			expect(isBoolean(true)).eq(true);
			expect(isBoolean(false)).eq(true);
		});

		test('returns false when the value is not a boolean', () => {
			expect(isBoolean(1)).eq(false);
		});
	});

	describe('isFunction', () => {
		test('returns true when the value is a function', () => {
			expect(
				isFunction(() => {
					return;
				})
			).eq(true);
			expect(
				isFunction(function () {
					return;
				})
			).eq(true);
		});

		test('returns false when the value is not a function', () => {
			expect(isFunction(1)).eq(false);
		});
	});

	describe('isNumber', () => {
		test('returns true when the value is a number', () => {
			expect(isNumber(1)).eq(true);
			expect(isNumber(1.2)).eq(true);
			expect(isNumber(NaN)).eq(true);
		});

		test('returns false when the value is not a number', () => {
			expect(isNumber('test')).eq(false);
			expect(
				isNumber(() => {
					return;
				})
			).eq(false);
			expect(isNumber(true)).eq(false);
		});
	});

	describe('isString', () => {
		test('returns true when the value is a string', () => {
			expect(isString('test')).eq(true);
			expect(isString(['t'].toString())).eq(true);
		});

		test('returns false when the value is not a string', () => {
			expect(isString(1)).eq(false);
			expect(
				isString(() => {
					return;
				})
			).eq(false);
			expect(isString(true)).eq(false);
		});
	});

	describe('isObject', () => {
		test('returns true when the value is an object', () => {
			expect(isObject({})).eq(true);
			expect(isObject({ key: 1 })).eq(true);
		});

		test('returns false when the value is not an object', () => {
			expect(isObject(1)).eq(false);
			expect(
				isObject(() => {
					return;
				})
			).eq(false);
			expect(isObject(true)).eq(false);
		});
	});

	describe('isWindow', () => {
		test('returns true when the value is a window', () => {
			expect(isWindow(window)).eq(true);
		});

		test('returns false when the value is not a window', () => {
			expect(isWindow(1)).eq(false);
			expect(
				isWindow(() => {
					return;
				})
			).eq(false);
			expect(isWindow(true)).eq(false);
		});
	});

	describe('now', () => {
		test('returns the current timestamp', () => {
			expect(now()).eq(Date.now());
			expect(now()).toBeTypeOf(typeof 1);
		});
	});

	describe('timestamp', () => {
		test('returns the current timestamp', () => {
			expect(timestamp()).eq(Date.now());
			expect(timestamp()).toBeTypeOf(typeof 1);
		});
	});

	describe('sleep', () => {
		test('awaits a certain time interval and then returns', async () => {
			const start = Date.now();
			await sleep(100);
			const end = Date.now();
			expect(end - start).greaterThanOrEqual(100);
		});
	});

	describe('rand', () => {
		test('returns a random number between an interval of numbers', () => {
			const value = rand(1, 4);
			expect(value).toBeGreaterThan(1);
			expect(value).toBeLessThanOrEqual(4);
		});
	});
});
