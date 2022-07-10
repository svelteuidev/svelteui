<script lang="ts">
	import useStyles from './Text.styles';
	import { TextErrors } from './Text.errors';
	import Error from '$lib/internal/errors/Error.svelte';
	import { Box } from '../Box';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { TextProps as $$TextProps } from './Text.styles';

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface $$Props extends $$TextProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		align: $$Props['align'] = 'left',
		color: $$Props['color'] = 'dark',
		root: $$Props['root'] = undefined,
		transform: $$Props['transform'] = 'none',
		variant: $$Props['variant'] = 'text',
		size: $$Props['size'] = 'md',
		weight: $$Props['weight'] = 'normal',
		gradient: $$Props['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		inline: $$Props['inline'] = true,
		lineClamp: $$Props['lineClamp'] = undefined,
		underline: $$Props['underline'] = false,
		inherit: $$Props['inherit'] = false,
		href: $$Props['href'] = '',
		tracking: $$Props['tracking'] = 'normal';
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	// --------------Error Handling-------------------
	let observable: boolean = false;
	let err;

	if (gradient === { from: 'indigo', to: 'cyan', deg: 45 } && variant !== 'gradient') {
		observable = true;
		err = TextErrors[0];
	}
	// --------------End Error Handling-------------------

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

<Box
	{root}
	bind:element
	use={[forwardEvents, [useActions, use]]}
	class={cx(className, getStyles({ css: override }))}
	href={href ?? undefined}
	{...$$restProps}
>
	<slot />
</Box>
