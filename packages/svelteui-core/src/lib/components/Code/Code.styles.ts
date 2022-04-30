import type { SvelteuiColor, DefaultProps } from '$lib/styles';

export interface CodeProps extends DefaultProps {
	color: SvelteuiColor;
	block: boolean;
	width: number;
	copy: boolean;
	message: string;
	noMono: boolean;
}
