<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button } from '@svelteuidev/core';
	import { GithubLogo } from 'radix-icons-svelte';
<\/script>

<Button>
	<GithubLogo slot="leftIcon" />
	Icon on left
</Button>
<Button>
	Icon on right
	<GithubLogo slot="rightIcon" />
</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
	import { GithubLogo } from 'radix-icons-svelte';
</script>

<Group position="center">
	<Button>
		<GithubLogo slot="leftIcon" />
		Icon on left
	</Button>
	<Button>
		Icon on right
		<GithubLogo slot="rightIcon" />
	</Button>
</Group>
