<script lang="ts">
	import { tableave } from '$clib/actions/use-tab-leave/use-tab-leave';

	let { callback } = $props();
</script>

<div use:tableave={() => callback()}>Leave</div>
