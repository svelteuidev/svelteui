import type { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';

export interface ImageProps extends DefaultProps {
	override: Override['props'];
	overridePlaceholder: Override['props'];
	radius: SvelteUINumberSize;
	className: string;
	src: string;
	alt: string;
	fit: 'cover' | undefined;
	width: string | number;
	height: string | number;
	caption: string;
	usePlaceholder: boolean;
}
