<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput
    label='Price'
    defaultValue={1000}
    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
    formatter={(value) =>
        !Number.isNaN(parseFloat(value))
        ? ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : '$ '
    }
\/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Group, NumberInput } from '@svelteuidev/core';
</script>

<Group position="center">
	<NumberInput
		label="Price"
		defaultValue={1000}
		parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
		formatter={(value) =>
			!Number.isNaN(parseFloat(value))
				? ('$ ' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
				: '$ '}
	/>
</Group>
