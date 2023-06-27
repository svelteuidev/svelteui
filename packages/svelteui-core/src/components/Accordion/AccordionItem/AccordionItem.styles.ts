import { createStyles, dark } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

export interface AccordionItemStylesParams {
	radius?: SvelteUINumberSize | number;
	transitionDuration?: number;
	chevronPosition?: 'left' | 'right';
	chevronSize?: string | number;
}

export default createStyles(
	(
		theme,
		{ radius, transitionDuration, chevronPosition, chevronSize }: AccordionItemStylesParams,
		getRef
	) => {
		const radiusValue = theme.fn.radius(radius);

		return {
			root: {},
			active: {
				ref: getRef('active')
			},
			control: {
				ref: getRef('control'),
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
			chevron: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transition: `transform ${transitionDuration}ms ease`,
				marginRight: chevronPosition === 'right' ? 0 : theme.space.smPX.value,
				marginLeft: chevronPosition === 'right' ? theme.space.lgPX.value : 0,
				width: chevronSize,
				minWidth: chevronSize,
				'&[data-rotate="true"]': {
					transform: 'rotate(180deg)'
				}
			},
			controlContent: {
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
			panel: {
				wordBreak: 'break-word',
				lineHeight: theme.lineHeights.md.value,
				padding: theme.space.mdPX.value,
				paddingTop: `calc(${theme.space.xs.value} / 2)`
			},
			variants: {
				variation: {
					default: {
						color: theme.colors.black.value,
						borderBottom: `1px solid ${theme.fn.themeColor('gray', 3)}`,
						darkMode: {
							color: theme.fn.themeColor('dark'),
							borderBottom: `1px solid ${theme.fn.themeColor('dark', 4)}`
						},

						[`& .${getRef('control')}`]: {
							'@media (hover: hover)': {
								'&:hover': {
									darkMode: {
										backgroundColor: theme.fn.themeColor('dark', 6)
									},
									backgroundColor: theme.fn.themeColor('gray')
								}
							},
							'@media (hover: none)': {
								'&:active': {
									darkMode: {
										backgroundColor: theme.fn.themeColor('dark', 6)
									},
									backgroundColor: theme.fn.themeColor('gray')
								}
							}
						}
					},
					contained: {
						borderBottom: `1px solid ${theme.fn.themeColor('gray', 3)}`,
						transition: 'background-color 150ms ease',

						[`&.${getRef('active')}`]: {
							backgroundColor: theme.fn.themeColor('gray')
						},

						darkMode: {
							color: theme.fn.themeColor('dark'),
							borderBottom: `1px solid ${theme.fn.themeColor('dark', 4)}`,

							[`&.${getRef('active')}`]: {
								backgroundColor: theme.fn.themeColor('dark', 6)
							}
						},

						'&:first-of-type': {
							borderTopRightRadius: radiusValue,
							borderTopLeftRadius: radiusValue,

							'& > [data-accordion-control]': {
								borderTopRightRadius: radiusValue,
								borderTopLeftRadius: radiusValue
							}
						},

						'&:last-of-type': {
							borderBottomRightRadius: radiusValue,
							borderBottomLeftRadius: radiusValue,

							[`& > ${getRef('control')}`]: {
								borderBottomRightRadius: radiusValue,
								borderBottomLeftRadius: radiusValue
							}
						},

						'& + &': {
							borderTop: 0
						},

						[`& .${getRef('control')}`]: {
							'@media (hover: hover)': {
								'&:hover': {
									darkMode: {
										backgroundColor: theme.fn.themeColor('dark', 6)
									},
									backgroundColor: theme.fn.themeColor('gray')
								}
							},
							'@media (hover: none)': {
								'&:active': {
									darkMode: {
										backgroundColor: theme.fn.themeColor('dark', 6)
									},
									backgroundColor: theme.fn.themeColor('gray')
								}
							}
						}
					},
					filled: {
						borderRadius: radiusValue,
						[`&.${getRef('active')}`]: {
							backgroundColor: theme.fn.themeColor('gray')
						},
						darkMode: {
							[`&.${getRef('active')}`]: {
								backgroundColor: theme.fn.themeColor('dark', 6)
							}
						}
					},
					separated: {
						borderRadius: radiusValue,
						backgroundColor: theme.fn.themeColor('gray'),
						border: `1px solid transparent`,
						transition: 'background-color 150ms ease',

						'& + &': {
							marginTop: theme.space.mdPX.value
						},

						[`&.${getRef('active')}`]: {
							backgroundColor: theme.colors.white.value,
							borderColor: theme.fn.themeColor('gray', 3)
						},

						darkMode: {
							[`&.${getRef('active')}`]: {
								backgroundColor: theme.fn.themeColor('dark', 7),
								borderColor: theme.fn.themeColor('dark', 4)
							}
						}
					}
				}
			}
		};
	}
);
