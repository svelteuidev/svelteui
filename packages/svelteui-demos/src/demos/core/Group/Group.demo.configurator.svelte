<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Button, Group } from '@svelteuidev/core';
<\/script>

<Group${props}>
    <Button variant="outline">1</Button>
    <Button variant="outline">2</Button>
    <Button variant="outline">3</Button>
</Group>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'position',
				type: 'select',
				data: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
					{ label: 'center', value: 'center' },
					{ label: 'apart', value: 'apart' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			},
			{
				name: 'direction',
				type: 'select',
				data: [
					{ label: 'row', value: 'row' },
					{ label: 'column', value: 'column' }
				],
				initialValue: 'row',
				defaultValue: 'row'
			},
			{ name: 'spacing', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'grow', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'noWrap', type: 'boolean', initialValue: false, defaultValue: false }
		]
	};
</script>

<script lang="ts">
	import type { GroupProps } from '@svelteuidev/core';
	import { Button, Group } from '@svelteuidev/core';

	export let props: GroupProps = {};
</script>

<Group {...props}>
	<Button variant="outline">1</Button>
	<Button variant="outline">2</Button>
	<Button variant="outline">3</Button>
</Group>
