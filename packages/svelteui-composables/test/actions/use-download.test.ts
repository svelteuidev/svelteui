import { tick } from 'svelte';
import { describe, expect, test, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import UseDownload from './components/use-download.svelte';

describe('use-download', () => {
	test('downloads a file', async () => {
		const container = document.createElement('div');
		document.body.appendChild(container);

		const callbackMock = vi.fn();
		const callbackErrorMock = vi.fn();
		const { component } = render(UseDownload, {
			target: container,
			props: {
				callback: callbackMock,
				callbackError: callbackErrorMock
			}
		});
		expect(component).toBeTruthy();

		// setup mock function for 'createObjectURL' and
		// 'revokeObjectURL which is not implement by JSDom
		const createObjectURLMock = vi.fn().mockImplementation(() => '');
		const revokeObjectURLMock = vi.fn();
		global.URL.createObjectURL = createObjectURLMock;
		global.URL.revokeObjectURL = revokeObjectURLMock;

		const btn = document.getElementById('download');
		btn.click();
		await tick();
		expect(createObjectURLMock).toHaveBeenCalledTimes(1);
		expect(createObjectURLMock).toBeCalledWith(new Blob([]));
		expect(revokeObjectURLMock).toHaveBeenCalledTimes(1);
		expect(callbackMock).toHaveBeenCalledTimes(1);
		expect(callbackMock).toHaveBeenCalledWith({ blob: new Blob([]), filename: '' });
		expect(callbackErrorMock).toHaveBeenCalledTimes(0);

		createObjectURLMock.mockImplementation(() => {
			throw Error();
		});
		btn.click();
		await tick();
		expect(createObjectURLMock).toHaveBeenCalledTimes(2);
		expect(createObjectURLMock).toBeCalledWith(new Blob([]));
		expect(revokeObjectURLMock).toHaveBeenCalledTimes(1);
		expect(callbackMock).toHaveBeenCalledTimes(1);
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);

		createObjectURLMock.mockImplementation(() => '');
		await component.$set({ filename: 'test.txt' });
		btn.click();
		await tick();
		expect(createObjectURLMock).toHaveBeenCalledTimes(3);
		expect(createObjectURLMock).toBeCalledWith(new Blob([]));
		expect(revokeObjectURLMock).toHaveBeenCalledTimes(2);
		expect(callbackMock).toHaveBeenCalledTimes(2);
		expect(callbackMock).toHaveBeenCalledWith({ blob: new Blob([]), filename: 'test.txt' });
		expect(callbackErrorMock).toHaveBeenCalledTimes(1);
	});
});
