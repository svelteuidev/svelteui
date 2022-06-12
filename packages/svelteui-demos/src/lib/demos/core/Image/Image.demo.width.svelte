<script lang='ts' context='module'>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = 
`<script>
    import { Image } from '@svelteuidev/core';
<\/script>

<Image width={200} height={80} src={url} />
<Image width={200} height={80} fit='contain' src={url} />
<Image height={80} src={url} />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang='ts'>
	import { Group, Image } from '@svelteuidev/core';
    const url = 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=720&q=80';
</script>

<Group position='center'>
	<Image width={200} height={80} src={url} />
	<Image width={200} height={80} fit='contain' src={url} />
	<Image height={80} src={url} />
</Group>
