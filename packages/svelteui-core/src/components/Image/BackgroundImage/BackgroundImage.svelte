<script lang="ts">
	import useStyles from './BackgroundImage.styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { BackgroundImageProps as $$BackgroundImageProps } from './BackgroundImage';

	interface $$Props extends $$BackgroundImageProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		radius: $$Props['radius'] = 0,
		src: $$Props['src'] = '',
		width: $$Props['width'] = undefined,
		height: $$Props['height'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: ({ cx, classes, getStyles } = useStyles(
		{ height, radius, src, width },
		{ name: 'BackgroundImage' }
	));
</script>

<!--
@component

BackgroundImage component can be used to add any content on image. It is useful for hero headers and other similar sections

@see https://svelteui.org/core/image
@example
    ```svelte
		<script>
			const src = 'https://images.unsplash.com/photo-1649014048485-590f93c42936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
		</script>

		<BackgroundImage radius="sm" {src}>
			This content will be shown over the image
		</BackgroundImage>
    ```

	It is suggested to wrap your component in a container element
-->

<div
	bind:this={element}
	use:forwardEvents
	use:useActions={use}
	class={cx(className, classes.root, getStyles({ css: override }))}
>
	<slot>Text</slot>
</div>
