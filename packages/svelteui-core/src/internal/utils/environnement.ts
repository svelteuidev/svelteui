/**TODO:
 * need a workaround to this.
 * cannot import browser from $app/env, because exports break when package is installed
 * on top of that some runtime's like Deno have `window` polyfilled so this wouldn't work
 */

import type { Fn } from '../types';

export interface Environnement {
	readonly browser?: boolean | Fn<never, boolean>;
	readonly server?: boolean | Fn<never, boolean>;
}

const isBrowser = () => typeof window !== 'undefined';

export const ENVIRONMENT: Environnement = {
	browser: isBrowser(),
	server: !isBrowser()
} as const;
