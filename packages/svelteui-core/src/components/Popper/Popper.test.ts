import { describe, expect, it } from 'vitest';

describe('Popper', () => {
	it('', () => {
		expect(true).toBe(true);
	});

	// Skipped for now since global transitions require Web animations API,
	// which is not supported by jsdom.
	// See https://github.com/testing-library/svelte-testing-library/issues/416

	// itSupportsClassName(Popper, { mounted: true });
});
