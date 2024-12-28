<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Chip } from '@svelteuidev/core';
<\/script>

<Chip ${props}>Click me</Chip>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue'
			},
			{
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'filled', value: 'filled' },
					{ label: 'outline', value: 'outline' }
				],
				initialValue: 'outline',
				defaultValue: 'outline'
			},
			{ name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false }
		]
	};
</script>

<script lang="ts">
	import type { ChipProps } from '@svelteuidev/core';
	import { Center, Chip } from '@svelteuidev/core';

	export let props: ChipProps = {};
</script>

<Center>
	<Chip checked {...props}>Click me</Chip>
</Center>
