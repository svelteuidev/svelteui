import type { SvelteuiGradient } from '$lib/_styles';

export type TextAlignment = 'left' | 'right' | 'center' | 'justify';

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export type TextVariant = 'link' | 'text' | 'gradient';

export const fontSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};

export function textColor(color: string, variant: TextVariant, gradient: SvelteuiGradient) {
	if (variant === 'gradient' || gradient) return `$${color}600`;
	if (variant === 'link') return `$blue600`;
	return `$${color}600`;
}
