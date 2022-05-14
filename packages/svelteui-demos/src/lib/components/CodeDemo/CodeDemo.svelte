<script lang="ts">
	import type { CodeDemoType } from '$lib/demos/types';

	export let demo: CodeDemoType;
</script>

<svelte:component this={demo.default} />
<pre>{demo.configuration.code}</pre>
