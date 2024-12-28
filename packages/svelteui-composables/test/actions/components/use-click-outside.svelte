<script lang="ts">
	import { clickoutside } from '$clib/actions/use-click-outside/use-click-outside';

	interface Props {
		open?: boolean;
	}

	let { open = $bindable(true) }: Props = $props();
</script>

<div id="outside">
	<div id="inside" use:clickoutside={{ enabled: open, callback: () => (open = false) }}></div>
</div>
