/**
 * Generates random id
 * @returns a hash with a svelteui prefix
 */
export function randomID(): string {
	return `svelteui-${Math.random().toString(36).substring(2, 10)}`;
}
