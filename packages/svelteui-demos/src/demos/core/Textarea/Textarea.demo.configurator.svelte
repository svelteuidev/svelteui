<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
  import { Textarea } from '@svelteuidev/core';
<\/script>

<Textarea${props}\/>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'placeholder', type: 'string', initialValue: 'Once upon a time' },
			{ name: 'label', type: 'string', initialValue: 'Your story' },
			{ name: 'description', type: 'string' },
			{ name: 'error', type: 'string' },
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
			{ name: 'rows', type: 'number', initialValue: 2, defaultValue: 2 },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'required', type: 'boolean', initialValue: true, defaultValue: true },
			{ name: 'invalid', type: 'boolean', initialValue: false, defaultValue: false }
		],
		multiline: true
	};
</script>

<script lang="ts">
	import type { TextareaProps } from '@svelteuidev/core';
	import { Textarea } from '@svelteuidev/core';

	let props: Partial<TextareaProps> = $props();
</script>

<Textarea {...props} />
