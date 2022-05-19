<script lang="ts">
	import { Prism } from '@svelteuidev/prism';
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	export let component: CodeDemoType['default'];
	export let code: CodeDemoConfiguration['code'];
</script>

<svelte:component this={component} />
<Prism language="svelte" {code} />
