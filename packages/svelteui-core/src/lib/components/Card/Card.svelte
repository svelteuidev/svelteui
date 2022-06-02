<script lang="ts">
	import useStyles from './Card.styles';
	import { Paper } from '../Paper';
	import type { CardProps as $$CardProps } from './Card.styles';

	export let use: $$CardProps['use'] = [],
		element: $$CardProps['element'] = undefined,
		className: $$CardProps['className'] = '',
		override: $$CardProps['override'] = {},
		padding: $$CardProps['p'] = 'md';
	export { className as class };
	export { padding as p };

	$: ({ cx, getStyles } = useStyles());
</script>

<Paper
	bind:element
	class={cx(className, getStyles({ css: override }))}
	p={padding}
	{use}
	{...$$restProps}
>
	<slot />
</Paper>
