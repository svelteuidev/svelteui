<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Image } from '@svelteuidev/core';
<\/script>

<Image radius={0} src={doggo} />
<Image radius={'lg'} src={doggo} />
<Image radius={10} src={doggo} />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Image, SimpleGrid } from '@svelteuidev/core';

	const doggo =
		'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?auto=format&fit=crop&w=640&q=80';
</script>

<SimpleGrid cols={3}>
	<Image radius={0} src={doggo} />
	<Image radius={'lg'} src={doggo} />
	<Image radius={10} src={doggo} />
</SimpleGrid>
