<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme } from '$lib/styles-old';
	import { Group } from '../Group';
	import { ActionIcon } from './index';

	const theme = useSvelteUITheme();
	const colors = Object.keys(theme.colorNames);
</script>

<Meta title="Components/ActionIcon" component={ActionIcon} />

<Template let:args>
	<ActionIcon {...args} />
</Template>

<Template id="variants" let:args>
	<Group mt="xl">
		<ActionIcon {...args} variant="hover" />
		<ActionIcon {...args} variant="filled" />
		<ActionIcon {...args} variant="outline" />
		<ActionIcon {...args} variant="light" />
		<ActionIcon {...args} variant="default" />
		<ActionIcon {...args} variant="transparent" />
	</Group>
</Template>

<Template id="sizes" let:args>
	<Group mt="xl">
		<ActionIcon {...args} size="xs" variant="filled" />
		<ActionIcon {...args} size="sm" variant="filled" />
		<ActionIcon {...args} size="md" variant="filled" />
		<ActionIcon {...args} size="lg" variant="filled" />
		<ActionIcon {...args} size="xl" variant="filled" />
	</Group>
</Template>

<Template id="radius" let:args>
	<Group mt="xl">
		<ActionIcon {...args} radius="xs" variant="filled" />
		<ActionIcon {...args} radius="sm" variant="filled" />
		<ActionIcon {...args} radius="md" variant="filled" />
		<ActionIcon {...args} radius="lg" variant="filled" />
		<ActionIcon {...args} radius="xl" variant="filled" />
	</Group>
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

<Story name="Sizes" id="actionSizesStory" template="sizes" />

<Story name="Radius" id="actionRadiusStory" template="radius" />

<Story name="Disabled" id="actionDisabledStory" template="variants" args={{ disabled: true }} />

<Story name="Loading" id="actionLoadingStory" template="variants" args={{ loading: true }} />
