<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Flex } from './index';
	import { Button } from '../Button';
</script>

<Meta title="Components/Flex" component={Flex} />

<Template>
	{#snippet children({ args })}
		<Flex {...args}>
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Flex>
	{/snippet}
</Template>

<Story name="Flex" id="FlexStory" args={{ gap: 'xl' }} />
