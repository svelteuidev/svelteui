<script lang="ts">
	import { Box } from '../Box';
	import type { TableProps as $$TableProps } from './Table';
	import useStyles from './Table.styles';

	interface $$Props extends $$TableProps {}

	export let striped: $$Props['striped'] = false,
		highlightOnHover: $$Props['highlightOnHover'] = false,
		className: $$Props['className'] = 'table',
		cellPadding: $$Props['cellPadding'] = 'sm',
		textAlign: $$Props['textAlign'] = 'left',
		withRowBorder: $$Props['withRowBorder'] = true,
		withColumnBorder: $$Props['withColumnBorder'] = false,
		withTableBorder: $$Props['withTableBorder'] = false;

	$: ({ cx, classes } = useStyles(
		{
			striped,
			highlightOnHover,
			cellPadding,
			textAlign,
			withRowBorder,
			withColumnBorder,
			withTableBorder
		},
		{ name: 'Table' }
	));
</script>

<Box root="table" class={cx(className, classes.root)}>
	<slot />
</Box>
