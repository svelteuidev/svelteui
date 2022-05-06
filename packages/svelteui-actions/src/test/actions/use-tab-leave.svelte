<script lang="ts">
	import { tableave } from '$lib/dist/use-tab-leave/use-tab-leave';

	export let callback;
</script>

<div use:tableave={() => callback()}>Leave</div>
