<script lang="ts">
	import { css, dark, theme } from '$lib/styles';
	import { getTextColor } from './Text.styles';
	import { TextErrors } from './Text.errors';
	import Error from '$lib/internal/errors/Error.svelte';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { TextProps as $$TextProps } from './Text.styles';

	/** Used for forwarding actions from component */
	export let use: $$TextProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$TextProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$TextProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$TextProps['override'] = {};
	/** The alignment to be applied to the text */
	export let align: $$TextProps['align'] = 'left';
	/** Code color for the text from the default theme */
	export let color: $$TextProps['color'] = 'dark';
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$TextProps['root'] = undefined;
	/** Sets the text-transform CSS property of the text*/
	export let transform: $$TextProps['transform'] = 'none';
	/** The variant of the text that dictates how the text behaves and/or looks like */
	export let variant: $$TextProps['variant'] = 'text';
	/** The size of the text from the default theme */
	export let size: $$TextProps['size'] = 'md';
	/** The size of the text from the default theme */
	export let weight: $$TextProps['weight'] = 'normal';
	/** Controls gradient settings in gradient variant only */
	export let gradient: $$TextProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 };
	/** If enabled sets the line-height to 1 to center the text */
	export let inline: $$TextProps['inline'] = true;
	/** Sets the maximum lines of text using CSS -webkit-line-clamp property */
	export let lineClamp: $$TextProps['lineClamp'] = undefined;
	/** Underlines the text */
	export let underline: $$TextProps['underline'] = false;
	/** If it should inherit font properties from the parent component */
	export let inherit: $$TextProps['inherit'] = false;
	/** Applies an href to the anchor tag */
	export let href: $$TextProps['href'] = '';
	/** Controls the letter-spacing of the text */
	export let tracking: $$TextProps['tracking'] = 'normal';

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let isHTMLComponent;
	let isComponent;
	$: {
		isHTMLComponent = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}

	$: TextStyles = css({
		focusRing: 'auto',
		[`${dark.selector} &`]: {
			color: color === 'dark' ? '$dark50' : getTextColor(color, variant, gradient, true)
		},
		fontFamily: inherit ? 'inherit' : '$standard',
		fontSize: inherit ? 'inherit' : typeof size === 'string' ? `$${size}` : `${size}px`,
		fontWeight: inherit ? 'inherit' : `$${weight}`,
		letterSpacing: theme.letterSpacings[tracking]?.value,
		lineHeight: inherit
			? 'inherit'
			: inline
			? 1
			: typeof size === 'string'
			? `$${size}`
			: `${size}px`,
		textTransform: transform,
		textDecoration: underline ? 'underline' : 'none',
		textAlign: align,
		cursor: variant === 'link' ? 'pointer' : 'inherit',
		color: color === 'green' ? 'Black' : getTextColor(color, variant, gradient),
		backgroundImage:
			variant === 'gradient'
				? `linear-gradient(${gradient?.deg}deg, $${gradient?.from}600 0%, $${gradient?.to}600 100%)`
				: null,
		WebkitBackgroundClip: variant === 'gradient' ? 'text' : null,
		WebkitTextFillColor: variant === 'gradient' ? 'transparent' : null,
		...(lineClamp !== undefined
			? {
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					WebkitLineClamp: lineClamp,
					WebkitBoxOrient: 'vertical'
			  }
			: {}),
		'&:hover':
			variant === 'link' && underline === true
				? {
						textDecoration: 'underline'
				  }
				: undefined
	});

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (gradient === { from: 'indigo', to: 'cyan', deg: 45 } && variant !== 'gradient') {
		observable = true;
		err = TextErrors[0];
	}
	/** Disable error due to conflicts with Anchor compoenet 
	 * 
	 if ((variant === 'link' && href.length < 1) || (variant === 'link' && root !== 'a')) {
		 observable = true;
		 err = TextErrors[1];
		}
		$: if (observable) override = { display: 'none' };
	*/
</script>

<Error {observable} component="Text" code={err} />

<!--
@component

Display text and links with theme styles.
	
@see https://svelteui.org/core/text
@example
    ```tsx
    <Text size='lg'>This is a text</Text> // standard text component
    <Text size='lg' variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>This is a text with colours</Text> // text with gradient colors
    <Text component={'span'}>Span text</Text> // text being used with a 'span' as wrapper
    <Text component={Code}>Code text</Text> // text being used with the component Code as wrapper
    ```
-->

{#if isHTMLComponent}
	<!-- prettier-ignore -->
	<svelte:element
		bind:this={element}
		this={root} 
		use:forwardEvents
		use:useActions={use}
		{href} 
		class="text {className} {TextStyles({ css: override })}"
	>
		<slot>Enter some text</slot>
	</svelte:element>
{:else if isComponent}
	<svelte:component
		this={root}
		bind:this={element}
		use={[forwardEvents, [useActions, use]]}
		class="text {className} {TextStyles({ css: override })}"
		{...$$props}
	>
		<slot>Enter some text</slot>
	</svelte:component>
{:else}
	<div
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class="text {className} {TextStyles({ css: override })}"
	>
		<slot>Enter some text</slot>
	</div>
{/if}
