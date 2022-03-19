import type { Action } from '../types/_types';

/**
 * Downloads a given Blob object as a file with the given filename.
 * 
 * @param node HTMLElement that the action is applied to
 * @param text The text that you want to be copied when the DOM element is clicked
 * @example <button use:download={{ blob: new Blob([]), filename: "file.txt" }}>Download</button>
 */
export function download(node: HTMLElement, params: { blob: Blob; filename: string }): ReturnType<Action> {
    const { blob, filename } = params;

	const click = async () => {
        try {
            const anchor: HTMLAnchorElement = document.createElement("a");
            const url: string = URL.createObjectURL(blob);
            anchor.href = url;
            anchor.download = filename || "";
            document.body.appendChild(anchor);
            anchor.click();
            setTimeout(function() {
                document.body.removeChild(anchor);
                window.URL.revokeObjectURL(url);
                node.dispatchEvent(new CustomEvent('usedownload', { detail: { blob: blob, filename: filename } }));
            });
        } catch(e) {
            node.dispatchEvent(new CustomEvent('usedownload-error', { detail: { blob: blob, filename: filename } }));
        }
	};

	node.addEventListener('click', click, true);

	return {
		update: (params: { blob: Blob; filename: string }) => (params = params),
		destroy: () => node.removeEventListener('click', click, true)
	};
}
