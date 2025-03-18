<script lang="ts">
	import { pageleave } from '$clib/actions/use-page-leave/use-page-leave';

	let { callback } = $props();
</script>

<div use:pageleave={() => callback()}>Leave</div>
