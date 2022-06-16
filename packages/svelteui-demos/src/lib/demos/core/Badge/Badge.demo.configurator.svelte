<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => 
`<script>
  import { Badge } from '@svelteuidev/core';
<\/script>

<Badge${props}>
  ${children}
</Badge>`;

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
			{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'md' },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'xl' },
            {
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'light', value: 'light' },
					{ label: 'filled', value: 'filled' },
					{ label: 'outline', value: 'outline' },
					{ label: 'dot', value: 'dot' },
					{ label: 'gradient', value: 'gradient' }
				],
				initialValue: 'light',
				defaultValue: 'light'
			},
            {
				name: 'gradient',
				type: 'composite',
				controls: [
					{ name: 'from', type: 'color', initialValue: 'indigo', defaultValue: 'indigo' },
					{ name: 'to', type: 'color', initialValue: 'cyan', defaultValue: 'cyan' },
					{ name: 'deg', type: 'number', initialValue: 45, defaultValue: 45 }
				],
				when: { control: 'variant', comparator: '===', value: 'gradient' }
			},
			{ name: 'children', type: 'string', initialValue: 'Badge' }
		]
	};
</script>

<script lang="ts">
	import type { BadgeStyles } from '@svelteuidev/core';
	import { Badge, Center } from '@svelteuidev/core';

	export let props: BadgeStyles.BadgeProps = {};
</script>

<Center>
	<Badge {...props}>
        <slot />
    </Badge>
</Center>
