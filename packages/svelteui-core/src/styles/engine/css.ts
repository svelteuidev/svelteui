export type Value = string | number | boolean | undefined | null;
export type Mapping = Record<string, unknown>;
export type ArgumentArray = Array<Argument>;
export type Argument = Value | Mapping | ArgumentArray;

const hasOwn = {}.hasOwnProperty;
function cx(...args: ArgumentArray): string {
	const classes = [];

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (!arg) continue;

		const argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			if (arg.length) {
				const inner = { ...arg };
				if (inner) {
					classes.push(inner);
				}
			}
		} else if (argType === 'object') {
			if (arg.toString === Object.prototype.toString) {
				for (const key in arg as object) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			} else {
				classes.push(arg.toString());
			}
		}
	}

	return classes.join(' ');
}

export function cssFactory() {
	// This is a factory function to allow for scalability

	return { cx };
}
