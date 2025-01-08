/** Type guards to define whether a value is of a specific type */

const toString = Object.prototype.toString;
export const isClient = typeof window !== 'undefined';
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';
export const isFunction = <T extends (arg0: unknown) => unknown>(val: unknown): val is T =>
	typeof val === 'function';
export const isNumber = (val: unknown): val is number => typeof val === 'number';
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isObject = (val: unknown): val is object => toString.call(val) === '[object Object]';
export const isWindow = (val: unknown): val is Window =>
	typeof window !== 'undefined' && toString.call(val) === '[object Window]';
export const now = () => Date.now();
export const timestamp = () => +Date.now();
export const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
export const rand = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
