import type { SvelteUIColor, DefaultProps } from '$lib/styles';

export interface CodeProps extends DefaultProps {
	color: SvelteUIColor;
	block: boolean;
	width: number;
	copy: boolean;
	message: string;
	noMono: boolean;
}
