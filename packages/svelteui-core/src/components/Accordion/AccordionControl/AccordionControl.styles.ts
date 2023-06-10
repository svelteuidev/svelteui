import { createStyles } from '$lib/styles';
import type { AccordionVariant } from '../Accordion';

export interface AccordionControlStylesParams {
	variant?: AccordionVariant;
	transitionDuration?: number;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
}

export default createStyles(
	(
		theme,
		{ transitionDuration, chevronPosition, chevronSize }: AccordionControlStylesParams,
		getRef
	) => {
		return {
			root: {
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				flexDirection: chevronPosition === 'right' ? 'row-reverse' : 'row',
				paddingRight: theme.space.mdPX.value,
				paddingLeft:
					chevronPosition === 'right'
						? `calc(${theme.space.mdPX.value} + 4px)`
						: theme.space.xs.value,
				textAlign: 'left',
				color: theme.colors.black.value,

				darkMode: {
					color: theme.fn.themeColor('dark')
				},

				'&:disabled': {
					opacity: 0.4,
					cursor: 'not-allowed',

					'@media (hover: hover)': {
						'&:hover': {
							backgroundColor: 'transparent'
						}
					},
					'@media (hover: none)': {
						'&:active': {
							backgroundColor: 'transparent'
						}
					}
				}
			},

			rotate: {},

			chevron: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transition: `transform ${transitionDuration}ms ease`,
				marginRight: chevronPosition === 'right' ? 0 : theme.space.smPX.value,
				marginLeft: chevronPosition === 'right' ? theme.space.lgPX.value : 0,
				width: chevronSize,
				minWidth: chevronSize,

				[`&.[${getRef('rotate')}]`]: {
					transform: 'rotate(180deg)'
				}
			},

			content: {
				color: 'inherit',
				fontWeight: 400,
				flex: 1,
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				paddingTop: theme.space.mdPX.value,
				paddingBottom: theme.space.mdPX.value
			},

			icon: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				marginRight: chevronPosition === 'left' ? 0 : theme.space.smPX.value,
				marginLeft: chevronPosition === 'left' ? theme.space.lgPX.value : 0
			},

			heading: {
				margin: 0,
				padding: 0
			},

			variation: {
				default: {
					'@media (hover: hover)': {
						'&:hover': {
							[`${theme.dark} &`]: {
								backgroundColor: theme.fn.themeColor('dark', 6)
							},
							backgroundColor: theme.fn.themeColor('gray')
						}
					},
					'@media (hover: none)': {
						'&:active': {
							[`${theme.dark} &`]: {
								backgroundColor: theme.fn.themeColor('dark', 6)
							},
							backgroundColor: theme.fn.themeColor('gray')
						}
					}
				},
				contained: {
					'@media (hover: hover)': {
						'&:hover': {
							[`${theme.dark} &`]: {
								backgroundColor: theme.fn.themeColor('dark', 6)
							},
							backgroundColor: theme.fn.themeColor('gray')
						}
					},
					'@media (hover: none)': {
						'&:active': {
							[`${theme.dark} &`]: {
								backgroundColor: theme.fn.themeColor('dark', 6)
							},
							backgroundColor: theme.fn.themeColor('gray')
						}
					}
				}
			}
		};
	}
);
