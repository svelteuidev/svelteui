<script lang="ts">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/demos/types';

	export let component: CodeDemoType['default'];
	export let code: CodeDemoConfiguration['code'];
</script>

<svelte:component this={component} />
<pre>{code}</pre>
