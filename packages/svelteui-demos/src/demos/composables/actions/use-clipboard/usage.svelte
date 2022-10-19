<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';

    let textToCopy = 'This message was copied';
    let copied = false;
    let onCopy = () => {
        copied = true;
        setTimeout(function () {
            copied = false;
        }, 1000);
    }
<\/script>

<Button
    use={[[clipboard, textToCopy]]}
    on:useclipboard={onCopy}
    color={copied ? 'green' : 'blue'}
>
    {copied ? 'copied' : 'Click me to copy text'}
</Button>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Center } from '@svelteuidev/core';
	import { clipboard } from '@svelteuidev/composables';

	let textToCopy = 'This message was copied';
	let copied = false;
	let onCopy = () => {
		copied = true;
		setTimeout(function () {
			copied = false;
		}, 1000);
	};
</script>

<Center>
	<Button
		use={[[clipboard, textToCopy]]}
		on:useclipboard={onCopy}
		color={copied ? 'green' : 'blue'}
	>
		{copied ? 'Copied' : 'Click me to copy text'}
	</Button>
</Center>
