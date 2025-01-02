<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Notification } from '@svelteuidev/core';
	import { Check, Cross2 } from 'radix-icons-svelte';
<\/script>

<Notification title='Default notification'>
    This is the default notification with title and body
</Notification>

<Notification title='Teal notification' iconComponent={Check} color='teal'>
    This is the teal color notification with icon
</Notification>

<Notification iconComponent={Cross2} color='red'>
    Oops, this notification has no title
</Notification>

<Notification title='Uploading data' loading withCloseButton={false}>
    Please wait while your data is being uploaded, you can't close this notification
</Notification>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Notification, Stack } from '@svelteuidev/core';
	import { Check, Cross2 } from 'radix-icons-svelte';
</script>

<Center>
	<Stack position="center">
		<Notification title="Default notification">
			This is the default notification with title and body
		</Notification>

		<Notification title="Teal notification" iconComponent={Check} color="teal">
			This is the teal color notification with icon
		</Notification>

		<Notification iconComponent={Cross2} color="red">
			Oops, this notification has no title
		</Notification>

		<Notification title="Uploading data" loading withCloseButton={false}>
			Please wait while your data is being uploaded, you can't close this notification
		</Notification>
	</Stack>
</Center>
