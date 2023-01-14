---
title: Default Theme
description: SvelteUI's default color palette, fonts, font sizes, breakpoints, border radius, and more..
docs: 'theming/default-theme.md'
---

<script>
    import { CodeBlock, Preview } from '$lib/components'
    import { Button } from "@svelteuidev/core";
    import { Prism } from "@svelteuidev/prism";

    const colors = ['dark', 'gray', 'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange']
</script>

# Getting Started

**SvelteUI's** default theme is based on [Stitches Theme Tokens](https://stitches.dev/docs/tokens)

The theme object will be referenced throughout the documentation and it looks like this:

```js
{
    "prefix": "svelteui",
    "theme": {
        "colors": {},
        "space": {},
        "fontSizes": {},
        "fonts": {},
        "fontWeights": {},
        "lineHeights": {},
        "letterSpacings": {},
        "sizes": {},
        "borderWidths": {},
        "borderStyles": {},
        "radii": {},
        "shadows": {},
        "zIndices": {},
        "transitions": {}
    }
}
```

Not all properties of the object are used in SvelteUI.

> Note that as of version 0.6.0 customizing the default theme object is not possible. However, you can create [your own theme](theming/create-styles)

## Colors

SvelteUI comes with a predefined set of colors. It's a great place to start if you don't have a specific color palette in mind.

You can access the colors through the `theme` object or using `tokens` within the `createStyles` function or `override` prop.

```svelte
<script>
	import { Title } from '@svelteuidev/core';
</script>

<Title override={{ color: '$blue800', fontSize: '$xs', padding: '$2 $4' }}>
	Using theme tokens
</Title>

<Title
	override={{
		color: theme.colors['blue600'].value,
		fontSize: theme.fontSizes.xl.value,
		padding: `${theme.space[2].value} ${theme.space[4].value}`
	}}
>
	Using color theme value
</Title>
```

By default, these colors can be used by the `color`, `borderColor`, `backgroundColor`, `fill`, and other properties; see the full list of properties where you can use the color tokens here => [Stitches Property Mapping](https://stitches.dev/docs/tokens#property-mapping).

Each color has ten shades ranging from 50 to 900:

```js
export const colors = {
	primary: '#228be6',
	dark50: '#C1C2C5',
	dark100: '#A6A7AB',
	dark200: '#909296',
	dark300: '#5c5f66',
	dark400: '#373A40',
	dark500: '#2C2E33',
	dark600: '#25262b',
	dark700: '#1A1B1E',
	dark800: '#141517',
	dark900: '#101113',
	gray50: '#f8f9fa',
	gray100: '#f1f3f5',
	gray200: '#e9ecef',
	gray300: '#dee2e6',
	gray400: '#ced4da',
	gray500: '#adb5bd',
	gray600: '#868e96',
	gray700: '#495057',
	gray800: '#343a40',
	gray900: '#212529',
	red50: '#fff5f5',
	red100: '#ffe3e3',
	red200: '#ffc9c9',
	red300: '#ffa8a8',
	red400: '#ff8787',
	red500: '#ff6b6b',
	red600: '#fa5252',
	red700: '#f03e3e',
	red800: '#e03131',
	red900: '#c92a2a',
	pink50: '#fff0f6',
	pink100: '#ffdeeb',
	pink200: '#fcc2d7',
	pink300: '#faa2c1',
	pink400: '#f783ac',
	pink500: '#f06595',
	pink600: '#e64980',
	pink700: '#d6336c',
	pink800: '#c2255c',
	pink900: '#a61e4d',
	grape50: '#f8f0fc',
	grape100: '#f3d9fa',
	grape200: '#eebefa',
	grape300: '#e599f7',
	grape400: '#da77f2',
	grape500: '#cc5de8',
	grape600: '#be4bdb',
	grape700: '#ae3ec9',
	grape800: '#9c36b5',
	grape900: '#862e9c',
	violet50: '#f3f0ff',
	violet100: '#e5dbff',
	violet200: '#d0bfff',
	violet300: '#b197fc',
	violet400: '#9775fa',
	violet500: '#845ef7',
	violet600: '#7950f2',
	violet700: '#7048e8',
	violet800: '#6741d9',
	violet900: '#5f3dc4',
	indigo50: '#edf2ff',
	indigo100: '#dbe4ff',
	indigo200: '#bac8ff',
	indigo300: '#91a7ff',
	indigo400: '#748ffc',
	indigo500: '#5c7cfa',
	indigo600: '#4c6ef5',
	indigo700: '#4263eb',
	indigo800: '#3b5bdb',
	indigo900: '#364fc7',
	blue50: '#e7f5ff',
	blue100: '#d0ebff',
	blue200: '#a5d8ff',
	blue300: '#74c0fc',
	blue400: '#4dabf7',
	blue500: '#339af0',
	blue600: '#228be6',
	blue700: '#1c7ed6',
	blue800: '#1971c2',
	blue900: '#1864ab',
	cyan50: '#e3fafc',
	cyan100: '#c5f6fa',
	cyan200: '#99e9f2',
	cyan300: '#66d9e8',
	cyan400: '#3bc9db',
	cyan500: '#22b8cf',
	cyan600: '#15aabf',
	cyan700: '#1098ad',
	cyan800: '#0c8599',
	cyan900: '#0b7285',
	teal50: '#e6fcf5',
	teal100: '#c3fae8',
	teal200: '#96f2d7',
	teal300: '#63e6be',
	teal400: '#38d9a9',
	teal500: '#20c997',
	teal600: '#12b886',
	teal700: '#0ca678',
	teal800: '#099268',
	teal900: '#087f5b',
	green50: '#ebfbee',
	green100: '#d3f9d8',
	green200: '#b2f2bb',
	green300: '#8ce99a',
	green400: '#69db7c',
	green500: '#51cf66',
	green600: '#40c057',
	green700: '#37b24d',
	green800: '#2f9e44',
	green900: '#2b8a3e',
	lime50: '#f4fce3',
	lime100: '#e9fac8',
	lime200: '#d8f5a2',
	lime300: '#c0eb75',
	lime400: '#a9e34b',
	lime500: '#94d82d',
	lime600: '#82c91e',
	lime700: '#74b816',
	lime800: '#66a80f',
	lime900: '#5c940d',
	yellow50: '#fff9db',
	yellow100: '#fff3bf',
	yellow200: '#ffec99',
	yellow300: '#ffe066',
	yellow400: '#ffd43b',
	yellow500: '#fcc419',
	yellow600: '#fab005',
	yellow700: '#f59f00',
	yellow800: '#f08c00',
	yellow900: '#e67700',
	orange50: '#fff4e6',
	orange100: '#ffe8cc',
	orange200: '#ffd8a8',
	orange300: '#ffc078',
	orange400: '#ffa94d',
	orange500: '#ff922b',
	orange600: '#fd7e14',
	orange700: '#f76707',
	orange800: '#e8590c',
	orange900: '#d9480f'
};
```

<Demo demo={ThemeDemos.defaultTheme} />

## Typography

To manage Typography options you can use the following keys:

- **fontSizes**
- **fonts (fontFamily)**
- **fontWeights**
- **lineHeights**
- **letterSpacings**

```js
export default {
    // default theme object
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px'
    },
    fonts: {
        standard: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
        fallback: 'Segoe UI, system-ui, sans-serif'
    },
    fontWeights: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800
    },
    lineHeights: {
        xs: 1,
        sm: 1.25,
        md: 1.5,
        lg: 1.625,
        xl: 1.75
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
    },
    ...
};
```

## Radius

SvelteUI provides a set of common sizes for controlling the `border-radius` of an element.

```js
export default {
    // default theme object
    colors: {...}, // color palette object
    fonts: {...}, // font families object
    fontSizes: {...}, // font sizes object
    fontWeights: {...}, // font weights object
    lineHeights: {...}, // line heights object
    radii: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '32px',
        squared: '33%',
        rounded: '50%',
        pill: '9999px'
    },
    ...
};
```

## Border Widths

SvelteUI includes a set of common border widths.

```js
export default {
    // default theme object
    colors: {...}, // color palette object
    fonts: {...}, // font families object
    fontSizes: {...}, // font sizes object
    fontWeights: {...}, // font weights object
    lineHeights: {...}, // line heights object
    radii: {...}, // border radius object
    borderWidths: {
        light: '1px',
        normal: '2px',
        bold: '3px',
        extrabold: '4px',
        black: '5px'
    },
  ...
```

## Spacing

SvelteUI has a set of most common spacing values (based on Tailwind) that you can use. By default, the `padding`,`margin`, `top`, `left`, `right`, `bottom`, `width`, `height`, and other styles can reference these spacing values.

> You can see the complete `space` list on [Stitches Property Mapping](https://stitches.dev/docs/tokens#property-mapping)

```js
export default {
  // default theme object
  // ... previous theme properties
  spacing: {
    0: '0rem',
    xs: '10px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.625rem',
    6: '0.75rem',
    7: '0.875rem',
    8: '1rem',
    9: '1.25rem',
    10: '1.5rem',
    11: '1.75rem',
    12: '2rem',
    13: '2.25rem',
    14: '2.5rem',
    15: '2.75rem',
    16: '3rem',
    17: '3.5rem',
    18: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  }
  ...
};
```

| Name | Space    | Pixels |                                    |
| ---- | -------- | ------ | ---------------------------------- |
| 1    | 0.125rem | 2px    | <progress value={2} max={384} />   |
| 2    | 0.25rem  | 4px    | <progress value={4} max={384} />   |
| 3    | 0.375rem | 6px    | <progress value={6} max={384} />   |
| 4    | 0.5rem   | 8px    | <progress value={8} max={384} />   |
| 5    | 0.625rem | 10px   | <progress value={10} max={384} />  |
| 6    | 0.75rem  | 12px   | <progress value={12} max={384} />  |
| 7    | 0.875rem | 14px   | <progress value={14} max={384} />  |
| 8    | 1rem     | 16px   | <progress value={16} max={384} />  |
| 9    | 1.25rem  | 20px   | <progress value={20} max={384} />  |
| 10   | 1.5rem   | 24px   | <progress value={24} max={384} />  |
| 11   | 1.75rem  | 28px   | <progress value={28} max={384} />  |
| 12   | 2rem     | 32px   | <progress value={32} max={384} />  |
| 13   | 2.25rem  | 36px   | <progress value={36} max={384} />  |
| 14   | 2.5rem   | 40px   | <progress value={40} max={384} />  |
| 15   | 2.75rem  | 44px   | <progress value={44} max={384} />  |
| 16   | 3rem     | 48px   | <progress value={48} max={384} />  |
| 17   | 3.75rem  | 60px   | <progress value={60} max={384} />  |
| 18   | 4rem     | 64px   | <progress value={64} max={384} />  |
| 20   | 5rem     | 80px   | <progress value={80} max={384} />  |
| 24   | 6rem     | 96px   | <progress value={96} max={384} />  |
| 28   | 7rem     | 112px  | <progress value={112} max={384} /> |
| 32   | 8rem     | 128px  | <progress value={128} max={384} /> |
| 36   | 9rem     | 144px  | <progress value={144} max={384} /> |
| 40   | 10rem    | 160px  | <progress value={160} max={384} /> |
| 44   | 11rem    | 176px  | <progress value={176} max={384} /> |
| 48   | 12rem    | 192px  | <progress value={192} max={384} /> |
| 52   | 13rem    | 208px  | <progress value={208} max={384} /> |
| 56   | 14rem    | 224px  | <progress value={224} max={384} /> |
| 60   | 15rem    | 240px  | <progress value={240} max={384} /> |
| 64   | 16rem    | 256px  | <progress value={256} max={384} /> |
| 72   | 18rem    | 288px  | <progress value={288} max={384} /> |
| 80   | 20rem    | 320px  | <progress value={320} max={384} /> |
| 96   | 24rem    | 384px  | <progress value={384} max={384} /> |

## Breakpoints

SvelteUI comes with a predefined set of commonly used breakpoints.

```js
export default {
    // default theme object
    // ... previous theme properties
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1280px)',
        xxl: '(min-width: 1536px)'
    },
    ...
};
```

## z-index values

SvelteUI comes with a basic set of z-Indices to help you control the stacking order of your components.

```js
export default {
    // default theme object
    // ... previous theme properties
    zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '500',
        10: '1000',
        max: '9999'
    }
    ...
};
```

## Shadows

SvelteUI provides a curated set of predefined shadows for `light` and `dark` themes.

```js
// light theme
export const lightTheme = {
    // default theme object
    // ... previous theme properties
    shadows: {
        xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
        md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
        lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
        xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px'
    },
    ...
};
// dark theme
export const darkTheme = {
    // default theme object
    // ... previous theme properties
    shadows: {
        xs: '-4px 0 15px rgb(0 0 0 / 50%)',
        sm: '0 5px 20px -5px rgba(20, 20, 20, 0.1)',
        md: '0 8px 30px rgba(20, 20, 20, 0.15)',
        lg: '0 30px 60px rgba(20, 20, 20, 0.15)',
        xl: '0 40px 80px rgba(20, 20, 20, 0.25)'
    }
    ...
};
```

<style>
  :global(article>*:nth-child(3)) {
    margin-top: 13rem !important;
  }
</style>
