import { createStyles, dark } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

export interface AccordionItemStylesParams {
	radius?: SvelteUINumberSize | number;
}

export default createStyles((theme, { radius }: AccordionItemStylesParams, getRef) => {
	const radiusValue = theme.fn.radius(radius);

	return {
		root: {},
		active: {},
		controller: {},
		chevron: {},
		rotate: {},
		panel: {},
		variation: {
			default: {
				color: theme.colors.black.value,
				borderBottom: `1px solid ${theme.fn.themeColor('gray', 3)}`,
				[`${dark.selector} &`]: {
					color: theme.fn.themeColor('dark'),
					borderBottom: `1px solid ${theme.fn.themeColor('dark', 4)}`
				}
			},
			contained: {
				borderBottom: `1px solid ${theme.fn.themeColor('gray', 3)}`,
				transition: 'background-color 150ms ease',

				[`&.${getRef('active')}`]: {
					backgroundColor: theme.fn.themeColor('gray')
				},

				[`${dark.selector} &`]: {
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
				}
			},
			filled: {
				borderRadius: radiusValue,
				[`&.${getRef('active')}`]: {
					backgroundColor: theme.fn.themeColor('gray')
				},
				[`${dark.selector} &`]: {
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

				[`${dark.selector} &`]: {
					[`&.${getRef('active')}`]: {
						backgroundColor: theme.fn.themeColor('dark', 7),
						borderColor: theme.fn.themeColor('dark', 4)
					}
				}
			}
		}
	};
});
