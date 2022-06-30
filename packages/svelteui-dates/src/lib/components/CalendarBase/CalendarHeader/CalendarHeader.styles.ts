import { createStyles, type SvelteUISize, type DefaultProps } from "@svelteuidev/core";

export interface CalendarHeaderProps extends DefaultProps {
    hasPrevious: boolean;
    hasNext: boolean;
    label?: string;
    nextLevelDisabled?: boolean;
    size?: SvelteUISize;
    nextLabel?: string;
    previousLabel?: string;
    preventLevelFocus?: boolean;
    preventFocus?: boolean;
    onNext?(): void;
    onPrevious?(): void;
    onNextLevel?(): void;
}

interface CalendarHeaderStyleParams {
    size: SvelteUISize;
  }
  
  export const sizes = {
    xs: 32,
    sm: 40,
    md: 44,
    lg: 50,
    xl: 54,
  };
  
export default createStyles((theme, { size }: CalendarHeaderStyleParams) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      align: 'center',
      marginBottom: theme.fn.size({ size, sizes: theme.space }),
    },
  
    calendarHeaderControl: {
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
  
      '&:disabled': {
        opacity: 0,
        cursor: 'default',
      },
    },
  
    calendarHeaderLevel: {
        darkMode: {
            color: theme.fn.themeColor('dark', 0)
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.fn.size({ size, sizes }),
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        padding: `0 ${theme.fn.size({ size, sizes: theme.space })}px`,
        borderRadius: theme.radii.sm.value,
        fontWeight: 500,
        flex: 1,
        textAlign: 'center',
        color: theme.colors.black.value,

        '@media (hover: hover)': {
        '&:hover': {
            [`${theme.dark} &`]: {
                backgroundColor: theme.fn.themeColor('dark', 8)
            },
            backgroundColor: theme.fn.themeColor('gray', 0)
        }
    },
    '@media (hover: none)': {
        '&:active': {
            [`${theme.dark} &`]: {
                backgroundColor: theme.fn.themeColor('dark', 8)
            },
            backgroundColor: theme.fn.themeColor('gray', 0)
        }
    },

    '&:disabled': {
            '@media (hover: hover)': {
            '&:hover': {
                backgroundColor: 'transparent',
                cursor: 'default',
            }
        },
        '@media (hover: none)': {
            '&:active': {
                backgroundColor: 'transparent',
                cursor: 'default',
            }
        }
    },

},
calendarHeaderLevelIcon: {
    marginLeft: 4,
},
}
));