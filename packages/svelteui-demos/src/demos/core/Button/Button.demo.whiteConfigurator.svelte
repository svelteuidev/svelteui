<script lang="ts" module>
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

	let { children, ...rest }: ButtonProps = $props();
</script>

<Center>
	<Button variant="white" {...rest}>Click me</Button>
</Center>
