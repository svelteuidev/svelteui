<script lang="ts">
	import { download } from '$clib/actions/use-download/use-download';

	interface Props {
		blob?: any;
		filename?: string;
		callback: any;
		callbackError: any;
	}

	let {
		blob = new Blob([]),
		filename = '',
		callback,
		callbackError
	}: Props = $props();
</script>

<button
	id="download"
	use:download={{ blob: blob, filename: filename }}
	onusedownload={(event) => callback(event.detail)}
	onusedownload-error={(event) => callbackError(event.detail)}
>
	Download
</button>
