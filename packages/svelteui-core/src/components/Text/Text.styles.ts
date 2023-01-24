import { createStyles } from '$lib/styles';
import type {
	SvelteUIGradient,
	SvelteUITextAlignment,
	SvelteUITextTransform,
	SvelteUINumberSize,
	SvelteUINumberFontSize
} from '$lib/styles';
import type { Tracking, TextVariant, TextColors } from './Text';

export interface TextStyleParams {
	lineClamp?: number;
	underline?: boolean;
	inline?: boolean;
	inherit?: boolean;
	gradient?: SvelteUIGradient;
	variant?: TextVariant;
	align?: SvelteUITextAlignment;
	color?: TextColors;
	transform?: SvelteUITextTransform;
	size?: SvelteUINumberSize;
	weight?: SvelteUINumberFontSize;
	tracking?: Tracking;
}

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

export default createStyles(
	(
		theme,
		{
			align,
			color,
			inherit,
			inline,
			lineClamp,
			size,
			tracking,
			transform,
			underline,
			weight,
			gradient,
			variant
		}: TextStyleParams
	) => {
		return {
			root: {
				focusRing: 'auto',
				[`${theme.dark} &`]: {
					color: color === 'dark' ? '$dark50' : getTextColor(color, variant, gradient, true)
				},
				fontFamily: inherit ? 'inherit' : '$standard',
				fontSize: inherit ? 'inherit' : typeof size === 'string' ? `$${size}` : `${size}px`,
				fontWeight: inherit ? 'inherit' : `$${weight}`,
				letterSpacing: theme.letterSpacings[tracking]?.value,
				lineHeight: inherit
					? 'inherit'
					: inline
					? 1
					: typeof size === 'string'
					? `$${size}`
					: `${size}px`,
				textTransform: transform,
				textDecoration: underline ? 'underline' : 'none',
				textAlign: align,
				cursor: variant === 'link' ? 'pointer' : 'inherit',
				color: color === 'green' ? 'Black' : getTextColor(color, variant, gradient),
				backgroundImage:
					variant === 'gradient'
						? `linear-gradient(${gradient?.deg}deg, $${gradient?.from}600 0%, $${gradient?.to}600 100%)`
						: null,
				WebkitBackgroundClip: variant === 'gradient' ? 'text' : null,
				WebkitTextFillColor: variant === 'gradient' ? 'transparent' : null,
				...(lineClamp !== undefined
					? {
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: lineClamp,
							WebkitBoxOrient: 'vertical'
					  }
					: {}),
				'&:hover':
					variant === 'link' && underline === true
						? {
								textDecoration: 'underline'
						  }
						: undefined
			}
		};
	}
);
