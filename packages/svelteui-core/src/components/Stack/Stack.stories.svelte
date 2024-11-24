<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Button } from '../Button';
	import { Stack } from './index';
</script>

<Meta title="Components/Stack" component={Stack} />

<Template >
	{#snippet children({ args })}
		<Stack {...args}>
			<Button variant="outline">1</Button>
			<Button variant="outline">2</Button>
			<Button variant="outline">3</Button>
		</Stack>
	{/snippet}
</Template>

<Story name="Stack" id="stackStory" />
