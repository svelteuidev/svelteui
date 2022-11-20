<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme } from '$lib/styles';
	import { Group } from '../Group';
	import { Stack } from '../Stack';
	import { Chip } from './index';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
</script>

<Meta title="Components/Chip" component={Chip} />

<Template let:args>
	<Chip {...args} />
</Template>

<Story name="Chip" args={{ label: 'Chip' }} />

<Story name="Colors">
	<Stack>
		{#each colors as color}
			<Group>
				<Chip {color} variant="filled" checked>Filled {color} chip</Chip>
				<Chip {color} variant="outline" checked>Outlined {color} chip</Chip>
			</Group>
		{/each}
	</Stack>
</Story>

<Story name="States">
	<Group>
		<Chip>Default chip</Chip>
		<Chip variant="filled">Filled chip</Chip>
		<Chip variant="outline" checked>Outline chip</Chip>
		<Chip disabled>Disabled chip</Chip>
		<Chip checked disabled>Checked disabled chip</Chip>
	</Group>
</Story>

<Story name="Sizes">
	<Group>
		<Chip>Default chip</Chip>
		<Chip size="xs">Extra small chip</Chip>
		<Chip size="sm">Small chip</Chip>
		<Chip size="md">Medium chip</Chip>
		<Chip size="lg">Large chip</Chip>
		<Chip size="xl">Extra large chip</Chip>
	</Group>
</Story>
