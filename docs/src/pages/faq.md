---
title: FAQ
---

<script>
    import { CodeBlock, MinorHeading } from 'components'
	import { Box, Space } from '@svelteuidev/core'
    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:1rem!important;}<\/style>`;
</script>

<svelte:head>
{@html styles}
</svelte:head>

<MinorHeading />

## How do I integrate TailwindCSS with SvelteUI?

This may come as a surprise, but Tailwind integrates with SvelteUI pretty well. If you find that you simply want to add classes to a component to enhance it, then you can add the class like you would with any other element:

```svelte
<script lang="ts">
    import { Button } from "@svelteui/dev";
</script>

<Button class='animation-bounce'>I have a tailwind animation<Button>
```

If you want to have your tailwind classes override SvelteUI styles then a simple way to achieve that is altering your tailwind config to generate utilities as !important, by setting the important key in your configuration options to true:

```js
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	important: true, // <-- adding this line will give your tailwind classes !important by default
	plugins: []
};
```

Alternatively, you can make any utility important by adding a ! character to the beginning:

```html
<p class="font-bold !font-medium">This will be medium even though bold comes later in the CSS.</p>
```

The ! always goes at the beginning of the utility name, after any variants, but before any prefix:

```html
<div class="sm:hover:!tw-font-bold"></div>
```

This allows you to increase specificity over the styles you don’t control. You can read more about configuration options on the official [Tailwind docs](https://tailwindcss.com/docs/configuration#important)

<Space h="xl" />

## Can I use other css-in-js libraries or SCSS/SASS with SvelteUI?

Yes, but keep in mind that SvelteUI already uses [stitches](https://stitches.dev), so you might end up with style conflicts and have to overwrite styles with! important. Before selecting other libraries, please consider using SvelteUI's [builtin solution](theming/create-styles.md).
