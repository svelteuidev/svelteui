<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) => `
<script>
    import { Progress } from '@svelteuidev/core';
<\/script>

<Progress${props} />`;

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
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
			{ name: 'value', type: 'number', initialValue: 50, step: 10 },
			{ name: 'striped', type: 'boolean', initialValue: false, defaultValue: false },
			{ name: 'animate', type: 'boolean', initialValue: false, defaultValue: false }
		],
		multiline: true
	};
</script>

<script lang="ts">
	import { Progress } from '@svelteuidev/core';
	import type { ProgressProps } from '@svelteuidev/core';

	export let props: ProgressProps = {};
</script>

<Progress {...props} />
