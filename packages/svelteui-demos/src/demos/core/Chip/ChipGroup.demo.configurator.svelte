<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { ChipGroup } from '@svelteuidev/core';

  let values;
<\/script>

<ChipGroup ${props}
  bind:values
  items={[
    {label: 'One', value: "one"},
    {label: 'Two', value: "two"},
    {label: 'Three', value: "three"}
  ]}
/>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'multiple', type: 'boolean', initialValue: false, defaultValue: false },
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
			{
				name: 'position',
				type: 'select',
				data: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
					{ label: 'center', value: 'center' },
					{ label: 'apart', value: 'apart' }
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
			{ name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
			{ name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false }
		]
	};
</script>

<script lang="ts">
	import type { ChipGroupProps } from '@svelteuidev/core';
	import { ChipGroup } from '@svelteuidev/core';

	let props: ChipGroupProps = $props();
</script>

<ChipGroup
	{...props}
	items={[
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	]}
/>
