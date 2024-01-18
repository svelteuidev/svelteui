<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Table } from './index';
</script>

<Meta title="Components/Table" component={Table} />

<Template let:args>
	<Table {...args}>
		<thead>
			<tr>
				<th>Project</th>
				<th>Stars</th>
				<th>Contributors</th>
				<th>Forks</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>freeCodeCamp/freeCodeCamp</td>
				<td>381k</td>
				<td>4887</td>
				<td>35.5k</td>
			</tr>
			<tr>
				<td>EbookFoundation/free-programming-books</td>
				<td>307k</td>
				<td>2854</td>
				<td>59.1k</td>
			</tr>
			<tr>
				<td>sindresorhus/awesome</td>
				<td>286k</td>
				<td>576</td>
				<td>27k</td>
			</tr>
			<tr>
				<td>jwasham/coding-interview-university</td>
				<td>276k</td>
				<td>303</td>
				<td>71.4k</td>
			</tr>
			<tr>
				<td>996icu/996.ICU</td>
				<td>268k</td>
				<td>642</td>
				<td>21.5k</td>
			</tr>
		</tbody>
	</Table>
</Template>

<Story name="Table" id="tableStory" />
