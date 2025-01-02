<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { PasswordInput } from '@svelteuidev/core';
  import { LockClosed } from 'radix-icons-svelte';
<\/script>

<PasswordInput
  label='Password'
  placeholder='Enter password'
  icon={LockClosed}
\/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, PasswordInput } from '@svelteuidev/core';
	import { LockClosed } from 'radix-icons-svelte';
</script>

<Center>
	<PasswordInput label="Password" placeholder="Enter password" iconComponent={LockClosed} />
</Center>
