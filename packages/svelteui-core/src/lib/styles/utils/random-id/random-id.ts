export function randomID(): string {
	return `svelteui-${Math.random().toString(36).substring(2, 10)}`;
}
