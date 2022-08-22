<script lang="ts">
	import { download } from '$clib/actions/use-download/use-download';

	export let blob = new Blob([]);
	export let filename = '';
	export let callback;
	export let callbackError;
</script>

<button
	id="download"
	use:download={{ blob: blob, filename: filename }}
	on:usedownload={(event) => callback(event.detail)}
	on:usedownload-error={(event) => callbackError(event.detail)}
>
	Download
</button>
