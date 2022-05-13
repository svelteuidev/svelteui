import type { SvelteUIColor, DefaultProps } from '$lib/styles';

export interface CodeProps extends DefaultProps<HTMLPreElement | Partial<HTMLElement>> {
	color: SvelteUIColor;
	block: boolean;
	width: number;
	copy: boolean;
	message: string;
	noMono: boolean;
}
