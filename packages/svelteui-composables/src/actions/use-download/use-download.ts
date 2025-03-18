import { tick } from 'svelte';
import type { Action, ActionReturn } from 'svelte/action';

interface Parameters {
	blob: Blob;
	filename: string;
}

interface Attributes {
	onusedownload: (e: CustomEvent<Parameters>) => void;
	'onusedownload-error': (e: CustomEvent<Parameters>) => void;
}

/**
 * With the `use-download` action, a download will occur with a given Blob object as a file with the given filename.
 *
 * ```tsx
 *  <button use:download={{ blob: new Blob([]), filename: "text.txt" }} onusedownload={() => { console.log('download');}}>Download</button>
 * ```
 * @param params - Object that contains two properties {blob: Blob, filename: string}
 * @see https://svelteui.dev/actions/use-download
 */
export const download: Action<HTMLElement, Parameters, ActionReturn<Parameters, Attributes>> = (
	node: HTMLElement,
	params: Parameters
) => {
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
		} catch (_) {
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
};
