<script lang="ts">
	import Text from '../Text/Text.svelte';
	import { css } from '$lib/styles';
	import { titleSizes } from './Title.styles';
	import type { HTMLHeadingElements, TitleOrder } from './Title.styles';
	import type { TextVariant, TextColors } from '../Text/Text.styles';
	import type {
		SvelteuiGradient,
		Override,
		SvelteuiNumberFontSize,
		SvelteuiTextAlignment,
		SvelteuiTextTransform
	} from '$lib/styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** The alignment to be applied to the text */
	export let align: SvelteuiTextAlignment = 'left';
	/** Defines the style and compoennt to be used */
	export let order: TitleOrder = 1;
	/** Code color for the text from the default theme */
	export let color: TextColors = 'dark';
	/** Sets the text-transform CSS property of the text*/
	export let transform: SvelteuiTextTransform = 'none';
	/** The variant of the text that dictates how the text behaves and/or looks like */
	export let variant: TextVariant = 'text';
	/** The size of the text from the default theme */
	export let weight: SvelteuiNumberFontSize = 'normal';
	/** Controls gradient settings in gradient variant only */
	export let gradient: SvelteuiGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	/** If enabled sets the line-height to 1 to center the text */
	export let inline: boolean = true;
	/** Sets the maximum lines of text using CSS -webkit-line-clamp property */
	export let lineClamp: number = undefined;
	/** Underlines the text */
	export let underline: boolean = undefined;
	/** If it should inherit font properties from the parent component */
	export let inherit: boolean = false;
	/** Applies an href to the button component and converts it to an anchor tag */
	export let href: string = '';

    let element: HTMLHeadingElements;
    $: element = `h${order}` as HTMLHeadingElements;

	const TitleStyles = css({
		margin: 0
	});
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Display text that uses title styling and title HTML tags.
	
@see https://svelteui-docs.vercel.app/docs/core/title
@example
    ```tsx
    <Title>This is a title</Title> // standard title component
    <Title order={3}>This is a title</Title> // title component with order 2
    <Title order={1} override={{ fontSize: '90px' }}>This is a bigger title</Title> // title component with override style
    ```
-->

<Text
	class="title {className} {TitleStyles({ css: override })}"
	root={element}
	align={align}
	size={titleSizes[order].fontSize}
	{color}
	{transform}
	{variant}
	{weight}
	{gradient}
	{inline}
	{lineClamp}
	{underline}
	{inherit}
	{href}
>
    <slot />
</Text>
