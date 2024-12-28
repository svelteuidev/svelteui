<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Radio } from '@svelteuidev/core';
<\/script>

<Radio ${props} />
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
			{ name: 'label', type: 'string', initialValue: 'I agree to sell my privacy' },
			{
				name: 'labelDirection',
				type: 'select',
				data: [
					{ label: 'right', value: 'right' },
					{ label: 'left', value: 'left' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			},
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'checked', type: 'boolean', initialValue: true, defaultValue: true }
		]
	};
</script>

<script lang="ts">
	import type { RadioProps } from '@svelteuidev/core';
	import { Radio, Center } from '@svelteuidev/core';

	export let props: RadioProps = {};
</script>

<Center>
	<Radio {...props} />
</Center>
