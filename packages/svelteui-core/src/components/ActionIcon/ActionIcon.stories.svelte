<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme } from '$lib/styles';
	import { Group } from '../Group';
	import { ActionIcon } from './index';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
</script>

<Meta title="Components/ActionIcon" component={ActionIcon} />

<Template>
	{#snippet children({ args })}
		<ActionIcon {...args} />
	{/snippet}
</Template>

<Template id="variants">
	{#snippet children({ args })}
		<Group mt="xl">
			<ActionIcon {...args} variant="hover" />
			<ActionIcon {...args} variant="filled" />
			<ActionIcon {...args} variant="outline" />
			<ActionIcon {...args} variant="light" />
			<ActionIcon {...args} variant="default" />
			<ActionIcon {...args} variant="transparent" />
		</Group>
	{/snippet}
</Template>

<Story name="ActionIcon" id="actionIconStory" />

<Story name="Colors" id="actionIconColorsStory">
	<div style="padding:40px;">
		{#each colors as color}
			<Group mt="xl">
				<ActionIcon {color} />
				<ActionIcon {color} variant="filled" />
				<ActionIcon {color} variant="outline" />
				<ActionIcon {color} variant="light" />
				<ActionIcon {color} variant="default" />
				<ActionIcon {color} variant="transparent" />
			</Group>
		{/each}
	</div>
</Story>

<Story name="Disabled" id="actionDisabledStory" template="variants" args={{ disabled: true }} />

<Story name="Loading" id="actionLoadingStory" template="variants" args={{ loading: true }} />
