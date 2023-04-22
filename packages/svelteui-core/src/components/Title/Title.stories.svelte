<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Title } from './index';
</script>

<Meta title="Components/Title" component={Title} />

<Template let:args>
	<Title {...args}>Title Storybook</Title>
</Template>

<Story name="Title" id="titleStory" />
