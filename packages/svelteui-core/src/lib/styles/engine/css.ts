import clsx from 'clsx';

export function cssFactory() {
	// This is a factory function to allow for scalability
	const cx = (...args) => clsx(args);

	return { cx };
}
