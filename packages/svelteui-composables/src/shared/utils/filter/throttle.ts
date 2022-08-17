import type { EventFilter } from './filter';

export function throttleFilter(ms: number, trailing = true, leading = true) {
	let lastExec = 0;
	let timer: ReturnType<typeof setTimeout> | undefined;
	let isLeading = true;

	const clear = () => {
		if (timer) {
			clearTimeout(timer);
			timer = undefined;
		}
	};

	const filter: EventFilter = (invoke) => {
		const duration = ms;
		const elapsed = Date.now() - lastExec;

		clear();

		if (duration <= 0) {
			lastExec = Date.now();
			return invoke();
		}

		if (elapsed > duration && (leading || !isLeading)) {
			lastExec = Date.now();
			invoke();
		} else if (trailing) {
			timer = setTimeout(() => {
				lastExec = Date.now();
				isLeading = true;
				clear();
				invoke();
			}, duration);
		}

		if (!leading && !timer) timer = setTimeout(() => (isLeading = true), duration);

		isLeading = false;
	};

	return filter;
}
