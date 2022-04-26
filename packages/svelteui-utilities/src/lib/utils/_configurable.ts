// need a workaround to this, cannot import browser from $app/env as of now
const isBrowser = () => typeof window !== 'undefined';
export const browser = isBrowser();

export interface ConfigurableWindow {
	/*
	 * Specify a custom `window` instance, e.g. working with iframes or in testing environments.
	 */
	window?: Window;
}

export interface ConfigurableDocument {
	/*
	 * Specify a custom `document` instance, e.g. working with iframes or in testing environments.
	 */
	document?: Document;
}

export interface ConfigurableNavigator {
	/*
	 * Specify a custom `navigator` instance, e.g. working with iframes or in testing environments.
	 */
	navigator?: Navigator;
}

export interface ConfigurableLocation {
	/*
	 * Specify a custom `location` instance, e.g. working with iframes or in testing environments.
	 */
	location?: Location;
}

export const defaultWindow = browser ? window : undefined;
export const defaultDocument = browser ? window.document : undefined;
export const defaultNavigator = browser ? window.navigator : undefined;
export const defaultLocation = browser ? window.location : undefined;
