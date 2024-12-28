<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
    import { Button } from '@svelteuidev/core';
<\/script>

<Button${props}>
	Click me
<\/Button>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue',
				when: { control: 'variant', comparator: '!==', value: 'gradient' }
			}
		],
		previewBackground: {
			light: '#f1f3f5',
			dark: '#1a1b1e'
		}
	};
</script>

<script lang="ts">
	import type { ButtonProps } from '@svelteuidev/core';
	import { Button, Center } from '@svelteuidev/core';

	export let props: ButtonProps = {};
</script>

<Center>
	<Button variant="white" {...props}>Click me</Button>
</Center>
