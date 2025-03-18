import { tick } from 'svelte';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import UseClipboard from './components/use-clipboard.svelte';

describe('use-clipboard', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date(949406400000));
	});

	afterEach(() => {
		vi.useRealTimers();
	});

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
		if (!btn) throw new Error('Clipboard button is not defined');

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
		writeTextMock.mockImplementation(() => {});
		btn.click();
		expect(writeTextMock).toHaveBeenCalledTimes(2);
		expect(writeTextMock).toHaveBeenCalledWith('This text will be copied');
		expect(callbackMock).toHaveBeenCalledTimes(1);
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);

		const textFunction = vi.fn(
			() => `This is dynamic text with ${new Date(Date.now()).toUTCString()}`
		);
		await component.$set({ text: textFunction });
		btn.click();
		await tick();
		expect(textFunction).toHaveBeenCalledTimes(1);
		expect(writeTextMock).toHaveBeenCalledTimes(3);
		expect(writeTextMock).toHaveBeenCalledWith(
			'This is dynamic text with Tue, 01 Feb 2000 12:00:00 GMT'
		);
		expect(callbackMock).toHaveBeenCalledTimes(2);
		expect(callbackMock).toHaveBeenCalledWith(
			'This is dynamic text with Tue, 01 Feb 2000 12:00:00 GMT'
		);
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);

		await component.$set({ text: () => '' });
		writeTextMock.mockImplementation(() => {});
		btn.click();
		expect(writeTextMock).toHaveBeenCalledTimes(3);
		expect(writeTextMock).toHaveBeenCalledWith(
			'This is dynamic text with Tue, 01 Feb 2000 12:00:00 GMT'
		);
		expect(callbackMock).toHaveBeenCalledTimes(2);
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);
	});
});
