<script lang="ts">
	import { clickoutside } from '$lib/actions/use-click-outside/use-click-outside';

	export let open = true;
</script>

<div id="outside">
	<div id="inside" use:clickoutside={{ enabled: open, callback: () => (open = false) }} />
</div>
