<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) => `
<script>
    import { Button } from '@svelteuidev/core';
    import { LockClosed } from 'radix-icons-svelte';
<\/script>

<Button${props}>
    <LockClosed slot="leftIcon" />
    Sign Up
<\/Button>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
			{
				name: 'loaderPosition',
				capitalize: true,
				type: 'segmented',
				data: [
					{ label: 'Left', value: 'left' },
					{ label: 'Right', value: 'right' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			}
		]
	};
</script>

<script lang="ts">
	import type { ButtonProps } from '@svelteuidev/core';
	import { Button, Center } from '@svelteuidev/core';
	import { LockClosed } from 'radix-icons-svelte';

	let { children, ...rest }: ButtonProps = $props();
</script>

<Center>
	<Button {...rest}>
		{#snippet leftIcon()}
			<LockClosed />
		{/snippet}
		Sign Up
	</Button>
</Center>
