export const throttle = (func, limit) => {
	let inThrottle;
	return function () {
		const args = arguments;

		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const context = this;

		if (!inThrottle) {
			func.apply(context, args);
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
};
