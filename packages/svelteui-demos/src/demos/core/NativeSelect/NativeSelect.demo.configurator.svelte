<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
  import { NativeSelect } from '@svelteuidev/core';
<\/script>

<NativeSelect data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']} ${props} />
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
		],
		multiline: true
	};
</script>

<script lang="ts">
	import type { NativeSelectProps } from '@svelteuidev/core';
	import { NativeSelect } from '@svelteuidev/core';

	export let props: NativeSelectProps = {};
</script>

<NativeSelect data={['Svelte', 'React', 'Vue', 'Angular', 'Solid']} {...props} />
