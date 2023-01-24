import { getCssText } from '../stitches.config';

/**
 * Injects the stitches stylesheet at the end of the
 * <head> of the DOM so that the stylesheet can be loaded
 * in page render for SSR.
 *
 * This needs to be setup on the 'handle' server hook in hooks.server.(js|ts).
 * @see https://kit.svelte.dev/docs/hooks#server-hooks
 */
export const prepareStylesSSR = async ({ event, resolve }) => {
	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			const headEndIndex = html.indexOf('</head>');
			const returnHtml =
				html.slice(0, headEndIndex) +
				`<style id="stitches">${getCssText()}</style>` +
				html.slice(headEndIndex);
			return returnHtml;
		}
	});
};
