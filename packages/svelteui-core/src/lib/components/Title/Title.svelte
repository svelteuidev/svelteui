<script lang="ts">
	import { Text } from '$lib';
	import { css } from '$lib/styles';
	import { titleSizes } from './Title.styles';
	import type { Override } from '$lib/styles';
	import type { TextAlignment, TitleOrder } from './Title.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: Override['props'] = {};
	/** The alignment to be applied to the text */
	export let align: TextAlignment = 'left';
	/** Defines the style and compoennt to be used */
	export let order: TitleOrder = 1;

    let element;
    $: element = `h${order}`;

    const styles = {
        fontSize: `${titleSizes[order].fontSize}px`,
        lineHeight: titleSizes[order].lineHeight,
        margin: 0,
        textAlign: align
    }
	const TitleStyles = css(styles);
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Title component that matches order to HTML tags and font sizes.
	
@see https://svelteui-docs.vercel.app/docs/core/title
@example
    ```tsx
    <Title>This is a title</Title> // standard title component
    <Title order={3}>This is a title</Title> // title component with order 2
    <Title order={1} override={{ fontSize: '90px' }}>This is a bigger title</Title> // title component with override style
    ```
-->

<Text class="title {className} {TitleStyles({ css: override })}" inherit={true} override={styles} component={element}>
    <slot />
</Text>
