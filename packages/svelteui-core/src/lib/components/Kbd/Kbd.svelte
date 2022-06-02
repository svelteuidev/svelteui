<script lang="ts">
	import useStyles from './Kbd.styles';
	import { Box } from '../Box';
	import type { KbdProps as $$KbdProps } from './Kbd.styles';

	export let use: $$KbdProps['use'] = [],
		element: $$KbdProps['element'] = undefined,
		className: $$KbdProps['className'] = '',
		override: $$KbdProps['override'] = {};
	export { className as class };

	$: ({ cx, getStyles } = useStyles());
</script>

<Box
	bind:element
	root="kbd"
	class={cx(className, getStyles({ css: override }))}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
