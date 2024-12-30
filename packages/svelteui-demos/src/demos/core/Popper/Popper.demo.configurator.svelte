<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
	import { Box, Button, Popper } from '@svelteuidev/core';

	let reference;
	let mounted = false;

	const toggleMount = () => {
		mounted = !mounted;
	};
<\/script>

<Button bind:element={reference} on:click={toggleMount}>Reference element</Button>
<Popper {mounted} {reference} ${props}>
	<Box>
		<Center>Popper content</Center>
	</Box>
</Popper>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'position',
				type: 'select',
				data: [
					{ label: 'bottom', value: 'bottom' },
					{ label: 'top', value: 'top' },
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' }
				],
				initialValue: 'bottom',
				defaultValue: 'bottom'
			},
			{
				name: 'placement',
				type: 'select',
				data: [
					{ label: 'start', value: 'start' },
					{ label: 'center', value: 'center' },
					{ label: 'end', value: 'end' }
				],
				initialValue: 'start',
				defaultValue: 'start'
			},
			{ name: 'gutter', type: 'number', min: -20, max: 20, initialValue: 5, defaultValue: 5 },
			{
				name: 'arrowSize',
				label: 'Arrow size',
				type: 'number',
				min: 0,
				max: 15,
				initialValue: 3,
				defaultValue: 3
			},
			{
				name: 'withArrow',
				label: 'With arrow',
				type: 'boolean',
				initialValue: true,
				defaultValue: true
			}
		],
		previewMaxWidth: 200
	};
</script>

<script lang="ts">
	import { Box, Button, Center, Popper } from '@svelteuidev/core';
	import type { PopperProps } from '@svelteuidev/core';

	let props: PopperProps = $props();

	let reference;
	let mounted = $state(false);

	const toggleMount = () => {
		mounted = !mounted;
	};
</script>

<Button bind:element={reference} onclick={toggleMount}>Reference element</Button>
<Popper override={{ '& .arrow': { backgroundColor: '$gray100' } }} {reference} {...props} {mounted}>
	<Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
		<Center>Popper content</Center>
	</Box>
</Popper>
