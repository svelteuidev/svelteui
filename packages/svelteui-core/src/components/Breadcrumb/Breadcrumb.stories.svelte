<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { useSvelteUITheme, type SvelteUINumberSize } from '$lib/styles';
	import { Breadcrumb } from './index';
	import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem.svelte';
	import IconRenderer from '../IconRenderer/IconRenderer.svelte';
	import { Home, Person } from 'radix-icons-svelte';

	const theme = useSvelteUITheme();
</script>

<Meta title="Components/Breadcrumb" component={Breadcrumb} />

<Template let:args>
	<Breadcrumb {...args} size={'md'}>
		<BreadcrumbItem href="https://google.com">Home</BreadcrumbItem>
		<BreadcrumbItem active={true}>Application List</BreadcrumbItem>
	</Breadcrumb>
</Template>

<Story name="Breadcrumb" />

<Story name="Icon">
	<Breadcrumb size={'md'}>
		<BreadcrumbItem href="https://google.com"
			><IconRenderer slot="icon" icon={Home} />
		</BreadcrumbItem>
		<BreadcrumbItem
			><IconRenderer slot="icon" icon={Person} />
			Application List</BreadcrumbItem
		><BreadcrumbItem active={true}>View</BreadcrumbItem>
	</Breadcrumb>
</Story>


<Story name="Separator">
	<Breadcrumb size="md" separator="→">
		<BreadcrumbItem href="https://google.com"
			><IconRenderer slot="icon" icon={Home} />
		</BreadcrumbItem>
		<BreadcrumbItem
			><IconRenderer slot="icon" icon={Person} />
			Application List</BreadcrumbItem
		><BreadcrumbItem active={true}>View</BreadcrumbItem>
	</Breadcrumb>
</Story>