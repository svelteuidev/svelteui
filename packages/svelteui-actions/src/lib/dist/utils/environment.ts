type Fn<T, R> = (args: T) => R;

export interface Environnement {
	readonly browser?: boolean | Fn<never, boolean>;
	readonly server?: boolean | Fn<never, boolean>;
}

const isBrowser = () => typeof window !== 'undefined';

export const ENVIRONMENT: Environnement = {
	browser: isBrowser(),
	server: !isBrowser()
} as const;

export const defaultWindow = ENVIRONMENT.browser ? window : undefined;
