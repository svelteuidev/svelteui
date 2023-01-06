<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Select } from './index';
</script>

<Meta title="Components/Select" component={Select} />

<Template let:args>
	<Select {...args} />
</Template>

<Story
	name="Select"
	id="select"
	args={{
		data: [{ value: 'Svelte' }, { value: 'React' }, { value: 'Vue' }, { value: 'Solid' }]
	}}
/>
