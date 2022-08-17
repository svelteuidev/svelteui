<script lang="ts">
	import { tableave } from '$lib/actions/use-tab-leave/use-tab-leave';

	export let callback;
</script>

<div use:tableave={() => callback()}>Leave</div>
