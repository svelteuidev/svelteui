<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/demos/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Button } from '@svelteuidev/core';
<\/script>

<Button${props}>
  ${children}
</Button>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'filled', value: 'filled' },
					{ label: 'light', value: 'light' },
					{ label: 'outline', value: 'outline' },
					{ label: 'default', value: 'default' },
					{ label: 'white', value: 'white' },
					{ label: 'gradient', value: 'gradient' },
					{ label: 'subtle', value: 'subtle' }
				],
				initialValue: 'filled',
				defaultValue: 'filled'
			},
			{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'children', type: 'string', initialValue: 'Settings' }
		]
	};
</script>

<script lang="ts">
	import type { ButtonProps } from '@svelteuidev/core';
	import { Button, Center } from '@svelteuidev/core';

	export let props: ButtonProps = {};
</script>

<Center>
	<Button {...props}><slot /></Button>
</Center>
