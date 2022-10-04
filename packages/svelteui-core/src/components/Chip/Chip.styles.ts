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
        color: theme.colorScheme === 'dark' ? theme.colors.dark50 : theme.colors.black,
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

        // variants. not sure if this is right. Should it use the theme.fn.variant() helper?
        backgroundColor: variant === 'filled' ? (theme.colorScheme === 'dark' ? theme.colors.dark400 : theme.colors.gray100) : (theme.colorScheme === 'dark' ? theme.colors.dark600 : theme.colors.white),
        borderColor: variant === 'filled' ? 'transparent' : (theme.colorScheme === 'dark' ? theme.colors.dark400 : theme.colors.gray400),


        '&[data-disabled]': {
          backgroundColor: `${
            theme.colorScheme === 'dark' ? theme.colors.dark500 : theme.colors.gray100
          } !important`,
          borderColor: `${
            theme.colorScheme === 'dark' ? theme.colors.dark500 : theme.colors.gray100
          } !important`,
          color: theme.colorScheme === 'dark' ? theme.colors.dark300 : theme.colors.gray500,
          cursor: 'not-allowed',

          [`& .${getRef('iconWrapper')}`]: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark300 : theme.colors.gray500,
          },
        },

        '&[data-checked]': {
          paddingLeft: theme.fn.size({ size, sizes: checkedPadding }),
          paddingRight: theme.fn.size({ size, sizes: checkedPadding }),

          '&[data-variant="outline"]': {
            border: `1px solid ${theme.fn.variant({ variant: 'filled', color }).background}`,
          },

          '&[data-variant="filled"]': {
            '&, &:hover': {
              backgroundColor: theme.fn.variant({ variant: 'light', color }).background,
            },
          },
        },
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
      },

      checkIcon: {
        width: theme.fn.size({ size, sizes: iconSizes }),
        height: theme.fn.size({ size, sizes: iconSizes }) / 1.1,
        display: 'block',
      },

      input: {
        width: 0,
        height: 0,
        padding: 0,
        opacity: 0,
        margin: 0,

        '&:focus': {
          outline: 'none',

          [`& + .${getRef('label')}`]: {
            outline: 'none',
            boxShadow: `0 0 0 2px ${
              theme.colorScheme === 'dark' ? theme.colors.dark900 : theme.colors.white
            }, 0 0 0 4px ${theme.colors.primary}`
          },
          '&:focus:not(:focus-visible)': {
            [`& + .${getRef('label')}`]: {
              boxShadow: 'none',
            },
          },
        },
      },
    };
	}
);
