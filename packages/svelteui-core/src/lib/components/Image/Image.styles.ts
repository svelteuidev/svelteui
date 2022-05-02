import type { DefaultProps, Override, SvelteuiNumberSize } from '$lib/styles';

export interface ImageProps extends DefaultProps {
	override: Override['props'];
	overridePlaceholder: Override['props'];
	radius: SvelteuiNumberSize;
	className: string;
	src: string;
	alt: string;
	fit: 'cover' | undefined;
	width: string | number;
	height: string | number;
	caption: string;
	usePlaceholder: boolean;
}
