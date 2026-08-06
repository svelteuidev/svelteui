<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Alert } from '@svelteuidev/core';
  import { InfoCircled } from 'radix-icons-svelte';
<\/script>

<Alert iconComponent={InfoCircled} ${props}>
    ${children}
</Alert>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'title', type: 'string', initialValue: 'Oopsie!' },
			{
				name: 'children',
				label: 'Content',
				type: 'string',
				initialValue:
					'Seems like our servers (actually a single Raspebery pi) crashed, please wait while our underpaid worker tries to solder the CPU again.'
			},
			{
				name: 'color',
				type: 'color',
				initialValue: 'orange',
				defaultValue: 'orange'
			},
			{
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'light', value: 'light' },
					{ label: 'filled', value: 'filled' },
					{ label: 'outline', value: 'outline' }
				],
				initialValue: 'light',
				defaultValue: 'light'
			},
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{
				name: 'withCloseButton',
				label: 'With close button',
				type: 'boolean',
				initialValue: false,
				defaultValue: false
			}
		]
	};
</script>

<script lang="ts">
	import type { AlertProps } from '@svelteuidev/core';
	import { Alert, Center } from '@svelteuidev/core';
	import { InfoCircled } from 'radix-icons-svelte';

	let { children, ...rest }: AlertProps = $props();
</script>

<Center>
	<Alert iconComponent={InfoCircled} {...rest}>
		{@render children?.()}
	</Alert>
</Center>
