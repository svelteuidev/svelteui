import { tick } from 'svelte';
import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import UseClipboard from './actions/use-clipboard.svelte';

describe('use-clipboard', () => {
	test('copies text to clipboard', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);

		const callbackMock = vi.fn();
		const callbackErrorMock = vi.fn();
		const { component } = render(UseClipboard, {
			target: container,
			props: {
				text: 'This text will be copied',
				callback: callbackMock,
				callbackError: callbackErrorMock
			}
		});
		expect(component).toBeTruthy();

		const writeTextMock = vi.fn();
		Object.assign(window.navigator, {
			clipboard: {
				writeText: writeTextMock
			}
		});

		const btn = document.getElementById('clipboard');
		btn.click();
		await tick();
		expect(writeTextMock).toHaveBeenCalledTimes(1);
		expect(writeTextMock).toHaveBeenCalledWith('This text will be copied');
		expect(callbackMock).toHaveBeenCalledTimes(1);
		expect(callbackMock).toHaveBeenCalledWith('This text will be copied');
		expect(callbackErrorMock).toHaveBeenCalledTimes(0);

		writeTextMock.mockImplementation(() => {
			throw Error();
		});
		btn.click();
		await tick();
		expect(writeTextMock).toHaveBeenCalledTimes(2);
		expect(writeTextMock).toHaveBeenCalledWith('This text will be copied');
		expect(callbackMock).toHaveBeenCalledTimes(1);
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);

		await component.$set({ text: '' });
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		writeTextMock.mockImplementation(() => {});
		btn.click();
		expect(writeTextMock).toHaveBeenCalledTimes(2);
		expect(writeTextMock).toHaveBeenCalledWith('This text will be copied');
		expect(callbackMock).toHaveBeenCalledTimes(1);
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);
	});
});
