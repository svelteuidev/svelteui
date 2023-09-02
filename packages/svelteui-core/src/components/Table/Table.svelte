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
	<tr>
		<th>Element position</th>
		<th>Element name</th>
		<th>Symbol</th>
		<th>Atomic mass</th>
	</tr>
	<tr>
		<th>6</th>
		<th>Carbon</th>
		<th>C</th>
		<th>12</th>
	</tr>
	<tr>
		<th>7</th>
		<th>Nitrogen</th>
		<th>N</th>
		<th>14</th>
	</tr>
	<tr>
		<th>39</th>
		<th>Yttrium</th>
		<th>Y</th>
		<th>89</th>
	</tr>
	<tr>
		<th>56</th>
		<th>Barium</th>
		<th>Ba</th>
		<th>137</th>
	</tr>
</table>
