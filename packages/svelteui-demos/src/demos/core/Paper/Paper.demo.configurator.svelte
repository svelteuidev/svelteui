<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
  import { Paper } from '@svelteuidev/core';
<\/script>

<Paper${props}>
  ${children}
</Paper>
`;

	const children = `Paper is the most basic UI component. Use it to create cards, dropdowns, modals and other components that require background with shadow`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{
				name: 'withBorder',
				label: 'With Border',
				type: 'boolean',
				initialValue: false,
				defaultValue: false
			},
			{ name: 'children', type: 'string', initialValue: children }
		]
	};
</script>

<script lang="ts">
	import type { PaperProps } from '@svelteuidev/core';
	import { Paper, Center } from '@svelteuidev/core';

	export let props: PaperProps = {};
</script>

<Center override={{ width: 400, height: 200, m: 'auto' }}>
	<Paper {...props}>
		<slot />
	</Paper>
</Center>
