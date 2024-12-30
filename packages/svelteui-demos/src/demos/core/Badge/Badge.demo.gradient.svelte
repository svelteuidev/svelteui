<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Badge } from '@svelteuidev/core';
<\/script>

<Badge variant='gradient' ${props}>
    Badge
</Badge>`;

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
	import type { BadgeProps } from '@svelteuidev/core';
	import { Badge, Center } from '@svelteuidev/core';

	let props: BadgeProps = $props();
</script>

<Center>
	<Badge variant="gradient" {...props}>Badge</Badge>
</Center>
