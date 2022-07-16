const isBrowser = () => typeof window !== 'undefined';

/** Determines whether the app is running in the browser or on the server. */
export const browser = isBrowser();
