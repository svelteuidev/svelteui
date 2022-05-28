<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput${props}\/>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
            { name: 'placeholder', type: 'string', initialValue: 'Your age' },
            { 
                name: 'variant',
                type: 'select',
                data: [
                    { label: 'default', value: 'default'},
                    { label: 'filled', value: 'filled'},
                    { label: 'unstyled', value: 'unstyled'},
                    { label: 'headless', value: 'headless'}
                ],
                initialValue: 'default',
				defaultValue: 'default'
            },
            { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
            { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'required', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'invalid', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'hideControls', label: 'Hide Controls', type: 'boolean', initialValue: false, defaultValue: false }
		]
	};
</script>

<script lang="ts">
	import type { NumberInputProps } from '@svelteuidev/core';
	import { NumberInput, Center } from '@svelteuidev/core';

	export let props: NumberInputProps = {};
</script>

<Center>
	<NumberInput {...props} />
</Center>
