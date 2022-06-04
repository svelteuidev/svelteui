<script lang="ts">
	import { Box, Button } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';

	export let message = '';
	export let copy = false;

	let copied = false;

	function isCopied() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<Box css={{ position: 'relative', mx: 0, my: '25px' }} root="pre">
	<code><slot>Code</slot></code>
	{#if copy}
		<Button
			variant="default"
			uppercase
			override={{ position: 'absolute', right: 10, top: 8, m: 0 }}
			use={[[clipboard, `${message}`]]}
			on:useclipboard={isCopied}
		>
			{copied ? 'copied' : 'copy'}
		</Button>
	{/if}
</Box>
