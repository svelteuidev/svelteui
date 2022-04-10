import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import UseTabLeave from './actions/use-tab-leave.svelte';

describe('use-tab-leave', () => {
	test('calls callback on tab leave', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);

		const callbackMock = vi.fn();
		const { component } = render(UseTabLeave, {
			target: container,
			props: {
				callback: callbackMock
			}
		});
		expect(component).toBeTruthy();

		document.dispatchEvent(new Event('visibilitychange'));
		expect(callbackMock).toHaveBeenCalledTimes(1);
	});
});
