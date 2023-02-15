<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { Breadcrumb } from './index';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Home, Person } from 'radix-icons-svelte';
</script>

<Meta title="Components/Breadcrumb" component={Breadcrumb} />

<Template let:args>
	<Breadcrumb {...args} size={'md'}>
		<Breadcrumb.Item href="https://google.com">Home</Breadcrumb.Item>
		<Breadcrumb.Item active={true}>Application List</Breadcrumb.Item>
	</Breadcrumb>
</Template>

<Story name="Breadcrumb" />

<Story name="Icon">
	<Breadcrumb size={'md'}>
		<Breadcrumb.Item href="https://google.com">
			<IconRenderer slot="icon" icon={Home} />
		</Breadcrumb.Item>
		<Breadcrumb.Item>
			<IconRenderer slot="icon" icon={Person} />
			Application List
		</Breadcrumb.Item>
		<Breadcrumb.Item active={true}>View</Breadcrumb.Item>
	</Breadcrumb>
</Story>

<Story name="Separator">
	<Breadcrumb size="md" separator="→">
		<Breadcrumb.Item href="https://google.com">
			<IconRenderer slot="icon" icon={Home} />
		</Breadcrumb.Item>
		<Breadcrumb.Item>
			<IconRenderer slot="icon" icon={Person} />
			Application List
		</Breadcrumb.Item>
		<Breadcrumb.Item active={true}>View</Breadcrumb.Item>
	</Breadcrumb>
</Story>
