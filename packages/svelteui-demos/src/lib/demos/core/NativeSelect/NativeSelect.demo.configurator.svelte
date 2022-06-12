<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']} ${props}>
  ${children}
</NativeSelect>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
            { name: 'placeholder', type: 'string', initialValue: 'Pick one' },
            { name: 'label', type: 'string', initialValue: 'Select your favorite framework/library' },
            { name: 'description', type: 'string', initialValue: 'This is anonymous' },
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
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'required', type: 'boolean', initialValue: true, defaultValue: true }
		]
	};
</script>

<script lang="ts">
	import type { NativeSelectStyles } from '@svelteuidev/core';
	import { NativeSelect, Center } from '@svelteuidev/core';

	export let props: NativeSelectStyles.NativeSelectProps = {};
</script>

<NativeSelect data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']} {...props} />
