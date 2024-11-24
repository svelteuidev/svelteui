<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Breadcrumbs } from './index';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Home, Person } from 'radix-icons-svelte';
</script>

<Meta title="Components/Breadcrumbs" component={Breadcrumbs} />

<Template >
	{#snippet children({ args })}
		<Breadcrumbs {...args} size="md">
			<Breadcrumbs.Item href="https://svelteui.dev">Home</Breadcrumbs.Item>
			<Breadcrumbs.Item active={true}>Application List</Breadcrumbs.Item>
		</Breadcrumbs>
	{/snippet}
</Template>

<Story name="Breadcrumbs" id="breadcrumbsStory" />

<Story name="Icon" id="breadcrumbsIconStory">
	<Breadcrumbs size="md">
		<Breadcrumbs.Item href="https://svelteui.dev">
			{#snippet icon()}
						<IconRenderer  icon={Home} />
					{/snippet}
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			{#snippet icon()}
						<IconRenderer  icon={Person} />
					{/snippet}
			Application List
		</Breadcrumbs.Item>
		<Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
	</Breadcrumbs>
</Story>

<Story name="Separator" id="breadcrumbsSeparatorStory">
	<Breadcrumbs size="md" separator="→">
		<Breadcrumbs.Item href="https://svelteui.dev">
			{#snippet icon()}
						<IconRenderer  icon={Home} />
					{/snippet}
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			{#snippet icon()}
						<IconRenderer  icon={Person} />
					{/snippet}
			Application List
		</Breadcrumbs.Item>
		<Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
	</Breadcrumbs>
</Story>
