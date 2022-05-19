---
title: Customize theme
description: Learn how to create your own themes and styles.
docs: 'theming/create-styles.md'
---

<script>
	import { Heading, Preview, mobile } from 'components';
	import { css, dark, theme, Space } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';

	const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:15rem!important;}@media(max-width: 800px){.article>*:nth-child(3){margin-top:18rem!important;}}<\/style>`;

	const codeDemoOne = `
    <script>
    	import { css, dark, theme } from '@svelteuidev/core';

        const demoStyles = css({
            length: 0,
            [\`$\{dark.selector} &\`]: {
                // using of SvelteUI utilities
                // bc === backgroundColor
                bc: theme.colors['dark500'].value
            },
            // subscribe to color scheme changes right in your styles
            backgroundColor: theme.colors['gray100'].value,
            maxWidth: 400,
            width: '100%',
            height: 180,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: theme.radii.sm.value,
            fontSize: theme.fontSizes.xs.value,

            // Dynamic media queries, define breakpoints in theme, use anywhere
            // You can use the theme object, or tokens, it's up to you
            '@sm': {
                '.child': {
                    fontSize: '$md'
                }
            },

            '.child': {
                [\`$\{dark.selector} &\`]: {
                    bc: theme.colors['dark800'].value,
                    color: 'White'
                },
                backgroundColor: 'White',
                padding: theme.space.md.value,
                borderRadius: theme.radii.sm.value,
                boxShadow: theme.shadows.md,
                color: 'Black'
            }
        });
    <\/script>
    
    <div class={demoStyles()}>
        <div class='child'>css function demo<\/div>
    <\/div>
    `;

	const demoStyles = css({
		length: 0,
		[`${dark.selector} &`]: {
			// using of SvelteUI utilities
			// bc === backgroundColor
			bc: theme.colors['dark500'].value
		},
		// subscribe to color scheme changes right in your styles
		backgroundColor: theme.colors['gray100'].value,
		maxWidth: 400,
		width: '100%',
		height: 180,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: theme.radii.sm.value,
		fontSize: theme.fontSizes.xs.value,

		// Dynamic media queries, define breakpoints in theme, use anywhere
		// You can use the theme object, or tokens, it's up to you
		'@sm': {
			'.child': {
				fontSize: '$md'
			}
		},

		'.child': {
			[`${dark.selector} &`]: {
				bc: theme.colors['dark800'].value,
				color: 'White'
			},
			backgroundColor: 'White',
			padding: theme.space.md.value,
			borderRadius: theme.radii.sm.value,
			boxShadow: theme.shadows.md,
			color: 'Black'
		}
	});
</script>

<svelte:head>
	{@html styles}
</svelte:head>

<Heading />

## Preamble

This section will cover creating your own themes on top of the already provided light and dark themes, as well as how to use SvelteUI styling features throughout your application.

All SvelteUI components are built with the CSS-in-JS library [Stitches](https://stitches.dev/). It is recommended that you use the `css` function to create styles for the rest of your application because it is the easiest way to use the SvelteUI theme, but it is not required. You can use any other styling tools and languages alongside SvelteUI if you prefer.

## Features

If you choose to go with the SvelteUI styling engine then you get access to these features:

- A fast and lightweight theming solution with near-zero runtime
- Subscriptions to your SvelteUI theming context
- Supports all stitches features: css extraction during server side rendering, lazy evaluation, dynamic theming, smart tokens, css prop, utils, a fully-typed API and more
- Server side rendering support: for SvelteKit or any other environment
- Fully featured TypeScript and IDE Intellisense support

## Styling with SvelteUI

<Preview showCode={$mobile ? false : true} width={100} cols={1} code={codeDemoOne}>
    <div class={demoStyles()}>
        <div class='child'>css function demo</div>
    </div>
</Preview>

<Space h="xl" />

## Variants

You can add variants to your styles by using the `variants` key. There is no limit to how many variants you can add.

```svelte
<script>
    import { css } from '@svelteuidev/core'

    const styles = css({
        // base styles
        // the required key to define your variants
        variants: {
            // you can think of each property on the variant property as an identifier
            color: {
                // then each property on the "identifier" is the desired variant style
                violet: {
                    backgroundColor: 'blueviolet',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'darkviolet',
                    },
                },
                gray: {
                    backgroundColor: 'gainsboro',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    },
                },
            },
        },
    })
</script>

// declare your variants in the object passed into styles
<button class={styles({ css: overrides, color: 'violet', moreVariants: ... })}>Some content</button>
```

Styling with SvelteUI is most similar to styling with vanilla css, or css-preprocessors (scss/sass) with extra features. You can choose your preferred method of styling, but we **strongly** recommend you read this [styling guide](https://stitches.dev/docs/styling) to get up to speed.

> Need anymore styling information? Raise an issue on github and ask any questions you have.

# Theming

SvelteUI comes with a default light and dark theme out of the box. If you would like to use the standard theme then you can read more about that in the [default theme](theming/default) section. It is suggested that you either read the default theming section, or the stitches custom theming section first.

## Custom theme

You can create new themes with the `createTheme` function. We recommend using the 10 step color scale explained in the default theming section. The `createTheme` function gives you access to all the theming tokens available through the theme object, so that you can customize everything to your liking.

```svelte
<script>
    import { createTheme } from '@svelteuidev/core'

    const newTheme = createTheme({
        colors: {
            hiContrast: 'hsl(206,2%,93%)',
            loContrast: 'hsl(206,8%,8%)',

            gray100: 'hsl(206,8%,12%)',
            gray200: 'hsl(206,7%,14%)',
            gray300: 'hsl(206,7%,15%)',
            gray400: 'hsl(206,7%,24%)',
            gray500: 'hsl(206,7%,30%)',
            gray600: 'hsl(206,5%,53%)',
        },
        space: {},
        fonts: {},
    });
</script>
```

The `newTheme` const represents a hashed class, which can be added at any point in your application.

You can define the theme class to be used by passing it as the first argument:

```ts
const newTheme = createTheme('new-theme', {...});
```

To apply the new theme, add it to your SvelteUIProvider

```svelte
<script>
    // imports and other things
    const newTheme = createTheme('new-theme', {...});
</script>

<SvelteUIProvider class={newTheme} themeObserver={null}>
    <Box>Content nested in the new theme.</Box>
</SvelteUIProvider>
```

## Theme object

The themes generated are objects containing useful token data.

For example, given the following default theme and new theme created above:

```svelte
<script>
    import { createTheme, theme } from '@svelteuidev/core'

    const newTheme = createTheme({
        colors: {
            primary: 'pink',
        },
        ...
    });
</script>
```

You can use the returned theme objects to read the tokens, like so:

```ts
// default theme
theme.colors.primary; // var(--colors-primary)
theme.colors.primary.value; // #228be6
theme.colors.primary.token; // primary
theme.colors.primary.scale; // colors
theme.colors.primary.variable; // --colors-primary
theme.colors.primary.computedValue; // var(--colors-primary)

// new theme
newTheme.colors.primary; // var(--colors-primary)
newTheme.colors.primary.value; // pink
newTheme.colors.primary.token; // primary
newTheme.colors.primary.scale; // colors
newTheme.colors.primary.variable; // --colors-primary
newTheme.colors.primary.computedValue; // var(--colors-primary)
```

## Theme specific styles

You can add styles based on themes by retrieving the dynamically generated theme class. This is how SvelteUI components support dark theme usage:

```svelte
<script>
    import { SvelteUIProvider, Box, css}
    const newTheme = createTheme('new-theme', {...});

    const styles = css({
        [`.${newTheme.selector} &`]: {
            // background color will be pink when newTheme is being used
            backgroundColor: '$primary',
        },
        // background color will be blue when theme is being used
        backgroundColor: '$primary'
    })
</script>

<SvelteUIProvider class={newTheme}>
    <div class={styles()}>Some content</div>
</SvelteUIProvider>
```

## Global styles

For handling things like global resets or custom global styling, you can use the  globalCss function to generate it. SvelteUI comes with global styles and a css reset by default. More information on that in the [SvelteUIProvider section](theming/svelteui-provider).

```ts
import { globalCss } from '@svelteuidev/core'
// declare this anywhere you can export it, or directly in your top level component.
const globalStyles = globalCss({
  body: { margin: 0 },
});

// then import it in your top level component i.e __layout.svelte or App.svelte
<script>
    import { globalStyles } from 'styles.js'
    
    globalStyles();
</script>

<SvelteUIProvider>
    <YourApp />
</SvelteUIProvider>
```

## Keyframes

For creating css animations, you can either use the svelte transition api, or SvelteUI's keyframe function, which is a function to create a global CSS @keyframe rule.

```svelte
<script>
    import { keyframes, Button } from '@svelteuidev/core'

    const scaleUp = keyframes({
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.5)' },
    });

    const styles = {
        '&:hover': {
            animation: `${scaleUp} 200ms`,
        },
    }
</script>

<Button override={styles}>I will grow on hover</Button>
```