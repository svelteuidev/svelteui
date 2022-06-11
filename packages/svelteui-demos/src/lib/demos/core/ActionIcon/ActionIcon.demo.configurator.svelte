<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => 
`<script>
  import { ActionIcon } from '@svelteuidev/core';
  import { Rocket } from 'radix-icons-svelte';
<\/script>

<ActionIcon${props}>
    <Rocket />
</ActionIcon>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'color',
				type: 'color',
				initialValue: 'gray',
				defaultValue: 'gray'
			},
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
            {
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'hover', value: 'hover' },
					{ label: 'filled', value: 'filled' },
					{ label: 'outline', value: 'outline' },
					{ label: 'light', value: 'light' },
					{ label: 'default', value: 'default' },
					{ label: 'transparent', value: 'transparent' }
				],
				initialValue: 'hover',
				defaultValue: 'hover'
			},
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'loading', type: 'boolean', initialValue: false, defaultValue: false }
		]
	};
</script>

<script lang="ts">
	import type { ActionIconStyles } from '@svelteuidev/core';
	import { ActionIcon, Center } from '@svelteuidev/core';
	import { Rocket } from 'radix-icons-svelte';

	export let props: ActionIconStyles.ActionIconProps = {};
</script>

<Center>
	<ActionIcon {...props}>
        <Rocket />
    </ActionIcon>
</Center>
