<script lang="ts">
	import useStyles from './Text.styles';
	import { TextErrors } from './Text.errors';
	import Error from '$lib/internal/errors/Error.svelte';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { TextProps as $$TextProps } from './Text.styles';

	export let use: $$TextProps['use'] = [],
		element: $$TextProps['element'] = undefined,
		className: $$TextProps['className'] = '',
		override: $$TextProps['override'] = {},
		align: $$TextProps['align'] = 'left',
		color: $$TextProps['color'] = 'dark',
		root: $$TextProps['root'] = undefined,
		transform: $$TextProps['transform'] = 'none',
		variant: $$TextProps['variant'] = 'text',
		size: $$TextProps['size'] = 'md',
		weight: $$TextProps['weight'] = 'normal',
		gradient: $$TextProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		inline: $$TextProps['inline'] = true,
		lineClamp: $$TextProps['lineClamp'] = undefined,
		underline: $$TextProps['underline'] = false,
		inherit: $$TextProps['inherit'] = false,
		href: $$TextProps['href'] = '',
		tracking: $$TextProps['tracking'] = 'normal';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	/** workaround for root type errors, this should be replaced by a better type system */
	const castRoot = () => root as string;

	let isHTMLElement: boolean;
	let isComponent: boolean;
	$: {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (gradient === { from: 'indigo', to: 'cyan', deg: 45 } && variant !== 'gradient') {
		observable = true;
		err = TextErrors[0];
	}
	// --------------Error Handling-------------------
	$: ({ cx, getStyles } = useStyles({
		lineClamp,
		underline,
		inline,
		inherit,
		gradient,
		variant,
		align,
		color,
		transform,
		size,
		weight,
		tracking
	}));
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

{#if isHTMLElement}
	<!-- prettier-ignore -->
	<svelte:element
		bind:this={element}
		this={castRoot()} 
		use:forwardEvents
		use:useActions={use}
		{href} 
		class={cx(className, getStyles({ css: override }))}
	>
		<slot>Enter some text</slot>
	</svelte:element>
{:else if isComponent}
	<svelte:component
		this={root}
		bind:this={element}
		use={[forwardEvents, [useActions, use]]}
		class={cx(className, getStyles({ css: override }))}
		{...$$props}
	>
		<slot>Enter some text</slot>
	</svelte:component>
{:else}
	<div
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class={cx(className, getStyles({ css: override }))}
	>
		<slot>Enter some text</slot>
	</div>
{/if}
