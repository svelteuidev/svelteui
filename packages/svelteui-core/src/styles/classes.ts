const SVELTEUI_PREFIX = 'svelteUI';

export function buildClass(component: string, child?: string): string {
	return `${SVELTEUI_PREFIX}-${component}${child ? `-${child}` : ''}`;
}
