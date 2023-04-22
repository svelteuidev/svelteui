<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Text } from './index';
</script>

<Meta title="Components/Text" component={Text} />

<Template let:args>
	<Text {...args}>This is a nice text</Text>
</Template>

<Story name="Text" id="textStory" />
