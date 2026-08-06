<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) =>
		`<script>
  import { ThemeIcon } from '@svelteuidev/core';
<\/script>

<ThemeIcon variant='gradient' ${props}>
    <Rocket />
</ThemeIcon>`;

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
	import type { ThemeIconProps } from '@svelteuidev/core';
	import { Center, ThemeIcon } from '@svelteuidev/core';
	import { Rocket } from 'radix-icons-svelte';

	let props: ThemeIconProps = $props();
</script>

<Center>
	<ThemeIcon variant="gradient" {...props}>
		<Rocket />
	</ThemeIcon>
</Center>
