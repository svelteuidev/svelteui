<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Title } from './index';
</script>

<Meta title="Components/Title" component={Title} />

<Template>
	{#snippet children({ args })}
		<Title {...args}>Title Storybook</Title>
	{/snippet}
</Template>

<Story name="Title" id="titleStory" />
