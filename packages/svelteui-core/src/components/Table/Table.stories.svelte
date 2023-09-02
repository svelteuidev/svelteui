<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Table } from './index';
</script>

<Meta title="Components/Table" component={Table} />

<Template let:args>
	<Table {...args} />
</Template>

<Story name="Table" id="tableStory" />
