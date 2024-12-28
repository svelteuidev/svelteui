<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Input, InputWrapper } from '@svelteuidev/core';
  import { EnvelopeClosed } from 'radix-icons-svelte';
<\/script>

<Input icon={EnvelopeClosed} ${props} />`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
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
			{ name: 'placeholder', type: 'string', initialValue: 'Your email' },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'invalid', type: 'boolean', initialValue: false, defaultValue: false }
		],
		multiline: true
	};
</script>

<script lang="ts">
	import type { InputProps } from '@svelteuidev/core';
	import { Input } from '@svelteuidev/core';
	import { EnvelopeClosed } from 'radix-icons-svelte';

	export let props: InputProps = {};
</script>

<Input icon={EnvelopeClosed} {...props} />
