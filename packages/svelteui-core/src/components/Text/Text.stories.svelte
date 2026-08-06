<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Text } from './index';
</script>

<Meta title="Components/Text" component={Text} />

<Template>
	{#snippet children({ args })}
		<Text {...args}>This is a nice text</Text>
	{/snippet}
</Template>

<Story name="Text" id="textStory" />
