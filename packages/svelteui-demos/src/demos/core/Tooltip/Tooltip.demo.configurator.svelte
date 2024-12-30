<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';
<\/script>

<Tooltip opened ${props}>
    <Button>With tooltip</Button>
</Tooltip>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'label', type: 'string', initialValue: 'Label' },
			{
				name: 'color',
				type: 'color',
				initialValue: 'gray',
				defaultValue: 'gray',
				when: { control: 'variant', comparator: '!==', value: 'gradient' }
			},
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{
				name: 'position',
				type: 'select',
				data: [
					{ label: 'bottom', value: 'bottom' },
					{ label: 'top', value: 'top' },
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' }
				],
				initialValue: 'top',
				defaultValue: 'top'
			},
			{
				name: 'placement',
				type: 'select',
				data: [
					{ label: 'start', value: 'start' },
					{ label: 'center', value: 'center' },
					{ label: 'end', value: 'end' }
				],
				initialValue: 'center',
				defaultValue: 'center'
			},
			{
				name: 'withArrow',
				label: 'With arrow',
				type: 'boolean',
				initialValue: true,
				defaultValue: true
			}
		]
	};
</script>

<script lang="ts">
	import type { TooltipProps } from '@svelteuidev/core';
	import { Center, Button, Tooltip } from '@svelteuidev/core';

	let { labelComponent = '', ...rest }: TooltipProps = $props();
</script>

<Center override={{ width: 400, height: 200, m: 'auto' }}>
	<Tooltip opened {labelComponent} {...rest}>
		<Button>With tooltip</Button>
	</Tooltip>
</Center>
