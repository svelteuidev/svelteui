<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Input } from '@svelteuidev/core';
<\/script>

<Input root="button">Button input</Input>
<Input root="select">
    <option value="1">1</option>
    <option value="2">2</option>
</Input>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Input } from '@svelteuidev/core';
</script>

<Input root="button">Button input</Input>
<Input root="select">
	<option value="1">1</option>
	<option value="2">2</option>
</Input>
