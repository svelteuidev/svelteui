<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `<script>
	import { Button, Flex } from '@svelteuidev/core';
<\/script>

<Flex${props}>
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
</Flex$>`;

export const type: ConfiguratorDemoType['type'] = 'configurator';

export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'justify',
				type: 'select',
				data: [
					{ label: 'Left', value: 'left' },
					{ label: 'Right', value: 'right' },
					{ label: 'Center', value: 'center' },
					{ label: 'Space Around', value: 'space-around' },
					{ label: 'Space Between', value: 'space-between' },
					{ label: 'Space Evenly', value: 'space-evenly' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			},
			{
				name: 'direction',
				type: 'select',
				data: [
					{ label: 'Row', value: 'row' },
					{ label: 'Column', value: 'column' }
				],
				initialValue: 'row',
				defaultValue: 'row'
			},
			{
				name: 'wrap',
				type: 'select',
				data: [
					{ label: 'Wrap', value: 'wrap' },
					{ label: 'No Wrap', value: 'nowrap' }
				],
				initialValue: 'wrap',
				defaultValue: 'wrap'
			},
			{ name: 'gap', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
		]
	};
</script>

<script lang="ts">
	import { Button, Flex } from '@svelteuidev/core';
	import type { FlexProps } from '@svelteuidev/core';

	export let props: FlexProps = {};
</script>

<Flex {...props}>
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
</Flex>
