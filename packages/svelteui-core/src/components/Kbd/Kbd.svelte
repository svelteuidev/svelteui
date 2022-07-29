<script lang="ts">
	import useStyles from './Kbd.styles';
	import { Box } from '../Box';
	import type { KbdProps as $$KbdProps } from './Kbd.styles';

	interface $$Props extends $$KbdProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {};
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
