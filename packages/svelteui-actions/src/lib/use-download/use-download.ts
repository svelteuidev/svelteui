import { tick } from 'svelte';
import type { Action } from '../types/ActionTypes';

/**
 * With the `use-clipboard` action, a download will occur with a given Blob object as a file with the given filename.
 *
 * ```tsx
 *  <button use:download={{ blob: new Blob([]), filename: "text.txt" }} on:usedownload={() => { console.log('download');}}>Download</button>
 * ```
 * @param params - Object that contains two properties {blob: Blob, filename: string}
 * @see https://svelteui-docs.vercel.app/docs/actions/use-download
 */
export function download(
	node: HTMLElement,
	params: { blob: Blob; filename: string }
): ReturnType<Action> {
	const click = async () => {
		const { blob, filename } = params;
		try {
			const anchor: HTMLAnchorElement = document.createElement('a');
			const url: string = URL.createObjectURL(blob);
			anchor.href = url;
			anchor.download = filename || '';
			document.body.appendChild(anchor);

			anchor.click();
			await tick();

			document.body.removeChild(anchor);
			URL.revokeObjectURL(url);
			node.dispatchEvent(
				new CustomEvent('usedownload', { detail: { blob: blob, filename: filename } })
			);
		} catch (e) {
			node.dispatchEvent(
				new CustomEvent('usedownload-error', { detail: { blob: blob, filename: filename } })
			);
		}
	};

	node.addEventListener('click', click, true);

	return {
		update: (_params: { blob: Blob; filename: string }) => (params = _params),
		destroy: () => node.removeEventListener('click', click, true)
	};
}
