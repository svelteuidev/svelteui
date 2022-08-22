<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Month } from './index';
</script>

<Meta title="Dates/Month" component={Month} />

<Template let:args>
	<Month {...args} month={new Date()} />
</Template>

<Story name="Month" />
