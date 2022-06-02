<script lang="ts">
	import useStyles from './Center.styles';
	import Box from '../Box/Box.svelte';
	import type { CenterProps as $$CenterProps } from './Center.styles';

	export let use: $$CenterProps['use'] = [],
		element: $$CenterProps['element'] = undefined,
		className: $$CenterProps['className'] = '',
		override: $$CenterProps['override'] = {},
		inline: $$CenterProps['inline'] = false;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ inline }));
</script>

<!--
@component

Centers content vertically and horizontally.
	
@see https://svelteui.org/core/center
@example
    ```svelte
	<Center override={{ width: 400, height: 200, bg: '$blue100' }}>
		<Box css={{ bg: '$blue300' }}>All elements inside Center are centered</Box>
	</Center>
    ```
-->
<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<slot>This is centered</slot>
</Box>
