<script lang="ts">
	import type { TableProps as $$TableProps } from './Table';
	import useStyles from './Table.styles';

	interface $$Props extends $$TableProps {}

	export let withBorder: $$Props['withBorder'] = false,
		striped: $$Props['striped'] = false,
		highlightOnHover: $$Props['highlightOnHover'] = false,
		className: $$Props['className'] = 'table',
		cellPadding: $$Props['cellPadding'] = 'sm',
		textAlign: $$Props['textAlign'] = 'center';

	$: ({ cx, classes } = useStyles(
		{
			withBorder,
			striped,
			highlightOnHover,
			cellPadding,
			textAlign
		},
		{ name: 'Table' }
	));
</script>

<table class={cx(className, classes.root)}>
	<slot />
</table>
