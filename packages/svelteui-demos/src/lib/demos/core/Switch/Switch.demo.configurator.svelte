<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Switch } from '@svelteuidev/core';
<\/script>

<Switch checked ${props} />`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'label', type: 'string', initialValue: 'I agree to sell my privacy' },
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue'
			},
			{ name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false }
		],
		multiline: true
	};
</script>

<script lang="ts">
	import { Switch, Center } from '@svelteuidev/core';
	import type { SwitchStyles } from '@svelteuidev/core';

	export let props: SwitchStyles.SwitchProps = {};
</script>

<Center>
	<Switch checked {...props} />
</Center>
