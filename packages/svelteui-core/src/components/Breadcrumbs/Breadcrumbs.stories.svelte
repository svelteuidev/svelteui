<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Breadcrumbs } from './index';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Home, Person } from 'radix-icons-svelte';
</script>

<Meta title="Components/Breadcrumbs" component={Breadcrumbs} />

<Template let:args>
	<Breadcrumbs {...args} size={'md'}>
		<Breadcrumbs.Item href="https://google.com">Home</Breadcrumbs.Item>
		<Breadcrumbs.Item active={true}>Application List</Breadcrumbs.Item>
	</Breadcrumbs>
</Template>

<Story name="Breadcrumbs" />

<Story name="Icon">
	<Breadcrumbs size={'md'}>
		<Breadcrumbs.Item href="https://google.com">
			<IconRenderer slot="icon" icon={Home} />
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			<IconRenderer slot="icon" icon={Person} />
			Application List
		</Breadcrumbs.Item>
		<Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
	</Breadcrumbs>
</Story>

<Story name="Separator">
	<Breadcrumbs size="md" separator="→">
		<Breadcrumbs.Item href="https://google.com">
			<IconRenderer slot="icon" icon={Home} />
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			<IconRenderer slot="icon" icon={Person} />
			Application List
		</Breadcrumbs.Item>
		<Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
	</Breadcrumbs>
</Story>
