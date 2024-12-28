<script lang="ts">
	import { clipboard } from '$clib/actions/use-clipboard/use-clipboard';

	interface Props {
		text?: string | (() => string);
		callback: any;
		callbackError: any;
	}

	let { text = 'This text will be copied', callback, callbackError }: Props = $props();
</script>

<button
	id="clipboard"
	use:clipboard={text}
	onuseclipboard={(event) => callback(event.detail)}
	onuseclipboard-error={(event) => callbackError(event.detail)}
>
	Copy Me
</button>
