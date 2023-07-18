<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
  import { JsonInput } from '@svelteuidev/core';
<\/script>

<JsonInput${props}\/>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'placeholder', type: 'string', initialValue: 'Enter JSON data' },
			{ name: 'label', type: 'string', initialValue: 'Robot Configuration' },
			{ name: 'description', type: 'string' },
			{ name: 'formatOnBlur', type: 'boolean' },
			{ name: 'validationError', type: 'string', initialValue: 'Invalid JSON' },
			{ name: 'error', type: 'string' },
			{ name: 'invalid', type: 'boolean', initialValue: false, defaultValue: false },
			{
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'default', value: 'default' },
					{ label: 'filled', value: 'filled' },
					{ label: 'unstyled', value: 'unstyled' },
					{ label: 'headless', value: 'headless' }
				],
				initialValue: 'default',
				defaultValue: 'default'
			},
			{
				name: 'resize',
				type: 'select',
				data: [
					{ label: 'none', value: 'none' },
					{ label: 'both', value: 'both' },
					{ label: 'horizontal', value: 'horizontal' },
					{ label: 'vertical', value: 'vertical' }
				],
				initialValue: 'none',
				defaultValue: 'none'
			},
			{ name: 'rows', type: 'number', initialValue: 4, defaultValue: 4 },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'required', type: 'boolean', initialValue: true, defaultValue: true }
		],
		multiline: true
	};
</script>

<script lang="ts">
	import type { JsonInputProps } from '@svelteuidev/core';
	import { JsonInput } from '@svelteuidev/core';

	export let props: Partial<JsonInputProps> = {};
</script>

<JsonInput {...props} />
