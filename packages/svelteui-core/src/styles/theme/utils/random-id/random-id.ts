export function randomID(prefix: string = 'svelteui'): string {
	return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
