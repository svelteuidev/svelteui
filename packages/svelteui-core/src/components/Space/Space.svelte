<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './Space.styles';
	import type { SpaceProps as $$SpaceProps } from './Space';

	interface $$Props extends $$SpaceProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		w: $$Props['w'] = 0,
		h: $$Props['h'] = 0;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ h, w }, { name: 'Space' }));
</script>

<!--
@component

Add horizontal or vertical spacing from theme.

@see https://svelteui.org/core/space
@example
    ```svelte
		<Space h="md" />
		<Space w="lg" />
		<Space w={30} /> // Width will be set to 30px
    ```
-->
<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<slot />
</Box>
