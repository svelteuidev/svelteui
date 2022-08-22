import { describe, expect, test } from 'vitest';

import { randomID } from '$clib';

describe('random-id', () => {
	test('returns a random string ID', () => {
		const id = randomID();
		expect(id.startsWith('svelteui-')).toBeTruthy();
		expect(id.length).eq(17);
	});
});
