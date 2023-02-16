---
title: Customize theme
description: Learn how to create your own themes and styles.
docs: 'theming/create-styles.md'
---

<script>
	import { Heading } from 'components';
    import { Demo, CreateStylesDemos } from "@svelteuidev/demos";
	import { Space, Alert } from '@svelteuidev/core';
  import { InfoCircled } from 'radix-icons-svelte';

	const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:15rem!important;}@media(max-width: 800px){.article>*:nth-child(3){margin-top:18rem!important;}}<\/style>`;
</script>

<svelte:head>
{@html styles}
</svelte:head>

<Heading />

## Preamble

This section will cover creating your own themes on top of the already provided light and dark themes, as well as how to use SvelteUI's styling features throughout your application.

All SvelteUI components are built with the CSS-in-JS library [Stitches](https://stitches.dev/). It is recommended that you use the `createStyles` function to create styles for the rest of your application because it is the easiest way to use the SvelteUI theme, but it is not required. You can use any other styling tools and languages alongside SvelteUI if you prefer.

## Features

If you choose to go with the SvelteUI styling engine then you get access to these features:

- A fast and lightweight theming solution with near-zero runtime
- Subscriptions to your SvelteUI theming context
- Supports all Stitches features: CSS extraction during server side rendering, lazy evaluation, dynamic theming, smart tokens, CSS prop, utils, a fully-typed API and more
- Server side rendering support: for SvelteKit or any other environment
- Fully featured TypeScript and IDE Intellisense support

## Styling with SvelteUI

When creating styles in SvelteUI, you should use the `createStyles` function. It allows you to subscribe to the current theme context from anywhere. Basic usage looks like this:

<Demo demo={CreateStylesDemos.basic} />

When using `createStyles` you must:

- Pass in an object, or a function the returns an object.
- The object must contain a root property. These are the styles that will be the top level of your element composition (i.e a container).

The `createStyles` function theme object differs from the general theme object. It extends the normal one, giving you extra utilities.

| property              | value                                     | description                                                                                                              |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `theme.dark`          | `dark-theme`                              | dark theme selector                                                                                                      |
| `theme.fn.themeColor` | `(color, shade) => SvelteUIColor`         | function that takes a color and shade, then returns the color's hex value                                                |
| `theme.fn.size`       | `({"{ size, sizing }"}) => SvelteUISpace` | function that takes an object with a size value (number / 'xs-xl') and an object of sizes, then returns the sizing value |
| `theme.fn.radius`     | `(radii) => SvelteUIRadius`               | function that takes a size value (number / 'xs-xl'), then returns a radius value                                         |

## Style Parameters

You can receive any amount of parameters as second argument of `createStyles` function, later you will need to pass those parameters as argument to `useStyles` function:

<Demo demo={CreateStylesDemos.params} />

## Merging Classes (cx function)

To merge class names use the `cx` function, it has the same API as classnames package.

<Alert icon={InfoCircled}  title="Tip">
    Do not use external libraries like `classnames` or `clsx` with class names created with `createStyles` function as it will produce style collisions.
</Alert>

<Demo demo={CreateStylesDemos.cx} />

<Space h="xl" />

## Variants

You can add variants to your styles by using the `variants` key. There is no limit to how many variants you can add.

```svelte
<script>
    import { createStyles } from '@svelteuidev/core'

    const useStyles = createStyles((theme) => {
        return {
            root: {
                ...baseStyles
            }
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
        }
    })

    $: ({getStyles} = useStyles())
</script>

// declare your variants in the object passed into styles
<button
    class={getStyles({ css: overrides, color: 'violet', moreVariants: ... })}
>
    Some content
</button>
```

Styling with SvelteUI is very similar to styling with vanilla CSS, or CSS-preprocessors (SCSS/Sass) with extra features. You can choose your preferred method of styling, but we **strongly** recommend you read this [styling guide](https://stitches.dev/docs/styling) to get up to speed.

> Need anymore styling information? Raise an issue on GitHub and ask any questions you have.

# Theming

SvelteUI comes with a default light and dark theme out of the box. If you would like to use the standard theme then you can read more about that in the [default theme](theming/default) section. It is suggested that you either read the default theming section, or the Stitches custom theming section first.

## Custom theme

You can create new themes with the `createTheme` function. We recommend using the 10 step color scale explained in the default theming section. The `createTheme` function gives you access to all the theming tokens available through the theme object, so that you can customize everything to your liking.

```svelte
<script>
	import { createTheme } from '@svelteuidev/core';

	const newTheme = createTheme({
		colors: {
			hiContrast: 'hsl(206,2%,93%)',
			loContrast: 'hsl(206,8%,8%)',

			gray100: 'hsl(206,8%,12%)',
			gray200: 'hsl(206,7%,14%)',
			gray300: 'hsl(206,7%,15%)',
			gray400: 'hsl(206,7%,24%)',
			gray500: 'hsl(206,7%,30%)',
			gray600: 'hsl(206,5%,53%)'
		},
		space: {},
		fonts: {}
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

<SvelteUIProvider theme={newTheme} themeObserver={null}>
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

For handling things like global resets or custom global styling, you can use the `globalCss` function to generate it. SvelteUI comes with global styles and a CSS reset by default. More information on that in the [SvelteUIProvider section](theming/svelteui-provider).

```ts
import { globalCss } from '@svelteuidev/core'
// declare this anywhere you can export it, or directly in your top level component.
const globalStyles = globalCss({
  body: { margin: 0 },
});

// then import it in your top level component i.e +layout.svelte or App.svelte
<script>
    import { globalStyles } from 'styles.js'

    globalStyles();
</script>

<SvelteUIProvider>
    <YourApp />
</SvelteUIProvider>
```

## Keyframes

For creating CSS animations, you can either use the Svelte transition api, or SvelteUI's `keyframes` function, which is a function to create a global CSS @keyframe rule.

```svelte
<script>
	import { keyframes, Button } from '@svelteuidev/core';

	const scaleUp = keyframes({
		'0%': { transform: 'scale(1)' },
		'100%': { transform: 'scale(1.5)' }
	});

	const styles = {
		'&:hover': {
			animation: `${scaleUp} 200ms`
		}
	};
</script>

<Button override={styles}>I will grow on hover</Button>
```
