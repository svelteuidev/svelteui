import { createFilterWrapper, debounceFilter } from '../../shared/utils/index.js';
import type { DebounceFilterOptions, FunctionArgs } from '../../shared/utils';

/**
 * Debounce execution of a function.
 *
 * @param fn A function to be executed after delay milliseconds debounced.
 * @param ms A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param opts options
 *
 * @return A new debounced function.
 * @see https://svelteui.dev/composables/use-debounce
 */
export function useDebounce<T extends FunctionArgs>(
	fn: T,
	ms: number = 200,
	options: DebounceFilterOptions = {}
): T {
	return createFilterWrapper(debounceFilter(ms, options), fn);
}
