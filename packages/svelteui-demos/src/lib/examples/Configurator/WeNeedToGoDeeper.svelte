<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<DiveDeep${props}/>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		multiline: true,
		configurator: [
			{
				type: 'composite',
				name: 'we',
				controls: [
					{
						type: 'composite',
						name: 'need',
						controls: [
							{
								type: 'composite',
								name: 'to',
								controls: [
									{
										type: 'composite',
										name: 'go',
										controls: [
											{ type: 'boolean', name: 'deeper', defaultValue: false, initialValue: false }
										]
									}
								]
							}
						]
					}
				]
			}
		]
	};
</script>

<script lang="ts">
	import { Center } from '@svelteuidev/core';

	export let props: any = {};
</script>

<Center>
	<pre>{JSON.stringify(props, null, '  ')}</pre>
</Center>
