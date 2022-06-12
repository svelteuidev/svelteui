<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { CheckboxGroup } from '@svelteuidev/core';
<\/script>

<CheckboxGroup ${props} />
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
				name: 'direction',
				type: 'select',
				data: [
					{ label: 'row', value: 'row' },
					{ label: 'column', value: 'column' }
				],
				initialValue: 'row',
				defaultValue: 'row'
			},
			{ name: 'label', type: 'string', initialValue: 'Select your favorite framework/library' },
			{ name: 'description', type: 'string', initialValue: 'This is anonymous' },
			{ name: 'error', type: 'string' },
			{ name: 'spacing', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'required', type: 'boolean', initialValue: true, defaultValue: true }
		],
		multiline: true
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
	import { CheckboxGroup, Center, type CheckboxGroupStyles } from '@svelteuidev/core';

	export let props: CheckboxGroupStyles.CheckboxGroupProps = {};
</script>

<Center>
	<CheckboxGroup {items} value={['svelte']} {...props} />
</Center>
