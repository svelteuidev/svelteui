<!-- @migration-task Error while migrating Svelte code: migrating this component would require adding a `$props` rune but there's already a variable named props.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Notification } from '@svelteuidev/core';
  import { Check } from 'radix-icons-svelte';
<\/script>

<Notification ${props}>
    ${children}
</Notification>
<Notification icon={Check} ${props}>
    ${children}
</Notification>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'title', type: 'string', initialValue: 'Please bear in mind' },
			{
				name: 'children',
				label: 'Content',
				type: 'string',
				initialValue: 'That you are now obligated to give feedback on SvelteUI on GitHub'
			},
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue'
			},
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{ name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
			{
				name: 'withCloseButton',
				label: 'With close button',
				type: 'boolean',
				initialValue: true,
				defaultValue: true
			}
		]
	};
</script>

<script lang="ts">
	import type { NotificationProps } from '@svelteuidev/core';
	import { Center, Notification, Stack } from '@svelteuidev/core';
	import { Check } from 'radix-icons-svelte';

	export let props: NotificationProps = {};
</script>

<Center>
	<Stack position="center">
		<Notification {...props}>
			<slot />
		</Notification>
		<Notification icon={Check} {...props}>
			<slot />
		</Notification>
	</Stack>
</Center>
