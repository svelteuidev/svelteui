import type { SvelteuiGradient, SvelteuiColor } from '$lib/styles';

export type TextAlignment = 'left' | 'right' | 'center' | 'justify';

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export type TextVariant = 'link' | 'text' | 'gradient';

export type TextColors = SvelteuiColor | 'dimmed';

export type HTMLTextElements = keyof HTMLElementTagNameMap;

export const fontSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};

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
