<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Text } from '@svelteuidev/core';
<\/script>

<Text
    component='span'
    align='center'
    variant='gradient'
    size='xl'
    weight='bold'
    ${props}
>
    Text with gradient
</Text>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'gradient',
				type: 'composite',
				controls: [
					{ name: 'from', type: 'color', initialValue: 'indigo', defaultValue: 'indigo' },
					{ name: 'to', type: 'color', initialValue: 'cyan', defaultValue: 'cyan' },
					{ name: 'deg', type: 'number', initialValue: 45, defaultValue: 45 }
				]
			}
		]
	};
</script>

<script lang="ts">
	import type { TextProps } from '@svelteuidev/core';
	import { Center, Text } from '@svelteuidev/core';

	export let props: TextProps = {};
</script>

<Center>
	<Text component="span" align="center" variant="gradient" size="xl" weight='bold' {...props}>
		Text with gradient
	</Text>
</Center>
