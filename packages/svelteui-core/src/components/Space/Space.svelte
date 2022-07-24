<script lang="ts">
	import useStyles from './Space.styles';
	import { Box } from '../Box';
	import type { SpaceProps as $$SpaceProps } from './Space.styles';

	export let use: $$SpaceProps['use'] = [],
		element: $$SpaceProps['element'] = undefined,
		className: $$SpaceProps['className'] = '',
		override: $$SpaceProps['override'] = {},
		w: $$SpaceProps['w'] = 0,
		h: $$SpaceProps['h'] = 0;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ h, w }));
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
