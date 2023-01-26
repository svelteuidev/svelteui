import type { Fn } from '../../types';

export type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;

export interface FunctionWrapperOptions<Args extends any[] = any[], This = any> {
	fn: FunctionArgs<Args, This>;
	args: Args;
	thisArg: This;
}

export type EventFilter<Args extends any[] = any[], This = any> = (
	invoke: Fn,
	options: FunctionWrapperOptions<Args, This>
) => void;

export function createFilterWrapper<T extends FunctionArgs>(filter: EventFilter, fn: T) {
	function wrapper(this: any, ...args: any[]) {
		filter(() => fn.apply(this, args), { fn, thisArg: this, args });
	}

	return wrapper as any as T;
}
