<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script lang="ts">
	import { TextInput } from '@svelteuidev/core';
	import { getHotkeyHandler } from '@svelteuidev/composables';

	let value = $state('I am using a hotkey to submit');

	function onSubmit(val) {
		alert(\`Your message says: $\{val\}\`);
	}
<\/script>

<TextInput
	placeholder="Your message"
	label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
	bind:value
	onkeydown={getHotkeyHandler([['mod+Enter', () => onSubmit(value)]])}
/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { TextInput } from '@svelteuidev/core';
	import { getHotkeyHandler } from '@svelteuidev/composables';

	let value = $state('I am using a hotkey to submit');

	function onSubmit(val) {
		alert(`Your message says: ${val}`);
	}
</script>

<TextInput
	placeholder="Your message"
	label="Press ⌘+Enter or Ctrl+Enter when input has focus to send message"
	bind:value
	onkeydown={getHotkeyHandler([['mod+Enter', () => onSubmit(value)]])}
/>
