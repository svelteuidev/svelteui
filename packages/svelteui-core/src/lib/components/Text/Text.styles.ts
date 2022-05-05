import type {
	SvelteuiGradient,
	SvelteuiColor,
	Override,
	SvelteuiTextAlignment,
	SvelteuiTextTransform,
	SvelteuiNumberSize,
	SvelteuiNumberFontSize,
	DefaultProps
} from '$lib/styles';
import type { Component } from '$lib/internal';

export interface TextProps extends DefaultProps {
	className: string;
	override: Override['props'];
	align: SvelteuiTextAlignment;
	color: TextColors;
	root: HTMLTextElements | Component;
	transform: SvelteuiTextTransform;
	variant: TextVariant;
	size: SvelteuiNumberSize;
	weight: SvelteuiNumberFontSize;
	gradient: SvelteuiGradient;
	inline: boolean;
	lineClamp: number;
	underline: boolean;
	inherit: boolean;
	href: string;
}

export type TextVariant = 'link' | 'text' | 'gradient';

export type TextColors = SvelteuiColor | 'dimmed';

export type HTMLTextElements = keyof HTMLElementTagNameMap;

export function getTextColor(
	color: TextColors,
	variant: TextVariant,
	gradient: SvelteuiGradient,
	dark: boolean = false
) {
	if (color === 'dimmed') return dark ? '$dark200' : '$gray600';
	if (variant === 'gradient' || gradient) return `$${color}600`;
	if (variant === 'link') return dark ? `$blue400` : `$blue700`;
	if (variant === 'text') return dark ? `$${color}500` : `$${color}700`;
}
