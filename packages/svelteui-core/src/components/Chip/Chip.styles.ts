import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface ChipProps extends DefaultProps {
	color?: SvelteUIColor;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
  type?: 'checkbox' | 'radio';
  variant?: 'outline' | 'filled'
	transitionDuration?: number;
	wrapperProps?: { [key: string]: any };
}

export interface ChipStyleParams {
	size: SvelteUISize;
	color: SvelteUIColor;
  variant: 'outline' | 'filled'
	radius: SvelteUINumberSize | number;
	transitionDuration: number;
}

export const sizes = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
};

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

const padding = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

const checkedPadding = {
  xs: 7.5,
  sm: 10,
  md: 11.5,
  lg: 13,
  xl: 15,
};

export default createStyles(
	(theme, { color, radius, size, transitionDuration, variant }: ChipStyleParams, getRef) => {
		return {
      root: {},

      label: {
        ref: getRef('label'),
        boxSizing: 'border-box',
        color: theme.colors.black.value,
        [`${theme.dark} &`]: {
          color: theme.fn.themeColor('dark', 0)
        },
        display: 'inline-block',
        alignItems: 'center',
        userSelect: 'none',
        border: '1px solid transparent',
        borderRadius: theme.fn.radius(radius),
        height: theme.fn.size({ size, sizes }),
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
        paddingLeft: theme.fn.size({ size, sizes: padding }),
        paddingRight: theme.fn.size({ size, sizes: padding }),
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,
        WebkitTapHighlightColor: 'transparent',

        '&.outline': {
          [`${theme.dark} &`]: {
            border: `1px solid ${theme.fn.themeColor('dark', 4)}`,
            backgroundColor: theme.fn.themeColor('dark', 6),
          },
          border: `1px solid ${theme.fn.themeColor('gray', 4)}`,
          backgroundColor: theme.colors.white.value,
        },

        '&.filled': {
          [`${theme.dark} &`]: {
            backgroundColor: theme.fn.themeColor('dark', 4),
          },
          backgroundColor: theme.fn.themeColor('gray', 1)
        },
        '&:hover': {
          backgroundColor: theme.fn.themeColor('gray', 2),
        },
        [`${theme.dark} &:hover`]: {
          backgroundColor: theme.fn.themeColor('dark', 5),
        },
        '&.disabled': {
          backgroundColor: `${ theme.fn.themeColor('gray', 1) } !important`,
          borderColor: `${theme.fn.themeColor('gray', 1)} !important`,
          color: theme.fn.themeColor('gray', 5),
          [`${theme.dark} &`]: {
            backgroundColor: `${theme.fn.themeColor('dark', 5)} !important`,
            borderColor: `${theme.fn.themeColor('dark', 5)} !important`,
            color: theme.fn.themeColor('dark', 3),
          },
          cursor: 'not-allowed',

          // this isn't working ?? the checkmark remains coloured when disabled
          [`& .${getRef('iconWrapper')}`]: {
            color: theme.fn.themeColor('dark', 5),
            [`${theme.dark} &`]: {
              color: theme.fn.themeColor('dark', 3)
            }
          },
        },

        '&.checked': {
          paddingLeft: theme.fn.size({ size, sizes: checkedPadding }),
          paddingRight: theme.fn.size({ size, sizes: checkedPadding }),

          '&.outline': {
            border: `1px solid ${theme.fn.themeColor(color, 5)}`,
          },

          '&.filled': {
            [`${theme.dark} &`]: {
              backgroundColor: theme.fn.variant({color, variant: 'light'}).background[0],
              '&:hover': {
                backgroundColor: theme.fn.variant({color, variant: 'light'}).background[0],
              },
            },
            backgroundColor: theme.fn.themeColor(color, 1),
            '&:hover': {
              backgroundColor: theme.fn.themeColor(color, 2),
            },
          },
        }
      },

      iconWrapper: {
        ref: getRef('iconWrapper'),
        width:
          theme.fn.size({ size, sizes: iconSizes }) +
          theme.fn.size({ size, sizes: theme.space }) / 1.5,
        maxWidth:
          theme.fn.size({ size, sizes: iconSizes }) +
          theme.fn.size({ size, sizes: theme.space }) / 1.5,
        height: theme.fn.size({ size, sizes: iconSizes }),
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden',
        color: theme.fn.themeColor(color, 5),
      },

      checkIcon: {
        width: theme.fn.size({ size, sizes: iconSizes }),
        height: theme.fn.size({ size, sizes: iconSizes }) / 1.1,
        display: 'block',
      },

      inputContainer: {
        width: 0,
        height: 0,
        padding: 0,
        opacity: 0,
        margin: 0,
        overflow: 'hidden',
        '&:focus': {
          outline: 'none',

          [`& + .${getRef('label')}`]: {
            outline: 'none',
            [`${theme.dark} &`]: {
              boxShadow: `0 0 0 2px ${theme.fn.themeColor('dark', 9)}, 0 0 0 4px ${theme.colors.primary}`
            },
            boxShadow: `0 0 0 2px ${theme.colors.white.value}, 0 0 0 4px ${theme.colors.primary}`
          },
          '&:focus:not(:focus-visible)': {
            [`& + .${getRef('label')}`]: {
              boxShadow: 'none',
            },
          },
        },
      },
      input: {
        visibility: "hidden"
      }
    };
	}
);
