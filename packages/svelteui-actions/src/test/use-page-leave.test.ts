import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import UsePageLeave from './actions/use-page-leave.svelte';

describe('use-page-leave', () => {
	test('calls callback on page leave', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);

		const callbackMock = vi.fn();
		const { component } = render(UsePageLeave, {
			target: container,
			props: {
				callback: callbackMock
			}
		});
		expect(component).toBeTruthy();

		document.documentElement.dispatchEvent(new Event('mouseleave'));
		expect(callbackMock).toHaveBeenCalledTimes(1);
	});
});
