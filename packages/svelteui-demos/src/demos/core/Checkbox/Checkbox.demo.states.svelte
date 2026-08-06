<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Checkbox } from '@svelteuidev/core';
<\/script>

<Checkbox checked={false} label="Default checkbox" />
<Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
<Checkbox checked label="Checked checkbox" />
<Checkbox disabled label="Disabled checkbox" />
<Checkbox disabled checked label="Disabled checked checkbox" />
<Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Checkbox, Stack } from '@svelteuidev/core';
</script>

<Stack position="center">
	<Checkbox checked={false} label="Default checkbox" />
	<Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
	<Checkbox checked label="Checked checkbox" />
	<Checkbox disabled label="Disabled checkbox" />
	<Checkbox disabled checked label="Disabled checked checkbox" />
	<Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
</Stack>
