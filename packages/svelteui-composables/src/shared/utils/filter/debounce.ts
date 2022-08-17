import type { EventFilter } from './filter';

export interface DebounceFilterOptions {
	/**
	 * The maximum time allowed to be delayed before it's invoked.
	 * In milliseconds.
	 */
	maxWait?: number;
}

export function debounceFilter(ms: number, options: DebounceFilterOptions = {}) {
	let timer: ReturnType<typeof setTimeout> | undefined;
	let maxTimer: ReturnType<typeof setTimeout> | undefined | null;

	const filter: EventFilter = (invoke) => {
		const duration = ms;
		const maxDuration = options.maxWait;

		if (timer) clearTimeout(timer);

		if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
			if (maxTimer) {
				clearTimeout(maxTimer);
				maxTimer = null;
			}
			return invoke();
		}

		// Create the maxTimer. Clears the regular timer on invokation
		if (maxDuration && !maxTimer) {
			maxTimer = setTimeout(() => {
				if (timer) clearTimeout(timer);
				maxTimer = null;
				invoke();
			}, maxDuration);
		}

		// Create the regular timer. Clears the max timer on invokation
		timer = setTimeout(() => {
			if (maxTimer) clearTimeout(maxTimer);
			maxTimer = null;
			invoke();
		}, duration);
	};

	return filter;
}
