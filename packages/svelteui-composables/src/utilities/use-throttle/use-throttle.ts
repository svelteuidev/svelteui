import { createFilterWrapper, throttleFilter } from '../../shared//utils/index.js';
import type { FunctionArgs } from '../../shared/utils';

/**
 * Throttle execution of a function. Useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param fn A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is, to `callback` when the throttled-function is executed.
 * @param ms A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param trailing if true, call fn again after the time is up
 * @param leading if true, call fn on the leading edge of the ms timeout
 *
 * @return  A new throttled function.
 * @see https://svelteui.dev/composables/use-throttle
 */
export function useThrottle<T extends FunctionArgs>(
	fn: T,
	ms: number = 200,
	trailing = true,
	leading = true
): T {
	return createFilterWrapper(throttleFilter(ms, trailing, leading), fn);
}
