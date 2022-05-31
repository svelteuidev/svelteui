<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Box, Button, Popper } from '@svelteuidev/core';

  let reference;
<\/script>

<Center>
	<Button bind:element={reference}>Reference element</Button>
    <Popper mounted={true} arrowOverride={{ backgroundColor: '$gray100' }} {reference} ${props}>
        <Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
			<Center>
				Popper content
			</Center>
		</Box>
    </Popper>
</Center>
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
			{ name: 'arrowSize', label: "Arrow size", type: 'number', min: 0, max: 15, initialValue: 5, defaultValue: 5 },
			{ name: 'withArrow', label: 'With arrow', type: 'boolean', initialValue: true, defaultValue: true }
		]
	};
</script>

<script lang="ts">
	import type { PopperStyles } from '@svelteuidev/core';
	import { Box, Button, Center, Popper } from '@svelteuidev/core';

	export let props: PopperStyles.PopperProps = {};
    
    let reference;
</script>

<Center>
	<Button bind:element={reference}>Reference element</Button>
    <Popper
        mounted={true}
        arrowOverride={{ backgroundColor: '$gray100' }}
        {reference}
        {...props}
    >
        <Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
			<Center>
				Popper content
			</Center>
		</Box>
    </Popper>
</Center>
