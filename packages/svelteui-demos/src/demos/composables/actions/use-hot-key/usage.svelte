<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { hotkey } from '@svelteuidev/composables';

    function onSubmit() {
        alert("You've used a hotkey");
    }
<\/script>

<p>Press ⌘+Enter or Ctrl+Enter to trigger an alert</p>
<div use:hotkey={[['mod+Enter', () => onSubmit()]]}/>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Text } from '@svelteuidev/core';
	import { hotkey } from '@svelteuidev/composables';

	function onSubmit() {
		alert("You've used a hotkey");
	}
</script>

<Center>
	<Text>Press ⌘+Enter or Ctrl+Enter to trigger an alert</Text>
	<div use:hotkey={[['mod+Enter', () => onSubmit()]]}></div>
</Center>
