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
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
					{ label: 'center', value: 'center' },
					{ label: 'start', value: 'start' },
					{ label: 'end', value: 'end' },
					{ label: 'flex-start', value: 'flex-start' },
					{ label: 'flex-end', value: 'flex-end' },
					{ label: 'space-around', value: 'space-around' },
					{ label: 'space-between', value: 'space-between' },
					{ label: 'space-evenly', value: 'space-evenly' },
					{ label: 'stretch', value: 'stretch' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			},
			{
				name: 'direction',
				type: 'select',
				data: [
					{ label: 'row', value: 'row' },
					{ label: 'column', value: 'column' }
				],
				initialValue: 'row',
				defaultValue: 'row'
			},
			{
				name: 'wrap',
				type: 'select',
				data: [
					{ label: 'wrap', value: 'wrap' },
					{ label: 'nowrap', value: 'nowrap' }
				],
				initialValue: 'wrap',
				defaultValue: 'wrap'
			},
			{ name: 'gap', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'rowGap', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'columnGap', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
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
