<script lang="ts">
	import useStyles from './UnstyledButton.styles';
	import { Box } from '../../Box';
	import type { UnstyledButtonProps as $$UnstyledButtonProps } from './UnstyledButton.styles';

	export let use: $$UnstyledButtonProps['use'] = [],
		element: $$UnstyledButtonProps['element'] = undefined,
		className: $$UnstyledButtonProps['className'] = '',
		override: $$UnstyledButtonProps['override'] = {},
		root: $$UnstyledButtonProps['root'] = 'button';
	export { className as class };

	$: ({ cx, classes, getStyles } = useStyles());
</script>

<Box
	bind:element
	class="{cx(className)} {getStyles({ css: override })}"
	{use}
	{root}
	{...$$restProps}
>
	<slot />
</Box>
