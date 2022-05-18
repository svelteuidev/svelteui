<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
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
