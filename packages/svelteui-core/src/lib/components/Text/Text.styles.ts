import type {
	SvelteUIGradient,
	SvelteUIColor,
	Override,
	SvelteUITextAlignment,
	SvelteUITextTransform,
	SvelteUINumberSize,
	SvelteUINumberFontSize,
	DefaultProps
} from '$lib/styles';
import type { Component } from '$lib/internal';

export interface TextProps extends DefaultProps {
	className?: string;
	override?: Override['props'];
	align?: SvelteUITextAlignment;
	color?: TextColors;
	root?: HTMLTextElements | Component;
	transform?: SvelteUITextTransform;
	variant?: TextVariant;
	size?: SvelteUINumberSize;
	weight?: SvelteUINumberFontSize;
	gradient?: SvelteUIGradient;
	inline?: boolean;
	lineClamp?: number;
	underline?: boolean;
	inherit?: boolean;
	href?: string;
	tracking?: Tracking;
}

export type Tracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | number;

export type TextVariant = 'link' | 'text' | 'gradient';

export type TextColors = SvelteUIColor | 'dimmed';

export type HTMLTextElements = keyof HTMLElementTagNameMap;

export function getTextColor(
	color: TextColors,
	variant: TextVariant,
	gradient: SvelteUIGradient,
	dark: boolean = false
) {
	if (color === 'dimmed') return dark ? '$dark200' : '$gray600';
	if (variant === 'gradient' || gradient) return `$${color}600`;
	if (variant === 'link') return dark ? `$blue400` : `$blue700`;
	if (variant === 'text') return dark ? `$${color}500` : `$${color}700`;
}
