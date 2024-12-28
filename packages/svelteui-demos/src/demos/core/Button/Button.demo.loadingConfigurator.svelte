<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
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

	export let props: ButtonProps = {};
</script>

<Center>
	<Button {...props}>
		<LockClosed slot="leftIcon" />
		Sign Up
	</Button>
</Center>
