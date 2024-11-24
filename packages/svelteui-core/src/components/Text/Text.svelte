<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import Error from '$lib/internal/errors/Error.svelte';
	import { Box } from '../Box';
	import useStyles from './Text.styles';
	import { TextErrors } from './Text.errors';
	import type { TextProps as $$TextProps } from './Text';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		align?: $$Props['align'];
		color?: $$Props['color'];
		root?: $$Props['root'];
		transform?: $$Props['transform'];
		variant?: $$Props['variant'];
		size?: $$Props['size'];
		weight?: $$Props['weight'];
		gradient?: $$Props['gradient'];
		inline?: $$Props['inline'];
		lineClamp?: $$Props['lineClamp'];
		underline?: $$Props['underline'];
		inherit?: $$Props['inherit'];
		href?: $$Props['href'];
		tracking?: $$Props['tracking'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		align = 'left',
		color = 'dark',
		root = undefined,
		transform = 'none',
		variant = 'text',
		size = 'md',
		weight = 'normal',
		gradient = { from: 'indigo', to: 'cyan', deg: 45 },
		inline = true,
		lineClamp = undefined,
		underline = false,
		inherit = false,
		href = '',
		tracking = 'normal',
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	// --------------Error Handling-------------------
	let observable: boolean = $state(false);
	let err = $state();

	if (
		gradient.from === 'indigo' &&
		gradient.to === 'cyan0' &&
		gradient.deg === 45 &&
		variant !== 'gradient'
	) {
		observable = true;
		err = TextErrors[0];
	}
	// --------------End Error Handling-------------------

	let { cx, classes, getStyles } = $derived(useStyles(
		{
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
		},
		{ name: 'Text' }
	));
</script>

<Error {observable} component="Text" code={err} />

<!--
@component

Display text and links with theme styles.

@see https://svelteui.dev/core/text
@example
    ```tsx
    <Text size='lg'>This is a text</Text> // standard text component
    <Text size='lg' variant='gradient' gradient={{from: 'blue', to: 'red', deg: 45}}>This is a text with colors</Text> // text with gradient colors
    <Text component={'span'}>Span text</Text> // text being used with a 'span' as wrapper
    <Text component={Code}>Code text</Text> // text being used with the component Code as wrapper
    ```
-->

<Box
	{root}
	bind:element
	use={[forwardEvents, [useActions, use]]}
	class={cx(className, classes.root, getStyles({ css: override }))}
	href={href ?? undefined}
	{...rest}
>
	{@render children?.()}
</Box>
