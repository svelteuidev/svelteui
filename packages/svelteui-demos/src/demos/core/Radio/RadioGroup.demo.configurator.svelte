<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Radio } from '@svelteuidev/core';
<\/script>

<RadioGroup {...props} value={...} items={[...]} />
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
      { name: 'label', type: 'string', initialValue: 'Select your favorite framework/library' },
      { name: 'description', type: 'string', initialValue: 'Please be honest' },
      { name: 'error', type: 'string', initialValue: '' },
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue'
			},
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
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
			{ name: 'spacing', type: 'size', initialValue: 'sm', defaultValue: 'sm' }
		]
	};

  const items = [
		{ label: 'Svelte', value: 'svelte' },
		{ label: 'React', value: 'react' },
		{ label: 'Vue', value: 'vue' },
		{ label: 'Angular', value: 'angular' },
		{ label: 'Solid', value: 'solid' }
	];
</script>

<script lang="ts">
	import type { RadioGroupProps } from '@svelteuidev/core';
	import { RadioGroup, Center } from '@svelteuidev/core';

	export let props: Partial<RadioGroupProps> = {};
</script>

<Center>
	<RadioGroup {...props} value={'svelte'} items={items} />
</Center>
