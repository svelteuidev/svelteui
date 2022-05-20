<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

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
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue',
				when: { control: 'variant', comparator: '!==', value: 'gradient' }
			},
			{
				name: 'gradient',
				type: 'composite',
				controls: [
					{ name: 'from', type: 'color', initialValue: 'indigo', defaultValue: 'indigo' },
					{ name: 'to', type: 'color', initialValue: 'cyan', defaultValue: 'cyan' },
					{ name: 'deg', type: 'number', initialValue: 45, defaultValue: 45 }
				],
				when: { control: 'variant', comparator: '===', value: 'gradient' }
			},
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'ripple', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
			{
				name: 'loaderPosition',
				type: 'segmented',
				data: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			},
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
