<script lang="ts">
	import { pageleave } from '$clib/actions/use-page-leave/use-page-leave';

	export let callback;
</script>

<div use:pageleave={() => callback()}>Leave</div>
