import { tick } from 'svelte';
import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import UseClickOutside from './components/use-click-outside.svelte';

describe('use-click-outside', () => {
	test('clicks inside and outside a div and changes the state of a variable', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);
		const { component } = render(UseClickOutside, { target: container });
		expect(component).toBeTruthy();

		const writeTextMock = vi.fn();
		Object.assign(window.navigator, {
			clipboard: {
				writeText: writeTextMock
			}
		});

		const inside = document.getElementById('inside');
		if (!inside) throw new Error('HTML inside element not found');
		inside.click();
		expect(component.$$.ctx[0]).eq(true);

		const outside = document.getElementById('outside');
		if (!outside) throw new Error('HTML inside element not found');

		outside.click();
		expect(component.$$.ctx[0]).eq(false);

		component.$set({ open: true });
		await tick();
		expect(component.$$.ctx[0]).eq(true);

		component.$set({ open: false });
		await tick();
		expect(component.$$.ctx[0]).eq(false);

		component.$destroy();
	});
});
