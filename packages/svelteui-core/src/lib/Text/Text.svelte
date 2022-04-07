<script lang="ts">
	import { css, vFunc } from '$lib/_styles';
	import { fontSizes } from './Text.styles';
	import type { SvelteuiColor, SvelteuiGradient, SvelteuiSize, Override } from '$lib/_styles';
	import type { TextAlignment, TextTransform, TextVariant } from './Text.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** The alignment to be applied to the text */
	export let align: TextAlignment = 'left';
	/** Code color for the text from the default theme */
	export let color: SvelteuiColor = 'dark';
	/** The component or HTML tag to be used as the root component for the text */
	export let component: any = 'div';
	/** If enabled sets the line-height to 1 to center the text */
	export let inline: boolean = true;
	/** Sets the maximum lines of text using CSS -webkit-line-clamp property */
	export let lineClamp: number = undefined;
	/** Sets the text-transform CSS property of the text*/
	export let transform: TextTransform = 'none';
	/** Underlines the text */
	export let underline: boolean = false;
	/** If it should inherit font properties from the parent component */
	export let inherit: boolean = true;
	/** The variant of the text that dictates how the text behaves and/or looks like */
	export let variant: TextVariant = 'text';
	/** The size of the text from the default theme */
	export let size: SvelteuiSize = "md";
	/** The size of the text from the default theme */
	export let weight: number | string = '$SemiBold';
	/** Controls gradient settings in gradient variant only */
	export let gradient: SvelteuiGradient = undefined;

	// @TODO: convert component to link/text

	const TextStyles = css({
		fontFamily: inherit ? 'inherit' : '$standard',
		fontSize: inherit ? 'inherit' : fontSizes[size],
		fontWeight: inherit ? 'inherit' : weight,
		lineHeight: inherit ? 'inherit' : inline ? 1 : fontSizes[size],
		textTransform: transform,
		textDecoration: underline ? 'underline' : 'none',
		backgroundImage: variant === 'gradient' ? `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)` : null,
		...(lineClamp !== undefined ? {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			display: '-webkit-box',
			WebkitLineClamp: lineClamp,
			WebkitBoxOrient: 'vertical',
		} : {})
	});
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Text block with gradient support.
	
@see https://svelteui-docs.vercel.app/docs/core/text
@example
    ```tsx
    <Text size='lg'>This is a text</Text> // standard code component
    <Text size='lg' variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>This is a text with colours</Text> // code with block and copy props
    ```
-->

<svelte:component this={component}>
	<slot />
</svelte:component>

<div class="text {className} {TextStyles({ css: override })}" />
