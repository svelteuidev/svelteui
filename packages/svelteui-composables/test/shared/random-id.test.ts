import { describe, expect, test } from 'vitest';

import { randomID } from '$lib';

describe('random-id', () => {
	test('returns a random string ID', () => {
		const id = randomID();
		expect(id.startsWith('svelteui-')).toBeTruthy();
		expect(id.length).eq(17);
	});
});
