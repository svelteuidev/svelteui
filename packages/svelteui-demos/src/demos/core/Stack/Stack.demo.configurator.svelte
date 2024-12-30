<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Button, Stack } from '@svelteuidev/core';
<\/script>

<Stack override={{ height: 300 }} ${props}>
    <Button variant="outline">1</Button>
    <Button variant="outline">2</Button>
    <Button variant="outline">3</Button>
</Stack>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'align',
				type: 'select',
				data: [
					{ label: 'strech', value: 'strech' },
					{ label: 'center', value: 'center' },
					{ label: 'flex-start', value: 'flex-start' },
					{ label: 'flex-end', value: 'flex-end' }
				],
				initialValue: 'stretch',
				defaultValue: 'stretch'
			},
			{
				name: 'justify',
				type: 'select',
				data: [
					{ label: 'center', value: 'center' },
					{ label: 'flex-start', value: 'flex-start' },
					{ label: 'flex-end', value: 'flex-end' },
					{ label: 'space-between', value: 'space-between' },
					{ label: 'space-around', value: 'space-around' }
				],
				initialValue: 'center',
				defaultValue: 'center'
			},
			{ name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' }
		]
	};
</script>

<script lang="ts">
	import type { StackProps } from '@svelteuidev/core';
	import { Button, Stack } from '@svelteuidev/core';

	let props: StackProps = $props();
</script>

<Stack override={{ height: 300 }} {...props}>
	<Button variant="outline">1</Button>
	<Button variant="outline">2</Button>
	<Button variant="outline">3</Button>
</Stack>
