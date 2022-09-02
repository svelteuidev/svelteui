<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
    import { ThemeIcon } from '@svelteuidev/core';
    import { Gear } from 'radix-icons-svelte';
<\/script>

<ThemeIcon${props}>
    <Gear />
</ThemeIcon>`;

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
					{ label: 'gradient', value: 'gradient' },
					{ label: 'outline', value: 'outline' },
					{ label: 'subtle', value: 'subtle' },
					{ label: 'default', value: 'default' },
					{ label: 'white', value: 'white' }
				],
				initialValue: 'filled',
				defaultValue: 'filled'
			},
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
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
			}
		]
	};
</script>

<script lang="ts">
	import type { ThemeIconProps } from '@svelteuidev/core';
	import { Center, ThemeIcon } from '@svelteuidev/core';
	import { Gear } from 'radix-icons-svelte';

	export let props: ThemeIconProps = {};
</script>

<Center>
	<ThemeIcon {...props}>
		<Gear />
	</ThemeIcon>
</Center>
