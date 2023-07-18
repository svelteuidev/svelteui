import { describe, expect, it } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as JsonInput } from './JsonInput.svelte';
import { validateJson } from './validate-json/validate-json';

describe('JsonInput', () => {
	itSupportsClassName(JsonInput);

	it('validates json correctly', async () => {
		expect(validateJson('{a: b}', JSON.parse)).toBeFalsy();
		expect(validateJson('{"a": b}', JSON.parse)).toBeFalsy();
		expect(validateJson('{"a": true}', JSON.parse)).toBeTruthy();
		expect(validateJson('{"a": "hello"}', JSON.parse)).toBeTruthy();
	});
});
