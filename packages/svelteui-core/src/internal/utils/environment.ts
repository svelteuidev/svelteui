/**TODO:
 * need a workaround to this.
 * cannot import browser from $app/env, because exports break when package is installed
 * on top of that some runtime's like Deno have `window` polyfilled so this wouldn't work
 */

import type { FunctionType } from '../types';

export interface Environment {
	readonly browser?: boolean | FunctionType<never, boolean>;
	readonly server?: boolean | FunctionType<never, boolean>;
}

const isBrowser = () => typeof window !== 'undefined';

export const ENVIRONMENT: Environment = {
	browser: isBrowser(),
	server: !isBrowser()
} as const;
