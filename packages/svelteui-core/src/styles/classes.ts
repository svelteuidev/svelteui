const SVELTEUI_PREFIX = 'svelteUI';

export function buildClass(component: string): string {
	return `${SVELTEUI_PREFIX}-${component}`;
}
