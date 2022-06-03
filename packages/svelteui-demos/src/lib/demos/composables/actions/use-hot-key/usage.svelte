<script lang="ts" context="module">
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
	import { hotkey } from '@svelteuidev/composables';

    function onSubmit() {
        alert("You've used a hotkey");
    }
</script>


<p>Press ⌘+Enter or Ctrl+Enter to trigger an alert</p>
<div use:hotkey={[['mod+Enter', () => onSubmit()]]}/>
