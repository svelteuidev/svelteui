<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
	import { Fragment } from '@svelteuidev/core';
<\/script>

<Fragment>
    This sentences and the one below are not wrapped by a wrapping element<br>
    Check the DOM to verify it
</Fragment>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Fragment } from '@svelteuidev/core';
</script>

<Fragment>
    This sentences and the one below are not wrapped by a wrapping element<br>
    Check the DOM to verify it    
</Fragment>